import json, os, re, html, datetime, urllib.parse, urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CFG = json.loads((ROOT / "data/news-sources.json").read_text(encoding="utf-8"))
OLD = json.loads((ROOT / "data/news.json").read_text(encoding="utf-8"))
EVERGREEN = [x for x in OLD if x.get("status") == "راهنمای کاربردی"]

ACTION_WORDS = [
    "ثبت نام","آغاز شد","مهلت","تمدید","فعال شد","اعتراض","نوبت",
    "یارانه","کالابرگ","وام","بیمه","مدرسه","دانشگاه","خودرو",
    "گذرنامه","مالیات","ثنا","ابلاغیه","کارت ملی","خودنویس","املاک"
]

def clean(text):
    text = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", html.unescape(text)).strip()

def google_rss(query):
    q = urllib.parse.quote(query)
    return f"https://news.google.com/rss/search?q={q}&hl=fa&gl=IR&ceid=IR:fa"

def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0 SevenCafeBot/1.0"})
    return urllib.request.urlopen(req, timeout=timeout).read()

def detect_service(text):
    scores = []
    for sid, words in CFG["service_keywords"].items():
        score = sum(1 for w in words if w in text)
        if score:
            scores.append((score, sid))
    return max(scores)[1] if scores else "prereg"

def discover():
    rows = []
    for query in CFG["queries"]:
        try:
            xml = fetch(google_rss(query))
            tree = ET.fromstring(xml)
            for item in tree.findall(".//item")[:30]:
                title = clean(item.findtext("title"))
                desc = clean(item.findtext("description"))
                link = clean(item.findtext("link"))
                pub = clean(item.findtext("pubDate"))
                body = f"{title} {desc}"
                if not any(k in body for k in ACTION_WORDS):
                    continue
                rows.append({
                    "title": title[:180],
                    "description": desc[:900],
                    "discovery_url": link,
                    "published_raw": pub,
                    "service_id": detect_service(body)
                })
        except Exception as e:
            print("Discovery error:", query, e)
    unique, seen = [], set()
    for row in rows:
        key = re.sub(r"\W+", "", row["title"])
        if key and key not in seen:
            seen.add(key)
            unique.append(row)
    return unique[:20]

def ai_enrich(items):
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key:
        print("OPENAI_API_KEY is not configured; keeping existing news.")
        return []

    schema = {
      "type":"object",
      "properties":{
        "relevant":{"type":"boolean"},
        "title":{"type":"string"},
        "summary":{"type":"string"},
        "what":{"type":"string"},
        "eligibility":{"type":"array","items":{"type":"string"}},
        "documents":{"type":"array","items":{"type":"string"}},
        "steps":{"type":"array","items":{"type":"string"}},
        "warnings":{"type":"array","items":{"type":"string"}},
        "deadline":{"type":"string"},
        "official_url":{"type":"string"},
        "source_name":{"type":"string"},
        "confidence":{"type":"string","enum":["high","medium","low"]}
      },
      "required":["relevant","title","summary","what","eligibility","documents","steps","warnings","deadline","official_url","source_name","confidence"],
      "additionalProperties":False
    }

    out = []
    for row in items[:12]:
        prompt = f"""
تو سردبیر یک سایت حرفه‌ای کافی‌نت در ایران هستی.
خبر زیر را بررسی کن و فقط اگر به یک خدمت قابل انجام در کافی‌نت مربوط است relevant=true بده.
خدمات هدف: ثبت‌نام‌های دولتی، یارانه، کالابرگ، وام، بیمه، مدارس، دانشگاه،
خودرو، گذرنامه، مالیات، ثنا، ابلاغیه، کارت ملی، خودنویس، املاک و اسکان.

قواعد سخت:
- هیچ تاریخ، مبلغ، شرط یا مدرکی را حدس نزن.
- اگر در متن موجود نیست، عبارت «در اطلاعیه رسمی بررسی شود» بنویس.
- لینک رسمی ثبت‌نام را فقط اگر در متن قابل استناد است وارد کن؛ وگرنه رشته خالی.
- متن تبلیغاتی یا خبر سیاسی نامرتبط را رد کن.
- مراحل باید کاربردی و کوتاه باشد.
- هشدار بده که شرایط و مهلت ممکن است تغییر کند.
- خروجی فقط JSON مطابق Schema باشد.

عنوان کشف‌شده: {row['title']}
متن کشف‌شده: {row['description']}
لینک کشف: {row['discovery_url']}
"""
        payload = {
            "model": os.getenv("OPENAI_MODEL", "gpt-5-mini"),
            "input": prompt,
            "text": {
                "format": {
                    "type": "json_schema",
                    "name": "cafe_news",
                    "strict": True,
                    "schema": schema
                }
            }
        }
        req = urllib.request.Request(
            "https://api.openai.com/v1/responses",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            method="POST"
        )
        try:
            response = json.loads(urllib.request.urlopen(req, timeout=90).read())
            text = response.get("output_text")
            if not text:
                chunks = []
                for block in response.get("output", []):
                    for content in block.get("content", []):
                        if content.get("type") in ("output_text","text"):
                            chunks.append(content.get("text",""))
                text = "".join(chunks)
            data = json.loads(text)
            if not data.get("relevant"):
                continue
            data.update({
                "id": "news-" + str(abs(hash(row["title"]))),
                "source_url": row["discovery_url"],
                "published_at": datetime.date.today().strftime("%Y/%m/%d"),
                "status": "بررسی‌شده با هوش مصنوعی",
                "service_id": row["service_id"],
                "image": "assets/news-documents.svg"
            })
            out.append(data)
        except Exception as e:
            print("AI error:", row["title"], e)
    return out

found = discover()
enriched = ai_enrich(found)

if enriched:
    (ROOT / "data/news.json").write_text(
        json.dumps((enriched[:6] + EVERGREEN)[:12], ensure_ascii=False, indent=2),
        encoding="utf-8"
    )
    print("Published", len(enriched[:10]), "news items.")
else:
    print("No verified AI news; existing news.json kept.")

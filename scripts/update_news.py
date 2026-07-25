import json, os, re, datetime, html
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
sources=json.loads((ROOT/"data/news-sources.json").read_text(encoding="utf-8"))
items=[]
keywords=["ثبت نام","سامانه","بیمه","یارانه","وام","مالیات","خودرو","مدرسه","دانشگاه","گذرنامه","کارت ملی","قضایی","ابلاغیه","تعرفه","نرخ"]

def clean(s):
    s=re.sub(r"<[^>]+>"," ",s or "")
    return re.sub(r"\s+"," ",html.unescape(s)).strip()

for feed in sources["feeds"]:
    try:
        req=urllib.request.Request(feed["url"],headers={"User-Agent":"Mozilla/5.0"})
        raw=urllib.request.urlopen(req,timeout=20).read()
        root=ET.fromstring(raw)
        candidates=root.findall(".//item")
        if not candidates:
            candidates=root.findall(".//{http://www.w3.org/2005/Atom}entry")
        for x in candidates[:15]:
            def t(name):
                e=x.find(name)
                if e is None: e=x.find("{http://www.w3.org/2005/Atom}"+name)
                return clean(e.text if e is not None else "")
            title=t("title")
            summary=t("description") or t("summary") or t("content")
            link=t("link")
            le=x.find("link")
            if le is not None and not link: link=le.attrib.get("href","")
            text=title+" "+summary
            if not any(k in text for k in keywords): continue
            items.append({"title":title[:120],"summary":summary[:260],"source":feed["name"],"url":link or feed["url"],"date":datetime.date.today().strftime("%Y/%m/%d"),"image":"assets/news-documents.svg"})
    except Exception as e:
        print("Feed error",feed["name"],e)

# Dedupe and preserve seed if no feeds were reachable.
seen=set(); out=[]
for i in items:
    key=i["title"].strip()
    if key and key not in seen:
        seen.add(key);out.append(i)
if out:
    (ROOT/"data/news.json").write_text(json.dumps(out[:12],ensure_ascii=False,indent=2),encoding="utf-8")
    print("Updated",len(out[:12]),"items")
else:
    print("No new items; keeping existing news.json")

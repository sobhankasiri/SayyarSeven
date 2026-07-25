import json,re,html,urllib.request,urllib.parse,xml.etree.ElementTree as ET,datetime
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SOURCES=[
("کافی‌نتی","https://cafeneti.com/feed/"),
("Google News","https://news.google.com/rss/search?q="+urllib.parse.quote("ثبت نام یارانه وام بیمه مدارس دانشگاه خودرو")+"&hl=fa&gl=IR&ceid=IR:fa")
]
KEY=["ثبت نام","یارانه","وام","بیمه","مدرسه","دانشگاه","خودرو","گذرنامه","مالیات","ثنا","خودنویس","کارت سوخت","سنجش"]
def clean(s):return re.sub(r"\s+"," ",html.unescape(re.sub("<[^>]+>"," ",s or ""))).strip()
items=[]
for src,url in SOURCES:
 try:
  req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0"})
  tree=ET.fromstring(urllib.request.urlopen(req,timeout=30).read())
  for x in tree.findall(".//item")[:30]:
   title=clean(x.findtext("title"));desc=clean(x.findtext("description"));link=clean(x.findtext("link"))
   if any(k in title+" "+desc for k in KEY):
    items.append({"title":title,"summary":desc[:280],"date":datetime.date.today().strftime("%Y/%m/%d"),"source":src,"url":link,"category":"خبر خدماتی","service":"marriage-loan","image":"assets/news-banking.svg"})
 except Exception as e:print(src,e)
old=json.loads((ROOT/"data/news.json").read_text(encoding="utf-8"))
seen=set();merged=[]
for x in items+old:
 k=re.sub(r"\W+","",x["title"])
 if k not in seen:seen.add(k);merged.append(x)
(ROOT/"data/news.json").write_text(json.dumps(merged[:12],ensure_ascii=False,indent=2),encoding="utf-8")

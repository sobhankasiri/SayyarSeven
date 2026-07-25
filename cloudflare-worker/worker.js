export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "*";
    const headers = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || origin,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Content-Type": "application/json; charset=utf-8"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (request.method !== "POST") return new Response(JSON.stringify({error:"POST only"}), {status:405,headers});
    try {
      const { message, guides = [] } = await request.json();
      if (!message || message.length > 500) return new Response(JSON.stringify({error:"invalid message"}), {status:400,headers});
      const compactGuides = guides.slice(0,30).map(g=>({title:g.title,what:g.what,documents:g.documents,steps:g.steps,conditions:g.conditions}));
      const input = `شما دستیار فارسی کافی‌نت سیار سون هستید. فقط براساس راهنماهای داده‌شده پاسخ دهید. تاریخ، مبلغ، شرط یا مدرک را حدس نزنید. برای اطلاعات متغیر بگویید از منبع رسمی بررسی شود. هرگز از کاربر رمز پیامک، شماره کارت یا اطلاعات حساس نخواهید.\n\nراهنماها:\n${JSON.stringify(compactGuides)}\n\nسوال کاربر: ${message}`;
      const response = await fetch("https://api.openai.com/v1/responses", {
        method:"POST",
        headers:{"Authorization":`Bearer ${env.OPENAI_API_KEY}`,"Content-Type":"application/json"},
        body:JSON.stringify({model:env.OPENAI_MODEL || "gpt-5-mini",input})
      });
      if(!response.ok) throw new Error(await response.text());
      const data = await response.json();
      const answer = data.output_text || data.output?.flatMap(x=>x.content||[]).map(x=>x.text||"").join("") || "پاسخی دریافت نشد.";
      return new Response(JSON.stringify({answer}), {headers});
    } catch (e) {
      return new Response(JSON.stringify({error:"chat unavailable"}), {status:500,headers});
    }
  }
};

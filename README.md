# کافی‌نت سیار سون — پرتال هوش مصنوعی

## امکانات
- سایت کامل و واکنش‌گرا
- خدمات با مدارک و مراحل
- اخبار از منابع رسمی، Google News و cafeneti.com
- چت آزاد؛ سؤال از قبل تعیین نشده
- جست‌وجوی وب توسط OpenAI
- GitHub Actions برای خبرها
- Cloudflare Worker برای مخفی‌ماندن کلید API

## نصب سایت
همه فایل‌ها را در ریشه Repository آپلود کنید و GitHub Pages را روی main / root قرار دهید.

## فعال‌سازی هوش مصنوعی
1. Cloudflare Workers را باز کنید و یک Worker بسازید.
2. محتوای cloudflare-worker/worker.js را در Worker قرار دهید.
3. در Settings > Variables and Secrets یک Secret با نام OPENAI_API_KEY بسازید.
4. مقدار ALLOWED_ORIGIN را به آدرس کامل GitHub Pages خود تغییر دهید.
5. Worker را Deploy کنید.
6. آدرس Worker را در data/config.json در chatApiUrl قرار دهید، مانند:
   https://sayyarseven-ai.USERNAME.workers.dev/chat
7. config.json را دوباره روی GitHub آپلود کنید.

کلید API را هرگز داخل app.js یا config.json قرار ندهید.

## خبرخوان
GitHub Actions هر ۶ ساعت اجرا می‌شود. از کافی‌نتی فقط عنوان، لینک و موضوع کشف می‌شود و متن کامل مطالب کپی نمی‌شود.

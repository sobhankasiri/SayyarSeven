# فعال‌سازی ربات هوش مصنوعی واقعی

GitHub Pages فقط فایل ثابت میزبانی می‌کند و نباید کلید OpenAI داخل JavaScript عمومی قرار بگیرد.

1. در Cloudflare یک Worker بسازید.
2. محتوای worker.js را داخل آن قرار دهید.
3. Secret با نام OPENAI_API_KEY اضافه کنید.
4. آدرس Worker را در data/config.json، داخل chatbot.apiUrl وارد کنید.
5. فایل config.json را روی GitHub جایگزین کنید.

تا قبل از انجام این مراحل، ربات از اطلاعات guides.json پاسخ کاربردی می‌دهد و خاموش نیست.

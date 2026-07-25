const fa=n=>new Intl.NumberFormat('fa-IR').format(n);
const FALLBACK_PRODUCTS=[{"id": "prereg", "title": "پیش‌ثبت‌نام اینترنتی", "category": "ثبت‌نام", "official": 375000, "price": 180000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ورود اطلاعات، کنترل اولیه و تحویل رسید یا کد پیگیری."}, {"id": "insurance-pay", "title": "پرداخت حق بیمه", "category": "بیمه", "official": 80000, "price": 45000, "unit": "هر پرداخت", "delivery": ["digital", "pickup"], "desc": "پرداخت حق بیمه آنلاین با کارت مشتری؛ هزینه سامانه جداست."}, {"id": "sport-insurance", "title": "ثبت‌نام بیمه ورزشی", "category": "بیمه", "official": 240000, "price": 90000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت بیمه ورزشی و تحویل رسید نهایی."}, {"id": "khodnevis", "title": "قرارداد سامانه خودنویس", "category": "ملک", "official": 1600000, "price": 1100000, "unit": "هر قرارداد پایه", "delivery": ["digital", "pickup"], "desc": "ثبت قرارداد پایه مالک و مستأجر؛ شرکا و خدمات جانبی جدا محاسبه می‌شود."}, {"id": "amlak", "title": "ثبت املاک و اسکان", "category": "ملک", "official": 320000, "price": 90000, "unit": "ملک اول", "delivery": ["digital", "pickup"], "desc": "ثبت اقامتگاه یا ملک اول در سامانه املاک و اسکان."}, {"id": "print-a4", "title": "پرینت سیاه‌وسفید A4", "category": "چاپ", "official": 15000, "price": 10000, "unit": "هر برگ", "delivery": ["pickup", "post"], "desc": "پرینت یک‌رو روی کاغذ معمولی؛ فایل باید آماده چاپ باشد."}, {"id": "judicial", "title": "دریافت ابلاغیه قضایی", "category": "قضایی", "official": 55000, "price": 45000, "unit": "هر ابلاغیه", "delivery": ["digital", "pickup", "post"], "desc": "دریافت ابلاغیه؛ چاپ در صورت نیاز جدا محاسبه می‌شود."}, {"id": "criminal", "title": "درخواست عدم سوءپیشینه", "category": "قضایی", "official": 140000, "price": 120000, "unit": "هر درخواست", "delivery": ["digital", "pickup"], "desc": "ثبت درخواست؛ هزینه دولتی سامانه جداست."}, {"id": "insurance-history", "title": "دریافت سابقه بیمه", "category": "بیمه", "official": 60000, "price": 50000, "unit": "هر دریافت", "delivery": ["digital", "pickup", "post"], "desc": "دریافت سابقه تأمین اجتماعی؛ چاپ جدا محاسبه می‌شود."}, {"id": "salary-slip", "title": "فیش حقوقی بازنشستگی", "category": "بیمه", "official": 60000, "price": 50000, "unit": "هر دریافت", "delivery": ["digital", "pickup", "post"], "desc": "دریافت فیش یا حکم حقوقی بازنشستگی."}, {"id": "marriage-loan", "title": "ثبت‌نام وام ازدواج", "category": "بانکی", "official": 400000, "price": 320000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت اولیه، کنترل اطلاعات و تحویل کد رهگیری."}, {"id": "plate", "title": "نوبت تعویض پلاک", "category": "خودرو", "official": 240000, "price": 190000, "unit": "هر نوبت", "delivery": ["digital", "pickup"], "desc": "رزرو نوبت؛ پرداخت‌های سامانه جداست."}, {"id": "traffic-fine", "title": "پرداخت خلافی خودرو", "category": "خودرو", "official": 95000, "price": 75000, "unit": "هر پرداخت", "delivery": ["digital", "pickup"], "desc": "استعلام و پرداخت خلافی؛ مبلغ جریمه جداست."}, {"id": "subsidy", "title": "اعتراض به یارانه و دهک", "category": "دولتی", "official": 140000, "price": 110000, "unit": "هر درخواست", "delivery": ["digital", "pickup"], "desc": "ثبت اعتراض و تحویل کد پیگیری."}, {"id": "sports-school", "title": "ثبت‌نام مدارس نمونه/تیزهوشان", "category": "تحصیلی", "official": 240000, "price": 190000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت‌نام و تحویل رسید؛ هزینه آزمون جداست."}, {"id": "book", "title": "ثبت‌نام کتاب درسی", "category": "تحصیلی", "official": 110000, "price": 90000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت سفارش کتاب؛ مبلغ کتاب از کارت مشتری پرداخت می‌شود."}, {"id": "national-card", "title": "ثبت‌نام کارت ملی هوشمند", "category": "هویتی", "official": 190000, "price": 150000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت درخواست اولیه؛ هزینه‌های دولتی جداست."}, {"id": "sayad-register", "title": "ثبت چک صیادی", "category": "بانکی", "official": 120000, "price": 95000, "unit": "هر چک", "delivery": ["digital", "pickup"], "desc": "ثبت چک صیادی و تحویل تاییدیه."}, {"id": "sayad-confirm", "title": "تأیید چک صیادی", "category": "بانکی", "official": 120000, "price": 95000, "unit": "هر چک", "delivery": ["digital", "pickup"], "desc": "تأیید دریافت چک صیادی."}, {"id": "tax-login", "title": "ثبت‌نام درگاه مالیاتی", "category": "مالیات", "official": 80000, "price": 65000, "unit": "هر مودی", "delivery": ["digital", "pickup"], "desc": "ثبت‌نام اولیه در درگاه ملی خدمات مالیاتی."}, {"id": "scan", "title": "اسکن A4", "category": "چاپ", "official": 20000, "price": 15000, "unit": "هر برگ", "delivery": ["digital", "pickup"], "desc": "اسکن رنگی یا سیاه‌وسفید تا A4؛ تنظیمات پیچیده جداست."}, {"id": "color-print", "title": "پرینت رنگی متن A4", "category": "چاپ", "official": 25000, "price": 20000, "unit": "هر برگ", "delivery": ["pickup", "post"], "desc": "چاپ رنگی متن روی کاغذ معمولی."}];
const FALLBACK_GUIDES=[{"id": "prereg", "title": "پیش‌ثبت‌نام اینترنتی", "what": "ثبت اولیه در سامانه‌های رسمی برای آزمون، مدرسه، استخدام یا طرح دولتی.", "eligibility": ["داشتن شرایط اطلاعیه رسمی", "شماره همراه فعال و در بسیاری از سامانه‌ها به نام متقاضی"], "documents": ["کارت ملی و شناسنامه", "شماره همراه", "عکس پرسنلی در صورت نیاز", "مدرک تحصیلی یا اطلاعات دانش‌آموزی", "کدپستی", "کارت بانکی"], "steps": ["بررسی اطلاعیه و مهلت", "کنترل شرایط", "ورود به سامانه رسمی", "ورود اطلاعات و بارگذاری مدارک", "پرداخت هزینه سامانه", "دریافت رسید و کد پیگیری"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "insurance-pay", "title": "پرداخت حق بیمه", "what": "پرداخت فیش یا بدهی بیمه از سامانه خدمات غیرحضوری تأمین اجتماعی.", "eligibility": ["پرونده بیمه فعال", "فیش قابل پرداخت در سامانه"], "documents": ["کد ملی", "شماره بیمه در صورت نیاز", "شماره همراه حساب", "کارت بانکی و رمز پویا"], "steps": ["ورود به حساب", "انتخاب نوع بیمه و دوره", "کنترل مبلغ", "پرداخت", "ذخیره رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://es.tamin.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "sport-insurance", "title": "بیمه ورزشی", "what": "ثبت عضویت و پوشش حوادث ورزشی برای ورزشکار.", "eligibility": ["اطلاعات هویتی معتبر", "انتخاب رشته و محل فعالیت"], "documents": ["کد ملی", "تاریخ تولد", "شماره همراه", "نام رشته و باشگاه", "کارت بانکی"], "steps": ["ورود به سامانه", "ثبت مشخصات", "انتخاب رشته", "پرداخت حق بیمه", "دریافت تاییدیه"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://insurance.ifsm.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "khodnevis", "title": "قرارداد سامانه خودنویس", "what": "ثبت قرارداد ملکی و دریافت کد رهگیری با تایید طرفین.", "eligibility": ["مالکیت یا نمایندگی قانونی", "شماره همراه فعال طرفین", "توافق کامل درباره مبلغ و شروط"], "documents": ["مدارک هویتی طرفین", "کدپستی ملک", "اطلاعات سند", "مبلغ ودیعه و اجاره", "تاریخ قرارداد", "اطلاعات شاهدان در صورت نیاز"], "steps": ["ورود مالک", "ثبت یا انتخاب ملک", "افزودن طرف قرارداد", "ثبت مبالغ و شروط", "تایید طرفین", "دریافت قرارداد و کد رهگیری"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://khodnevis.mrud.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "amlak", "title": "املاک و اسکان", "what": "ثبت مالکیت و اقامتگاه اصلی خانوار.", "eligibility": ["مالک، مستأجر یا ساکن قانونی بودن", "شماره همراه به نام متقاضی"], "documents": ["کد ملی", "شماره همراه", "کدپستی", "نشانی کامل", "اطلاعات مالک یا قرارداد"], "steps": ["ورود و احراز هویت", "تایید اعضای خانوار", "ثبت اقامتگاه", "ثبت نوع مالکیت", "تایید نهایی"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://amlak.mrud.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "print-a4", "title": "پرینت سیاه‌وسفید A4", "what": "پرینت یک‌رو روی کاغذ معمولی؛ فایل باید آماده چاپ باشد.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "judicial", "title": "دریافت ابلاغیه قضایی", "what": "مشاهده و دریافت ابلاغیه‌های الکترونیکی پرونده قضایی.", "eligibility": ["ثبت‌نام ثنا", "دسترسی به رمز شخصی یا رمز موقت"], "documents": ["کد ملی", "رمز ثنا", "شماره همراه ثبت‌شده"], "steps": ["ورود به عدل ایران", "انتخاب ابلاغ الکترونیک", "ورود رمز", "انتخاب ابلاغیه", "دانلود یا چاپ"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://adliran.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "criminal", "title": "عدم سوءپیشینه", "what": "ثبت درخواست گواهی عدم سوءپیشینه و پیگیری نتیجه.", "eligibility": ["ثبت‌نام و احراز هویت ثنا"], "documents": ["کد ملی", "حساب ثنا", "شماره همراه", "کارت بانکی"], "steps": ["ورود به خدمات قضایی", "ثبت درخواست", "پرداخت هزینه قانونی", "دریافت کد پیگیری", "پیگیری نتیجه"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://adliran.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "insurance-history", "title": "سابقه بیمه", "what": "مشاهده ماه‌های بیمه و کارگاه‌های ارسال‌کننده حق بیمه.", "eligibility": ["حساب فعال تأمین اجتماعی", "تطبیق شماره همراه با کد ملی"], "documents": ["کد ملی", "شماره همراه", "رمز حساب"], "steps": ["ورود به سامانه", "انتخاب بیمه‌شدگان", "مشاهده کلیه سوابق", "دانلود PDF", "چاپ در صورت نیاز"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://es.tamin.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "salary-slip", "title": "فیش حقوقی بازنشستگی", "what": "دریافت فیش یا حکم حقوقی بازنشستگی.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "marriage-loan", "title": "وام ازدواج", "what": "ثبت درخواست وام ازدواج و پیگیری تعیین بانک و شعبه.", "eligibility": ["ازدواج رسمی در بازه مجاز", "عدم دریافت قبلی وام ازدواج", "رعایت ضوابط روز بانک مرکزی"], "documents": ["کد ملی", "تاریخ تولد", "تاریخ عقد و شماره سند", "شماره همراه", "کدپستی"], "steps": ["ثبت اطلاعات", "انتخاب بانک در صورت ظرفیت", "دریافت کد رهگیری", "پیگیری شعبه", "مراجعه در مهلت مقرر"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://ve.cbi.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "plate", "title": "نوبت تعویض پلاک", "what": "رزرو نوبت مرکز تعویض پلاک برای نقل‌وانتقال یا فک پلاک.", "eligibility": ["حساب سخا فعال", "اطلاعات خودرو و مالک", "وجود ظرفیت مرکز"], "documents": ["کد ملی", "شماره همراه مالک", "پلاک و اطلاعات خودرو", "برگ سبز", "کدپستی"], "steps": ["ورود سخا", "انتخاب نوبت‌دهی", "انتخاب مرکز و خدمت", "انتخاب زمان", "ثبت خودرو", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://sakha.epolice.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "traffic-fine", "title": "پرداخت خلافی خودرو", "what": "استعلام و پرداخت خلافی؛ مبلغ جریمه جداست.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "subsidy", "title": "اعتراض دهک یارانه", "what": "ثبت درخواست بازبینی وضعیت اقتصادی خانوار.", "eligibility": ["متقاضی سرپرست خانوار باشد", "شماره همراه به نام سرپرست"], "documents": ["کد ملی سرپرست", "شماره همراه", "اطلاعات اعضای خانوار"], "steps": ["ورود به سامانه حمایت", "مشاهده دهک", "بررسی اعضا و اطلاعات", "ثبت اعتراض", "تایید تعهدنامه", "دریافت کد پیگیری"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://hemayat.mcls.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "sports-school", "title": "ثبت‌نام مدارس و آزمون‌ها", "what": "پیش‌ثبت‌نام مدرسه یا آزمون دانش‌آموزی از سامانه آموزش‌وپرورش.", "eligibility": ["شرایط پایه و محدوده ثبت‌نام", "ثبت اطلاعات دانش‌آموز در مدرسه"], "documents": ["کد ملی دانش‌آموز و ولی", "شماره همراه ولی", "کدپستی", "کارنامه یا معدل", "عکس", "مدارک سهمیه در صورت وجود"], "steps": ["ورود به پنجره آموزش‌وپرورش", "انتخاب خدمت", "کنترل مشخصات", "انتخاب مدرسه یا آزمون", "بارگذاری مدارک", "پرداخت رسمی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.medu.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "book", "title": "سفارش کتاب درسی", "what": "ثبت و پرداخت سفارش کتاب براساس پایه و مدرسه.", "eligibility": ["ثبت‌نام دانش‌آموز در پایه جدید", "باز بودن بازه سفارش"], "documents": ["کد ملی دانش‌آموز", "سریال شناسنامه در صورت نیاز", "شماره همراه ولی", "کارت بانکی"], "steps": ["ورود به سامانه", "بررسی پایه و مدرسه", "تایید بسته کتاب", "پرداخت مبلغ کتاب", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://irtextbook.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "national-card", "title": "ثبت‌نام کارت ملی هوشمند", "what": "ثبت درخواست اولیه؛ هزینه‌های دولتی جداست.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "sayad-register", "title": "ثبت چک صیادی", "what": "ثبت چک صیادی و تحویل تاییدیه.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "sayad-confirm", "title": "تأیید چک صیادی", "what": "تأیید دریافت چک صیادی.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "tax-login", "title": "درگاه مالیاتی", "what": "ایجاد یا تکمیل حساب مودی و پرونده مالیاتی.", "eligibility": ["اطلاعات هویتی معتبر", "شماره همراه به نام مودی یا مدیر", "نشانی و فعالیت مشخص"], "documents": ["کد ملی یا شناسه ملی", "شماره همراه", "کدپستی محل فعالیت", "مجوز یا اطلاعات شغلی", "شماره شبا در صورت نیاز"], "steps": ["ورود به درگاه", "ایجاد یا انتخاب پرونده", "تکمیل نشانی و فعالیت", "ثبت حساب یا کارت‌خوان", "بررسی وضعیت پرونده"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.tax.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "scan", "title": "اسکن A4", "what": "اسکن رنگی یا سیاه‌وسفید تا A4؛ تنظیمات پیچیده جداست.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}, {"id": "color-print", "title": "پرینت رنگی متن A4", "what": "چاپ رنگی متن روی کاغذ معمولی.", "eligibility": ["شرایط دقیق مطابق اطلاعیه رسمی بررسی می‌شود."], "documents": ["کد ملی", "شماره همراه فعال", "مدارک اختصاصی خدمت"], "steps": ["بررسی شرایط", "ورود به سامانه رسمی", "ثبت اطلاعات", "کنترل نهایی", "دریافت رسید"], "conditions": ["هزینه دولتی یا سامانه‌ای جدا از دستمزد کافی‌نت است.", "تاریخ و شرایط ممکن است تغییر کند و منبع رسمی قبل از اقدام بررسی می‌شود."], "errors": ["خطای پیامک: مالکیت و فعال بودن خط بررسی شود.", "پرداخت ناموفق: کد پیگیری بانکی نگهداری شود.", "مغایرت اطلاعات: مشخصات با مدرک رسمی تطبیق داده شود."], "source": "https://my.gov.ir", "review": "۱۴۰۵/۰۵/۰۳"}];
const FALLBACK_CONFIG={"phone": "09360453735", "messengers": {"eitaa": "", "bale": "", "soroush": "", "telegram": ""}, "maps": {"google": "https://maps.app.goo.gl/kaVgXB6248QeW437A", "neshan": "https://nshn.ir/df_bvo0iNxz0Ml", "balad": "https://balad.ir/p/6Qa9IqSy5QrdGN"}};
const FALLBACK_NEWS=[{"title": "مدارک لازم را قبل از ثبت درخواست آماده کنید", "summary": "کارت ملی، سیم‌کارت به نام متقاضی، کدپستی و اطلاعات بانکی باعث می‌شود ثبت درخواست سریع‌تر انجام شود.", "source": "کافی‌نت سیار سون", "url": "#", "date": "۱۴۰۵/۰۵/۰۳", "image": "assets/news-documents.svg"}, {"title": "در خدمات دولتی، کد پیگیری را نگهداری کنید", "summary": "رسید نهایی و کد رهگیری برای بررسی وضعیت درخواست ضروری است؛ تصویر آن را در تلفن خود نگه دارید.", "source": "راهنمای خدمات اینترنتی", "url": "#", "date": "۱۴۰۵/۰۵/۰۲", "image": "assets/news-tracking.svg"}, {"title": "رمز یک‌بارمصرف را برای افراد ناشناس ارسال نکنید", "summary": "رمزهای پیامکی فقط هنگام انجام همان خدمت استفاده می‌شوند و نباید در گروه‌ها یا شبکه‌های اجتماعی منتشر شوند.", "source": "هشدار امنیتی", "url": "#", "date": "۱۴۰۵/۰۵/۰۱", "image": "assets/news-security.svg"}];

let products=FALLBACK_PRODUCTS;
let guides=FALLBACK_GUIDES;
let config=FALLBACK_CONFIG;
let cart=[];
try {
  cart=JSON.parse(localStorage.getItem('seven_cart')||'[]');
  if(!Array.isArray(cart)) cart=[];
} catch(e) {
  cart=[];
}

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

async function safeJson(url,fallback){
  try {
    const r=await fetch(url,{cache:'no-store'});
    if(!r.ok) throw new Error('HTTP '+r.status);
    return await r.json();
  } catch(e) {
    console.warn('Using embedded fallback for',url,e);
    return fallback;
  }
}

async function init(){
  products=await safeJson('data/products.json?v=20',FALLBACK_PRODUCTS);
  guides=await safeJson('data/guides.json?v=20',FALLBACK_GUIDES);
  config=await safeJson('data/config.json?v=20',FALLBACK_CONFIG);
  buildFilters();
  renderProducts();
  renderCart();
  renderMessengers();
  loadNews();
  const welcome=config.chatbot?.welcome||'سلام! درباره خدمات کافی‌نت از من بپرسید.';
  if(!$('#chatbotMessages')?.children.length)addChatMessage('bot',welcome);
  $('#chatModeLabel').textContent=config.chatbot?.apiUrl?'هوش مصنوعی آنلاین':'راهنمای خدمات';
}

function buildFilters(){
  const cats=['all',...new Set(products.map(p=>p.category))];
  const box=$('#categoryFilters');
  if(!box) return;
  box.innerHTML=cats.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c==='all'?'همه':c}</button>`).join('');
  box.onclick=e=>{
    if(!e.target.matches('button')) return;
    $$('#categoryFilters button').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    renderProducts();
  };
}

function renderProducts(){
  const grid=$('#productGrid');
  if(!grid) return;
  const q=(($('#searchInput')?.value)||'').trim();
  const cat=$('#categoryFilters .active')?.dataset.cat||'all';
  const list=products.filter(p=>(cat==='all'||p.category===cat)&&(!q||(p.title+p.desc+p.category).includes(q)));
  grid.innerHTML=list.map(p=>`
    <article class="product reveal show">
      <span class="product-tag">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="price-box">
        <span class="official">تعرفه پایه: ${fa(p.official)} تومان</span>
        <span class="sale">${fa(p.price)} تومان</span>
        <span class="unit">${p.unit}</span>
      </div>
      <div class="product-actions">
        <button class="guide-btn" onclick="openGuide('${p.id}')">راهنمای کامل</button>
        <button onclick="addToCart('${p.id}')">سفارش خدمت</button>
      </div>
    </article>`).join('')||'<p>خدمتی پیدا نشد.</p>';
}

$('#searchInput')?.addEventListener('input',renderProducts);

window.addToCart=id=>{
  const x=cart.find(i=>i.id===id);
  x?x.qty++:cart.push({id,qty:1});
  saveCart();
  openCart();
};

function saveCart(){
  localStorage.setItem('seven_cart',JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  const box=$('#cartItems');
  if(!box) return;
  if(!cart.length) box.innerHTML='<p style="color:#9dacbf">سبد سفارش خالی است.</p>';
  else box.innerHTML=cart.map(i=>{
    const p=products.find(x=>x.id===i.id);
    if(!p)return'';
    return `<div class="cart-item">
      <div class="cart-item-row">
        <div><b>${p.title}</b><small>${fa(p.price)} تومان</small></div>
        <span class="remove" onclick="removeItem('${i.id}')">حذف</span>
      </div>
      <div class="qty">
        <button onclick="qty('${i.id}',-1)">−</button>
        <span>${fa(i.qty)}</span>
        <button onclick="qty('${i.id}',1)">+</button>
      </div>
    </div>`;
  }).join('');
  const total=cart.reduce((s,i)=>{
    const p=products.find(x=>x.id===i.id);
    return s+(p?p.price*i.qty:0);
  },0);
  $('#cartTotal').textContent=fa(total)+' تومان';
  $('#cartCount').textContent=fa(cart.reduce((s,i)=>s+i.qty,0));
}

window.qty=(id,d)=>{
  const x=cart.find(i=>i.id===id);
  if(!x)return;
  x.qty+=d;
  if(x.qty<=0) cart=cart.filter(i=>i.id!==id);
  saveCart();
};
window.removeItem=id=>{cart=cart.filter(i=>i.id!==id);saveCart();};

function openCart(){$('#cartDrawer')?.classList.add('open');$('#overlay')?.classList.add('show')}
function closeCart(){$('#cartDrawer')?.classList.remove('open');$('#overlay')?.classList.remove('show')}

$('#cartButton')?.addEventListener('click',openCart);
$('#cartClose')?.addEventListener('click',closeCart);
$('#overlay')?.addEventListener('click',closeCart);

$('#checkoutButton')?.addEventListener('click',()=>{
  if(!cart.length)return alert('سبد سفارش خالی است.');
  closeCart();
  $('#checkoutModal')?.classList.add('show');
});
$('#modalClose')?.addEventListener('click',()=>$('#checkoutModal')?.classList.remove('show'));

$('#submitOrder')?.addEventListener('click',()=>{
  const name=$('#customerName').value.trim();
  const phone=$('#customerPhone').value.trim();
  if(!name||!/^09\d{9}$/.test(phone))return alert('نام و شماره تماس صحیح وارد کنید.');
  const code='S7-'+Date.now().toString().slice(-7);
  const method={digital:'فایل دیجیتال',pickup:'تحویل حضوری',post:'ارسال پستی'}[$('#deliveryMethod').value];
  const rows=cart.map(i=>{
    const p=products.find(x=>x.id===i.id);
    return `${p.title} × ${i.qty} = ${fa(p.price*i.qty)} تومان`;
  });
  const total=cart.reduce((s,i)=>s+products.find(x=>x.id===i.id).price*i.qty,0);
  const text=`کد سفارش: ${code}\nنام: ${name}\nشماره: ${phone}\nروش تحویل: ${method}\n\n${rows.join('\n')}\n\nجمع خدمات: ${fa(total)} تومان\nتوضیحات: ${$('#orderNote').value||'-'}`;
  const out=$('#orderResult');
  out.style.display='block';
  out.innerHTML=`<b>سفارش ساخته شد.</b>\n${text}\n\n<button class="btn primary full" id="copyOrder">کپی متن سفارش</button>`;
  $('#copyOrder').onclick=()=>navigator.clipboard.writeText(text).then(()=>alert('متن سفارش کپی شد.'));
});

function renderMessengers(){
  const names={eitaa:'ایتا',bale:'بله',soroush:'سروش‌پلاس',telegram:'تلگرام'};
  const box=$('#messengerButtons');
  if(!box)return;
  box.innerHTML=Object.entries(names).map(([k,n])=>`<button data-url="${config.messengers?.[k]||''}">${n}</button>`).join('');
  box.onclick=e=>{
    if(!e.target.matches('button'))return;
    const u=e.target.dataset.url;
    if(!u)alert('لینک این پیام‌رسان هنوز وارد نشده است.');
    else window.open(u,'_blank');
  };
}

let currentNews=[];
async function loadNews(){
  currentNews=await safeJson('data/news.json?v=20',FALLBACK_NEWS);
  const box=$('#newsGrid');
  if(!box)return;
  box.innerHTML=currentNews.slice(0,9).map((n,i)=>`
    <article class="news-card reveal show">
      <img src="${n.image||'assets/news-documents.svg'}" alt="">
      <div class="news-body">
        <span class="news-meta">${n.source_name||n.source||'منبع رسمی'} · ${n.published_at||n.date||''}</span>
        <h3>${n.title}</h3>
        <p>${n.summary}</p>
        <div class="news-actions">
          <button onclick="openNewsDetail(${i})">شرایط و مدارک</button>
          <button onclick="orderNewsService('${n.service_id||'prereg'}')">ثبت سفارش</button>
        </div>
      </div>
    </article>`).join('');
}
window.openNewsDetail=i=>{
  const n=currentNews[i];
  if(!n)return;
  const list=(title,items)=>`<section class="guide-section"><h4>${title}</h4><ul>${(items||[]).map(x=>`<li>${x}</li>`).join('')}</ul></section>`;
  $('#newsDetail').innerHTML=`
    <span class="guide-kicker">${n.status||'خبر خدماتی'}</span>
    <h2>${n.title}</h2>
    <p class="guide-intro">${n.what||n.summary||''}</p>
    <div class="guide-meta">
      <span>مهلت: ${n.deadline||'در منبع رسمی بررسی شود'}</span>
      <span>اعتبار تحلیل: ${n.confidence||'نیازمند بررسی'}</span>
    </div>
    ${list('چه کسانی می‌توانند ثبت‌نام کنند؟',n.eligibility)}
    ${list('مدارک لازم',n.documents)}
    <section class="guide-section"><h4>مراحل انجام</h4><ol>${(n.steps||[]).map(x=>`<li>${x}</li>`).join('')}</ol></section>
    ${list('نکات و هشدارها',n.warnings)}
    <div class="guide-warning">قبل از ثبت سفارش، مهلت و شرایط نهایی از منبع رسمی دوباره بررسی می‌شود.</div>
    <div class="news-source-row">
      ${n.official_url?`<a href="${n.official_url}" target="_blank" rel="noopener">سامانه رسمی</a>`:''}
      ${n.source_url?`<a href="${n.source_url}" target="_blank" rel="noopener">مشاهده منبع خبر</a>`:''}
    </div>
    <button class="btn primary full" onclick="orderNewsService('${n.service_id||'prereg'}')">ثبت سفارش این خدمت</button>`;
  $('#newsModal').classList.add('show');
};
window.orderNewsService=id=>{
  $('#newsModal')?.classList.remove('show');
  addToCart(id);
};
$('#newsModalClose')?.addEventListener('click',()=>$('#newsModal')?.classList.remove('show'));
$('#newsModal')?.addEventListener('click',e=>{if(e.target.id==='newsModal')e.currentTarget.classList.remove('show')});

$('.menu-toggle')?.addEventListener('click',()=>$('.navlinks')?.classList.toggle('open'));
$$('.navlinks a').forEach(a=>a.addEventListener('click',()=>$('.navlinks')?.classList.remove('open')));

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}
}),{threshold:.08});
$$('.reveal').forEach(x=>io.observe(x));

document.addEventListener('DOMContentLoaded',init);


window.openGuide=id=>{
  const g=guides.find(x=>x.id===id);
  const p=products.find(x=>x.id===id);
  if(!g){alert('راهنمای این خدمت در حال تکمیل است.');return}
  const list=(title,items)=>`<section class="guide-section"><h4>${title}</h4><ul>${(items||[]).map(x=>`<li>${x}</li>`).join('')}</ul></section>`;
  $('#guideContent').innerHTML=`
    <span class="guide-kicker">${p?.category||'راهنمای خدمت'}</span>
    <h2>${g.title}</h2>
    <p class="guide-intro">${g.what||p?.desc||''}</p>
    <div class="guide-meta">
      <span>آخرین بازبینی: ${g.review||'در حال به‌روزرسانی'}</span>
      ${g.source?`<a href="${g.source}" target="_blank" rel="noopener">منبع رسمی</a>`:''}
    </div>
    ${list('چه کسانی می‌توانند انجام دهند؟',g.eligibility)}
    ${list('مدارک و اطلاعات لازم',g.documents)}
    <section class="guide-section"><h4>مراحل انجام</h4><ol>${(g.steps||[]).map(x=>`<li>${x}</li>`).join('')}</ol></section>
    ${list('شرایط و نکات مهم',g.conditions)}
    ${list('خطاهای رایج و راه‌حل',g.errors)}
    <div class="guide-warning">مهلت، مبلغ دولتی و شرایط سامانه ممکن است تغییر کند؛ قبل از اقدام، منبع رسمی دوباره بررسی می‌شود.</div>
    <div class="guide-footer">
      <div><small>هزینه خدمات سون</small><strong>${p?fa(p.price)+' تومان':'پس از بررسی'}</strong></div>
      <button class="btn primary" onclick="addToCart('${id}');closeGuide()">ثبت سفارش این خدمت</button>
    </div>`;
  $('#guideModal').classList.add('show');
};
window.closeGuide=()=>$('#guideModal')?.classList.remove('show');
$('#guideClose')?.addEventListener('click',closeGuide);
$('#guideModal')?.addEventListener('click',e=>{if(e.target.id==='guideModal')closeGuide()});


// Floating assistant: local guide search + optional secure AI endpoint.
const normalizeFa=s=>(s||'').toLowerCase().replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[\u200c\s]+/g,' ').trim();
const escapeHtml=s=>(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function addChatMessage(role,text){
  const box=$('#chatbotMessages'); if(!box)return;
  const row=document.createElement('div'); row.className=`chat-message ${role}`;
  row.innerHTML=`<div>${escapeHtml(text).replace(/\n/g,'<br>')}</div>`;
  box.appendChild(row); box.scrollTop=box.scrollHeight;
}
function localChatAnswer(question){
  const q=normalizeFa(question);
  const words=q.split(' ').filter(x=>x.length>2);
  const scored=guides.map(g=>{
    const hay=normalizeFa([g.title,g.what,...(g.documents||[]),...(g.steps||[]),...(g.conditions||[])].join(' '));
    let score=words.reduce((s,w)=>s+(hay.includes(w)?2:0),0);
    if(q.includes(normalizeFa(g.title)))score+=8;
    return {g,score};
  }).sort((a,b)=>b.score-a.score);
  const g=scored[0]?.score>0?scored[0].g:null;
  if(!g) return 'موضوع سوال را کمی دقیق‌تر بنویسید؛ مثلاً «مدارک وام ازدواج»، «مراحل اعتراض یارانه» یا «شرایط خودنویس». همچنین می‌توانید از بخش فروشگاه، راهنمای کامل هر خدمت را باز کنید.';
  const wantsDocs=/مدرک|مدارک|چی لازم/.test(q), wantsSteps=/مرحله|مراحل|چطور|چجوری|نحوه/.test(q), wantsConditions=/شرط|شرایط|چه کسانی/.test(q);
  let parts=[`خدمت: ${g.title}`, g.what||''];
  if(wantsDocs || (!wantsSteps&&!wantsConditions)) parts.push('مدارک لازم:\n• '+(g.documents||[]).slice(0,7).join('\n• '));
  if(wantsSteps || (!wantsDocs&&!wantsConditions)) parts.push('مراحل انجام:\n'+(g.steps||[]).slice(0,7).map((x,i)=>`${i+1}. ${x}`).join('\n'));
  if(wantsConditions) parts.push('شرایط مهم:\n• '+(g.eligibility||g.conditions||[]).slice(0,6).join('\n• '));
  parts.push('مهلت و جزئیات نهایی باید از سامانه رسمی بررسی شود.');
  return parts.filter(Boolean).join('\n\n');
}
async function askSevenBot(question){
  const api=config.chatbot?.apiUrl?.trim();
  if(!api)return localChatAnswer(question);
  try{
    $('#chatModeLabel').textContent='در حال پاسخ هوشمند';
    const res=await fetch(api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:question, guides})});
    if(!res.ok)throw new Error('bad response');
    const data=await res.json();
    return data.answer||localChatAnswer(question);
  }catch(e){ return localChatAnswer(question)+'\n\n(اتصال آنلاین موقتاً در دسترس نبود؛ پاسخ از راهنمای داخلی سایت داده شد.)'; }
  finally{$('#chatModeLabel').textContent=config.chatbot?.apiUrl?'هوش مصنوعی آنلاین':'راهنمای خدمات'}
}
function openChatbot(){
  $('#chatbotPanel')?.classList.add('open'); $('#chatbotPanel')?.setAttribute('aria-hidden','false');
  $('#chatbotBadge')?.remove(); $('#chatbotNotice')?.classList.add('hide');
  setTimeout(()=>$('#chatbotInput')?.focus(),150);
}
function closeChatbot(){ $('#chatbotPanel')?.classList.remove('open'); $('#chatbotPanel')?.setAttribute('aria-hidden','true'); }
$('#chatbotLauncher')?.addEventListener('click',openChatbot);
$('#chatbotClose')?.addEventListener('click',closeChatbot);
$('#chatNoticeClose')?.addEventListener('click',e=>{e.stopPropagation();$('#chatbotNotice')?.classList.add('hide')});
$('#chatbotNotice')?.addEventListener('click',openChatbot);
$('#chatSuggestions')?.addEventListener('click',e=>{if(e.target.matches('button')){$('#chatbotInput').value=e.target.textContent;$('#chatbotForm').requestSubmit();}});
$('#chatbotForm')?.addEventListener('submit',async e=>{
  e.preventDefault(); const input=$('#chatbotInput'); const q=input.value.trim(); if(!q)return;
  addChatMessage('user',q); input.value=''; addChatMessage('bot','در حال بررسی...');
  const pending=$('#chatbotMessages .bot:last-child'); const answer=await askSevenBot(q); pending.innerHTML=`<div>${escapeHtml(answer).replace(/\n/g,'<br>')}</div>`;
});
setTimeout(()=>$('#chatbotNotice')?.classList.remove('hide'),1800);

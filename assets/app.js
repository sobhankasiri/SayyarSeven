const fa=n=>new Intl.NumberFormat('fa-IR').format(n);
const FALLBACK_PRODUCTS=[{"id": "prereg", "title": "پیش‌ثبت‌نام اینترنتی", "category": "ثبت‌نام", "official": 375000, "price": 180000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ورود اطلاعات، کنترل اولیه و تحویل رسید یا کد پیگیری."}, {"id": "insurance-pay", "title": "پرداخت حق بیمه", "category": "بیمه", "official": 80000, "price": 45000, "unit": "هر پرداخت", "delivery": ["digital", "pickup"], "desc": "پرداخت حق بیمه آنلاین با کارت مشتری؛ هزینه سامانه جداست."}, {"id": "sport-insurance", "title": "ثبت‌نام بیمه ورزشی", "category": "بیمه", "official": 240000, "price": 90000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت بیمه ورزشی و تحویل رسید نهایی."}, {"id": "khodnevis", "title": "قرارداد سامانه خودنویس", "category": "ملک", "official": 1600000, "price": 1100000, "unit": "هر قرارداد پایه", "delivery": ["digital", "pickup"], "desc": "ثبت قرارداد پایه مالک و مستأجر؛ شرکا و خدمات جانبی جدا محاسبه می‌شود."}, {"id": "amlak", "title": "ثبت املاک و اسکان", "category": "ملک", "official": 320000, "price": 90000, "unit": "ملک اول", "delivery": ["digital", "pickup"], "desc": "ثبت اقامتگاه یا ملک اول در سامانه املاک و اسکان."}, {"id": "print-a4", "title": "پرینت سیاه‌وسفید A4", "category": "چاپ", "official": 15000, "price": 10000, "unit": "هر برگ", "delivery": ["pickup", "post"], "desc": "پرینت یک‌رو روی کاغذ معمولی؛ فایل باید آماده چاپ باشد."}, {"id": "judicial", "title": "دریافت ابلاغیه قضایی", "category": "قضایی", "official": 55000, "price": 45000, "unit": "هر ابلاغیه", "delivery": ["digital", "pickup", "post"], "desc": "دریافت ابلاغیه؛ چاپ در صورت نیاز جدا محاسبه می‌شود."}, {"id": "criminal", "title": "درخواست عدم سوءپیشینه", "category": "قضایی", "official": 140000, "price": 120000, "unit": "هر درخواست", "delivery": ["digital", "pickup"], "desc": "ثبت درخواست؛ هزینه دولتی سامانه جداست."}, {"id": "insurance-history", "title": "دریافت سابقه بیمه", "category": "بیمه", "official": 60000, "price": 50000, "unit": "هر دریافت", "delivery": ["digital", "pickup", "post"], "desc": "دریافت سابقه تأمین اجتماعی؛ چاپ جدا محاسبه می‌شود."}, {"id": "salary-slip", "title": "فیش حقوقی بازنشستگی", "category": "بیمه", "official": 60000, "price": 50000, "unit": "هر دریافت", "delivery": ["digital", "pickup", "post"], "desc": "دریافت فیش یا حکم حقوقی بازنشستگی."}, {"id": "marriage-loan", "title": "ثبت‌نام وام ازدواج", "category": "بانکی", "official": 400000, "price": 320000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت اولیه، کنترل اطلاعات و تحویل کد رهگیری."}, {"id": "plate", "title": "نوبت تعویض پلاک", "category": "خودرو", "official": 240000, "price": 190000, "unit": "هر نوبت", "delivery": ["digital", "pickup"], "desc": "رزرو نوبت؛ پرداخت‌های سامانه جداست."}, {"id": "traffic-fine", "title": "پرداخت خلافی خودرو", "category": "خودرو", "official": 95000, "price": 75000, "unit": "هر پرداخت", "delivery": ["digital", "pickup"], "desc": "استعلام و پرداخت خلافی؛ مبلغ جریمه جداست."}, {"id": "subsidy", "title": "اعتراض به یارانه و دهک", "category": "دولتی", "official": 140000, "price": 110000, "unit": "هر درخواست", "delivery": ["digital", "pickup"], "desc": "ثبت اعتراض و تحویل کد پیگیری."}, {"id": "sports-school", "title": "ثبت‌نام مدارس نمونه/تیزهوشان", "category": "تحصیلی", "official": 240000, "price": 190000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت‌نام و تحویل رسید؛ هزینه آزمون جداست."}, {"id": "book", "title": "ثبت‌نام کتاب درسی", "category": "تحصیلی", "official": 110000, "price": 90000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت سفارش کتاب؛ مبلغ کتاب از کارت مشتری پرداخت می‌شود."}, {"id": "national-card", "title": "ثبت‌نام کارت ملی هوشمند", "category": "هویتی", "official": 190000, "price": 150000, "unit": "هر نفر", "delivery": ["digital", "pickup"], "desc": "ثبت درخواست اولیه؛ هزینه‌های دولتی جداست."}, {"id": "sayad-register", "title": "ثبت چک صیادی", "category": "بانکی", "official": 120000, "price": 95000, "unit": "هر چک", "delivery": ["digital", "pickup"], "desc": "ثبت چک صیادی و تحویل تاییدیه."}, {"id": "sayad-confirm", "title": "تأیید چک صیادی", "category": "بانکی", "official": 120000, "price": 95000, "unit": "هر چک", "delivery": ["digital", "pickup"], "desc": "تأیید دریافت چک صیادی."}, {"id": "tax-login", "title": "ثبت‌نام درگاه مالیاتی", "category": "مالیات", "official": 80000, "price": 65000, "unit": "هر مودی", "delivery": ["digital", "pickup"], "desc": "ثبت‌نام اولیه در درگاه ملی خدمات مالیاتی."}, {"id": "scan", "title": "اسکن A4", "category": "چاپ", "official": 20000, "price": 15000, "unit": "هر برگ", "delivery": ["digital", "pickup"], "desc": "اسکن رنگی یا سیاه‌وسفید تا A4؛ تنظیمات پیچیده جداست."}, {"id": "color-print", "title": "پرینت رنگی متن A4", "category": "چاپ", "official": 25000, "price": 20000, "unit": "هر برگ", "delivery": ["pickup", "post"], "desc": "چاپ رنگی متن روی کاغذ معمولی."}];
const FALLBACK_CONFIG={"phone": "09360453735", "messengers": {"eitaa": "", "bale": "", "soroush": "", "telegram": ""}, "maps": {"google": "https://maps.app.goo.gl/kaVgXB6248QeW437A", "neshan": "https://nshn.ir/df_bvo0iNxz0Ml", "balad": "https://balad.ir/p/6Qa9IqSy5QrdGN"}};
const FALLBACK_NEWS=[{"title": "مدارک لازم را قبل از ثبت درخواست آماده کنید", "summary": "کارت ملی، سیم‌کارت به نام متقاضی، کدپستی و اطلاعات بانکی باعث می‌شود ثبت درخواست سریع‌تر انجام شود.", "source": "کافی‌نت سیار سون", "url": "#", "date": "۱۴۰۵/۰۵/۰۳", "image": "assets/news-documents.svg"}, {"title": "در خدمات دولتی، کد پیگیری را نگهداری کنید", "summary": "رسید نهایی و کد رهگیری برای بررسی وضعیت درخواست ضروری است؛ تصویر آن را در تلفن خود نگه دارید.", "source": "راهنمای خدمات اینترنتی", "url": "#", "date": "۱۴۰۵/۰۵/۰۲", "image": "assets/news-tracking.svg"}, {"title": "رمز یک‌بارمصرف را برای افراد ناشناس ارسال نکنید", "summary": "رمزهای پیامکی فقط هنگام انجام همان خدمت استفاده می‌شوند و نباید در گروه‌ها یا شبکه‌های اجتماعی منتشر شوند.", "source": "هشدار امنیتی", "url": "#", "date": "۱۴۰۵/۰۵/۰۱", "image": "assets/news-security.svg"}];

let products=FALLBACK_PRODUCTS;
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
  products=await safeJson('data/products.json?v=2',FALLBACK_PRODUCTS);
  config=await safeJson('data/config.json?v=2',FALLBACK_CONFIG);
  buildFilters();
  renderProducts();
  renderCart();
  renderMessengers();
  loadNews();
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
      <button onclick="addToCart('${p.id}')">افزودن به سفارش</button>
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

async function loadNews(){
  const news=await safeJson('data/news.json?v=2',FALLBACK_NEWS);
  const box=$('#newsGrid');
  if(!box)return;
  box.innerHTML=news.slice(0,6).map(n=>`
    <article class="news-card reveal show">
      <img src="${n.image||'assets/news-documents.svg'}" alt="">
      <div class="news-body">
        <span class="news-meta">${n.source} · ${n.date}</span>
        <h3>${n.title}</h3>
        <p>${n.summary}</p>
        <a href="${n.url}" target="_blank" rel="noopener">مشاهده منبع ←</a>
      </div>
    </article>`).join('');
}

$('.menu-toggle')?.addEventListener('click',()=>$('.navlinks')?.classList.toggle('open'));
$$('.navlinks a').forEach(a=>a.addEventListener('click',()=>$('.navlinks')?.classList.remove('open')));

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}
}),{threshold:.08});
$$('.reveal').forEach(x=>io.observe(x));

document.addEventListener('DOMContentLoaded',init);

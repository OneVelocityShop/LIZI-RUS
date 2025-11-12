// ===============================
// Product Data
// ===============================
const products = [
  {
    id: "mini-speaker",
    name: "רמקול Mini",
    price: "החל מ-₪65 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: `
      רמקול נייד אלחוטי בעיצוב <b>Nano קומפקטי במיוחד</b>!<br><br>
      ✔️ איכות סאונד חזקה ובס עמוק<br>
      ✔️ חיבור <b>Bluetooth</b> מהיר ויציב<br>
      ✔️ טכנולוגיית <b>TWS</b> לחיבור שני רמקולים לסטריאו מושלם<br>
      ✔️ שלט לסמארטפון לצילום <b>Selfie</b><br>
      ✔️ מיקרופון מובנה לשיחות דיבורית<br>
      ✔️ משקל קל — רק <b>57 גרם</b> וגודל של <b>35 מ״מ</b><br><br>
      <i>מושלם למיתוג חברות, מתנות לעובדים או קידום מכירות.</i>
      `,
    images: [
      "./images/mini-speaker-1.jpg",
      "./images/mini-speaker-2.jpg",
      "./images/mini-speaker-3.jpg",
      "./images/mini-speaker-4.jpg",
    ],
  },
  {
     id: "power-bank",
     name: "פאוור בנק",
     price: "החל מ-₪60 ליחידה",
     minOrder: "מינימום הזמנה: 50 יחידות",
    description: `
      <b>פאוור בנק לבן בעיצוב מודרני עם צמת כבלים נשלפת וטעינה מהירה</b><br><br>
      ✔️ סוללה עוצמתית בקיבולת <b>10,000mAh</b> לשימוש ארוך טווח<br>
      ✔️ טעינה מהירה בטכנולוגיית <b>Fast Charge</b><br>
      ✔️ כולל צמת כבלים נשלפת – Type-C, Micro-USB ו-Lightning<br>
      ✔️ עיצוב דק ונוח לנשיאה עם שטח רחב למיתוג לוגו<br>
      ✔️ תאימות מלאה לכל סוגי המכשירים<br><br>
      <i>מוצר פרקטי, איכותי וממותג שמתאים כמתנה לעובדים, לקוחות או לכנסים עסקיים.</i>
      `,
     images: [
        "/images/power-bank-1.jpg",
        "/images/power-bank-2.png",
        "/images/power-bank-3.jpg",
  ],
  },
  {
    id: "crystal-usb",
    name: "דיסק און קי קריסטל",
    price: "החל מ-₪40 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: `
      <b>דיסק און קי מקריסטל — אלגנטי ויוקרתי במיוחד</b><br><br>
      ✔️ לוגו בחריטה המואר בזמן השימוש בהתקן<br>
      ✔️ צבע תאורה ניתן לבחירה: <b>לבן, אדום, כחול, ירוק </b><br>
      ✔️ נפח זיכרון לבחירה: <b>4GB / 8GB / 16GB / 32GB / 64GB </b><br>
      ✔️ מבנה עמיד עם כיסוי מתכתי איכותי<br><br>
      <i>מוצר מושלם למיתוג חברות, מתנות לעובדים ולאירועים עסקיים יוקרתיים.</i>
      `,
    images: [
      "/images/diskonkey-crystal-1.jpg",
      "/images/diskonkey-crystal-2.jpg",
      "/images/diskonkey-crystal-3.jpg",
      "/images/diskonkey-crystal-4.jpg",
    ],
  },
  {
    id: "classic-usb",
    name: "דיסק און קי קלאסי",
    price: "החל מ-₪37.5 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: `
      <b>דיסק און קי מעוצב, אלגנטי ונוח לשימוש</b><br><br>
      ✔️ זיכרון נייד ממתכת בעיצוב חדשני ובולט<br>
      ✔️ נוח לשימוש יומיומי ועמיד לאורך זמן<br>
      ✔️ צבע לבחירה: <b>שחור, לבן, כחול, אדום, זהב </b><br>
      ✔️ נפח זיכרון לבחירה: <b>4GB / 8GB / 16GB / 32GB / 64GB </b><br>
      ✔️ מתאים להדפסת או חריטת לוגו בהתאמה אישית<br><br>
      <i>מוצר פרקטי, מקצועי ואלגנטי למיתוג חברות ומתנות לעובדים.</i>
      `,
    images: [
      "/images/diskonkey-1.png",
      "/images/diskonkey-2.png",
      "/images/diskonkey-3.jpg",
      "/images/diskonkey-4.png",
      "/images/diskonkey-5.png",
    ],
  },
  {
    id: "mousepad",
    name: "פד לעכבר עם כרית סיליקון",
    price: "החל מ-₪27.5 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: `
      <b>פד לעכבר עם כרית סיליקון – לנוחות מקסימלית לאורך כל היום</b><br><br>
      ✔️ כרית סיליקון ארגונומית לתמיכה בשורש כף היד<br>
      ✔️ מסייע במניעת כאבים ודלקות מפרקים בעבודה ממושכת<br>
      ✔️ עשוי מחומר איכותי עם אחיזה יציבה לשולחן<br>
      ✔️ צבעים לבחירה: <b>כחול, לבן, שחור, אפור וירוק </b><br>
      ✔️ מתאים להדפסת לוגו ממותג לעסק שלך<br>
      ✔️ מידות מוצר: <b>15.5×21.5 ס״מ </b><br><br>
      <i>פתרון נוח ובריא לעובדים במשרד או בבית – מתנה שימושית וממותגת שכל אחד יאהב.</i>
      `,
    images: [
      "/images/mousepad-1.jpg",
      "/images/mousepad-2.png",
      "/images/mousepad-3.jpg",
      "/images/mousepad-4.jpg",
      "/images/mousepad-5.jpg",
      "/images/mousepad-6.jpg",
      "/images/mousepad-7.jpg",
      "/images/mousepad-8.jpg",
      "/images/mousepad-9.jpg",
      "/images/mousepad-10.jpg",
    ],
  },
  {
    id: "thermal-bottle",
    name: "בקבוק תרמי ממותג 540ml",
    price: "החל מ-₪30 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: "בקבוק תרמי איכותי לשמירה על חום וקור. מושלם למיתוג חברה.",
    images: ["/images/product-bottle.jpg"],
  },
  {
    id: "backup-usb",
    name: "זיכרון נייד לגיבוי וסנכרון 3ב-1",
    price: "החל מ-₪30 ליחידה",
    minOrder: "מינימום הזמנה: 50 יחידות",
    description: "כונן נייד חכם עם חיבור USB, Type-C ו-Lightning – אידיאלי לגיבוי מכל מכשיר.",
    images: ["/images/product-USB.jpg"],
  },
];

// ===============================
// Utilities
// ===============================
const $ = (sel, root = document) => root.querySelector(sel);

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function buildWhatsAppHref(name) {
  const msg = `אני מעוניין במוצר ${name}`;
  return `https://wa.me/972538206556?text=${encodeURIComponent(msg)}`;
}
// ===============================
// Crossfade Gallery (autoplay + thumbnails + pause-on-hover)
// ===============================
function initCrossfadeGallery() {
  const container = document.querySelector('.product-gallery-inner');
  const prevBtn   = document.querySelector('.gallery-arrow.left');
  const nextBtn   = document.querySelector('.gallery-arrow.right');
  const thumbs    = Array.from(document.querySelectorAll('.thumbnail-row img'));
  if (!container || !prevBtn || !nextBtn) return;

  const slides = Array.from(container.querySelectorAll('img'));
  if (!slides.length) return;

  let index = 0;
  let autoplay = null;

  function syncUI(i) {
    slides.forEach((img, k)  => img.classList.toggle('active', k === i));
    thumbs.forEach((t,  k)   => t.classList.toggle('active-thumb', k === i));
  }
  function show(i) {
    index = (i + slides.length) % slides.length;
    syncUI(index);
  }

  // arrows
  prevBtn.addEventListener('click', () => show(index + 1));
  nextBtn.addEventListener('click', () => show(index - 1));

  // thumbs
  thumbs.forEach((t, i) => t.addEventListener('click', () => show(i)));

  // autoplay with hover pause
  function start() { if (!autoplay) autoplay = setInterval(() => show(index + 1), 3000); }
  function stop()  { if (autoplay) { clearInterval(autoplay); autoplay = null; } }

  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);

  show(0);
  start();
}

// ===============================
// Page loader (inject images + thumbnails, then init)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const params    = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product   = products.find(p => p.id === productId);

  const shell = document.querySelector('.product-details .container');
  if (!product) { if (shell) shell.innerHTML = "<p style='text-align:center;padding:30px'>המוצר לא נמצא.</p>"; return; }

  // text
document.title = `${product.name} | ליזה/רוס`;

const nameEl = document.getElementById('product-name');
const descEl = document.getElementById('product-description');
const priceEl = document.getElementById('product-price');
const minOrderEl = document.getElementById('product-min-order');

if (nameEl) nameEl.textContent = product.name;
if (descEl) descEl.innerHTML = product.description; // ✅ render HTML like <br>, <b>, etc.
if (priceEl) priceEl.textContent = product.price;
if (minOrderEl) minOrderEl.textContent = product.minOrder;

const wa = document.getElementById('whatsapp-link');
if (wa)
  wa.href = `https://wa.me/972538206556?text=${encodeURIComponent(
    `אני מעוניין במוצר ${product.name}`
  )}`;


  // images
  const track = document.querySelector('.product-gallery-inner');
  track.innerHTML = '';
  (product.images || []).forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${product.name}${product.images.length > 1 ? ` - ${i + 1}` : ''}`;
    if (i === 0) img.classList.add('active');
    track.appendChild(img);
  });

  // thumbnails
  const row = document.querySelector('.thumbnail-row');
  row.innerHTML = '';
  (product.images || []).forEach((src, i) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = `${product.name} thumb ${i + 1}`;
    if (i === 0) t.classList.add('active-thumb');
    row.appendChild(t);
  });

  // init gallery (wires arrows + thumbs + autoplay)
  initCrossfadeGallery();
});

const CALL = "+919919291985";
const WA = "919919291985";
const wa = (msg = "Namaste, mujhe building material ki requirement batani hai.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

const ALL_PRODUCTS = [
  { name: "Cement", img: "cement.jpg", a1: "#ff5d73", a2: "#c9184a", desc: "Top brands ka cement, har construction kaam ke liye.", items: [
    { n: "UltraTech Cement", s: "PPC, 50 kg", d: "UltraTech PPC cement, 50 kg bag. Plaster, brickwork aur RCC ke kaam ke liye.", i: "UT", k: "ultratech" },
    { n: "ACC Cement", s: "50 kg bag", d: "ACC cement, 50 kg bag. Ghar aur building ke har kaam ke liye.", i: "ACC", k: "acc" },
    { n: "Ambuja Cement", s: "Cement", d: "Ambuja cement. Mazboot construction ke liye.", i: "AMB", k: "ambuja" } ] },
  { name: "Morang", img: "morang.jpg", a1: "#ffb703", a2: "#e07a00", desc: "Plaster aur construction ke liye morang.", items: [
    { n: "Plaster Morang (Mahin)", s: "Fine", d: "Plaster aur finishing ke kaam ke liye mahin morang.", i: "M", k: "plaster-morang" },
    { n: "Moti Morang", s: "Coarse", d: "Concrete, slab aur chinai ke kaam ke liye.", i: "M", k: "moti-morang" } ] },
  { name: "Gitti", img: "gitti.jpg", a1: "#2ec4b6", a2: "#0b6e6e", desc: "Concrete aur foundation ke liye gitti.", items: [
    { n: "Gitti 20 mm", s: "20 mm", d: "RCC, slab aur beam ke kaam ke liye.", i: "G", k: "gitti-20" } ] },
  { name: "Chhad / Sariya", img: "sariya.jpg", a1: "#7c8cff", a2: "#3a3fb5", desc: "Mazboot structure ke liye steel rods. Size aur availability ke liye humse puchhein.", items: [
    { n: "TMT Bar (Sariya)", s: "TMT", d: "Ghar, slab aur column ke liye mazboot sariya. Size aur rate ke liye puchhein.", i: "T", k: "tmt" },
    { n: "Binding Wire", s: "Accessories", d: "Sariya bandhne ke liye binding wire.", i: "B", k: "binding-wire" } ] },
  { name: "Hardware Products", img: "hardware.jpg", a1: "#ff9a5a", a2: "#e5532d", desc: "Construction aur ghar ke repair ke hardware items.", items: [
    { n: "Nails & Screws (Keel / Pech)", s: "Fasteners", d: "Lakdi aur diwar ke kaam ke liye alag-alag size.", i: "N", k: "nails-screws" },
    { n: "Nuts & Bolts", s: "Fasteners", d: "Furniture, gate aur fitting ke liye.", i: "N", k: "nuts-bolts" },
    { n: "Hammer (Hathoda)", s: "Hand Tool", d: "Thokne aur todne ke kaam ke liye.", i: "H", k: "hammer" },
    { n: "Pliers & Spanner (Plas / Pana)", s: "Hand Tool", d: "Kasne, kaatne aur pakadne ke kaam ke liye.", i: "P", k: "pliers-spanner" },
    { n: "Screwdriver Set", s: "Tool Set", d: "Alag-alag size ke screwdriver.", i: "S", k: "screwdriver" },
    { n: "Door Locks & Latches (Tala / Kundi)", s: "Security", d: "Darwaze aur gate ki suraksha ke liye.", i: "L", k: "door-lock" },
    { n: "Hinges & Handles (Kabja)", s: "Door Fitting", d: "Darwaze, khidki aur almari ke liye.", i: "H", k: "hinges" },
    { n: "Taps & Pipe Fittings (Nal / Tonti)", s: "Plumbing", d: "Bathroom aur kitchen ki plumbing ke liye.", i: "T", k: "taps-fittings" },
    { n: "Paint Brush & Roller", s: "Painting", d: "Rang-rogan aur putty ke kaam ke liye.", i: "P", k: "paint-brush" },
    { n: "Measuring Tape & Level", s: "Measuring", d: "Naap-tol aur seedhai check karne ke liye.", i: "M", k: "measuring-tape" } ] }
];

const PIMG = (typeof PRODUCT_IMAGES !== "undefined" && PRODUCT_IMAGES) ? PRODUCT_IMAGES : {};
const PRODUCTS = ALL_PRODUCTS
  .map(p => {
    const items = p.items.filter(i => PIMG[i.k]);
    return Object.assign({}, p, { items: items, img: items.length ? "products/" + PIMG[items[0].k] : p.img });
  })
  .filter(p => p.items.length);
const WAVE = `<svg class="wave bottom" viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,60 C240,120 480,0 720,50 C960,100 1200,20 1440,70 L1440,120 L0,120Z" fill="#fff8ec"/></svg>`;
const WAVE_TOP = WAVE.replace("wave bottom", "wave top");

const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const NAV = [["Home","index.html"],["About","about.html"],["Products","products.html"],["Gallery","gallery.html"],["Contact","contact.html"]];
const catLink = n => `products.html?cat=${encodeURIComponent(n)}`;

function header() {
  return `<header class="header"><div class="container nav">
    <a href="index.html" class="logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a>
    <div class="nav-right">
      <nav class="nav-links" id="navLinks">${NAV.map(([n,h]) => `<a href="${h}" class="${page===h?"active":""}">${n}</a>`).join("")}</nav>
      <a class="btn btn-yellow btn-sm" href="tel:${CALL}">Call Now</a>
      <a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>
    </div></div></header>`;
}

function ctaBanner() {
  return `<div class="container"><div class="cta-banner">
    <h2>Ready to Build?</h2>
    <p>Apni requirement batayein &mdash; hum jaldi sampark karenge.</p>
    <div class="btns">
      <a class="btn btn-yellow" href="tel:${CALL}">Call +91 9919291985</a>
      <a class="btn btn-green" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <a class="btn btn-dark" href="contact.html">Send Enquiry</a>
    </div></div></div>`;
}

function footer() {
  return `<footer class="footer"><div class="container">
    <div class="footer-grid">
      <div><a href="index.html" class="f-logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a><p>Building Material &amp; Hardware<br>Dihwa Chauraha, Barahua, Basti,<br>Uttar Pradesh, India</p><p class="phone"><a href="tel:+919919291985">Call: +91 9919291985</a></p><p class="phone"><a href="mailto:dkchaudharybuildingmaterial@gmail.com">dkchaudharybuildingmaterial@gmail.com</a></p><p class="phone"><a href="https://www.instagram.com/dkchaudharybuildingmaterial" target="_blank" rel="noopener">Instagram: @dkchaudharybuildingmaterial</a></p></div>
      <div><h4>Pages</h4><ul>${NAV.map(([n,h])=>`<li><a href="${h}">${n}</a></li>`).join("")}</ul></div>
      <div><h4>Products</h4><ul>${PRODUCTS.map(p=>`<li><a href="${catLink(p.name)}">${p.name.replace(" Products","")}</a></li>`).join("")}</ul></div>
      <div><h4>Quick Enquiry</h4><p>Call ya WhatsApp par apni requirement batayein.</p><br><a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp Us</a></div>
    </div>
    <div class="copy">&copy; 2026 DK Chaudhary Building Material &amp; Hardware. All rights reserved.</div>
  </div></footer>`;
}

const img = (f, alt) => `<img src="images/${f}" alt="${alt}" loading="lazy" onerror="fb(this)">`;

const pimg = k => PIMG[k] ? ('<img class="pimg" src="images/products/' + PIMG[k] + '" alt="" loading="lazy" onload="this.closest(\'.var-card\').classList.add(\'has-img\')">') : "";
function pfb(i){var n=+i.dataset.t||0,x=["png","webp","jpeg"];if(n>=x.length){i.remove();return;}i.dataset.t=n+1;i.src=i.src.replace(/\.[a-z]+$/i,"."+x[n]);}

function catCard(p, idx, asButton) {
  const chips = p.items.slice(0,3).map(i=>`<span>${i.n}</span>`).join("") + (p.items.length>3 ? `<span>+${p.items.length-3} aur</span>` : "");
  const btn = asButton
    ? `<button class="btn btn-red btn-sm" data-cat="${p.name}">View Types &rarr;</button>`
    : `<a class="btn btn-red btn-sm" href="${catLink(p.name)}">View Types &rarr;</a>`;
  return `<article class="pc" style="--a1:${p.a1};--a2:${p.a2}">
    <div class="pc-top"><span class="pc-num">0${idx+1}</span><span class="pc-count">${p.items.length} Types</span>
      <div class="circle">${img(p.img,p.name)}</div></div>
    <div class="pc-body">
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div class="mini-chips">${chips}</div>
      <div class="pc-actions">${btn}
        <a class="pc-wa" target="_blank" rel="noopener" aria-label="WhatsApp" href="${wa("Namaste, mujhe "+p.name+" ki jaankari chahiye.")}">${WA_ICON}</a>
      </div>
    </div></article>`;
}

function renderCategories(el) {
  el.innerHTML = PRODUCTS.map(p => `<a class="cat" href="${catLink(p.name)}"><div class="circle">${img(p.img,p.name)}</div>${p.name}</a>`).join("");
}
function renderProducts(el) {
  el.innerHTML = PRODUCTS.map((p,i) => catCard(p, i, false)).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  set("site-header", header());
  set("site-cta", ctaBanner());
  set("site-footer", footer());
  document.querySelectorAll("[data-wave]").forEach(e => e.insertAdjacentHTML("beforeend", e.dataset.wave==="both" ? WAVE_TOP+WAVE : WAVE));
  const c = document.getElementById("categories"); if (c) renderCategories(c);
  const p = document.getElementById("product-grid"); if (p) renderProducts(p);
  const st = document.getElementById("statTypes"); if (st) st.textContent = PRODUCTS.reduce((s,x)=>s+x.items.length,0);
  const btn = document.getElementById("menuBtn");
  if (btn) btn.onclick = () => document.getElementById("navLinks").classList.toggle("open");
});

/* ---- header with Call / WhatsApp / Mail icons (mobile) ---- */
const EMAIL = "dkchaudharybuildingmaterial@gmail.com"; // yahan apna email likho, jaise "dkchaudhary@gmail.com" (khali = mail icon nahi dikhega)
const PHONE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
const MAIL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>';
function header() {
  const mail = EMAIL ? `<a class="hc hc-mail" href="mailto:${EMAIL}?subject=Enquiry" aria-label="Email">${MAIL_ICON}</a>` : "";
  return `<header class="header"><div class="container nav">
    <a href="index.html" class="logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a>
    <div class="nav-right">
      <nav class="nav-links" id="navLinks">${NAV.map(([n,h]) => `<a href="${h}" class="${page===h?"active":""}">${n}</a>`).join("")}</nav>
      <a class="btn btn-yellow btn-sm" href="tel:${CALL}">Call Now</a>
      <a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <div class="hdr-contact">
        <a class="hc hc-call" href="tel:${CALL}" aria-label="Call">${PHONE_ICON}</a>
        <a class="hc hc-wa" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>
        ${mail}
      </div>
      <button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>
    </div></div></header>`;
}

/* dynamic counts */
document.addEventListener("DOMContentLoaded", () => {
  const n = PRODUCTS.length;
  const pl = document.querySelector(".pills span");
  if (pl) pl.textContent = n + " Product Categories";
  document.querySelectorAll(".stat").forEach(s => {
    const b = s.querySelector("b"), l = s.querySelector("span");
    if (b && l && /Main Categories/.test(l.textContent)) b.textContent = n;
  });
});
/* ==== DKC_FOOTER_WA_START ==== */
(function () {
  var NUM = "919919291985";
  var TEL = "+919919291985";
  var MAIL = "dkchaudharybuildingmaterial@gmail.com";
  var IG_USER = "dkchaudharybuildingmaterial";
  var MAPS = "https://www.google.com/maps/search/?api=1&query=Dihwa+Chauraha+Barahua+Basti";

  var I_PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
  var I_PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
  var I_MAIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>';
  var I_IG = '<svg class="st" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
  var I_SEND = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>';

  /* ---------- footer ---------- */
  function row(href, icon, text, ext) {
    return '<li><a class="ft-row" href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><span class="ft-ic">' + icon + '</span><span>' + text + '</span></a></li>';
  }
  function footerHTML() {
    var pages = [["Home", "index.html"], ["About", "about.html"], ["Products", "products.html"], ["Gallery", "gallery.html"], ["Contact", "contact.html"]]
      .map(function (p) { return '<li><a href="' + p[1] + '">' + p[0] + '</a></li>'; }).join("");
    var names = (typeof PRODUCTS !== "undefined" && PRODUCTS.length) ? PRODUCTS.map(function (p) { return p.name; }) : ["Cement", "Morang", "Gitti", "Chhad / Sariya", "Hardware Products"];
    var prods = names.map(function (n) {
      return '<li><a href="products.html?cat=' + encodeURIComponent(n) + '">' + n.replace(" Products", "") + '</a></li>';
    }).join("");
    var waIcon = (typeof WA_ICON !== "undefined") ? WA_ICON : "";
    return '<footer class="footer ft"><div class="container">' +
      '<div class="ft-grid">' +
        '<div class="ft-brand">' +
          '<a href="index.html" class="ft-logo" aria-label="DK Chaudhary"><img src="images/logo.png" alt="DK Chaudhary Building Material and Hardware" onerror="fb(this)"></a>' +
          '<p class="ft-about">Cement, Morang, Gitti, Sariya aur Hardware &mdash; ghar aur construction ki har zaroorat ek hi jagah.</p>' +
          '<a class="btn btn-green btn-sm ft-wa" href="https://wa.me/' + NUM + '" target="_blank" rel="noopener">' + waIcon + 'WhatsApp Us</a>' +
        '</div>' +
        '<nav class="ft-col"><h4>Pages</h4><ul>' + pages + '</ul></nav>' +
        '<nav class="ft-col"><h4>Products</h4><ul>' + prods + '</ul></nav>' +
        '<div class="ft-col ft-contact"><h4>Contact</h4><ul class="ft-ci">' +
          row(MAPS, I_PIN, 'Dihwa Chauraha, Barahua, Basti,<br>Uttar Pradesh, India', true) +
          row('tel:' + TEL, I_PHONE, '+91 99192 91985') +
          row('mailto:' + MAIL + '?subject=Enquiry', I_MAIL, MAIL) +
          row('https://www.instagram.com/' + IG_USER + '/', I_IG, '@' + IG_USER, true) +
        '</ul></div>' +
      '</div>' +
      '<div class="ft-bottom"><span>&copy; 2026 DK Chaudhary Building Material &amp; Hardware. All rights reserved.</span><span>Barahua &middot; Basti &middot; Uttar Pradesh</span></div>' +
    '</div></footer>';
  }
  document.addEventListener("DOMContentLoaded", function () {
    var html = footerHTML();
    var slot = document.getElementById("site-footer");
    if (slot) { slot.innerHTML = html; }
    else { var old = document.querySelector("footer"); if (old) old.outerHTML = html; }
  });

  /* ---------- whatsapp chat popup ---------- */
  var box = null, field = null;
  function send() {
    var t = field.value.trim() || "Namaste Ji, mujhe building material ki jaankari chahiye.";
    window.open("https://wa.me/" + NUM + "?text=" + encodeURIComponent(t), "_blank", "noopener");
    field.value = "";
    closePop();
  }
  function closePop() { if (box) box.classList.remove("open"); }
  function build() {
    var d = new Date(), h = d.getHours(), m = d.getMinutes();
    var tm = (h % 12 || 12) + ":" + (m < 10 ? "0" : "") + m + " " + (h >= 12 ? "pm" : "am");
    box = document.createElement("div");
    box.className = "wap";
    box.innerHTML =
      '<div class="wap-card" role="dialog" aria-label="WhatsApp chat">' +
        '<div class="wap-head"><div class="wap-av"><img src="images/logo.png" alt="" onerror="fb(this)"></div>' +
          '<div><b>DK Chaudhary Building Material</b><small>Online</small></div>' +
          '<button class="wap-x" type="button" aria-label="Close">&times;</button></div>' +
        '<div class="wap-body"><div class="wap-msg">&#2344;&#2350;&#2360;&#2381;&#2340;&#2375; &#2332;&#2368; &#128591;<br>&#2310;&#2346;&#2325;&#2366; &#2360;&#2381;&#2357;&#2366;&#2327;&#2340; &#2361;&#2376; &#2330;&#2380;&#2343;&#2352;&#2368; &#2348;&#2367;&#2354;&#2381;&#2337;&#2367;&#2306;&#2327; &#2350;&#2335;&#2375;&#2352;&#2367;&#2351;&#2354;&#2381;&#2360; &#2350;&#2375;&#2306;&#128522;<br>&#2361;&#2350; &#2310;&#2346;&#2325;&#2368; &#2325;&#2381;&#2351;&#2366; &#2360;&#2361;&#2366;&#2351;&#2340;&#2366; &#2325;&#2352; &#2360;&#2325;&#2340;&#2375; &#2361;&#2376;&#2306;?<i>' + tm + '</i></div></div>' +
        '<form class="wap-form"><input type="text" placeholder="Write something..." autocomplete="off" aria-label="Message">' +
          '<button class="wap-send" type="submit" aria-label="Send">' + I_SEND + '</button></form>' +
      '</div>';
    document.body.appendChild(box);
    field = box.querySelector("input");
    box.querySelector(".wap-x").onclick = closePop;
    box.addEventListener("click", function (e) { if (e.target === box) closePop(); });
    box.querySelector("form").addEventListener("submit", function (e) { e.preventDefault(); send(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePop(); });
  }
  function openPop() {
    if (!box) build();
    box.classList.add("open");
    setTimeout(function () { field.focus(); }, 120);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="https://wa.me/"]') : null;
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var q = a.getAttribute("href").split("?text=")[1] || "";
    var txt = "";
    try { txt = decodeURIComponent(q); } catch (x) {}
    if (txt.indexOf("ki jaankari") > -1) return;
    e.preventDefault();
    openPop();
  });
})();
/* ==== DKC_FOOTER_WA_END ==== */
/* ==== DKC_WAP_VV_START ==== */
(function () {
  var vv = window.visualViewport;
  function fit() {
    var card = document.querySelector(".wap.open .wap-card");
    if (!card) return;
    if (!vv || window.innerWidth > 600) { card.style.bottom = ""; card.style.maxHeight = ""; return; }
    var gap = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
    card.style.bottom = gap + "px";
    card.style.maxHeight = Math.max(240, vv.height - 12) + "px";
  }
  if (vv) { vv.addEventListener("resize", fit); vv.addEventListener("scroll", fit); }
  window.addEventListener("resize", fit);
  document.addEventListener("focusin", function () { setTimeout(fit, 250); });
  document.addEventListener("click", function () { setTimeout(fit, 60); });
})();
/* ==== DKC_WAP_VV_END ==== */
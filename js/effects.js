(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.addEventListener("DOMContentLoaded", () => {

    // scroll progress + header shadow
    const bar = document.createElement("div");
    bar.id = "progress";
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1);
      bar.style.width = (p * 100) + "%";
      const hd = $(".header");
      if (hd) hd.classList.toggle("scrolled", h.scrollTop > 10);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // scroll reveal
    const sel = ".section-head,.cat,.cta-card,.product-card,.step,.why-card,.value-card,.chip,.g-item,.info-card,.form-card,.detail-card,.more-card,.about-text,.filters,.search,.side-card,.help-card,.cta-banner";
    if (!reduce && "IntersectionObserver" in window) {
      document.documentElement.classList.add("js");
      const els = $$(sel);
      els.forEach(el => {
        el.classList.add("reveal");
        const idx = [...el.parentElement.children].indexOf(el);
        el.style.transitionDelay = Math.min(idx, 8) * 70 + "ms";
      });
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            setTimeout(() => { en.target.style.transitionDelay = ""; }, 1100);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(el => io.observe(el));
    }

    // floating shapes + 3D cube in hero sections
    $$(".hero,.page-hero").forEach(sec => {
      ["sq", "ci", "pl", "sq", "ci", "pl", "sq"].forEach((t, i) => {
        const d = document.createElement("span");
        d.className = "fs " + t;
        d.style.cssText = "left:" + (8 + (i * 13) % 80) + "%;top:" + (10 + (i * 23) % 70) + "%;--t:" + (6 + i) + "s;--d:" + (i * 0.6) + "s;--z:" + (14 + i * 4) + "px";
        sec.appendChild(d);
      });
      sec.insertAdjacentHTML("beforeend", '<div class="cube-wrap"><div class="cube"><b>DK</b><b>DK</b><b>DK</b><b>DK</b><b>DK</b><b>DK</b></div></div>');
    });

    // hero 3D mouse parallax
    if (fine && !reduce) {
      $$(".hero-art").forEach(a => {
        const s = a.closest("section");
        if (!s) return;
        s.addEventListener("mousemove", e => {
          const r = s.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          a.style.transform = "perspective(900px) rotateY(" + (x * 14) + "deg) rotateX(" + (-y * 14) + "deg)";
          $$(".fs", s).forEach((f, i) => {
            f.style.transform = "translate(" + (x * (i % 3 + 1) * 18) + "px," + (y * (i % 3 + 1) * 18) + "px)";
          });
        });
        s.addEventListener("mouseleave", () => { a.style.transform = ""; });
      });
    }

    // marquee strip (home only)
    const hero = $(".hero");
    if (hero) {
      const words = ["Cement", "Morang", "Gitti", "Chhad / Sariya", "Hardware", "Barahua \u00b7 Basti"];
      const row = words.map(w => "<span>" + w + "</span><i>\u2726</i>").join("");
      const m = document.createElement("div");
      m.className = "marquee";
      m.innerHTML = '<div class="track">' + row + row + row + row + "</div>";
      hero.after(m);
    }

    // category float stagger
    $$(".cat").forEach((c, i) => c.style.setProperty("--i", i));

    // 3D tilt on cards (event delegation)
    const TILT = ".product-card,.value-card,.why-card,.info-card,.cta-card,.detail-card,.more-card,.side-card,.help-card,.g-item:not(.g-empty)";
    let cur = null;
    if (fine && !reduce) {
      document.addEventListener("mousemove", e => {
        const el = e.target.closest ? e.target.closest(TILT) : null;
        if (cur && cur !== el) { cur.style.transform = ""; cur = null; }
        if (!el) return;
        cur = el;
        el.classList.add("tilt");
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(800px) rotateX(" + ((0.5 - y) * 14) + "deg) rotateY(" + ((x - 0.5) * 14) + "deg) scale(1.03)";
        el.style.setProperty("--gx", (x * 100) + "%");
        el.style.setProperty("--gy", (y * 100) + "%");
      });
      document.addEventListener("mouseleave", () => { if (cur) { cur.style.transform = ""; cur = null; } });
    }

    // floating WhatsApp + Call buttons
    const fab = document.createElement("div");
    fab.className = "fabs";
    fab.innerHTML =
      '<a class="fab fab-wa" href="' + wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></a>' +
      '<a class="fab fab-call" href="tel:' + CALL + '" aria-label="Call"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></a>';
    document.body.appendChild(fab);
  });
})();
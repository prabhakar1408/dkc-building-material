(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.addEventListener("DOMContentLoaded", () => {
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

    const sel = ".section-head,.cat,.cta-card,.pc,.product-card,.step,.why-card,.value-card,.chip,.g-item,.info-card,.form-card,.detail-card,.more-card,.about-text,.filters,.search,.side-card,.help-card,.cta-banner,.cat-block";
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
      }, { threshold: 0.08 });
      els.forEach(el => io.observe(el));
    }

    $$(".hero,.page-hero").forEach(sec => {
      ["sq", "ci", "pl", "sq", "ci", "pl", "sq"].forEach((t, i) => {
        const d = document.createElement("span");
        d.className = "fs " + t;
        d.style.cssText = "left:" + (8 + (i * 13) % 80) + "%;top:" + (10 + (i * 23) % 70) + "%;--t:" + (6 + i) + "s;--d:" + (i * 0.6) + "s;--z:" + (14 + i * 4) + "px";
        sec.appendChild(d);
      });
      sec.insertAdjacentHTML("beforeend", '<div class="cube-wrap"><div class="cube"><b>DK</b><b>DK</b><b>DK</b><b>DK</b><b>DK</b><b>DK</b></div></div>');
    });

    if (fine && !reduce) {
      $$(".hero-art").forEach(a => {
        const s = a.closest("section");
        if (!s) return;
        s.addEventListener("mousemove", e => {
          const r = s.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          a.style.transform = "perspective(900px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
          $$(".fs", s).forEach((f, i) => {
            f.style.transform = "translate(" + (x * (i % 3 + 1) * 18) + "px," + (y * (i % 3 + 1) * 18) + "px)";
          });
        });
        s.addEventListener("mouseleave", () => { a.style.transform = ""; });
      });
    }

    const hero = $(".hero");
    if (hero) {
      const words = ["Cement", "Morang", "Gitti", "Chhad / Sariya", "Hardware", "Barahua \u00b7 Basti"];
      const row = words.map(w => "<span>" + w + "</span><i>\u2726</i>").join("");
      const m = document.createElement("div");
      m.className = "marquee";
      m.innerHTML = '<div class="track">' + row + row + row + row + "</div>";
      hero.after(m);
    }

    $$(".cat").forEach((c, i) => c.style.setProperty("--i", i));

    const TILT = ".pc,.product-card,.value-card,.why-card,.info-card,.cta-card,.detail-card,.more-card,.side-card,.help-card,.var-card,.g-item:not(.g-empty)";
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
        el.style.transform = "perspective(800px) rotateX(" + ((0.5 - y) * 5) + "deg) rotateY(" + ((x - 0.5) * 5) + "deg) scale(1.015)";
        el.style.setProperty("--gx", (x * 100) + "%");
        el.style.setProperty("--gy", (y * 100) + "%");
      });
      document.addEventListener("mouseleave", () => { if (cur) { cur.style.transform = ""; cur = null; } });
    }

    const WAI = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
    const PHI = '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
    const fab = document.createElement("div");
    fab.className = "fabs";
    fab.innerHTML =
      '<a class="fab fab-call" href="tel:' + CALL + '" aria-label="Call Now">' + PHI + '<span>Call Now</span></a>' +
      '<a class="fab fab-wa" href="' + wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + WAI + '<span>WhatsApp</span></a>';
    /* floating contact buttons removed */
  });
})();
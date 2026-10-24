/* KAYN — hash router, rendering and global interactions. */
(function (K) {
  var main = document.getElementById("main");
  var announcer = document.getElementById("announcer");

  function resetAvailability() {
    var panel = document.getElementById("avail-panel");
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
  }

  function route() {
    K.pdpSlug = null;
    var h = (location.hash || "#/").replace(/^#/, "");
    var parts = h.split("/").filter(Boolean);
    var P = K.pages;
    if (!parts.length) return P.home();
    if (parts[0] === "collection") {
      if (!parts[1]) return P.collection();
      K.pdpSlug = parts[1];
      return P.product(parts[1]);
    }
    if (parts[0] === "story") return P.story();
    if (parts[0] === "track") return P.track();
    if (parts[0] === "privacy" || parts[0] === "terms") return P.legal(parts[0]);
    return P.notFound();
  }

  function setMeta(page) {
    document.title = page.title;
    var set = function (sel, attr, val) { var el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', "content", page.desc);
    set('meta[property="og:title"]', "content", page.title);
    set('meta[property="og:description"]', "content", page.desc);
  }

  function markActiveNav() {
    var h = location.hash || "#/";
    document.querySelectorAll("[data-route]").forEach(function (a) {
      var on = h.indexOf(a.getAttribute("data-route")) === 0;
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  function renderChrome() {
    document.getElementById("header").innerHTML = K.header();
    document.getElementById("footer").innerHTML = K.footer();
    document.querySelector(".skip-link").textContent = K.t("skip");
  }

  /* Scroll-reveal: mark blocks with .reveal (staggered inside grids) and show them as they enter the viewport. */
  var REVEAL = ".section__head, .card, .review, .insta__tile, .statement__inner > *, .detail__inner > *, .wait__inner > *, " +
    ".story > *, .story__block, .gallery, .pdp__info > *, .also, .crumbs";
  function revealNow(el) {
    el.classList.add("is-in");
    if (io) io.unobserve(el);
    setTimeout(function () {                                // entrance done: hand the element back to its normal styles
      el.classList.remove("reveal", "is-in"); el.style.removeProperty("--d");
    }, 1500);
  }
  K.revealNow = revealNow;
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      // reveal when visible, or when already scrolled past (e.g. a jump scroll) so nothing stays hidden
      if (!en.isIntersecting && en.boundingClientRect.top >= 0) return;
      revealNow(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;

  function initReveal() {
    if (!io) return;
    document.documentElement.classList.add("js-anim");
    var seen = new Map();
    main.querySelectorAll(REVEAL).forEach(function (el) {
      if (el.closest(".hero")) return;                       // hero has its own entrance animation
      var parent = el.parentElement, n = seen.get(parent) || 0;
      seen.set(parent, n + 1);
      el.style.setProperty("--d", Math.min(n, 5) * 0.09 + "s"); // stagger siblings
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  function render(opts) {
    opts = opts || {};
    var page = route();
    main.innerHTML = page.html;
    initReveal();                                           // mark reveal targets before any style flush, so they never flash visible
    main.classList.remove("page-in"); void main.offsetWidth; main.classList.add("page-in");
    setMeta(page);
    markActiveNav();
    if (opts.navigated) {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
      announcer.textContent = page.title;
    }
  }

  function setMenu(open) {
    var btn = document.querySelector(".menu-btn"), nav = document.getElementById("mobile-nav");
    if (!btn || !nav) return;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", K.t(open ? "nav.close" : "nav.menu"));
    nav.hidden = !open;
  }

  var actions = {
    lang: function (el) {
      K.setLang(el.getAttribute("data-lang"));
      renderChrome(); render();
      announcer.textContent = K.langs[K.lang].name;
      var again = document.querySelector('.header [data-lang="' + K.lang + '"]');
      if (again) again.focus();
    },
    menu: function (el) { setMenu(el.getAttribute("aria-expanded") !== "true"); },
    color: function (el) {
      var id = el.getAttribute("data-color"), kind = el.getAttribute("data-group") || "color";
      el.closest(".colors__list").querySelectorAll(".colors__btn").forEach(function (b) { b.setAttribute("aria-pressed", String(b === el)); });
      if (kind === "color") {
        document.querySelectorAll(".gallery__set").forEach(function (s) {
          var sid = s.getAttribute("data-color");
          s.hidden = sid !== "all" && sid !== id;      // "all" = gallery shared by every colour
        });
      }
      var p = K.getProduct(K.pdpSlug);
      var picked = function (group, list) {
        var b = document.querySelector('.colors__btn[data-group="' + group + '"][aria-pressed="true"]');
        return b ? list.filter(function (x) { return x.id === b.getAttribute("data-color"); })[0] : null;
      };
      var cSel = picked("color", p.colors), sSel = p.stones ? picked("stone", p.stones) : null;
      var shared = document.querySelector('.gallery__set[data-color="all"]');
      // Photo for the current choice: the stone's photo (or its per-metal photo), else the colour/metal's.
      var show = cSel ? cSel.show : null;
      if (sSel && sSel.show != null) {
        show = typeof sSel.show === "object" ? (sSel.show[cSel.id] != null ? sSel.show[cSel.id] : show) : sSel.show;
      }
      if (shared && show != null) {                  // jump to the photo that shows this choice
        var thumb = shared.querySelectorAll(".gallery__thumb")[show];
        if (thumb) thumb.click();
      }
      resetAvailability();                       // a new colour needs a new check
    },
    check: function (el) {
      var info = el.closest(".pdp__info"), p = K.getProduct(K.pdpSlug);
      // Selected options (colour/metal and, if the product has them, stone) form one choice.
      var chosen = [].slice.call(info.querySelectorAll(".colors__btn[aria-pressed=\"true\"]")).map(function (b) {
        var list = b.getAttribute("data-group") === "stone" ? p.stones : p.colors;
        return list.filter(function (c) { return c.id === b.getAttribute("data-color"); })[0];
      });
      var color = { id: chosen.map(function (c) { return c.id; }).join("+"), name: {} };
      Object.keys(K.langs).forEach(function (code) {
        color.name[code] = chosen.map(function (c) { return c.name[code] || c.name.en; }).join(" · ");
      });
      var panel = document.getElementById("avail-panel"), label = el.textContent;
      el.disabled = true; el.setAttribute("aria-busy", "true"); el.textContent = K.t("avail.checking");
      panel.hidden = true;
      // DEMO ONLY: no stock service exists, so every check resolves to "currently unavailable".
      setTimeout(function () {
        el.disabled = false; el.removeAttribute("aria-busy"); el.textContent = label;
        panel.innerHTML = K.availabilityResultHtml(p, color);
        panel.hidden = false;
        panel.focus();
      }, 900);
    },
    gallery: function (el) {
      var i = el.getAttribute("data-index"), set = el.closest(".gallery__set");
      set.querySelectorAll(".gallery__slide").forEach(function (s) { s.hidden = s.getAttribute("data-slide") !== i; });
      set.querySelectorAll(".gallery__thumb").forEach(function (b) { b.setAttribute("aria-pressed", String(b === el)); });
    }
  };

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (el && actions[el.getAttribute("data-action")]) { actions[el.getAttribute("data-action")](el); return; }
    // mobile menu: close after choosing a link
    if (e.target.closest("#mobile-nav a")) setMenu(false);
  });

  document.addEventListener("submit", function (e) {
    var form = e.target.closest("[data-notify-form]");
    if (form) { e.preventDefault(); K.handleNotifySubmit(form); return; }
    var trk = e.target.closest("[data-track-form]");
    if (trk) { e.preventDefault(); K.handleTrackSubmit(trk); }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  window.addEventListener("hashchange", function () {
    setMenu(false);
    render({ navigated: true });
  });

  K.initLang();
  renderChrome();
  render();
})(window.KAYN);

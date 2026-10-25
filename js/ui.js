/* KAYN — reusable UI components (return HTML strings). */
window.KAYN = window.KAYN || {};
(function (K) {
  var t = function (k) { return K.t(k); };

  K.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var esc = K.esc;

  /* Region of the supplied brand sheet, cropped in CSS (no image processing needed). */
  K.crop = function (key, alt, opts) {
    return K.cropRaw(K.sheet.src, K.sheet.srcW, K.crops[key], alt, opts);
  };

  /* Any image + pixel rectangle (x, y, w, h) of that image. */
  K.cropRaw = function (src, srcW, c, alt, opts) {
    opts = opts || {};
    var s = { src: src, srcW: srcW };
    var role = alt ? ' role="img" aria-label="' + esc(alt) + '"' : ' aria-hidden="true"';
    return '<span class="crop ' + (opts.cls || "") + '" style="aspect-ratio:' + c.w + "/" + c.h + '"' + role + ">" +
      '<img src="' + s.src + '" alt="" ' + (opts.eager ? "" : 'loading="lazy" ') + 'decoding="async" ' +
      'style="width:' + (100 * s.srcW / c.w) + "%;left:" + (-100 * c.x / c.w) + "%;top:" + (-100 * c.y / c.h) + '%"></span>';
  };

  /* Official wordmark. variant: "light" (black on light bg) | "dark" (off-white on dark bg). */
  K.logo = function (variant, width) {
    return '<span class="logo logo--' + variant + '" style="--logo-w:' + width + 'px">' + K.crop("logo", "KAYN", { eager: true }) + "</span>";
  };

  K.placeholderSlot = function (label, cls) {
    return '<div class="slot ' + (cls || "") + '" role="img" aria-label="' + esc(label) + '"><span>' + esc(label) + "</span></div>";
  };

  /* A product image by index, or an editable placeholder slot when none is supplied. */
  /* Renders one image spec: { crop } (brand sheet region), { src, box, srcW } (region of a file)
     or { src } (whole photo, cover-fitted in a 4:5 frame; optional pos = object-position). */
  K.imageHtml = function (img, alt, opts) {
    opts = opts || {};
    if (img.crop) return K.crop(img.crop, alt, opts);
    if (img.box && img.frame) return '<span class="crop crop--frame" role="img" aria-label="' + esc(alt) + '">' + K.cropRaw(img.src, img.srcW, img.box, "", opts) + "</span>";
    if (img.box) return K.cropRaw(img.src, img.srcW, img.box, alt, opts);
    return '<span class="crop crop--cover" role="img" aria-label="' + esc(alt) + '"><img src="' + esc(img.src) + '" alt="" ' +
      (opts.eager ? "" : 'loading="lazy" ') + 'decoding="async" style="object-position:' + esc(img.pos || "50% 50%") + '"></span>';
  };

  K.productImage = function (p, i, opts, colorIdx) {
    var color = p.colors[colorIdx || 0];
    var img = (p.gallery || color.images)[i == null ? 0 : i];
    if (!img) return K.placeholderSlot(K.L(p.name) + " — " + K.L(color.name) + ". " + t("pd.colourImageTbc"), "slot--portrait");
    return K.imageHtml(img, K.L(img.alt), opts);
  };

  K.priceHtml = function (p, withNote) {
    return '<span class="price">' + esc(K.formatPrice(p.priceMAD)) + "</span>" +
      (withNote && p.pricePlaceholder ? ' <span class="price-note">· ' + esc(t("price.placeholder")) + "</span>" : "");
  };

  K.productCard = function (p) {
    var href = "#/collection/" + p.slug;
    return '<article class="card">' +
      '<a class="card__media" href="' + href + '" aria-label="' + esc(K.L(p.name)) + '">' + K.productImage(p, 0) + "</a>" +
      '<div class="card__body">' +
      '<div class="card__row"><h3 class="card__title"><a href="' + href + '">' + esc(K.L(p.name)) + "</a></h3></div>" +
      '<p class="card__text">' + esc(K.L(p.card || p.short)) + "</p>" +
      '<span class="card__swatches" aria-hidden="true">' + p.colors.map(function (c) { return '<span class="swatch swatch--sm" style="background:' + c.hex + '"></span>'; }).join("") + "</span>" +
      '<a class="btn btn--outline btn--block" href="' + href + '">' + esc(t("card.view")) + '<span class="sr-only"> ' + esc(K.L(p.name)) + "</span></a>" +
      "</div></article>";
  };

  K.langSelector = function (cls) {
    return '<div class="lang ' + (cls || "") + '" role="group" aria-label="' + esc(t("nav.language")) + '">' +
      Object.keys(K.langs).map(function (code) {
        var l = K.langs[code];
        return '<button type="button" class="lang__btn" data-action="lang" data-lang="' + code + '" lang="' + code + '" aria-pressed="' + (code === K.lang) + '" title="' + esc(l.name) + '">' +
          '<span aria-hidden="true">' + l.label + '</span><span class="sr-only">' + esc(l.name) + "</span></button>";
      }).join("") + "</div>";
  };

  K.header = function () {
    var links = [["#/collection", "nav.collection"], ["#/story", "nav.story"], ["#/track", "nav.track"]];
    var nav = links.map(function (l) { return '<a class="nav__link" href="' + l[0] + '" data-route="' + l[0] + '">' + esc(t(l[1])) + "</a>"; }).join("");
    return '<header class="header"><div class="header__inner">' +
      '<a class="header__logo" href="#/" aria-label="KAYN">' + K.logo("light", 112) + "</a>" +
      '<nav class="nav nav--desktop" aria-label="' + esc(t("nav.main")) + '">' + nav + "</nav>" +
      '<div class="header__tools">' + K.langSelector() +
      '<button type="button" class="menu-btn" data-action="menu" aria-expanded="false" aria-controls="mobile-nav" aria-label="' + esc(t("nav.menu")) + '"><span class="menu-btn__bars" aria-hidden="true"></span></button>' +
      "</div></div>" +
      '<nav id="mobile-nav" class="nav nav--mobile" aria-label="' + esc(t("nav.main")) + '" hidden>' + nav + "</nav></header>";
  };

  K.footer = function () {
    var s = K.site;
    return '<footer class="footer"><div class="wrap footer__grid">' +
      '<div class="footer__brand">' + K.logo("dark", 150) + '<p class="tagline">' + esc(t("brandTagline")) + "</p>" +
      '<a class="social" href="' + esc(s.instagramUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(t("footer.instagram")) + '">' +
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg></a></div>' +
      '<nav class="footer__nav" aria-label="' + esc(t("footer.nav")) + '">' +
      '<a href="#/collection">' + esc(t("nav.collection")) + "</a>" +
      '<a href="#/story">' + esc(t("nav.story")) + "</a>" +
      '<a href="#/track">' + esc(t("nav.track")) + "</a></nav>" +
      '<div class="footer__legal"><a href="#/privacy">' + esc(t("footer.privacy")) + '</a><a href="#/terms">' + esc(t("footer.terms")) + "</a></div>" +
      "</div>" +
      '<div class="wrap footer__bottom"><span>© ' + new Date().getFullYear() + " KAYN. " + esc(t("footer.rights")) + "</span></div></footer>";
  };

  /* Customer reviews section (hidden when there are no reviews). */
  K.reviewsSection = function () {
    var list = K.reviews || [];
    if (!list.length) return "";
    var star = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 1.5l2.63 5.57 6.12.78-4.5 4.2 1.14 6.05L10 15.1l-5.39 3 1.14-6.05-4.5-4.2 6.12-.78z"/></svg>';
    var cards = list.map(function (r) {
      var p = K.getProduct(r.product);
      var text = typeof r.text === "string" ? r.text : K.L(r.text);
      var n = Math.max(1, Math.min(5, r.rating || 5));
      return '<figure class="review">' +
        '<div class="review__stars" role="img" aria-label="' + esc(n + " / 5 — " + t("review.stars")) + '">' + new Array(n + 1).join(star) + "</div>" +
        "<blockquote><p>" + esc(text) + "</p></blockquote>" +
        '<figcaption><span class="review__name">' + esc(typeof r.name === "string" ? r.name : K.L(r.name)) + "</span>" +
        (p ? '<a class="review__product" href="#/collection/' + p.slug + '">' + esc(K.L(p.name)) + "</a>" : "") +
        (r.sample ? '<span class="review__sample">' + esc(t("review.sample")) + "</span>" : "") + "</figcaption></figure>";
    }).join("");
    return '<section class="section reviews" aria-labelledby="reviews-title"><div class="wrap">' +
      '<div class="section__head"><span class="eyebrow">' + esc(t("reviews.eyebrow")) + '</span><h2 id="reviews-title" class="h2">' + esc(t("reviews.title")) + "</h2></div>" +
      '<div class="reviews__grid">' + cards + "</div>" +
      "</div></section>";
  };
})(window.KAYN);

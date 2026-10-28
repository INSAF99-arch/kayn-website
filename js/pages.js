/* KAYN — page templates. Each returns { html, title, desc }. */
window.KAYN = window.KAYN || {};
(function (K) {
  var t = function (k) { return K.t(k); }, esc = K.esc;

  function priceNote() {
    return K.products.some(function (p) { return p.pricePlaceholder; }) ? '<p class="fine">' + esc(t("coll.priceNote")) + "</p>" : "";
  }

  function grid() {
    return '<div class="grid">' + K.products.map(K.productCard).join("") + "</div>";
  }

  function home() {
    var insta = [["box", "insta.alt1"], ["bag", "insta.alt2"], ["card", "insta.alt3"], ["closeWide", "insta.alt4"]].map(function (x) {
      return '<a class="insta__tile" href="' + esc(K.site.instagramUrl) + '" target="_blank" rel="noopener noreferrer">' + K.crop(x[0], t(x[1])) + "</a>";
    }).join("");
    return {
      title: t("meta.home"), desc: t("meta.homeDesc"),
      html:
        '<section class="hero" aria-labelledby="hero-title"><div class="wrap hero__inner">' +
          '<div class="hero__text"><h1 id="hero-title" class="hero__title">' + esc(t("hero.title")) + "</h1>" +
          '<p class="hero__copy">' + esc(t("hero.copy")) + "</p>" +
          '<div class="hero__cta"><a class="btn btn--light" href="#/collection">' + esc(t("hero.cta1")) + '</a>' +
          '<a class="btn btn--ghost" href="#/story">' + esc(t("hero.cta2")) + "</a></div></div>" +
          '<div class="hero__media">' + K.cropRaw("assets/one-olive-wrist.webp", 1254, { x: 0, y: 0, w: 1254, h: 1254 }, t("hero.alt"), { eager: true }) + "</div></div></section>" +

        '<section class="section section--tint" aria-labelledby="coll-title"><div class="wrap">' +
          '<div class="section__head"><span class="eyebrow">' + esc(t("coll.eyebrow")) + '</span><h2 id="coll-title" class="h2">' + esc(t("coll.title")) + "</h2></div>" +
          grid() + priceNote() + "</div></section>" +

        '<section class="section section--beige statement" aria-labelledby="brand-title"><div class="wrap statement__inner">' +
          '<h2 id="brand-title" class="statement__title">' + esc(t("brand.title")) + "</h2>" +
          '<p class="statement__copy">' + esc(t("brand.copy")) + "</p></div></section>" +

        '<section class="section section--olive detail" aria-labelledby="detail-title"><div class="wrap detail__inner">' +
          '<div class="detail__media">' + K.imageHtml({ src: "assets/one-black-dark.webp" }, K.L(K.products[0].gallery[5].alt)) + "</div>" +
          '<div class="detail__text"><span class="eyebrow">' + esc(t("detail.eyebrow")) + '</span><h2 id="detail-title" class="h2">' + esc(t("detail.title")) + "</h2>" +
          '<p class="detail__name">' + esc(K.L(K.products[0].name)) + "</p><p>" + esc(t("detail.copy")) + "</p><dl class=\"dl\">" +
          [1, 2, 3].map(function (n) { return "<div><dt>" + esc(t("detail.p" + n + "t")) + "</dt><dd>" + esc(t("detail.p" + n)) + "</dd></div>"; }).join("") +
          "</dl></div></div></section>" +

        K.reviewsSection() +

        '<section class="section section--black wait" id="waitlist" aria-labelledby="wait-title"><div class="wrap wait__inner">' +
          '<div><h2 id="wait-title" class="h2">' + esc(t("wait.title")) + "</h2><p>" + esc(t("wait.copy")) + "</p></div>" +
          '<div><a class="btn btn--light" href="#/collection">' + esc(t("hero.cta1")) + "</a></div></div></section>" +

        '<section class="section" aria-labelledby="insta-title"><div class="wrap">' +
          '<div class="section__head section__head--row"><div><span class="eyebrow">' + esc(t("insta.eyebrow")) + '</span><h2 id="insta-title" class="h2">' + esc(t("insta.title")) + " " + esc(K.site.instagramHandle) + "</h2></div>" +
          '<a class="btn btn--outline" href="' + esc(K.site.instagramUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(t("insta.cta")) + "</a></div>" +
          '<div class="insta">' + insta + "</div></div></section>"
    };
  }

  function collection() {
    return {
      title: t("meta.collection"), desc: t("meta.collectionDesc"),
      html: '<section class="section section--tint page-top"><div class="wrap"><div class="section__head"><span class="eyebrow">' + esc(t("coll.eyebrow")) + '</span>' +
        '<h1 class="h1">' + esc(t("coll.title")) + '</h1><p class="lead">' + esc(t("coll.intro")) + "</p></div>" +
        grid() + priceNote() + "</div></section>"
    };
  }

  function specRow(label, value) {
    if (value && typeof value === "object") value = K.L(value);   // { en, fr, ar } values
    var has = value != null && value !== "";
    return has ? "<div><dt>" + esc(label) + "</dt><dd>" + esc(value) + "</dd></div>" : "";   // unconfirmed rows are hidden
  }

  function product(slug) {
    var p = K.getProduct(slug);
    if (!p) return notFound();
    var name = K.L(p.name);
    /* One gallery set per colour; only the selected colour's set is visible. */
    var groups = p.gallery ? [{ id: "all", images: p.gallery }] : p.colors;   // shared gallery, or one per colour
    var sets = groups.map(function (c, ci) {
      var imgs = c.images.length ? c.images : [null];
      var thumbs = c.images.length > 1 ? '<div class="gallery__thumbs" role="group" aria-label="' + esc(t("pd.gallery")) + '">' +
        c.images.map(function (im, i) {
          return '<button type="button" class="gallery__thumb" data-action="gallery" data-index="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="' + esc(t("pd.image") + " " + (i + 1)) + '">' + K.imageHtml(im, "") + "</button>";
        }).join("") + "</div>" : "";
      var main = imgs.map(function (im, i) {
        return '<div class="gallery__slide"' + (i ? " hidden" : "") + ' data-slide="' + i + '">' + K.productImage(p, i, { eager: ci === 0 && i === 0 }, ci) + "</div>";
      }).join("");
      return '<div class="gallery__set" data-color="' + c.id + '"' + (ci ? " hidden" : "") + '><div class="gallery__main">' + main + "</div>" + thumbs + "</div>";
    }).join("");

    /* Option groups: colour/metal (p.colors) and, optionally, stone (p.stones). */
    var optionGroup = function (kind, label, list) {
      return '<div class="colors"><p class="colors__label" id="' + kind + '-label">' + esc(label) + '</p>' +
        '<div class="colors__list" role="group" aria-labelledby="' + kind + '-label">' +
        list.map(function (c, ci) {
          return '<button type="button" class="colors__btn" data-action="color" data-group="' + kind + '" data-color="' + c.id + '" aria-pressed="' + (ci === 0) + '">' +
            '<span class="swatch" style="background:' + c.hex + '"></span><span>' + esc(K.L(c.name)) + "</span></button>";
        }).join("") + "</div></div>";
    };
    var colors = optionGroup("color", p.optionLabel ? K.L(p.optionLabel) : t("pd.chooseColour"), p.colors) +
      (p.stones ? optionGroup("stone", K.L(p.stoneLabel), p.stones) : "");

    var care = p.care ? '<ul class="list">' + K.L(p.care).map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" : "";
    var specs = specRow(t("pd.setting"), p.metal.setting) + specRow(t("pd.hardware"), p.metal.hardware) +
      specRow(t("pd.type"), p.diamond.type) + specRow(t("pd.origin"), p.diamond.origin) + specRow(t("pd.carat"), p.diamond.carat) + specRow(t("pd.clarity"), p.diamond.clarity) + specRow(t("pd.cert"), p.diamond.certification) +
      specRow(t("pd.count"), p.diamond.count) + specRow(t("pd.dim"), p.dimensions) +
      (p.extraSpecs || []).map(function (s) { return specRow(K.L(s.label), s.value); }).join("");
    /* Three short sections that describe the piece in more depth. */
    var detailSections = p.details ? '<section class="pdetails" aria-label="' + esc(t("pd.more")) + '"><div class="pdetails__grid">' + [
      [t("pd.s1t"), K.L(p.details.design)],
      [t("pd.s2t"), K.L(p.details.materials)],
      [t("pd.s3t"), t("pd.s3")]
    ].map(function (s) { return '<div class="pdetails__item"><h2 class="h3">' + esc(s[0]) + "</h2><p>" + esc(s[1]) + "</p></div>"; }).join("") + "</div></section>" : "";
    var others = K.products.filter(function (o) { return o.id !== p.id; }).map(function (o) {
      return '<a class="mini" href="#/collection/' + o.slug + '"><span class="mini__media">' + K.productImage(o, 0) + '</span><span class="mini__body"><span class="mini__name">' + esc(K.L(o.name)) + "</span></span></a>";
    }).join("");

    return {
      title: name + " — KAYN", desc: K.L(p.short),
      html: '<section class="section page-top"><div class="wrap">' +
        '<nav class="crumbs" aria-label="' + esc(t("pd.breadcrumb")) + '"><a href="#/collection">' + esc(t("pd.back")) + '</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(name) + "</span></nav>" +
        '<div class="pdp"><div class="gallery">' + sets + "</div>" +
        '<div class="pdp__info" data-product="' + esc(p.id) + '"><h1 class="h1">' + esc(name) + "</h1>" +
        '<p class="pdp__price">' + K.priceHtml(p, true) + "</p>" +
        '<p class="pdp__stock"><span class="badge badge--out"><span class="badge__dot" aria-hidden="true"></span>' + esc(t("oos.status")) + "</span></p>" +
        '<p class="lead">' + esc(K.L(p.short)) + "</p>" +
        colors +
        K.outOfStockHtml(p) +
        '<h2 class="h3">' + esc(t("pd.desc")) + "</h2><p>" + esc(K.L(p.long)) + "</p>" +
        (specs ? '<h2 class="h3">' + esc(t("pd.material")) + '</h2><dl class="specs">' + specs + "</dl>" : "") +
        (care ? '<h2 class="h3">' + esc(t("pd.care")) + "</h2>" + care : "") +
        "</div></div>" +
        detailSections +
        '<div class="also"><h2 class="h3">' + esc(t("coll.also")) + '</h2><div class="also__grid">' + others + "</div></div>" +
        "</div></section>"
    };
  }

  function story() {
    var block = function (h, body) { return '<div class="story__block"><h2 class="h3">' + esc(h) + "</h2>" + body + "</div>"; };
    return {
      title: t("meta.story"), desc: t("meta.storyDesc"),
      html: '<section class="section page-top"><div class="wrap wrap--narrow story"><h1 class="h1">' + esc(t("story.title")) + '</h1><p class="lead">' + esc(t("story.lead")) + "</p>" +
        block(t("story.s1t"), "<p>" + esc(t("story.s1")) + "</p>") +
        block(t("story.s2t"), "<p>" + esc(t("story.s2")) + "</p>") +
        block(t("story.s3t"), '<ul class="list"><li>' + esc(t("story.s3a")) + "</li><li>" + esc(t("story.s3b")) + "</li><li>" + esc(t("story.s3c")) + "</li></ul>") +
        block(t("story.s4t"), "<p>" + esc(t("story.s4")) + "</p>") +
        '<a class="btn btn--solid" href="#/collection">' + esc(t("story.cta")) + "</a></div></section>"
    };
  }

  function track() {
    return {
      title: t("meta.track"), desc: t("meta.trackDesc"),
      html: '<section class="section page-top"><div class="wrap wrap--narrow story">' +
        '<h1 class="h1">' + esc(t("track.title")) + '</h1><p class="lead">' + esc(t("track.copy")) + "</p>" +
        '<form class="nform track" data-track-form novalidate>' +
        '<div class="field"><label for="trk-order">' + esc(t("track.order")) + '</label>' +
        '<input id="trk-order" name="order" type="text" autocomplete="off" required aria-describedby="trk-order-err"><p class="field__err" id="trk-order-err" hidden></p></div>' +
        '<div class="field"><label for="trk-email">' + esc(t("form.email")) + '</label>' +
        '<input id="trk-email" name="email" type="email" inputmode="email" autocomplete="off" required aria-describedby="trk-email-err"><p class="field__err" id="trk-email-err" hidden></p></div>' +
        '<p class="nform__privacy">' + esc(t("form.privacy")) + "</p>" +
        '<button type="submit" class="btn btn--solid btn--block">' + esc(t("track.submit")) + "</button>" +
        '<p class="nform__status" data-status role="status" tabindex="-1" hidden></p></form></div></section>'
    };
  }

  function legal(kind) {
    var doc = K.legal[kind], title = K.L(doc.title);
    var fill = function (s) { return esc(s).replace("{insta}", esc(K.site.instagramHandle)); };
    var body = doc.sections.map(function (sec, i) {
      return '<section class="legal__sec"><h2 class="h3">' + (i + 1) + ". " + esc(K.L(sec.h)) + "</h2>" + sec.body.map(function (b) {
        return b.t === "ul"
          ? '<ul class="list">' + b.v.map(function (li) { return "<li>" + fill(K.L(li)) + "</li>"; }).join("") + "</ul>"
          : "<p>" + fill(K.L(b.v)) + "</p>";
      }).join("") + "</section>";
    }).join("");
    return {
      title: title + " — KAYN", desc: title + " — KAYN",
      html: '<section class="section page-top"><div class="wrap wrap--narrow legal"><h1 class="h1">' + esc(title) + '</h1><p class="fine legal__date">' + esc(K.L(K.legalUpdated)) + "</p>" + body + "</div></section>"
    };
  }

  function notFound() {
    return {
      title: t("notfound.title") + " — KAYN", desc: t("notfound.copy"),
      html: '<section class="section page-top"><div class="wrap wrap--narrow"><h1 class="h1">' + esc(t("notfound.title")) + '</h1><p class="lead">' + esc(t("notfound.copy")) +
        '</p><a class="btn btn--solid" href="#/">' + esc(t("notfound.cta")) + "</a></div></section>"
    };
  }

  K.pages = { home: home, collection: collection, product: product, story: story, track: track, legal: legal, notFound: notFound };
})(window.KAYN);

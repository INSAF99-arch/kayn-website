/* KAYN — "Notify me" form (frontend demo only).
   NOTHING is stored or transmitted. To connect a real email service later, replace
   KAYN.submitInterest() with a call to that service; the UI states below stay the same. */
window.KAYN = window.KAYN || {};
(function (K) {
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* DEMO ONLY: resolves after a short delay and discards the payload.
     Replace the body with a real request when a provider is chosen. */
  K.submitInterest = function (/* payload: { email, fullName, productId, colorId } */) {
    return new Promise(function (resolve) { setTimeout(resolve, 900); });
  };

  /* Full name: required, at least 2 characters and at least one letter (any alphabet, including Arabic). */
  K.validateName = function (v) {
    v = (v || "").trim();
    if (!v) return "form.errName";
    var hasLetter = true;
    try { hasLetter = new RegExp("\\p{L}", "u").test(v); } catch (e) { /* old browser: skip the letter check */ }
    return v.length < 2 || !hasLetter ? "form.errName" : null;
  };

  K.validateEmail = function (v) {
    v = (v || "").trim();
    if (!v) return "form.errEmpty";
    if (!EMAIL_RE.test(v)) return "form.errInvalid";
    return null;
  };

  /* Form markup. `uid` keeps ids unique when several forms are on one page. */
  K.notifyFormHtml = function (productId, colorId, uid, onDark) {
    var t = K.t, esc = K.esc;
    return '<form class="nform' + (onDark ? " nform--dark" : "") + '" data-notify-form data-product="' + esc(productId) + '" novalidate>' +
      '<div class="field"><label for="' + uid + '-name">' + esc(t("form.name")) + '</label>' +
      '<input id="' + uid + '-name" name="fullName" type="text" autocomplete="off" required aria-describedby="' + uid + '-name-err">' +
      '<p class="field__err" id="' + uid + '-name-err" hidden></p></div>' +
      '<div class="field"><label for="' + uid + '-email">' + esc(t("form.email")) + '</label>' +
      '<input id="' + uid + '-email" name="email" type="email" inputmode="email" autocomplete="off" required aria-describedby="' + uid + '-err">' +
      '<p class="field__err" id="' + uid + '-err" hidden></p></div>' +
      '<input type="hidden" name="productId" value="' + esc(productId) + '">' +
      '<input type="hidden" name="colorId" value="' + esc(colorId) + '">' +
      '<p class="nform__privacy">' + esc(t("form.privacy")) + "</p>" +
      '<button type="submit" class="btn ' + (onDark ? "btn--light" : "btn--solid") + ' btn--block">' + esc(t("form.submit")) + "</button>" +
      '<p class="nform__status" data-status role="status" hidden></p></form>';
  };

  /* "Track package" form (frontend demo only): validates, shows a short loading state, then says that
     tracking is not available yet. Nothing is looked up, stored or sent. */
  K.handleTrackSubmit = function (form) {
    var t = K.t, status = form.querySelector("[data-status]"), btn = form.querySelector('button[type="submit"]');
    var order = form.elements.order, email = form.elements.email, first = null;
    status.hidden = true; status.className = "nform__status"; status.textContent = "";
    var show = function (input, key) {
      var err = document.getElementById(input.id + "-err");
      if (key) { err.textContent = "⚠ " + t(key); err.hidden = false; input.setAttribute("aria-invalid", "true"); first = first || input; }
      else { err.hidden = true; input.removeAttribute("aria-invalid"); }
    };
    show(order, order.value.trim() ? null : "track.errOrder");
    show(email, K.validateEmail(email.value));
    if (first) { first.focus(); return; }
    var label = btn.textContent;
    btn.disabled = true; btn.setAttribute("aria-busy", "true"); btn.textContent = t("avail.checking");
    setTimeout(function () {
      form.reset();                                   // never keep what was entered
      status.textContent = "ℹ " + t("track.result");
      status.className = "nform__status";
      status.hidden = false;
      btn.disabled = false; btn.removeAttribute("aria-busy"); btn.textContent = label;
      status.focus();
    }, 900);
  };

  /* The options currently chosen on a product page (colour/metal and, if the product has them, stone),
     combined into one { id, name } selection. Falls back to the first option of each group. */
  K.selectionOf = function (p, root) {
    var btns = root ? [].slice.call(root.querySelectorAll('.colors__btn[aria-pressed="true"]')) : [];
    var chosen = btns.length ? btns.map(function (b) {
      var list = b.getAttribute("data-group") === "stone" ? p.stones : p.colors;
      return list.filter(function (c) { return c.id === b.getAttribute("data-color"); })[0];
    }) : [p.colors[0]].concat(p.stones ? [p.stones[0]] : []);
    var sel = { id: chosen.map(function (c) { return c.id; }).join("+"), name: {} };
    Object.keys(K.langs).forEach(function (code) {
      sel.name[code] = chosen.map(function (c) { return c.name[code] || c.name.en; }).join(" · ");
    });
    return sel;
  };

  /* Out-of-stock block shown directly on the product page: message plus the notification form.
     FRONTEND DEMO: every product is shown as out of stock; there is no stock service behind it. */
  K.outOfStockHtml = function (p) {
    var t = K.t, esc = K.esc, sel = K.selectionOf(p, null);
    return '<div class="avail" id="avail"><div class="avail__panel">' +
      '<h2 class="avail__title">' + esc(t("oos.title")) + "</h2>" +
      '<p class="avail__piece" id="avail-piece">' + esc(K.L(p.name) + " — " + K.L(sel.name)) + "</p>" +
      '<p class="avail__copy">' + esc(t("oos.copy")) + "</p>" +
      K.notifyFormHtml(p.id, sel.id, "avail") + "</div></div>";
  };

  /* Keep the "which piece" line and the hidden option field in step with the chosen colour/stone. */
  K.updateAvailability = function (p) {
    var info = document.querySelector(".pdp__info"), piece = document.getElementById("avail-piece");
    if (!info || !piece) return;
    var sel = K.selectionOf(p, info);
    piece.textContent = K.L(p.name) + " — " + K.L(sel.name);
    var hidden = document.querySelector("#avail input[name=colorId]");
    if (hidden) hidden.value = sel.id;
  };

  K.handleNotifySubmit = function (form) {
    var t = K.t;
    var email = form.elements.email, name = form.elements.fullName, first = null;
    var status = form.querySelector("[data-status]"), btn = form.querySelector('button[type="submit"]');

    status.hidden = true; status.className = "nform__status"; status.textContent = "";
    // Full name and email are both required.
    var show = function (input, key) {
      var err = document.getElementById(input.getAttribute("aria-describedby"));
      if (key) { err.textContent = "⚠ " + t(key); err.hidden = false; input.setAttribute("aria-invalid", "true"); first = first || input; }
      else { err.hidden = true; input.removeAttribute("aria-invalid"); }
    };
    show(name, K.validateName(name.value));
    show(email, K.validateEmail(email.value));
    if (first) { first.focus(); return; }

    var payload = { email: email.value.trim(), fullName: name.value.trim(), productId: form.elements.productId.value, colorId: form.elements.colorId.value };
    var label = btn.textContent;
    btn.disabled = true; btn.setAttribute("aria-busy", "true"); btn.textContent = t("form.sending");

    K.submitInterest(payload).then(function () {
      form.reset();                                   // never keep the entered address
      payload = null;
      status.textContent = "✓ " + t("form.success");
      status.className = "nform__status nform__status--ok";
      status.hidden = false;
    }, function () {
      status.textContent = "⚠ " + t("form.errDemo");
      status.className = "nform__status nform__status--err";
      status.hidden = false;
    }).then(function () {
      btn.disabled = false; btn.removeAttribute("aria-busy"); btn.textContent = label;
    });
  };

})(window.KAYN);

/* KAYN — "Notify me" form (frontend demo only).
   NOTHING is stored or transmitted. To connect a real email service later, replace
   KAYN.submitInterest() with a call to that service; the UI states below stay the same. */
window.KAYN = window.KAYN || {};
(function (K) {
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* DEMO ONLY: resolves after a short delay and discards the payload.
     Replace the body with a real request when a provider is chosen. */
  K.submitInterest = function (/* payload: { email, firstName, productId } */) {
    return new Promise(function (resolve) { setTimeout(resolve, 900); });
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
      '<div class="field"><label for="' + uid + '-email">' + esc(t("form.email")) + '</label>' +
      '<input id="' + uid + '-email" name="email" type="email" inputmode="email" autocomplete="off" required aria-describedby="' + uid + '-err">' +
      '<p class="field__err" id="' + uid + '-err" hidden></p></div>' +
      '<div class="field"><label for="' + uid + '-name">' + esc(t("form.name")) + '</label>' +
      '<input id="' + uid + '-name" name="firstName" type="text" autocomplete="off"></div>' +
      '<input type="hidden" name="productId" value="' + esc(productId) + '">' +
      '<input type="hidden" name="colorId" value="' + esc(colorId) + '">' +
      '<p class="nform__privacy">' + esc(t("form.privacy")) + "</p>" +
      '<button type="submit" class="btn ' + (onDark ? "btn--light" : "btn--solid") + ' btn--block">' + esc(t("form.submit")) + "</button>" +
      '<p class="nform__status" data-status role="status" hidden></p></form>';
  };

  /* Result of the (demo) availability check: always "currently unavailable", plus the email form. */
  K.availabilityResultHtml = function (p, color) {
    var t = K.t, esc = K.esc;
    return '<span class="eyebrow">' + esc(t("form.demoBadge")) + "</span>" +
      '<h3 class="avail__title">' + esc(t("avail.title")) + "</h3>" +
      '<p class="avail__piece">' + esc(K.L(p.name) + " — " + K.L(color.name)) + "</p>" +
      "<p>" + esc(t("avail.msg")) + "</p><p>" + esc(t("avail.invite")) + "</p>" +
      K.notifyFormHtml(p.id, color.id, "avail");
  };

  K.handleNotifySubmit = function (form) {
    var t = K.t;
    var email = form.elements.email, errEl = form.querySelector(".field__err");
    var status = form.querySelector("[data-status]"), btn = form.querySelector('button[type="submit"]');
    var errKey = K.validateEmail(email.value);

    status.hidden = true; status.className = "nform__status"; status.textContent = "";
    if (errKey) {
      errEl.textContent = "⚠ " + t(errKey);
      errEl.hidden = false;
      email.setAttribute("aria-invalid", "true");
      email.focus();
      return;
    }
    errEl.hidden = true; email.removeAttribute("aria-invalid");

    var payload = { email: email.value.trim(), firstName: form.elements.firstName.value.trim(), productId: form.elements.productId.value, colorId: form.elements.colorId.value };
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

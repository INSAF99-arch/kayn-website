/* KAYN — centralized frontend data.
   Everything marked PLACEHOLDER must be replaced with confirmed information before launch.
   Fields set to null are unconfirmed and are shown to visitors as "to be confirmed". */
window.KAYN = window.KAYN || {};

KAYN.site = {
  instagramUrl: "https://www.instagram.com/kayn_jewelry/",
  instagramHandle: "@kayn_jewelry",
  facebookUrl: "https://www.facebook.com/profile.php?id=61595923025464",
  contactEmail: "contact@maison-kayn.com",
                                  // PLACEHOLDER
                                     // PLACEHOLDER
  currency: "MAD"
};

/* Supplied brand sheet. Regions are cropped in CSS from the source pixel coordinates,
   so swapping in original high-resolution photography only means changing `src`, `srcW`
   and the crop rectangles. */
KAYN.sheet = { src: "assets/moodboard.webp", srcW: 1024 };

KAYN.crops = {
  logo:        { x: 85,  y: 588,  w: 505, h: 90  },   // official wordmark, black on off-white
  hero:        { x: 470, y: 0,    w: 554, h: 502 },   // wrist, olive bracelet
  wristCard:   { x: 543, y: 0,    w: 400, h: 500 },   // 4:5
  closeCard:   { x: 713, y: 788,  w: 200, h: 250 },   // 4:5
  closeWide:   { x: 576, y: 788,  w: 440, h: 248 },
  box:         { x: 3,    y: 1045, w: 366, h: 274 },
  bag:         { x: 378,  y: 1045, w: 307, h: 274 },
  card:        { x: 698,  y: 1045, w: 321, h: 274 }
};

/* Colour options. Each colour carries its own images; a colour with no images shows an
   editable placeholder slot. PLACEHOLDER: cord colours other than KAYN 01 olive are not
   confirmed. Edit, remove or add colours per product, and supply matching photography. */
KAYN.placeholderColors = function () {
  return [
    { id: "olive", hex: "#2F3A2E", name: { en: "Olive green", fr: "Vert olive", ar: "أخضر زيتوني" }, images: [] },
    { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, images: [] },
    { id: "beige", hex: "#D9D0C2", name: { en: "Beige", fr: "Beige", ar: "بيج" }, images: [] }
  ];
};

/* All KAYN diamonds are lab-grown (confirmed by the brand owner). */
KAYN.carat010 = { en: "0.10 ct", fr: "0,10 ct", ar: "0.10 قيراط" };
KAYN.labGrown = { en: "Lab-grown diamond", fr: "Diamant de laboratoire", ar: "ألماسة مصنّعة في المختبر" };

/* The Minimalist colour options (selector only; photos live in KAYN.oneGallery below). */
KAYN.oneColors = function () {
  var P = "assets/";
  var alt = function (en, fr, ar) { return { en: en, fr: fr, ar: ar }; };
  var N = {
    black: alt("Black", "Noir", "أسود"), grey: alt("Grey", "Gris", "رمادي"), olive: alt("Olive green", "Vert olive", "أخضر زيتوني"),
    blue: alt("Blue", "Bleu", "أزرق"), red: alt("Red", "Rouge", "أحمر")
  };
  return [
    { id: "olive", hex: "#4B5232", name: N.olive, show: 0, images: [] },
    { id: "black", hex: "#0B0B0B", name: N.black, show: 6, images: [] },
    { id: "grey", hex: "#A9A9A9", name: N.grey, show: 2, images: [] },
    { id: "red", hex: "#D8261D", name: N.red, show: 3, images: [] }
  ];
};

/* The Minimalist gallery, in display order. The first image is the main image (product cards,
   hero, first photo on the product page). Choosing a colour jumps to the photo given by that
   colour's `show` index (null = stay on the current photo). */
KAYN.oneGallery = function () {
  var P = "assets/";
  var alt = function (en, fr, ar) { return { en: en, fr: fr, ar: ar }; };
  var worn = function (en, fr, ar) { return alt("The Minimalist: " + en, "The Minimalist : " + fr, "The Minimalist: " + ar); };
  return [
    { src: P + "one-olive-main.webp", alt: worn("olive cord bracelet with a single diamond, worn on the wrist in the sun", "bracelet à cordon olive et un diamant unique, porté au poignet au soleil", "سوار بخيط زيتوني وألماسة واحدة على المعصم تحت الشمس") },
    { src: P + "one-olive-wrist.webp", alt: worn("olive cord bracelet with a single diamond, worn on the wrist", "bracelet à cordon olive et un diamant unique, porté au poignet", "سوار بخيط زيتوني وألماسة واحدة على المعصم") },
    { src: P + "one-grey-wrist.webp", alt: worn("grey cord bracelet with a single diamond, worn on the wrist", "bracelet à cordon gris et un diamant unique, porté au poignet", "سوار بخيط رمادي وألماسة واحدة على المعصم") },
    { src: P + "one-red-wrist.webp", alt: worn("red cord bracelet with a single diamond, worn on the wrist", "bracelet à cordon rouge et un diamant unique, porté au poignet", "سوار بخيط أحمر وألماسة واحدة على المعصم") },
    { src: P + "one-red-wrist-2.webp", alt: worn("red cord bracelet with a single diamond, worn on the wrist with a linen shirt", "bracelet à cordon rouge et un diamant unique, porté au poignet avec une chemise en lin", "سوار بخيط أحمر وألماسة واحدة على المعصم مع قميص من الكتان") },
    { src: P + "one-olive-wrist-2.webp", alt: worn("olive cord bracelet with a single diamond, worn with a linen shirt", "bracelet à cordon olive et un diamant unique, porté avec une chemise en lin", "سوار بخيط زيتوني وألماسة واحدة مع قميص من الكتان") },
    { src: P + "one-black-closeup.jpg", alt: worn("close-up of the black cord bracelet and its round diamond bezel, on stone", "gros plan sur le bracelet à cordon noir et son serti clos rond, sur une pierre", "لقطة قريبة للسوار الأسود وإطار الألماسة الدائري على الحجر") },
    { src: P + "one-four-colours.webp", alt: worn("in red, olive, black and grey on a stone surface", "en rouge, olive, noir et gris sur une pierre", "بألوان الأحمر والزيتوني والأسود والرمادي على سطح حجري") },
    { src: P + "one-olive-closeup.webp", alt: worn("close-up of the olive cord bracelet and its round diamond bezel, on stone", "gros plan sur le bracelet à cordon olive et son serti clos rond, sur une pierre", "لقطة قريبة للسوار الزيتوني وإطار الألماسة الدائري على الحجر") },
    { src: P + "one-red-closeup.webp", alt: worn("close-up of the red cord bracelet and its round diamond bezel, on stone", "gros plan sur le bracelet à cordon rouge et son serti clos rond, sur une pierre", "لقطة قريبة للسوار الأحمر وإطار الألماسة الدائري على الحجر") },
    { src: P + "one-olive-box.webp", alt: worn("olive cord bracelet on a stone block beside the KAYN box and bag", "bracelet à cordon olive sur un bloc de pierre, à côté du coffret et du sac KAYN", "سوار بخيط زيتوني على كتلة حجرية بجانب علبة وكيس KAYN") }
  ];
};

/* The Signature: photos after the main image (assets/essential-main.webp), in display order. */
KAYN.signatureGallery = function () {
  var P = "assets/";
  var a = function (en, fr, ar) { return { en: "The Signature: " + en, fr: "The Signature : " + fr, ar: "The Signature: " + ar }; };
  return [
    { src: P + "essential-burgundy-box.webp", alt: a("burgundy cord bracelet on a stone block beside the KAYN box and bag", "bracelet à cordon bordeaux sur un bloc de pierre, à côté du coffret et du sac KAYN", "سوار بخيط عنابي على كتلة حجرية بجانب علبة وكيس KAYN") },
    { src: P + "essential-4.webp", alt: a("olive cord bracelet with an octagonal setting and diamond, on stone", "bracelet à cordon olive, sertissage octogonal et diamant, sur une pierre", "سوار بخيط زيتوني وتصميم ثماني وألماسة على الحجر") },
    { src: P + "essential-6.webp", alt: a("close-up of the octagonal setting and diamond", "gros plan sur le sertissage octogonal et le diamant", "لقطة قريبة للتصميم الثماني والألماسة") },
    { src: P + "essential-three-colours.webp", alt: a("black, olive and burgundy bracelets side by side on stone", "bracelets noir, olive et bordeaux côte à côte sur une pierre", "أساور بالأسود والزيتوني والعنابي جنباً إلى جنب على الحجر") },
    { src: P + "essential-burgundy-wrist.webp", alt: a("burgundy bracelet worn on the wrist", "bracelet bordeaux porté au poignet", "سوار عنابي على المعصم") },
    { src: P + "essential-black-wrist.webp", alt: a("black bracelet worn on the wrist", "bracelet noir porté au poignet", "سوار أسود على المعصم") },
    { src: P + "essential-three-block.webp", alt: a("black, olive and burgundy bracelets draped over a stone block", "bracelets noir, olive et bordeaux posés sur un bloc de pierre", "أساور بالأسود والزيتوني والعنابي على كتلة حجرية") },
    { src: P + "essential-three-wrist.webp", alt: a("black, olive and burgundy bracelets worn together on the wrist", "bracelets noir, olive et bordeaux portés ensemble au poignet", "أساور بالأسود والزيتوني والعنابي على المعصم معاً") }
  ];
};

/* The Line: photos after the main image (assets/line-5.webp), in display order. */
KAYN.lineGallery = function () {
  var P = "assets/";
  var a = function (en, fr, ar) { return { en: "The Line: " + en, fr: "The Line : " + fr, ar: "The Line: " + ar }; };
  return [
    { src: P + "line-main.webp", alt: a("black cord bracelet with a slim white gold bar and diamond accents, worn on the wrist", "bracelet à cordon noir avec une fine barre en or blanc et des touches de diamant, porté au poignet", "سوار بخيط أسود وقضيب رفيع من الذهب الأبيض ولمسات ألماس، على المعصم") },
    { src: P + "line-2.webp", alt: a("black cord bracelet with a slim white gold bar and two diamonds, on stone", "bracelet à cordon noir, fine barre en or blanc et deux diamants, sur une pierre", "سوار بخيط أسود وقضيب رفيع من الذهب الأبيض وألماستان على الحجر") },
    { src: P + "line-3.webp", alt: a("olive cord bracelet with a slim white gold bar and two diamonds, on stone", "bracelet à cordon olive, fine barre en or blanc et deux diamants, sur une pierre", "سوار بخيط زيتوني وقضيب رفيع من الذهب الأبيض وألماستان على الحجر") },
    { src: P + "line-4.webp", alt: a("worn on the wrist next to The Signature", "porté au poignet à côté de The Signature", "على المعصم بجانب The Signature") }
  ];
};

/* Availability: the product page always shows the "currently unavailable" demo result.
   Connect real stock data later. */
KAYN.products = [
  {
    id: "the-minimalist",
    slug: "the-minimalist",
    name: { en: "The Minimalist", fr: "The Minimalist", ar: "The Minimalist" },
    listing: {
      details: { en: "0.10 ct diamond · 14K white gold", fr: "Diamant de 0,10 ct · or blanc 14 carats", ar: "ألماسة 0.10 قيراط · ذهب أبيض عيار 14" }
    },
    short: {
      en: "Fine adjustable braided cord, round bezel, 14K white gold, 0.10 carat diamond.",
      fr: "Cordon tressé fin ajustable, serti clos rond, or blanc 14 carats, diamant de 0,10 carat.",
      ar: "خيط منسوج رفيع قابل للتعديل، إطار دائري، ذهب أبيض عيار 14، ألماسة بوزن 0.10 قيراط."
    },
    long: {
      en: "Understated by design. The Minimalist pairs a fine adjustable braided cord with a 0.10 carat diamond in a round bezel of polished 14K white gold. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention. Delivered with an IGI certificate.",
      fr: "Discret par nature. The Minimalist associe un cordon tressé fin ajustable à un diamant de 0,10 carat, serti clos rond dans de l'or blanc 14 carats poli. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention. Livré avec un certificat IGI.",
      ar: "أناقة هادئة. يجمع The Minimalist بين خيط منسوج رفيع قابل للتعديل وألماسة بوزن 0.10 قيراط مثبّتة في إطار دائري من الذهب الأبيض عيار 14 المصقول. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه. يأتي مع شهادة IGI."
    },
    priceMAD: 1590, pricePlaceholder: false,
    gallery: KAYN.oneGallery(),
    colors: KAYN.oneColors(),
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },                // setting confirmed by brief; other hardware unconfirmed
    diamond: { type: KAYN.labGrown, origin: null, carat: KAYN.carat010, clarity: "VVS2", certification: "IGI", count: "1" },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "التصميم" }, value: { en: "Fine adjustable braided cord with a single round diamond", fr: "Cordon tressé fin ajustable avec un seul diamant rond", ar: "خيط منسوج رفيع قابل للتعديل مع ألماسة مستديرة واحدة" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "طريقة التثبيت" }, value: { en: "Round bezel", fr: "Serti clos rond", ar: "إطار دائري" } }
    ],
    dimensions: null,
    care: {
      en: ["Wipe gently with a soft, dry cloth.", "Store in the KAYN box when not worn.", "Keep away from perfume and harsh chemicals."],
      fr: ["Essuyer délicatement avec un chiffon doux et sec.", "Ranger dans l'écrin KAYN lorsqu'il n'est pas porté.", "Éviter le contact avec les parfums et produits agressifs."],
      ar: ["امسحه برفق بقطعة قماش ناعمة وجافة.", "احتفظ به في علبة KAYN عند عدم ارتدائه.", "أبعده عن العطور والمواد الكيميائية القاسية."]
    }
  },
  {
    id: "the-signature",
    slug: "the-signature",
    name: { en: "The Signature", fr: "The Signature", ar: "The Signature" },
    listing: {
      details: { en: "0.10 ct diamond · 14K white gold", fr: "Diamant de 0,10 ct · or blanc 14 carats", ar: "ألماسة 0.10 قيراط · ذهب أبيض عيار 14" }
    },
    short: {
      en: "Adjustable double cord, geometric setting, 14K white gold, 0.10 carat diamond.",
      fr: "Double cordon ajustable, sertissage géométrique, or blanc 14 carats, diamant de 0,10 carat.",
      ar: "خيط مزدوج قابل للتعديل، تصميم هندسي، ذهب أبيض عيار 14، ألماسة بوزن 0.10 قيراط."
    },
    long: {
      en: "A defining detail. The Signature pairs an adjustable double cord with a geometric setting in 14K white gold, holding a 0.10 carat diamond. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention. Delivered with an IGI certificate.",
      fr: "Un détail qui s'affirme. The Signature associe un double cordon ajustable à un sertissage géométrique en or blanc 14 carats, qui accueille un diamant de 0,10 carat. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention. Livré avec un certificat IGI.",
      ar: "تفصيل يفرض حضوره بهدوء. يجمع The Signature بين خيط مزدوج قابل للتعديل وتصميم هندسي من الذهب الأبيض عيار 14 يحمل ألماسة بوزن 0.10 قيراط. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه. يأتي مع شهادة IGI."
    },
    priceMAD: 2990, pricePlaceholder: false,
    gallery: [{
      src: "assets/essential-main.webp",
      alt: {
        en: "The Signature bracelet: octagonal white gold setting with a diamond on a double olive cord, worn on the wrist",
        fr: "Bracelet The Signature : sertissage octogonal en or blanc avec diamant sur un double cordon olive, porté au poignet",
        ar: "سوار The Signature: تصميم ثماني من الذهب الأبيض مع ألماسة على خيط زيتوني مزدوج، على المعصم"
      }
    }].concat(KAYN.signatureGallery()),
    colors: [   // confirmed colour options
      { id: "olive", hex: "#2F3A2E", name: { en: "Olive green", fr: "Vert olive", ar: "أخضر زيتوني" }, show: 0, images: [] },
      { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, show: 6, images: [] },
      { id: "burgundy", hex: "#6B1A22", name: { en: "Burgundy", fr: "Bordeaux", ar: "عنابي" }, show: 5, images: [] }
    ],
    metal: {
      setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" },
      hardware: { en: "White-gold-tone loops and detailing", fr: "Anneaux et détails de ton or blanc", ar: "حلقات وتفاصيل بلون الذهب الأبيض" }
    },
    diamond: { type: KAYN.labGrown, origin: null, carat: KAYN.carat010, clarity: "VVS2", certification: "IGI", count: "1" },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "التصميم" }, value: { en: "Adjustable double cord with a geometric centrepiece", fr: "Double cordon ajustable avec une pièce centrale géométrique", ar: "خيط مزدوج قابل للتعديل مع قطعة مركزية هندسية" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "طريقة التثبيت" }, value: { en: "Geometric setting around a round diamond", fr: "Sertissage géométrique autour d'un diamant rond", ar: "تصميم هندسي يحيط بألماسة مستديرة" } }
    ],
    dimensions: null,
    care: {
      en: ["Wipe gently with a soft, dry cloth.", "Store in the KAYN box when not worn.", "Keep away from perfume and harsh chemicals."],
      fr: ["Essuyer délicatement avec un chiffon doux et sec.", "Ranger dans l'écrin KAYN lorsqu'il n'est pas porté.", "Éviter le contact avec les parfums et produits agressifs."],
      ar: ["امسحه برفق بقطعة قماش ناعمة وجافة.", "احتفظ به في علبة KAYN عند عدم ارتدائه.", "أبعده عن العطور والمواد الكيميائية القاسية."]
    }
  },
  {
    id: "solis",
    slug: "solis",
    name: { en: "SOLIS", fr: "SOLIS", ar: "SOLIS" },
    listing: {
      details: { en: "0.10 ct diamond · 14K white gold", fr: "Diamant de 0,10 ct · or blanc 14 carats", ar: "ألماسة 0.10 قيراط · ذهب أبيض عيار 14" }
    },
    short: {
      en: "Fine chain, round bezel, 14K white gold, 0.10 carat diamond.",
      fr: "Chaîne fine, serti clos rond, or blanc 14 carats, diamant de 0,10 carat.",
      ar: "سلسلة رفيعة، إطار دائري، ذهب أبيض عيار 14، ألماسة بوزن 0.10 قيراط."
    },
    long: {
      en: "A subtle statement. SOLIS pairs a fine chain with a single 0.10 carat diamond in a round bezel of 14K white gold. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention. Delivered with an IGI certificate.",
      fr: "Une déclaration discrète. SOLIS associe une chaîne fine à un seul diamant de 0,10 carat, serti clos rond dans de l'or blanc 14 carats. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention. Livré avec un certificat IGI.",
      ar: "لمسة هادئة. يجمع SOLIS بين سلسلة رفيعة وألماسة واحدة بوزن 0.10 قيراط مثبّتة في إطار دائري من الذهب الأبيض عيار 14. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه. يأتي مع شهادة IGI."
    },
    priceMAD: 3700, pricePlaceholder: false,
    gallery: [
      { src: "assets/solis-pocket-main.webp", alt: { en: "SOLIS bracelet in 14K white gold: fine chain with a single bezel-set diamond, worn with the hand in a pocket", fr: "Bracelet SOLIS en or blanc 14 carats : chaîne fine avec un diamant serti clos, porté la main dans la poche", ar: "سوار SOLIS من الذهب الأبيض عيار 14: سلسلة رفيعة مع ألماسة واحدة مثبّتة في إطار دائري، واليد في الجيب" } },
      { src: "assets/solis-wrist-main.webp", alt: { en: "SOLIS bracelet in 14K white gold: fine chain with a single bezel-set diamond, worn on the wrist", fr: "Bracelet SOLIS en or blanc 14 carats : chaîne fine avec un diamant serti clos, porté au poignet", ar: "سوار SOLIS من الذهب الأبيض عيار 14: سلسلة رفيعة مع ألماسة واحدة مثبّتة في إطار دائري، على المعصم" } },
      { src: "assets/solis-main.webp", alt: { en: "SOLIS bracelet in 14K white gold: fine chain with a single bezel-set diamond, worn on the wrist", fr: "Bracelet SOLIS en or blanc 14 carats : chaîne fine avec un diamant serti clos, porté au poignet", ar: "سوار SOLIS من الذهب الأبيض عيار 14: سلسلة رفيعة مع ألماسة واحدة مثبّتة في إطار دائري، على المعصم" } },
      { src: "assets/solis-box.webp", alt: { en: "SOLIS bracelet in 14K white gold beside the KAYN gift box", fr: "Bracelet SOLIS en or blanc 14 carats à côté du coffret cadeau KAYN", ar: "سوار SOLIS من الذهب الأبيض عيار 14 بجانب علبة الهدايا KAYN" } },
    ],
    colors: [   // metal options
      { id: "white-gold", hex: "#D9D9D6", name: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, show: 0, images: [] }
    ],
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },
    diamond: {
      type: { en: "Lab-grown diamond", fr: "Diamant de laboratoire", ar: "ألماسة مصنّعة في المختبر" },
      origin: null, carat: { en: "0.10 ct", fr: "0,10 ct", ar: "0.10 قيراط" }, clarity: "VVS2", certification: "IGI", count: "1"
    },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "التصميم" }, value: { en: "Fine chain with a single round diamond", fr: "Chaîne fine avec un seul diamant rond", ar: "سلسلة رفيعة مع ألماسة مستديرة واحدة" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "طريقة التثبيت" }, value: { en: "Round bezel", fr: "Serti clos rond", ar: "إطار دائري" } }
    ],
    dimensions: null,
    care: {
      en: ["Wipe gently with a soft, dry cloth.", "Store in the KAYN box when not worn.", "Keep away from perfume and harsh chemicals."],
      fr: ["Essuyer délicatement avec un chiffon doux et sec.", "Ranger dans l'écrin KAYN lorsqu'il n'est pas porté.", "Éviter le contact avec les parfums et produits agressifs."],
      ar: ["امسحه برفق بقطعة قماش ناعمة وجافة.", "احتفظ به في علبة KAYN عند عدم ارتدائه.", "أبعده عن العطور والمواد الكيميائية القاسية."]
    }
  },
  {
    id: "the-line",
    slug: "the-line",
    name: { en: "The Line", fr: "The Line", ar: "The Line" },
    listing: {
      details: { en: "2 diamonds, 0.2 ct total · 14K white gold", fr: "2 diamants, 0,2 ct au total · or blanc 14 carats", ar: "ألماستان، 0.2 قيراط إجمالاً · ذهب أبيض عيار 14" }
    },
    short: {
      en: "Adjustable double cord, slim bar, 14K white gold, two diamonds totalling 0.2 carat.",
      fr: "Double cordon ajustable, fine barre, or blanc 14 carats, deux diamants totalisant 0,2 carat.",
      ar: "خيط مزدوج قابل للتعديل، قضيب رفيع، ذهب أبيض عيار 14، ألماستان بوزن إجمالي 0.2 قيراط."
    },
    long: {
      en: "Pure lines, quietly precise. The Line pairs an adjustable double cord with a slim bar of polished 14K white gold, set with a diamond at each end, 0.2 carat in total. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention. Delivered with an IGI certificate.",
      fr: "Des lignes pures, d'une précision discrète. The Line associe un double cordon ajustable à une fine barre en or blanc 14 carats poli, ornée d'un diamant à chaque extrémité, 0,2 carat au total. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention. Livré avec un certificat IGI.",
      ar: "خطوط نقية بدقة هادئة. يجمع The Line بين خيط مزدوج قابل للتعديل وقضيب رفيع من الذهب الأبيض عيار 14 المصقول، تزيّنه ألماسة عند كل طرف، بوزن إجمالي 0.2 قيراط. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه. يأتي مع شهادة IGI."
    },
    priceMAD: 4590, pricePlaceholder: false,
    gallery: [{
      src: "assets/line-wrist-main.webp",
      alt: {
        en: "The Line bracelet: olive cord with a slim white gold bar and two diamonds, worn with the hand in a pocket",
        fr: "Bracelet The Line : cordon olive avec une fine barre en or blanc et deux diamants, porté la main dans la poche",
        ar: "سوار The Line: خيط زيتوني مع قضيب رفيع من الذهب الأبيض وألماستين، واليد في الجيب"
      }
    }, {
      src: "assets/line-olive-box.webp",
      alt: {
        en: "The Line bracelet: olive cord with a slim white gold bar and two diamonds, beside the KAYN box and pouch",
        fr: "Bracelet The Line : cordon olive avec une fine barre en or blanc et deux diamants, à côté du coffret et de la pochette KAYN",
        ar: "سوار The Line: خيط زيتوني مع قضيب رفيع من الذهب الأبيض وألماستين، بجانب علبة وكيس KAYN"
      }
    }, {
      src: "assets/line-5.webp",
      alt: {
        en: "The Line bracelet: black cord with a slim white gold bar and two diamonds, worn on the wrist",
        fr: "Bracelet The Line : cordon noir avec une fine barre en or blanc et deux diamants, porté au poignet",
        ar: "سوار The Line: خيط أسود مع قضيب رفيع من الذهب الأبيض وألماستين، على المعصم"
      }
    }, {
      src: "assets/line-black-pocket.webp",
      alt: {
        en: "The Line bracelet: black cord with a slim white gold bar and two diamonds, worn with the hand in a pocket",
        fr: "Bracelet The Line : cordon noir avec une fine barre en or blanc et deux diamants, porté la main dans la poche",
        ar: "سوار The Line: خيط أسود مع قضيب رفيع من الذهب الأبيض وألماستين، واليد في الجيب"
      }
    }, {
      src: "assets/line-black-box.webp",
      alt: {
        en: "The Line bracelet: black cord with a slim white gold bar and two diamonds, beside the KAYN box and pouch",
        fr: "Bracelet The Line : cordon noir avec une fine barre en or blanc et deux diamants, à côté du coffret et de la pochette KAYN",
        ar: "سوار The Line: خيط أسود مع قضيب رفيع من الذهب الأبيض وألماستين، بجانب علبة وكيس KAYN"
      }
    }].concat(KAYN.lineGallery()),
    colors: [   // confirmed colour options
      { id: "olive", hex: "#2F3A2E", name: { en: "Olive green", fr: "Vert olive", ar: "أخضر زيتوني" }, show: 0, images: [] },
      { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, show: 2, images: [] }
    ],
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },
    diamond: { type: KAYN.labGrown, origin: null, carat: { en: "0.2 ct total", fr: "0,2 ct au total", ar: "0.2 قيراط إجمالاً" }, clarity: "VVS2", certification: "IGI", count: "2" },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "التصميم" }, value: { en: "Adjustable double cord with a slim bar", fr: "Double cordon ajustable avec une fine barre", ar: "خيط مزدوج قابل للتعديل مع قضيب رفيع" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "طريقة التثبيت" }, value: { en: "Bezel-set diamond at each end of the bar", fr: "Un diamant serti clos à chaque extrémité de la barre", ar: "ألماسة مثبّتة في إطار عند كل طرف من القضيب" } }
    ],
    dimensions: null,
    care: {
      en: ["Wipe gently with a soft, dry cloth.", "Store in the KAYN box when not worn.", "Keep away from perfume and harsh chemicals."],
      fr: ["Essuyer délicatement avec un chiffon doux et sec.", "Ranger dans l'écrin KAYN lorsqu'il n'est pas porté.", "Éviter le contact avec les parfums et produits agressifs."],
      ar: ["امسحه برفق بقطعة قماش ناعمة وجافة.", "احتفظ به في علبة KAYN عند عدم ارتدائه.", "أبعده عن العطور والمواد الكيميائية القاسية."]
    }
  },
  {
    id: "vector",
    slug: "vector",
    name: { en: "The Vector", fr: "The Vector", ar: "The Vector" },
    listing: {
      details: { en: "20 diamonds, 1 ct total · 14K white gold", fr: "20 diamants, 1 ct au total · or blanc 14 carats", ar: "20 ألماسة، 1 قيراط إجمالاً · ذهب أبيض عيار 14" }
    },
    short: {
      en: "Adjustable double cord, slim pavé bar, 14K white gold, 1 carat of diamonds.",
      fr: "Double cordon ajustable, fine barre pavée, or blanc 14 carats, 1 carat de diamants.",
      ar: "خيط مزدوج قابل للتعديل، قضيب رفيع مرصّع، ذهب أبيض عيار 14، ألماس بوزن 1 قيراط."
    },
    long: {
      en: "One line, drawn in white gold. The Vector pairs an adjustable double cord with a slim bar of 14K white gold, paved with 20 diamonds totalling 1 carat. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention. Delivered with an IGI certificate.",
      fr: "Une seule ligne, tracée en or blanc. The Vector associe un double cordon ajustable à une fine barre en or blanc 14 carats, pavée de 20 diamants totalisant 1 carat. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention. Livré avec un certificat IGI.",
      ar: "خط واحد يرسمه الذهب الأبيض. يجمع The Vector بين خيط مزدوج قابل للتعديل وقضيب رفيع من الذهب الأبيض عيار 14، مرصّع بـ 20 ألماسة بوزن إجمالي 1 قيراط. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه. يأتي مع شهادة IGI."
    },
    priceMAD: 8990, pricePlaceholder: false,
    gallery: [{
      src: "assets/vector-wrist-main.webp",
      alt: {
        en: "The Vector bracelet: black cord with a slim white gold bar paved with diamonds, worn on the wrist",
        fr: "Bracelet The Vector : cordon noir avec une fine barre en or blanc pavée de diamants, porté au poignet",
        ar: "سوار The Vector: خيط أسود مع قضيب رفيع من الذهب الأبيض مرصّع بالألماس، على المعصم"
      }
    }, {
      src: "assets/vector-box.webp",
      alt: {
        en: "The Vector bracelet: black cord with a slim white gold bar paved with diamonds, beside the KAYN box and pouch",
        fr: "Bracelet The Vector : cordon noir avec une fine barre en or blanc pavée de diamants, à côté du coffret et de la pochette KAYN",
        ar: "سوار The Vector: خيط أسود مع قضيب رفيع من الذهب الأبيض مرصّع بالألماس، بجانب علبة وكيس KAYN"
      }
    }, {
      src: "assets/vector-pocket.webp",
      alt: {
        en: "The Vector bracelet: black cord with a slim white gold bar paved with diamonds, worn with the hand in a pocket",
        fr: "Bracelet The Vector : cordon noir avec une fine barre en or blanc pavée de diamants, porté la main dans la poche",
        ar: "سوار The Vector: خيط أسود مع قضيب رفيع من الذهب الأبيض مرصّع بالألماس، واليد في الجيب"
      }
    }],
    colors: [
      { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, show: 0, images: [] }
    ],
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },
    diamond: { type: KAYN.labGrown, origin: null, carat: { en: "1 ct total", fr: "1 ct au total", ar: "1 قيراط إجمالاً" }, clarity: "VVS2", certification: "IGI", count: "20" },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "التصميم" }, value: { en: "Adjustable double cord with a slim bar", fr: "Double cordon ajustable avec une fine barre", ar: "خيط مزدوج قابل للتعديل مع قضيب رفيع" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "طريقة التثبيت" }, value: { en: "Pavé-set with 20 diamonds", fr: "Serti pavé de 20 diamants", ar: "ترصيع بافيه بـ 20 ألماسة" } }
    ],
    dimensions: null,
    care: {
      en: ["Wipe gently with a soft, dry cloth.", "Store in the KAYN box when not worn.", "Keep away from perfume and harsh chemicals."],
      fr: ["Essuyer délicatement avec un chiffon doux et sec.", "Ranger dans l'écrin KAYN lorsqu'il n'est pas porté.", "Éviter le contact avec les parfums et produits agressifs."],
      ar: ["امسحه برفق بقطعة قماش ناعمة وجافة.", "احتفظ به في علبة KAYN عند عدم ارتدائه.", "أبعده عن العطور والمواد الكيميائية القاسية."]
    }
  }
];

/* Home page "Precision, up close" banner (dark section): hovering a product swaps the photo,
   the description and the spec sheet. `photo` = [gallery index used for the alt text, file];
   `dim` darkens photos that have no dark-toned original. */
KAYN.spot = (function () {
  var T = function (en, fr, ar) { return { en: en, fr: fr, ar: ar }; };
  var L = {
    setting: T("Setting", "Sertissage", "التثبيت"), cord: T("Cord", "Cordon", "الخيط"),
    chain: T("Chain", "Chaîne", "السلسلة"), diamond: T("Diamond", "Diamant", "الألماس")
  };
  return {
    "the-minimalist": {
      photo: ["assets/one-black-dark.webp", 6], dim: false,
      copy: T("A single diamond in a round bezel, on a fine adjustable braided cord.", "Un seul diamant dans un serti clos rond, sur un cordon tressé fin ajustable.", "ألماسة واحدة في إطار دائري، على خيط منسوج رفيع قابل للتعديل."),
      rows: [
        [L.setting, T("Round bezel, in 14K white gold.", "Serti clos rond, en or blanc 14 carats.", "إطار دائري، من الذهب الأبيض عيار 14.")],
        [L.cord, T("Fine adjustable braided cord, in four colours.", "Cordon tressé fin ajustable, en quatre couleurs.", "خيط منسوج رفيع قابل للتعديل، بأربعة ألوان.")],
        [L.diamond, T("0.10 carat diamond, with an IGI certificate.", "Diamant de 0,10 carat, avec certificat IGI.", "ألماسة بوزن 0.10 قيراط، مع شهادة IGI.")]
      ]
    },
    "the-signature": {
      photo: ["assets/essential-3.webp", 4], dim: false,
      copy: T("A geometric setting around a single diamond, on an adjustable double cord.", "Un sertissage géométrique autour d'un seul diamant, sur un double cordon ajustable.", "تصميم هندسي يحيط بألماسة واحدة، على خيط مزدوج قابل للتعديل."),
      rows: [
        [L.setting, T("Geometric setting, in 14K white gold.", "Sertissage géométrique, en or blanc 14 carats.", "تصميم هندسي من الذهب الأبيض عيار 14.")],
        [L.cord, T("Adjustable double cord, in olive, black or burgundy.", "Double cordon ajustable, en olive, noir ou bordeaux.", "خيط مزدوج قابل للتعديل، بالزيتوني أو الأسود أو العنابي.")],
        [L.diamond, T("0.10 carat diamond, with an IGI certificate.", "Diamant de 0,10 carat, avec certificat IGI.", "ألماسة بوزن 0.10 قيراط، مع شهادة IGI.")]
      ]
    },
    "solis": {
      photo: ["assets/solis-box.webp", 3], dim: true,
      copy: T("A single diamond in a round bezel, on a fine chain.", "Un seul diamant dans un serti clos rond, sur une chaîne fine.", "ألماسة واحدة في إطار دائري، على سلسلة رفيعة."),
      rows: [
        [L.setting, T("Round bezel, in 14K white gold.", "Serti clos rond, en or blanc 14 carats.", "إطار دائري، من الذهب الأبيض عيار 14.")],
        [L.chain, T("Fine chain, in 14K white gold.", "Chaîne fine, en or blanc 14 carats.", "سلسلة رفيعة من الذهب الأبيض عيار 14.")],
        [L.diamond, T("0.10 carat diamond, with an IGI certificate.", "Diamant de 0,10 carat, avec certificat IGI.", "ألماسة بوزن 0.10 قيراط، مع شهادة IGI.")]
      ]
    },
    "the-line": {
      photo: ["assets/line-2.webp", 6], dim: true,
      copy: T("A slim polished bar with a diamond at each end, on an adjustable double cord.", "Une fine barre polie avec un diamant à chaque extrémité, sur un double cordon ajustable.", "قضيب رفيع مصقول بألماسة عند كل طرف، على خيط مزدوج قابل للتعديل."),
      rows: [
        [L.setting, T("Polished bar, in 14K white gold.", "Barre polie, en or blanc 14 carats.", "قضيب مصقول من الذهب الأبيض عيار 14.")],
        [L.cord, T("Adjustable double cord, in black or olive.", "Double cordon ajustable, en noir ou olive.", "خيط مزدوج قابل للتعديل، بالأسود أو الزيتوني.")],
        [L.diamond, T("Two diamonds totalling 0.2 carat, with an IGI certificate.", "Deux diamants totalisant 0,2 carat, avec certificat IGI.", "ألماستان بوزن إجمالي 0.2 قيراط، مع شهادة IGI.")]
      ]
    },
    "vector": {
      photo: ["assets/vector-box.webp", 1], dim: true,
      copy: T("A slim bar paved end to end with diamonds, on an adjustable double cord.", "Une fine barre entièrement pavée de diamants, sur un double cordon ajustable.", "قضيب رفيع مرصّع بالألماس من طرفه إلى طرفه، على خيط مزدوج قابل للتعديل."),
      rows: [
        [L.setting, T("Pavé bar, in 14K white gold.", "Barre pavée, en or blanc 14 carats.", "قضيب مرصّع من الذهب الأبيض عيار 14.")],
        [L.cord, T("Adjustable double cord, in black.", "Double cordon ajustable, en noir.", "خيط مزدوج قابل للتعديل، بالأسود.")],
        [L.diamond, T("20 diamonds totalling 1 carat, with an IGI certificate.", "20 diamants totalisant 1 carat, avec certificat IGI.", "20 ألماسة بوزن إجمالي 1 قيراط، مع شهادة IGI.")]
      ]
    }
  };
})();

/* Customer reviews shown on the home page.
   IMPORTANT: the entries below are SAMPLE reviews for design preview only (sample: true) and are
   labelled as such on the page. Replace them with real customer reviews before launch, and remove
   `sample: true` from each real one. `text` may be a string (shown as-is in every language) or
   { en, fr, ar }. `product` is a product slug. */
KAYN.reviews = [
  { name: { en: "Salma K.", fr: "Salma K.", ar: "سلمى ك." }, product: "the-signature", rating: 5, sample: true, text: {
    en: "Bought it for my husband, he was so happy.",
    fr: "Je l'ai acheté pour mon mari, il était super content.",
    ar: "اشتريته لزوجي وكان سعيداً جداً." } },
  { name: { en: "Youssef B.", fr: "Youssef B.", ar: "يوسف ب." }, product: "the-minimalist", rating: 5, sample: true, text: {
    en: "Very light, I forget I'm wearing it. Love it.",
    fr: "Très léger, j'oublie que je le porte. Je l'adore.",
    ar: "خفيف جداً، أنسى أنني ألبسه. أحببته." } },
  { name: { en: "Karim L.", fr: "Karim L.", ar: "كريم ل." }, product: "the-signature", rating: 5, sample: true, text: {
    en: "Very chic, great customer service. I recommend.",
    fr: "Très chic, super service client. Je recommande.",
    ar: "أنيق جداً وخدمة عملاء ممتازة. أنصح به." } },
  { name: { en: "Amine R.", fr: "Amine R.", ar: "أمين ر." }, product: "solis", rating: 5, sample: true, text: {
    en: "Beautiful piece, I get compliments all the time.",
    fr: "Une très belle pièce, on me fait des compliments tout le temps.",
    ar: "قطعة جميلة جداً وأتلقى المجاملات دائماً." } },
  { name: { en: "Nadia A.", fr: "Nadia A.", ar: "نادية أ." }, product: "the-line", rating: 5, sample: true, text: {
    en: "Gift for my fiancé's birthday. He loved it!",
    fr: "Cadeau pour l'anniversaire de mon fiancé. Il a adoré !",
    ar: "هدية لعيد ميلاد خطيبي. أحبّها كثيراً!" } },
  { name: { en: "Omar S.", fr: "Omar S.", ar: "عمر س." }, product: "the-line", rating: 5, sample: true, text: {
    en: "Different from everything else I have. Really nice.",
    fr: "Différent de tout ce que j'ai. Vraiment beau.",
    ar: "مختلف عن كل ما أملك. جميل فعلاً." } },
  { name: { en: "Mehdi T.", fr: "Mehdi T.", ar: "مهدي ت." }, product: "the-minimalist", rating: 5, sample: true, text: {
    en: "I wear it every day. Nice box too.",
    fr: "Je le porte tous les jours. Le coffret est beau aussi.",
    ar: "ألبسه كل يوم. والعلبة جميلة أيضاً." } },
  { name: { en: "Imane Z.", fr: "Imane Z.", ar: "إيمان ز." }, product: "solis", rating: 5, sample: true, text: {
    en: "Anniversary gift for my husband. He never takes it off.",
    fr: "Cadeau d'anniversaire de mariage pour mon mari. Il ne l'enlève plus.",
    ar: "هدية ذكرى زواجنا لزوجي. لا يخلعه أبداً." } },
  { name: { en: "Reda H.", fr: "Reda H.", ar: "رضا ه." }, product: "solis", rating: 5, sample: true, text: {
    en: "Bought it for my brother, he wears it every day.",
    fr: "Je l'ai pris pour mon frère, il le porte tous les jours.",
    ar: "اشتريته لأخي وهو يلبسه كل يوم." } }
];

KAYN.getProduct = function (slug) {
  return KAYN.products.find(function (p) { return p.slug === slug; });
};

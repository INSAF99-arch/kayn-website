/* KAYN — centralized frontend data.
   Everything marked PLACEHOLDER must be replaced with confirmed information before launch.
   Fields set to null are unconfirmed and are shown to visitors as "to be confirmed". */
window.KAYN = window.KAYN || {};

KAYN.site = {
  instagramUrl: "https://www.instagram.com/kayn_jewelry?mdxt=a29xeXF0aDRtZWl2&utm_source=qr",          // PLACEHOLDER: official account URL
  instagramHandle: "@kayn_jewelry",                             // PLACEHOLDER
  contactEmail: "contact@kayn.com",                 // PLACEHOLDER
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
    { id: "black", hex: "#0B0B0B", name: N.black, show: 4, images: [] },
    { id: "grey", hex: "#A9A9A9", name: N.grey, show: 1, images: [] },
    { id: "red", hex: "#D8261D", name: N.red, show: 2, images: [] }
  ];
};

/* The Minimalist gallery, in display order. The first image is the main image (product cards,
   hero, first photo on the product page). Choosing a colour jumps to the photo given by that
   colour's `show` index (null = stay on the current photo). */
KAYN.oneGallery = function () {
  var P = "assets/";
  var alt = function (en, fr, ar) { return { en: en, fr: fr, ar: ar }; };
  var worn = function (en, fr, ar) { return alt("The Minimalist " + en, "The Minimalist " + fr, "The Minimalist " + ar); };
  return [
    { src: P + "one-olive-wrist.webp", alt: worn("olive cord bracelet with a single diamond, worn on the wrist", "bracelet à cordon olive et un diamant unique, porté au poignet", "سوار بخيط زيتوني وألماسة واحدة على المعصم") },
    { src: P + "one-grey-sunset.webp", alt: worn("grey cord bracelet with a single diamond, worn at sunset", "bracelet à cordon gris et un diamant unique, porté au coucher du soleil", "سوار بخيط رمادي وألماسة واحدة عند الغروب") },
    { src: P + "one-red-wrist.webp", alt: worn("red cord bracelet with a single diamond, worn on the wrist", "bracelet à cordon rouge et un diamant unique, porté au poignet", "سوار بخيط أحمر وألماسة واحدة على المعصم") },
    { src: P + "one-olive-wrist-2.webp", alt: worn("olive cord bracelet with a single diamond, worn with a linen shirt", "bracelet à cordon olive et un diamant unique, porté avec une chemise en lin", "سوار بخيط زيتوني وألماسة واحدة مع قميص من الكتان") },
    { src: P + "one-black-flat.webp", alt: worn("black cord bracelet with a single diamond in a round bezel", "bracelet à cordon noir et un diamant unique en serti clos rond", "سوار بخيط أسود وألماسة واحدة في إطار دائري") },
    { src: P + "one-colours-stone.webp", alt: worn("in red, olive, black and grey on a stone surface", "en rouge, olive, noir et gris sur une pierre", "بألوان الأحمر والزيتوني والأسود والرمادي على سطح حجري") }
  ];
};

/* The Signature: photos after the main image (assets/essential-main.jpg), in display order. */
KAYN.signatureGallery = function () {
  var P = "assets/";
  var a = function (en, fr, ar) { return { en: "The Signature " + en, fr: "The Signature " + fr, ar: "The Signature " + ar }; };
  return [
    { src: P + "essential-2.webp", alt: a("bracelets in black, olive and burgundy, worn together on the wrist", "bracelets en noir, olive et bordeaux, portés ensemble au poignet", "أساور بالأسود والزيتوني والعنابي على المعصم") },
    { src: P + "essential-3.webp", alt: a("in black, olive and burgundy on a stone surface", "en noir, olive et bordeaux sur une pierre", "بالأسود والزيتوني والعنابي على سطح حجري") },
    { src: P + "essential-4.jpg", alt: a("olive cord bracelet with an octagonal setting and diamond, on stone", "bracelet à cordon olive, sertissage octogonal et diamant, sur une pierre", "سوار بخيط زيتوني وتصميم ثماني وألماسة على الحجر") },
    { src: P + "essential-5.jpg", alt: a("olive cord bracelet with an octagonal setting and diamond, on a rock", "bracelet à cordon olive, sertissage octogonal et diamant, sur un rocher", "سوار بخيط زيتوني وتصميم ثماني وألماسة على صخرة") },
    { src: P + "essential-6.jpg", alt: a("close-up of the octagonal setting and diamond", "gros plan sur le sertissage octogonal et le diamant", "لقطة قريبة للتصميم الثماني والألماسة") }
  ];
};

/* The Line: photos after the main image (assets/line-5.webp), in display order. */
KAYN.lineGallery = function () {
  var P = "assets/";
  var a = function (en, fr, ar) { return { en: "The Line " + en, fr: "The Line " + fr, ar: "The Line " + ar }; };
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
    card: {   // text on the home and collection cards
      en: "An understated essential, designed to make an impression without asking for attention. Refined, effortless, and made to feel like your own.",
      fr: "Un essentiel discret, conçu pour marquer sans chercher à attirer l'attention. Raffiné, sans effort, et fait pour devenir le vôtre.",
      ar: "قطعة أساسية هادئة، صُمّمت لتترك أثراً دون أن تطلب الانتباه. أنيقة وسلسة، ومصنوعة لتشعر أنها لك."
    },
    short: {
      en: "0.10 carat lab-grown diamond · 14K white gold. Understated by design.",
      fr: "Diamant de laboratoire de 0,10 carat · or blanc 14 carats. Discret par nature.",
      ar: "ألماسة مصنّعة في المختبر 0.10 قيراط · ذهب أبيض عيار 14. أناقة هادئة."
    },
    long: {
      en: "Understated by design. A refined cord bracelet, elevated by a 0.10 carat lab-grown diamond set in polished 14K white gold. Clean lines, premium materials, and a discreet touch of brilliance. Delivered with an IGI certificate. Wear it alone. Make it yours.",
      fr: "Discret par nature. Un bracelet sur cordon raffiné, sublimé par un diamant de laboratoire de 0,10 carat serti dans de l'or blanc 14 carats poli. Des lignes épurées, des matériaux premium et une touche discrète d'éclat. Livré avec un certificat IGI. À porter seul. À faire vôtre.",
      ar: "أناقة هادئة. سوار أنيق بخيط راقٍ، يزينه ألماسة مصنّعة في المختبر بوزن 0.10 قيراط مثبتة في ذهب أبيض عيار 14 مصقول. خطوط نقية، وخامات فاخرة، ولمسة خفية من البريق. يأتي مع شهادة IGI. ارتدِه وحده. واجعله لك."
    },
    priceMAD: 1590, pricePlaceholder: false,
    gallery: KAYN.oneGallery(),
    colors: KAYN.oneColors(),
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },                // setting confirmed by brief; other hardware unconfirmed
    diamond: { type: KAYN.labGrown, origin: null, carat: "0.10 ct", clarity: "VVS2", certification: "IGI", count: "1" },
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
    card: {
      en: "A defining detail for those who appreciate individuality. Confident in character and considered in every line, it brings a subtle edge to everyday style.",
      fr: "Un détail distinctif pour ceux qui apprécient l'individualité. Affirmé de caractère et réfléchi dans chaque ligne, il apporte une touche subtile de caractère au style du quotidien.",
      ar: "تفصيل مميّز لمن يقدّرون التفرّد. واثق في طابعه ومدروس في كل خط، يضفي لمسة خفية من الحدّة على أسلوبك اليومي."
    },
    short: {
      en: "Olive-green cord, geometric 14K white gold setting, 0.10 carat diamond.",
      fr: "Cordon vert olive, sertissage géométrique en or blanc 14 carats, diamant de 0,10 carat.",
      ar: "خيط أخضر زيتوني، تصميم هندسي من الذهب الأبيض عيار 14، وألماسة بوزن 0.10 قيراط."
    },
    long: {
      en: "A refined expression of understated luxury. The Signature pairs an olive-green cord with a geometric diamond setting in 14K white gold, creating a balance between precision and simplicity. Designed for everyday wear, it makes a subtle statement without demanding attention.",
      fr: "Une expression raffinée du luxe discret. The Signature associe un cordon vert olive à un sertissage géométrique en or blanc 14 carats, pour un équilibre entre précision et simplicité. Conçu pour le quotidien, il affirme un style subtil sans chercher à attirer l'attention.",
      ar: "تعبير راقٍ عن الفخامة الهادئة. يجمع The Signature بين خيط أخضر زيتوني وتصميم هندسي للألماسة من الذهب الأبيض عيار 14، ليحقق توازناً بين الدقة والبساطة. صُمّم للاستخدام اليومي، ويترك أثراً أنيقاً دون أن يلفت الانتباه."
    },
    priceMAD: 2290, pricePlaceholder: false,
    gallery: [{
      src: "assets/essential-main.jpg",
      alt: {
        en: "The Signature bracelet: geometric setting with a round diamond on a double olive cord, worn on the wrist",
        fr: "Bracelet The Signature : sertissage géométrique avec diamant rond sur un double cordon olive, porté au poignet",
        ar: "سوار The Signature: تصميم هندسي مع ألماسة مستديرة على خيط زيتوني مزدوج، على المعصم"
      }
    }].concat(KAYN.signatureGallery()),
    colors: [   // colours visible in the supplied photos; PLACEHOLDER until confirmed
      { id: "olive", hex: "#2F3A2E", name: { en: "Olive green", fr: "Vert olive", ar: "أخضر زيتوني" }, show: 0, images: [] },
      { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, show: 1, images: [] },
      { id: "burgundy", hex: "#6B1A22", name: { en: "Burgundy", fr: "Bordeaux", ar: "عنابي" }, show: 1, images: [] }
    ],
    metal: {
      setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" },
      hardware: { en: "White-gold-tone loops and detailing", fr: "Anneaux et détails de ton or blanc", ar: "حلقات وتفاصيل بلون الذهب الأبيض" }
    },
    diamond: { type: KAYN.labGrown, origin: null, carat: "0.10 ct", clarity: "VVS2", certification: "IGI", count: "1" },
    extraSpecs: [   // shown after the standard rows
      { label: { en: "Design", fr: "Conception", ar: "الخيط" }, value: { en: "Double-strand adjustable cord", fr: "Cordon double brin ajustable", ar: "خيط مزدوج قابل للتعديل" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "نمط التصميم" }, value: { en: "Geometric centrepiece with a round diamond", fr: "Pièce centrale géométrique avec un diamant rond", ar: "قطعة مركزية هندسية مع ألماسة مستديرة" } },
      { label: { en: "Fit", fr: "Taille", ar: "المقاس" }, value: { en: "Adjustable", fr: "Ajustable", ar: "قابل للتعديل" } }
    ],
    dimensions: null,
    care: null
  },
  {
    id: "solis",
    slug: "solis",
    name: { en: "SOLIS", fr: "SOLIS", ar: "SOLIS" },
    optionLabel: { en: "Choose your metal", fr: "Choisissez votre métal", ar: "اختر المعدن" },
    card: {
      en: "Clean lines and a quiet brilliance give this piece its character. Elegant without excess, SOLIS brings a refined finishing touch to any look.",
      fr: "Des lignes épurées et un éclat discret donnent à cette pièce son caractère. Élégant sans excès, SOLIS apporte une touche finale raffinée à toutes les tenues.",
      ar: "خطوط نقية وبريق هادئ يمنحان هذه القطعة طابعها. أنيق دون مبالغة، يضيف SOLIS لمسة أخيرة راقية إلى أي إطلالة."
    },
    short: {
      en: "Fine chain with a single bezel-set diamond, in 14K white or yellow gold.",
      fr: "Chaîne fine avec un diamant serti clos, en or blanc ou jaune 14 carats.",
      ar: "سلسلة رفيعة مع ألماسة واحدة مثبّتة في إطار دائري، من الذهب الأبيض أو الأصفر عيار 14."
    },
    long: {
      en: "A subtle statement. An unmistakable presence. Designed for those who appreciate the details, SOLIS pairs a refined chain with a single bezel-set brilliant stone. Its clean silhouette and polished finish create a balance of simplicity and sophistication, making it equally suited to everyday wear or more elevated occasions. Wear it alone for a discreet touch of distinction, or pair it with your favourite watch for a considered, effortless look. Less, but better.",
      fr: "Une déclaration discrète. Une présence indéniable. Conçu pour ceux qui apprécient les détails, SOLIS associe une chaîne raffinée à une unique pierre brillante sertie clos. Sa silhouette épurée et sa finition polie créent un équilibre entre simplicité et sophistication, pour un port quotidien comme pour les occasions plus élégantes. À porter seul pour une touche discrète de distinction, ou avec votre montre préférée pour un style réfléchi et sans effort. Moins, mais mieux.",
      ar: "لمسة هادئة. حضور لا يُنسى. صُمّم لمن يقدّرون التفاصيل، يجمع SOLIS بين سلسلة أنيقة وحجر لامع واحد مثبّت في إطار دائري. يخلق شكله النقي ولمسته المصقولة توازناً بين البساطة والرقيّ، فيناسب الاستخدام اليومي كما المناسبات الأرقى. ارتدِه وحده للمسة تميّز هادئة، أو مع ساعتك المفضلة لإطلالة مدروسة بلا تكلف. الأقل، لكن الأفضل."
    },
    priceMAD: 3090, pricePlaceholder: false,
    gallery: [
      { src: "assets/solis-main.webp", alt: { en: "SOLIS bracelet in 14K white gold: fine chain with a single bezel-set diamond, worn on the wrist", fr: "Bracelet SOLIS en or blanc 14 carats : chaîne fine avec un diamant serti clos, porté au poignet", ar: "سوار SOLIS من الذهب الأبيض عيار 14: سلسلة رفيعة مع ألماسة في إطار دائري، على المعصم" } },
      { src: "assets/solis-2.webp", alt: { en: "Three SOLIS chain bracelets with a diamond, a green stone and a pink stone, worn together on the wrist", fr: "Trois bracelets chaîne SOLIS avec un diamant, une pierre verte et une pierre rose, portés ensemble au poignet", ar: "ثلاثة أساور سلسلة SOLIS بألماسة وحجر أخضر وحجر وردي، على المعصم" } },
      { src: "assets/solis-3.webp", alt: { en: "SOLIS bracelet in 14K yellow gold with a bezel-set diamond, worn on the wrist", fr: "Bracelet SOLIS en or jaune 14 carats avec un diamant serti clos, porté au poignet", ar: "سوار SOLIS من الذهب الأصفر عيار 14 مع ألماسة في إطار دائري، على المعصم" } },
      { src: "assets/solis-4.webp", alt: { en: "Three SOLIS bracelets in 14K yellow gold with a diamond, a green stone and a pink stone, worn together on the wrist", fr: "Trois bracelets SOLIS en or jaune 14 carats avec un diamant, une pierre verte et une pierre rose, portés ensemble au poignet", ar: "ثلاثة أساور SOLIS من الذهب الأصفر عيار 14 بألماسة وحجر أخضر وحجر وردي، على المعصم" } }
    ],
    colors: [   // metal options
      { id: "white-gold", hex: "#D9D9D6", name: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, show: 0, images: [] },
      { id: "yellow-gold", hex: "#C9A24A", name: { en: "14K yellow gold", fr: "Or jaune 14 carats", ar: "ذهب أصفر عيار 14" }, show: 2, images: [] }
    ],
    stoneLabel: { en: "Choose your stone", fr: "Choisissez votre pierre", ar: "اختر الحجر" },
    stones: [   // stone options; photos live in the gallery above
      { id: "diamond", hex: "#FFFFFF", name: { en: "Diamond", fr: "Diamant", ar: "ألماس" }, show: null },   // null = show the selected metal's photo
      { id: "green", hex: "#1F8A5B", name: { en: "Green stone", fr: "Pierre verte", ar: "حجر أخضر" }, show: { "white-gold": 1, "yellow-gold": 3 } },
      { id: "pink", hex: "#C2185B", name: { en: "Pink stone", fr: "Pierre rose", ar: "حجر وردي" }, show: { "white-gold": 1, "yellow-gold": 3 } }
    ],
    metal: { setting: { en: "14K white gold or 14K yellow gold", fr: "Or blanc ou or jaune 14 carats", ar: "ذهب أبيض أو أصفر عيار 14" }, hardware: null },
    diamond: {
      type: { en: "Lab-grown (diamond, green and pink stones)", fr: "De laboratoire (diamant, pierres verte et rose)", ar: "مصنّعة في المختبر (ألماس وحجر أخضر ووردي)" },
      origin: null, carat: { en: "0.10 ct per stone", fr: "0,10 ct par pierre", ar: "0.10 قيراط لكل حجر" }, clarity: "VVS2", certification: "IGI", count: "1"
    },
    extraSpecs: [
      { label: { en: "Design", fr: "Conception", ar: "التصميم العام" }, value: { en: "Minimalist chain bracelet with a single round stone", fr: "Bracelet chaîne minimaliste avec une seule pierre ronde", ar: "سوار سلسلة بسيط مع حجر دائري واحد" } },
      { label: { en: "Stone options", fr: "Choix de pierres", ar: "خيارات الأحجار" }, value: { en: "Diamond, green stone or pink stone", fr: "Diamant, pierre verte ou pierre rose", ar: "ألماس أو حجر أخضر أو حجر وردي" } },
      { label: { en: "Setting style", fr: "Style de sertissage", ar: "نمط التثبيت" }, value: { en: "Circular bezel setting", fr: "Sertissage clos circulaire", ar: "تثبيت في إطار دائري" } },
      { label: { en: "Fit", fr: "Taille", ar: "المقاس" }, value: { en: "Delicate profile designed for everyday styling", fr: "Profil délicat pensé pour un style quotidien", ar: "تصميم رفيع ناعم مناسب للإطلالات اليومية" } }
    ],
    dimensions: null,
    care: null
  },
  {
    id: "the-line",
    slug: "the-line",
    name: { en: "The Line", fr: "The Line", ar: "The Line" },
    card: {
      en: "Defined by balance and clean geometry, this piece makes simplicity its signature. Modern, composed, and designed to stand apart without saying too much.",
      fr: "Défini par l'équilibre et une géométrie épurée, ce bijou fait de la simplicité sa signature. Moderne, maîtrisé, et conçu pour se démarquer sans en dire trop.",
      ar: "يتميّز بالتوازن والهندسة النقية، وتصبح البساطة توقيع هذه القطعة. عصرية ومتزنة، وصُمّمت لتتميّز دون أن تقول الكثير."
    },
    short: {
      en: "Black cord, slim polished 14K white gold bar, diamond accents.",
      fr: "Cordon noir, fine barre en or blanc 14 carats poli, touches de diamant.",
      ar: "خيط أسود، وقضيب رفيع من الذهب الأبيض عيار 14 المصقول، ولمسات من الألماس."
    },
    long: {
      en: "Pure lines, quietly precise. The Line pairs a black cord with a slim bar of polished 14K white gold, accented with lab-grown diamonds. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention.",
      fr: "Des lignes pures, d'une précision discrète. The Line associe un cordon noir à une fine barre en or blanc 14 carats poli, rehaussée de diamants de laboratoire. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention.",
      ar: "خطوط نقية بدقة هادئة. يجمع The Line بين خيط أسود وقضيب رفيع من الذهب الأبيض عيار 14 المصقول، تزينه ألماسات مصنّعة في المختبر. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه."
    },
    priceMAD: 3890, pricePlaceholder: false,
    gallery: [{
      src: "assets/line-5.webp",
      alt: {
        en: "The Line bracelet: black cord with a slim white gold bar and two diamonds, worn on the wrist",
        fr: "Bracelet The Line : cordon noir avec une fine barre en or blanc et deux diamants, porté au poignet",
        ar: "سوار The Line: خيط أسود مع قضيب رفيع من الذهب الأبيض وألماستين، على المعصم"
      }
    }].concat(KAYN.lineGallery()),
    colors: [   // colours visible in the supplied photos; PLACEHOLDER until confirmed
      { id: "black", hex: "#0B0B0B", name: { en: "Black", fr: "Noir", ar: "أسود" }, show: 0, images: [] },
      { id: "olive", hex: "#2F3A2E", name: { en: "Olive green", fr: "Vert olive", ar: "أخضر زيتوني" }, show: 3, images: [] }
    ],
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },
    diamond: { type: KAYN.labGrown, origin: null, carat: { en: "0.10 ct each", fr: "0,10 ct chacun", ar: "0.10 قيراط لكل ألماسة" }, clarity: "VVS2", certification: "IGI", count: "2" },
    dimensions: null,
    care: null
  }
];

/* Customer reviews shown on the home page.
   IMPORTANT: the entries below are SAMPLE reviews for design preview only (sample: true) and are
   labelled as such on the page. Replace them with real customer reviews before launch, and remove
   `sample: true` from each real one. `text` may be a string (shown as-is in every language) or
   { en, fr, ar }. `product` is a product slug. */
KAYN.reviews = [
  { name: "Youssef B.", product: "the-minimalist", rating: 5, sample: true, text: {
    en: "Exactly what I wanted: simple, light, and I forget I'm wearing it. The diamond catches the light just enough.",
    fr: "Exactement ce que je voulais : simple, léger, et j'oublie que je le porte. Le diamant capte juste assez la lumière.",
    ar: "هو بالضبط ما أردته: بسيط وخفيف، وأنسى أنني أرتديه. الألماسة تلتقط الضوء بالقدر المناسب." } },
  { name: "Karim L.", product: "the-signature", rating: 5, sample: true, text: {
    en: "The setting is beautifully made. It looks sharp with a shirt and just as good with a T-shirt.",
    fr: "Le sertissage est magnifiquement réalisé. Il est élégant avec une chemise et tout aussi beau avec un t-shirt.",
    ar: "التصميم مصنوع ببراعة. يبدو أنيقاً مع القميص وبنفس الجمال مع التيشيرت." } },
  { name: "Amine R.", product: "solis", rating: 5, sample: true, text: {
    en: "Delicate without looking fragile. I chose the yellow gold and I get compliments every week.",
    fr: "Délicat sans paraître fragile. J'ai pris l'or jaune et je reçois des compliments chaque semaine.",
    ar: "رقيق دون أن يبدو هشاً. اخترت الذهب الأصفر وأتلقى المجاملات كل أسبوع." } },
  { name: "Omar S.", product: "the-line", rating: 5, sample: true, text: {
    en: "Clean, modern and different from anything else I own. The two stones are a subtle touch.",
    fr: "Épuré, moderne et différent de tout ce que je possède. Les deux pierres apportent une touche subtile.",
    ar: "نقي وعصري ومختلف عن كل ما أملك. الألماستان تضيفان لمسة خفية." } },
  { name: "Mehdi T.", product: "the-minimalist", rating: 5, sample: true, text: {
    en: "I've worn it every day since the first week and it already feels like part of me. The packaging was lovely too.",
    fr: "Porté tous les jours dès la première semaine, il fait désormais partie de moi. L'emballage était superbe aussi.",
    ar: "ارتديته كل يوم منذ الأسبوع الأول وأصبح جزءاً مني. كانت العلبة جميلة أيضاً." } },
  { name: "Reda H.", product: "solis", rating: 5, sample: true, text: {
    en: "A gift for my brother. He never takes it off. Understated and elegant, exactly his style.",
    fr: "Un cadeau pour mon frère. Il ne l'enlève plus. Discret et élégant, tout à fait son style.",
    ar: "هدية لأخي. لا يخلعه أبداً. هادئ وأنيق، تماماً مثل ذوقه." } },
  { name: "Salma K.", product: "the-signature", rating: 5, sample: true, text: {
    en: "I bought it as a gift for my husband and he hasn't taken it off since. Exactly his style: understated and elegant.",
    fr: "Je l'ai offert à mon mari et il ne l'a plus quitté depuis. Exactement son style : discret et élégant.",
    ar: "اشتريته هدية لزوجي ولم يخلعه منذ ذلك الحين. تماماً مثل ذوقه: هادئ وأنيق." } },
  { name: "Nadia A.", product: "the-line", rating: 5, sample: true, text: {
    en: "I gave it to my fiancé for his birthday. He loved it, and honestly so did I. The packaging made the moment feel special.",
    fr: "Je l'ai offert à mon fiancé pour son anniversaire. Il l'a adoré, et moi aussi. L'emballage a rendu le moment vraiment spécial.",
    ar: "قدّمته لخطيبي في عيد ميلاده. أحبّه كثيراً وأنا أيضاً. جعلت العلبة اللحظة مميزة حقاً." } },
  { name: "Imane Z.", product: "solis", rating: 5, sample: true, text: {
    en: "I chose SOLIS for our wedding anniversary. He wears it every day and gets compliments. Best gift I've given him.",
    fr: "J'ai choisi SOLIS pour notre anniversaire de mariage. Il le porte tous les jours et reçoit des compliments. Le plus beau cadeau que je lui aie fait.",
    ar: "اخترت SOLIS هدية لذكرى زواجنا. يرتديه كل يوم ويتلقى المجاملات. أفضل هدية قدمتها له." } }
];

KAYN.getProduct = function (slug) {
  return KAYN.products.find(function (p) { return p.slug === slug; });
};

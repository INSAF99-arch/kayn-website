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
    { id: "black", hex: "#0B0B0B", name: N.black, show: 5, images: [] },
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
  var a = function (en, fr, ar) { return { en: "The Signature: " + en, fr: "The Signature : " + fr, ar: "The Signature: " + ar }; };
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
    listing: {   // card text: large title, smaller details line, then the price
      title: { en: "The Minimalist Cord Bracelet", fr: "Bracelet cordon The Minimalist", ar: "سوار The Minimalist بخيط" },
      details: { en: "0.10ct Diamond, 14K White Gold", fr: "Diamant 0,10ct, or blanc 14 carats", ar: "ألماسة 0.10 قيراط، ذهب أبيض عيار 14" }
    },
    details: {   // two of the three descriptive sections on the product page (the third is shared)
      design: {
        en: "A single diamond set in a fine round bezel, resting on a slender braided cord. Nothing more, nothing less: a quiet detail that sits close to the wrist and disappears into your day, then catches the light when you least expect it.",
        fr: "Un seul diamant serti dans un fin serti clos rond, posé sur un cordon tressé délicat. Rien de plus, rien de moins : un détail discret qui épouse le poignet, se fait oublier dans la journée, puis capte la lumière quand on s'y attend le moins.",
        ar: "ألماسة واحدة في إطار دائري رفيع، تستقر على خيط منسوج نحيل. لا أكثر ولا أقل: تفصيل هادئ يلتصق بالمعصم ويختفي في يومك، ثم يلتقط الضوء حين لا تتوقع."
      },
      materials: {
        en: "The bezel is crafted in 14K white gold and holds a 0.10 carat diamond of VVS2 clarity, delivered with an IGI certificate. The cord is available in olive, black, grey and red.",
        fr: "Le sertissage est réalisé en or blanc 14 carats et accueille un diamant de 0,10 carat de pureté VVS2, livré avec un certificat IGI. Le cordon existe en olive, noir, gris et rouge.",
        ar: "صُنع الإطار من الذهب الأبيض عيار 14 ويحمل ألماسة بوزن 0.10 قيراط بدرجة نقاء VVS2، وتأتي مع شهادة IGI. يتوفر الخيط بالألوان الزيتوني والأسود والرمادي والأحمر."
      }
    },
    card: {   // longer marketing text (not shown on the cards at the moment)
      en: "Diamond and 14K white gold, in an understated essential designed to make an impression without asking for attention. Refined, effortless, and made to feel like your own.",
      fr: "Diamant et or blanc 14 carats, dans un essentiel discret conçu pour marquer sans chercher à attirer l'attention. Raffiné, sans effort, et fait pour devenir le vôtre.",
      ar: "ألماس وذهب أبيض عيار 14، في قطعة أساسية هادئة صُمّمت لتترك أثراً دون أن تطلب الانتباه. أنيقة وسلسة، ومصنوعة لتشعر أنها لك."
    },
    short: {
      en: "0.10 carat diamond · 14K white gold. Understated by design.",
      fr: "Diamant de 0,10 carat · or blanc 14 carats. Discret par nature.",
      ar: "ألماسة 0.10 قيراط · ذهب أبيض عيار 14. أناقة هادئة."
    },
    long: {
      en: "Understated by design. A refined cord bracelet, elevated by a 0.10 carat diamond set in polished 14K white gold. Clean lines, premium materials, and a discreet touch of brilliance. Delivered with an IGI certificate. Wear it alone. Make it yours.",
      fr: "Discret par nature. Un bracelet sur cordon raffiné, sublimé par un diamant de 0,10 carat serti dans de l'or blanc 14 carats poli. Des lignes épurées, des matériaux premium et une touche discrète d'éclat. Livré avec un certificat IGI. À porter seul. À faire vôtre.",
      ar: "أناقة هادئة. سوار أنيق بخيط راقٍ، يزينه ألماسة بوزن 0.10 قيراط مثبتة في ذهب أبيض عيار 14 مصقول. خطوط نقية، وخامات فاخرة، ولمسة خفية من البريق. يأتي مع شهادة IGI. ارتدِه وحده. واجعله لك."
    },
    priceMAD: 1590, pricePlaceholder: false,
    gallery: KAYN.oneGallery(),
    colors: KAYN.oneColors(),
    metal: { setting: { en: "14K white gold", fr: "Or blanc 14 carats", ar: "ذهب أبيض عيار 14" }, hardware: null },                // setting confirmed by brief; other hardware unconfirmed
    diamond: { type: KAYN.labGrown, origin: null, carat: KAYN.carat010, clarity: "VVS2", certification: "IGI", count: "1" },
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
      title: { en: "The Signature Cord Bracelet", fr: "Bracelet cordon The Signature", ar: "سوار The Signature بخيط" },
      details: { en: "0.10ct Diamond, Geometric 14K White Gold Setting", fr: "Diamant 0,10ct, sertissage géométrique en or blanc 14 carats", ar: "ألماسة 0.10 قيراط، تصميم هندسي من الذهب الأبيض عيار 14" }
    },
    details: {
      design: {
        en: "A geometric centrepiece with a round diamond at its heart, carried on a double-strand adjustable cord with white-gold-tone loops. Precise in form and calm in presence, it is designed to be adjusted to your wrist and worn every day.",
        fr: "Une pièce centrale géométrique avec un diamant rond en son cœur, portée par un double cordon ajustable aux anneaux de ton or blanc. Précis dans sa forme et calme dans sa présence, il s'ajuste à votre poignet et se porte chaque jour.",
        ar: "قطعة مركزية هندسية تحمل في قلبها ألماسة مستديرة، على خيط مزدوج قابل للتعديل مع حلقات بلون الذهب الأبيض. دقيقة في شكلها وهادئة في حضورها، صُممت لتُضبط على معصمك وتُلبس كل يوم."
      },
      materials: {
        en: "The setting is crafted in 14K white gold and holds a 0.10 carat diamond of VVS2 clarity, delivered with an IGI certificate. Available on an olive, black or burgundy cord.",
        fr: "Le sertissage est réalisé en or blanc 14 carats et accueille un diamant de 0,10 carat de pureté VVS2, livré avec un certificat IGI. Disponible sur cordon olive, noir ou bordeaux.",
        ar: "صُنع الإطار من الذهب الأبيض عيار 14 ويحمل ألماسة بوزن 0.10 قيراط بدرجة نقاء VVS2، وتأتي مع شهادة IGI. متوفر بخيط زيتوني أو أسود أو عنابي."
      }
    },
    card: {
      en: "A defining detail in 14K white gold and diamond, for those who appreciate individuality. Confident in character and considered in every line, it brings a subtle edge to everyday style.",
      fr: "Un détail distinctif en or blanc 14 carats et diamant, pour ceux qui apprécient l'individualité. Affirmé de caractère et réfléchi dans chaque ligne, il apporte une touche subtile de caractère au style du quotidien.",
      ar: "تفصيل مميّز من الذهب الأبيض عيار 14 والألماس، لمن يقدّرون التفرّد. واثق في طابعه ومدروس في كل خط، يضفي لمسة خفية من الحدّة على أسلوبك اليومي."
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
    diamond: { type: KAYN.labGrown, origin: null, carat: KAYN.carat010, clarity: "VVS2", certification: "IGI", count: "1" },
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
    listing: {
      title: { en: "SOLIS Chain Bracelet", fr: "Bracelet chaîne SOLIS", ar: "سوار سلسلة SOLIS" },
      details: { en: "0.10ct Diamond, 14K White or Yellow Gold", fr: "Diamant 0,10ct, or blanc ou jaune 14 carats", ar: "ألماسة 0.10 قيراط، ذهب أبيض أو أصفر عيار 14" }
    },
    details: {
      design: {
        en: "A fine chain interrupted by a single bezel-set stone: a delicate profile with quiet brilliance. Light on the wrist and easy to style, it sits comfortably alone or beside your favourite watch.",
        fr: "Une chaîne fine ponctuée d'une seule pierre sertie clos : un profil délicat, d'un éclat discret. Légère au poignet et facile à porter, elle se suffit à elle-même ou accompagne votre montre préférée.",
        ar: "سلسلة رفيعة تتوسطها حجر واحد مثبّت في إطار دائري: حضور رقيق وبريق هادئ. خفيفة على المعصم وسهلة التنسيق، تكتفي بنفسها أو ترافق ساعتك المفضلة."
      },
      materials: {
        en: "Crafted in 14K white or yellow gold, with a 0.10 carat stone of VVS2 clarity, delivered with an IGI certificate. Choose a diamond, or a green or pink stone.",
        fr: "Réalisé en or blanc ou jaune 14 carats, avec une pierre de 0,10 carat de pureté VVS2, livrée avec un certificat IGI. Au choix : un diamant, ou une pierre verte ou rose.",
        ar: "صُنع من الذهب الأبيض أو الأصفر عيار 14، مع حجر بوزن 0.10 قيراط بدرجة نقاء VVS2، ويأتي مع شهادة IGI. اختر ألماساً أو حجراً أخضر أو وردياً."
      }
    },
    card: {
      en: "Fine 14K white or yellow gold set with a brilliant diamond. Clean lines and a quiet brilliance give this piece its character. Elegant without excess, SOLIS brings a refined finishing touch to any look.",
      fr: "De l'or blanc ou jaune 14 carats serti d'un brillant diamant. Des lignes épurées et un éclat discret donnent à cette pièce son caractère. Élégant sans excès, SOLIS apporte une touche finale raffinée à toutes les tenues.",
      ar: "ذهب أبيض أو أصفر عيار 14 مرصّع بألماسة لامعة. خطوط نقية وبريق هادئ يمنحان هذه القطعة طابعها. أنيق دون مبالغة، يضيف SOLIS لمسة أخيرة راقية إلى أي إطلالة."
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
    listing: {
      title: { en: "The Line Cord Bracelet", fr: "Bracelet cordon The Line", ar: "سوار The Line بخيط" },
      details: { en: "Two 0.10ct Diamonds, 14K White Gold Bar", fr: "Deux diamants de 0,10ct, barre en or blanc 14 carats", ar: "ألماستان 0.10 قيراط لكل منهما، قضيب من الذهب الأبيض عيار 14" }
    },
    details: {
      design: {
        en: "A slim, polished bar of white gold with a diamond set at each end, resting on a fine cord. Clean geometry and a measured shine: a modern line drawn across the wrist.",
        fr: "Une fine barre polie en or blanc, avec un diamant serti à chaque extrémité, posée sur un cordon fin. Une géométrie épurée et un éclat mesuré : une ligne moderne tracée sur le poignet.",
        ar: "قضيب رفيع مصقول من الذهب الأبيض، بألماسة مثبّتة عند كل طرف، يستقر على خيط رفيع. هندسة نقية وبريق متزن: خط عصري يرسم المعصم."
      },
      materials: {
        en: "The bar is crafted in 14K white gold and set with two diamonds of 0.10 carat each, VVS2 clarity, delivered with an IGI certificate. Available on a black or olive cord.",
        fr: "La barre est réalisée en or blanc 14 carats et sertie de deux diamants de 0,10 carat chacun, de pureté VVS2, livrés avec un certificat IGI. Disponible sur cordon noir ou olive.",
        ar: "صُنع القضيب من الذهب الأبيض عيار 14 ويحمل ألماستين بوزن 0.10 قيراط لكل منهما بدرجة نقاء VVS2، وتأتي مع شهادة IGI. متوفر بخيط أسود أو زيتوني."
      }
    },
    card: {
      en: "A slim bar of 14K white gold set with two diamonds. Defined by balance and clean geometry, this piece makes simplicity its signature. Modern, composed, and designed to stand apart without saying too much.",
      fr: "Une fine barre en or blanc 14 carats sertie de deux diamants. Défini par l'équilibre et une géométrie épurée, ce bijou fait de la simplicité sa signature. Moderne, maîtrisé, et conçu pour se démarquer sans en dire trop.",
      ar: "قضيب رفيع من الذهب الأبيض عيار 14 مرصّع بألماستين. يتميّز بالتوازن والهندسة النقية، وتصبح البساطة توقيع هذه القطعة. عصرية ومتزنة، وصُمّمت لتتميّز دون أن تقول الكثير."
    },
    short: {
      en: "Black cord, slim polished 14K white gold bar, diamond accents.",
      fr: "Cordon noir, fine barre en or blanc 14 carats poli, touches de diamant.",
      ar: "خيط أسود، وقضيب رفيع من الذهب الأبيض عيار 14 المصقول، ولمسات من الألماس."
    },
    long: {
      en: "Pure lines, quietly precise. The Line pairs a black cord with a slim bar of polished 14K white gold, accented with diamonds. Designed for everyday wear, it adds a discreet touch of brilliance without demanding attention.",
      fr: "Des lignes pures, d'une précision discrète. The Line associe un cordon noir à une fine barre en or blanc 14 carats poli, rehaussée de diamants. Conçu pour le quotidien, il ajoute une touche discrète d'éclat sans chercher à attirer l'attention.",
      ar: "خطوط نقية بدقة هادئة. يجمع The Line بين خيط أسود وقضيب رفيع من الذهب الأبيض عيار 14 المصقول، تزينه ألماسات. صُمّم للاستخدام اليومي، ويضيف لمسة خفية من البريق دون أن يلفت الانتباه."
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
    en: "Got the yellow gold, I get compliments all the time.",
    fr: "J'ai pris l'or jaune, on me fait des compliments tout le temps.",
    ar: "اخترت الذهب الأصفر وأتلقى المجاملات دائماً." } },
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

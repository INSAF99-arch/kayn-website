/* KAYN — interface translations (EN / FR / AR) and language handling. */
window.KAYN = window.KAYN || {};

KAYN.langs = {
  en: { label: "EN", name: "English",  dir: "ltr", locale: "en-GB" },
  fr: { label: "FR", name: "Français", dir: "ltr", locale: "fr-FR" },
  ar: { label: "ع",  name: "العربية",  dir: "rtl", locale: "ar-u-nu-latn" }
};

KAYN.strings = {
  en: {
    skip: "Skip to content", brandTagline: "MORE THAN A BRACELET",
    "nav.collection": "Collection", "nav.story": "Our Story", "nav.contact": "Contact",
    "nav.menu": "Menu", "nav.close": "Close menu", "nav.main": "Main navigation", "nav.language": "Language",
    "hero.title": "The everyday diamond bracelet.", "hero.copy": "Something very minimal can be your daily, whispered signature.",
    "hero.cta1": "Explore the collection", "hero.cta2": "Discover KAYN",
    "hero.alt": "Close-up of a man's wrist wearing a KAYN olive cord bracelet with a diamond setting",
    "coll.eyebrow": "The first collection", "coll.title": "Four bracelets. One idea.",
    "coll.intro": "Designed for everyday wear. Each piece is understated, precise and made to stay on.",
    "coll.priceNote": "Prices in Moroccan dirhams (MAD). Placeholder prices will be confirmed before launch.",
    "coll.view": "View", "coll.also": "Also in the collection",
    "card.view": "Discover",
    "oos.status": "Out of stock", "oos.title": "Notify me when available",
    "oos.copy": "We make a limited number of pieces at a time, each one handmade and treated as a small work of art. Great craft cannot be hurried, and this piece is currently out of stock. Leave your name and email to be among the first to know when it returns.",
    "pd.more": "More about this piece", "pd.s1t": "The design", "pd.s2t": "Materials and certification", "pd.s3t": "Made to be worn",
    "pd.s3": "Light, comfortable and discreet, every KAYN piece is made for everyday life. Wear it alone for a quiet touch of distinction, or layer it with a watch. A diamond that belongs to every day, not only to special occasions.",
    "nav.track": "Track package", "track.title": "Track your package", "track.copy": "Enter your order number and email address to follow your delivery.",
    "track.order": "Order number", "track.submit": "Track package", "track.errOrder": "Please enter your order number.",
    "track.result": "Package tracking isn't available yet. This is a preview: nothing was looked up or saved.",
    "meta.track": "Track your package — KAYN", "meta.trackDesc": "Follow your KAYN delivery.",
    "reviews.eyebrow": "Reviews", "reviews.title": "Worn every day.", "review.stars": "5 out of 5 stars",
    "review.sample": "Sample review", "review.sampleNote": "Sample reviews are shown for design preview only and will be replaced with real customer reviews.",
    "pd.colour": "Colour", "pd.chooseColour": "Choose your colour", "pd.colourImageTbc": "Photography for this colour to come",
    "avail.check": "Check availability", "avail.checking": "Checking…",
    "avail.title": "Currently unavailable",
    "avail.msg": "Due to unexpectedly high demand, this piece is currently unavailable.",
    "avail.invite": "Leave your email below if you would like to hear from us when it is back in stock.",
    "avail.hint": "Select your colour, then check availability.",
    "price.placeholder": "Placeholder price",
    "brand.title": "MORE THAN A BRACELET",
    "brand.copy": "A considered detail. An everyday essential. Designed for men who appreciate simplicity, quality and understated character.",
    "detail.eyebrow": "The detail", "detail.title": "Precision, up close.",
    "detail.copy": "The Minimalist: a single diamond in a round bezel, on a fine braided cord. Every specification shown on this site is added only once it has been confirmed.",
    "detail.p1t": "Setting", "detail.p1": "Round bezel, in 14K white gold.",
    "detail.p2t": "Cord", "detail.p2": "Fine braided cord, in four colours.",
    "detail.p3t": "Diamond", "detail.p3": "0.10 carat diamond, with an IGI certificate.",
    "wait.title": "Find your KAYN.", "wait.copy": "Choose a bracelet and a colour, then check availability.",
    "insta.eyebrow": "Instagram", "insta.title": "Follow KAYN", "insta.cta": "Open Instagram",
    "insta.alt1": "KAYN gift box in olive green", "insta.alt2": "KAYN olive shopping bag", "insta.alt3": "KAYN card", "insta.alt4": "KAYN bracelet detail",
    "form.email": "Email address", "form.name": "Full name", "form.errName": "Please enter your full name.", "form.submit": "Notify me",
    "form.privacy": "This is a preview. Your email address is not stored or sent anywhere.",
    "form.sending": "Sending…", "form.close": "Close",
    "form.titleFor": "Notify me about", "form.titleGeneral": "Notify me at launch",
    "form.errEmpty": "Please enter your email address.", "form.errInvalid": "Please enter a valid email address, for example name@example.com.",
    "form.errDemo": "Something went wrong. Please try again.",
    "form.success": "Thank you for your interest in KAYN. This is a preview: your email has not been saved, and back-in-stock updates will be available soon.",
    "form.demoBadge": "Preview",
    "pd.back": "Collection", "pd.breadcrumb": "Breadcrumb", "pd.material": "Materials & specifications", "pd.care": "Care", "pd.desc": "Description",
    "pd.cord": "Cord", "pd.setting": "Setting metal", "pd.hardware": "Other hardware", "pd.origin": "Diamond origin", "pd.carat": "Carat weight",
    "pd.type": "Diamond type", "pd.clarity": "Clarity", "pd.cert": "Certification", "pd.count": "Stone count", "pd.dim": "Dimensions", "pd.tbc": "To be confirmed",
    "pd.currency": "Moroccan dirham", "pd.gallery": "Product images", "pd.image": "Image", "pd.noImage": "Product image to come",
    "pd.careTbc": "Care instructions will be confirmed.", "pd.notFound": "This bracelet could not be found.", "pd.price": "Price",
    "story.title": "Our Story", "story.lead": "Men deserve to wear diamonds too.",
    "story.s1t": "The idea", "story.s1": "For a long time, diamonds were seen as something a man gives, not something he wears. KAYN exists to change that. We believe a man can wear a diamond with the same confidence: quietly, and on his own terms.",
    "story.s2t": "Every day, not just special days", "story.s2": "A diamond shouldn't wait for a special occasion. Ours are made for daily life: light on the wrist, easy to wear alone or with a watch, and at home with anything from a T-shirt to a tailored shirt.",
    "story.s3t": "How we design", "story.s3a": "Understated, never loud.", "story.s3b": "Clean lines and precise detail.", "story.s3c": "Diamonds with an IGI certificate, set in 14K gold.",
    "story.s4t": "The collection", "story.s4": "Four bracelets, each designed for everyday wear. Find the one that feels like yours.",
    "story.cta": "Explore the collection",
    "contact.title": "Contact", "contact.copy": "Questions about KAYN? Get in touch.", "contact.email": "Email", "contact.phone": "Phone", "contact.city": "Location",
    "contact.tbc": "To be confirmed", "faq.title": "Frequently asked questions",
    "faq.q1": "When will KAYN launch?", "faq.a1": "The launch date has not been announced yet.",
    "faq.q2": "How does availability work?", "faq.a2": "Choose a bracelet and a colour on its product page, then check availability. In this preview the email form is a demonstration only: nothing is saved or sent.",
    "faq.q3": "What materials are used?", "faq.a3": "The setting is designed in 14K white gold. Full material details for every component will be published once confirmed.",
    "faq.q4": "What type of diamonds are used?", "faq.a4": "KAYN uses lab-grown diamonds, delivered with an IGI certificate. The carat weight of each piece is listed on its product page.",
    "faq.q5": "Where will KAYN ship?", "faq.a5": "Shipping destinations and delivery terms will be announced before launch. Prices are shown in Moroccan dirhams (MAD).",
    "faq.q6": "How should the bracelet be cared for?", "faq.a6": "Wipe gently with a soft, dry cloth, store it in the KAYN box and keep it away from perfume and harsh chemicals.",
    "footer.rights": "All rights reserved.", "footer.privacy": "Privacy Policy", "footer.terms": "Terms and Conditions", "footer.instagram": "Instagram", "footer.nav": "Footer navigation",
    "legal.privacy": "Privacy Policy", "legal.terms": "Terms",
    "legal.body": "This page is a placeholder. The final legal text will be supplied before launch.",
    "notfound.title": "Page not found", "notfound.copy": "The page you are looking for does not exist.", "notfound.cta": "Back to home",
    "meta.home": "KAYN — The everyday diamond bracelet", "meta.homeDesc": "KAYN designs premium men's diamond bracelets for everyday wear. Understated by design.",
    "meta.collection": "Collection — KAYN", "meta.collectionDesc": "Discover the first KAYN collection of four men's diamond bracelets. Prices in MAD.",
    "meta.story": "Our Story — KAYN", "meta.storyDesc": "KAYN: because men deserve to wear diamonds too.",
    "meta.contact": "Contact & FAQ — KAYN", "meta.contactDesc": "Contact KAYN and read answers to common questions.",
    "meta.legal": "KAYN"
  },
  fr: {
    skip: "Aller au contenu", brandTagline: "PLUS QU'UN BRACELET",
    "nav.collection": "Collection", "nav.story": "Notre histoire", "nav.contact": "Contact",
    "nav.menu": "Menu", "nav.close": "Fermer le menu", "nav.main": "Navigation principale", "nav.language": "Langue",
    "hero.title": "Le bracelet diamant du quotidien.", "hero.copy": "Quelque chose de très minimaliste peut devenir votre signature quotidienne, murmurée.",
    "hero.cta1": "Découvrir la collection", "hero.cta2": "Découvrir KAYN",
    "hero.alt": "Gros plan sur le poignet d'un homme portant un bracelet KAYN à cordon olive et diamant",
    "coll.eyebrow": "La première collection", "coll.title": "Quatre bracelets. Une idée.",
    "coll.intro": "Pensés pour le quotidien. Chaque pièce est sobre, précise et faite pour rester au poignet.",
    "coll.priceNote": "Prix en dirhams marocains (MAD). Les prix provisoires seront confirmés avant le lancement.",
    "coll.view": "Voir", "coll.also": "Aussi dans la collection",
    "card.view": "Découvrir",
    "oos.status": "Rupture de stock", "oos.title": "Prévenez-moi dès que la pièce sera disponible",
    "oos.copy": "Nous réalisons un nombre limité de pièces à la fois, chacune façonnée à la main et pensée comme une petite œuvre d'art. Le savoir-faire ne se précipite pas, et cette pièce est actuellement en rupture de stock. Laissez votre nom et votre e-mail pour être parmi les premiers informés de son retour.",
    "pd.more": "En savoir plus sur cette pièce", "pd.s1t": "Le design", "pd.s2t": "Matières et certification", "pd.s3t": "Pensé pour être porté",
    "pd.s3": "Léger, confortable et discret, chaque pièce KAYN est faite pour la vie de tous les jours. À porter seul pour une touche discrète de distinction, ou avec une montre. Un diamant qui appartient au quotidien, pas seulement aux grandes occasions.",
    "nav.track": "Suivre mon colis", "track.title": "Suivre votre colis", "track.copy": "Saisissez votre numéro de commande et votre adresse e-mail pour suivre votre livraison.",
    "track.order": "Numéro de commande", "track.submit": "Suivre mon colis", "track.errOrder": "Veuillez saisir votre numéro de commande.",
    "track.result": "Le suivi de colis n'est pas encore disponible. Il s'agit d'un aperçu : aucune recherche n'a été effectuée et rien n'a été enregistré.",
    "meta.track": "Suivre votre colis — KAYN", "meta.trackDesc": "Suivez la livraison de votre commande KAYN.",
    "reviews.eyebrow": "Avis", "reviews.title": "Porté tous les jours.", "review.stars": "5 étoiles sur 5",
    "review.sample": "Exemple d'avis", "review.sampleNote": "Ces avis sont des exemples présentés pour l'aperçu du design et seront remplacés par de vrais avis clients.",
    "pd.colour": "Couleur", "pd.chooseColour": "Choisissez votre couleur", "pd.colourImageTbc": "Visuels de cette couleur à venir",
    "avail.check": "Vérifier la disponibilité", "avail.checking": "Vérification…",
    "avail.title": "Actuellement indisponible",
    "avail.msg": "En raison d'une demande exceptionnellement forte, cette pièce est actuellement indisponible.",
    "avail.invite": "Laissez votre adresse e-mail ci-dessous si vous souhaitez être informé de son retour en stock.",
    "avail.hint": "Sélectionnez votre couleur, puis vérifiez la disponibilité.",
    "price.placeholder": "Prix provisoire",
    "brand.title": "PLUS QU'UN BRACELET",
    "brand.copy": "Un détail réfléchi. Un essentiel du quotidien. Conçu pour les hommes qui apprécient la simplicité, la qualité et le caractère discret.",
    "detail.eyebrow": "Le détail", "detail.title": "La précision, de près.",
    "detail.copy": "The Minimalist : un seul diamant dans un sertissage clos rond, sur un cordon tressé fin. Chaque caractéristique présentée sur ce site n'est ajoutée qu'une fois confirmée.",
    "detail.p1t": "Sertissage", "detail.p1": "Serti clos rond, en or blanc 14 carats.",
    "detail.p2t": "Cordon", "detail.p2": "Cordon tressé fin, en quatre couleurs.",
    "detail.p3t": "Diamant", "detail.p3": "Diamant de 0,10 carat, avec certificat IGI.",
    "wait.title": "Trouvez votre KAYN.", "wait.copy": "Choisissez un bracelet et une couleur, puis vérifiez la disponibilité.",
    "insta.eyebrow": "Instagram", "insta.title": "Suivre KAYN", "insta.cta": "Ouvrir Instagram",
    "insta.alt1": "Écrin cadeau KAYN vert olive", "insta.alt2": "Sac KAYN vert olive", "insta.alt3": "Carte KAYN", "insta.alt4": "Détail d'un bracelet KAYN",
    "form.email": "Adresse e-mail", "form.name": "Nom complet", "form.errName": "Veuillez saisir votre nom complet.", "form.submit": "Me prévenir",
    "form.privacy": "Ceci est un aperçu. Votre adresse e-mail n'est ni enregistrée ni envoyée.",
    "form.sending": "Envoi…", "form.close": "Fermer",
    "form.titleFor": "Me prévenir pour", "form.titleGeneral": "Me prévenir au lancement",
    "form.errEmpty": "Veuillez saisir votre adresse e-mail.", "form.errInvalid": "Veuillez saisir une adresse e-mail valide, par exemple nom@exemple.com.",
    "form.errDemo": "Une erreur est survenue. Veuillez réessayer.",
    "form.success": "Merci de votre intérêt pour KAYN. Il s'agit d'un aperçu : votre adresse n'a pas été enregistrée et les informations de retour en stock seront bientôt disponibles.",
    "form.demoBadge": "Aperçu",
    "pd.back": "Collection", "pd.breadcrumb": "Fil d'Ariane", "pd.material": "Matières et caractéristiques", "pd.care": "Entretien", "pd.desc": "Description",
    "pd.cord": "Cordon", "pd.setting": "Métal du sertissage", "pd.hardware": "Autres éléments métalliques", "pd.origin": "Origine du diamant", "pd.carat": "Poids en carats",
    "pd.type": "Type de diamant", "pd.clarity": "Pureté", "pd.cert": "Certification", "pd.count": "Nombre de pierres", "pd.dim": "Dimensions", "pd.tbc": "À confirmer",
    "pd.currency": "Dirham marocain", "pd.gallery": "Images du produit", "pd.image": "Image", "pd.noImage": "Image du produit à venir",
    "pd.careTbc": "Les conseils d'entretien seront confirmés.", "pd.notFound": "Ce bracelet est introuvable.", "pd.price": "Prix",
    "story.title": "Notre histoire", "story.lead": "Les hommes aussi méritent de porter des diamants.",
    "story.s1t": "L'idée", "story.s1": "Pendant longtemps, le diamant a été pensé comme quelque chose que l'homme offre, pas qu'il porte. KAYN existe pour changer cela. Nous croyons qu'un homme peut porter un diamant avec la même assurance : discrètement, et à sa manière.",
    "story.s2t": "Au quotidien, pas seulement les grands jours", "story.s2": "Un diamant ne devrait pas attendre une occasion spéciale. Les nôtres sont faits pour la vie de tous les jours : légers au poignet, faciles à porter seuls ou avec une montre, et à l'aise avec tout, du t-shirt à la chemise ajustée.",
    "story.s3t": "Notre façon de créer", "story.s3a": "Discret, jamais ostentatoire.", "story.s3b": "Des lignes épurées et des détails précis.", "story.s3c": "Des diamants avec certificat IGI, sertis dans de l'or 14 carats.",
    "story.s4t": "La collection", "story.s4": "Quatre bracelets, chacun pensé pour le quotidien. Trouvez celui qui vous ressemble.",
    "story.cta": "Découvrir la collection",
    "contact.title": "Contact", "contact.copy": "Une question sur KAYN ? Écrivez-nous.", "contact.email": "E-mail", "contact.phone": "Téléphone", "contact.city": "Lieu",
    "contact.tbc": "À confirmer", "faq.title": "Questions fréquentes",
    "faq.q1": "Quand KAYN sera-t-il lancé ?", "faq.a1": "La date de lancement n'a pas encore été annoncée.",
    "faq.q2": "Comment fonctionne la disponibilité ?", "faq.a2": "Choisissez un bracelet et une couleur sur sa page produit, puis vérifiez la disponibilité. Dans cet aperçu, le formulaire e-mail n'est qu'une démonstration : rien n'est enregistré ni envoyé.",
    "faq.q3": "Quelles matières sont utilisées ?", "faq.a3": "Le sertissage est conçu en or blanc 14 carats. Le détail complet des matières de chaque composant sera publié une fois confirmé.",
    "faq.q4": "Quel type de diamants est utilisé ?", "faq.a4": "KAYN utilise des diamants de laboratoire, livrés avec un certificat IGI. Le poids en carats de chaque pièce est indiqué sur sa page produit.",
    "faq.q5": "Où KAYN sera-t-il expédié ?", "faq.a5": "Les destinations et conditions de livraison seront annoncées avant le lancement. Les prix sont affichés en dirhams marocains (MAD).",
    "faq.q6": "Comment entretenir le bracelet ?", "faq.a6": "Essuyez-le délicatement avec un chiffon doux et sec, rangez-le dans l'écrin KAYN et éloignez-le des parfums et produits agressifs.",
    "footer.rights": "Tous droits réservés.", "footer.privacy": "Politique de confidentialité", "footer.terms": "Conditions générales", "footer.instagram": "Instagram", "footer.nav": "Navigation du pied de page",
    "legal.privacy": "Politique de confidentialité", "legal.terms": "Conditions",
    "legal.body": "Cette page est un espace réservé. Le texte juridique définitif sera fourni avant le lancement.",
    "notfound.title": "Page introuvable", "notfound.copy": "La page que vous cherchez n'existe pas.", "notfound.cta": "Retour à l'accueil",
    "meta.home": "KAYN — Le bracelet diamant du quotidien", "meta.homeDesc": "KAYN crée des bracelets diamant premium pour homme, à porter au quotidien. Discret par nature.",
    "meta.collection": "Collection — KAYN", "meta.collectionDesc": "Découvrez la première collection KAYN : quatre bracelets diamant pour homme. Prix en MAD.",
    "meta.story": "Notre histoire — KAYN", "meta.storyDesc": "KAYN : parce que les hommes aussi méritent de porter des diamants.",
    "meta.contact": "Contact et FAQ — KAYN", "meta.contactDesc": "Contactez KAYN et consultez les réponses aux questions fréquentes.",
    "meta.legal": "KAYN"
  },
  ar: {
    skip: "تخطَّ إلى المحتوى", brandTagline: "أكثر من مجرد سوار",
    "nav.collection": "المجموعة", "nav.story": "قصتنا", "nav.contact": "تواصل معنا",
    "nav.menu": "القائمة", "nav.close": "إغلاق القائمة", "nav.main": "التنقل الرئيسي", "nav.language": "اللغة",
    "hero.title": "سوار الألماس اليومي.", "hero.copy": "شيء بسيط للغاية يمكن أن يكون توقيعك اليومي الهامس.",
    "hero.cta1": "اكتشف المجموعة", "hero.cta2": "اكتشف KAYN",
    "hero.alt": "لقطة قريبة لمعصم رجل يرتدي سوار KAYN بخيط زيتوني وألماسة",
    "coll.eyebrow": "المجموعة الأولى", "coll.title": "أربعة أساور. فكرة واحدة.",
    "coll.intro": "مصمّمة للاستخدام اليومي. كل قطعة بسيطة ودقيقة وجاهزة لتبقى على معصمك.",
    "coll.priceNote": "الأسعار بالدرهم المغربي (MAD). سيتم تأكيد الأسعار المؤقتة قبل الإطلاق.",
    "coll.view": "عرض", "coll.also": "أيضاً في المجموعة",
    "card.view": "اكتشف",
    "oos.status": "نفدت الكمية", "oos.title": "أبلغوني عند توفرها",
    "oos.copy": "نصنع عدداً محدوداً من القطع في كل مرة، كل قطعة منها يدوية الصنع ونتعامل معها كعمل فني صغير. الإتقان لا يُستعجل، وهذه القطعة نفدت كميتها حالياً. اترك اسمك وبريدك الإلكتروني لتكون من أوائل من يعلم بعودتها.",
    "pd.more": "المزيد عن هذه القطعة", "pd.s1t": "التصميم", "pd.s2t": "المواد والشهادة", "pd.s3t": "صُمّم ليُلبس",
    "pd.s3": "خفيفة ومريحة وهادئة، كل قطعة من KAYN صُنعت لحياتك اليومية. ارتدِها وحدها للمسة تميّز هادئة، أو مع ساعة. ألماس ينتمي إلى كل يوم، لا إلى المناسبات الخاصة فقط.",
    "nav.track": "تتبع الطرد", "track.title": "تتبع طردك", "track.copy": "أدخل رقم طلبك وبريدك الإلكتروني لمتابعة التوصيل.",
    "track.order": "رقم الطلب", "track.submit": "تتبع الطرد", "track.errOrder": "يرجى إدخال رقم الطلب.",
    "track.result": "تتبع الطرود غير متاح بعد. هذه نسخة تجريبية: لم يتم البحث عن أي شيء ولم يُحفظ أي شيء.",
    "meta.track": "تتبع طردك — KAYN", "meta.trackDesc": "تابع توصيل طلبك من KAYN.",
    "reviews.eyebrow": "آراء العملاء", "reviews.title": "يُلبس كل يوم.", "review.stars": "5 من 5 نجوم",
    "review.sample": "مثال على تقييم", "review.sampleNote": "هذه التقييمات أمثلة للمعاينة التصميمية فقط وسيتم استبدالها بتقييمات حقيقية من العملاء.",
    "pd.colour": "اللون", "pd.chooseColour": "اختر لونك", "pd.colourImageTbc": "صور هذا اللون قريباً",
    "avail.check": "تحقق من التوفر", "avail.checking": "جارٍ التحقق…",
    "avail.title": "غير متوفر حالياً",
    "avail.msg": "نظراً للطلب المرتفع غير المتوقع، هذه القطعة غير متوفرة حالياً.",
    "avail.invite": "اترك بريدك الإلكتروني أدناه إن رغبت في أن نراسلك عند عودتها إلى المخزون.",
    "avail.hint": "اختر لونك، ثم تحقق من التوفر.",
    "price.placeholder": "سعر مؤقت",
    "brand.title": "أكثر من مجرد سوار",
    "brand.copy": "تفصيل مدروس. أساسي لكل يوم. صُمّم للرجال الذين يقدّرون البساطة والجودة والطابع الهادئ.",
    "detail.eyebrow": "التفاصيل", "detail.title": "الدقة عن قرب.",
    "detail.copy": "The Minimalist: ألماسة واحدة في إطار دائري، على خيط منسوج رفيع. لا تُضاف أي مواصفات في هذا الموقع إلا بعد تأكيدها.",
    "detail.p1t": "التصميم", "detail.p1": "إطار دائري، من الذهب الأبيض عيار 14.",
    "detail.p2t": "الخيط", "detail.p2": "خيط منسوج رفيع، بأربعة ألوان.",
    "detail.p3t": "الألماس", "detail.p3": "ألماسة بوزن 0.10 قيراط، مع شهادة IGI.",
    "wait.title": "اعثر على KAYN الخاص بك.", "wait.copy": "اختر سواراً ولوناً، ثم تحقق من التوفر.",
    "insta.eyebrow": "إنستغرام", "insta.title": "تابع KAYN", "insta.cta": "افتح إنستغرام",
    "insta.alt1": "علبة هدايا KAYN بلون زيتوني", "insta.alt2": "كيس تسوق KAYN بلون زيتوني", "insta.alt3": "بطاقة KAYN", "insta.alt4": "تفصيل من سوار KAYN",
    "form.email": "البريد الإلكتروني", "form.name": "الاسم الكامل", "form.errName": "يرجى إدخال اسمك الكامل.", "form.submit": "أبلغني",
    "form.privacy": "هذه نسخة تجريبية. لا يتم حفظ بريدك الإلكتروني أو إرساله إلى أي جهة.",
    "form.sending": "جارٍ الإرسال…", "form.close": "إغلاق",
    "form.titleFor": "أبلغوني بخصوص", "form.titleGeneral": "أبلغوني عند الإطلاق",
    "form.errEmpty": "يرجى إدخال بريدك الإلكتروني.", "form.errInvalid": "يرجى إدخال بريد إلكتروني صالح، مثل name@example.com.",
    "form.errDemo": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    "form.success": "شكراً لاهتمامك بـ KAYN. هذه نسخة تجريبية: لم يتم حفظ بريدك الإلكتروني، وسيتوفر التنبيه بعودة المنتج إلى المخزون قريباً.",
    "form.demoBadge": "تجريبي",
    "pd.back": "المجموعة", "pd.breadcrumb": "مسار التنقل", "pd.material": "المواد والمواصفات", "pd.care": "العناية", "pd.desc": "الوصف",
    "pd.cord": "الخيط", "pd.setting": "معدن الإطار", "pd.hardware": "قطع معدنية أخرى", "pd.origin": "مصدر الألماس", "pd.carat": "الوزن بالقيراط",
    "pd.type": "نوع الألماس", "pd.clarity": "النقاء", "pd.cert": "الشهادة", "pd.count": "عدد الأحجار", "pd.dim": "الأبعاد", "pd.tbc": "قيد التأكيد",
    "pd.currency": "درهم مغربي", "pd.gallery": "صور المنتج", "pd.image": "صورة", "pd.noImage": "صورة المنتج قريباً",
    "pd.careTbc": "سيتم تأكيد تعليمات العناية.", "pd.notFound": "تعذّر العثور على هذا السوار.", "pd.price": "السعر",
    "story.title": "قصتنا", "story.lead": "الرجال يستحقون أيضاً أن يرتدوا الألماس.",
    "story.s1t": "الفكرة", "story.s1": "لوقت طويل، اعتُبر الألماس شيئاً يُهديه الرجل لا شيئاً يرتديه. وُجدت KAYN لتغيير ذلك. نؤمن بأن الرجل يستطيع أن يرتدي الألماس بالثقة نفسها: بهدوء، وعلى طريقته.",
    "story.s2t": "كل يوم، لا في المناسبات فقط", "story.s2": "لا ينبغي أن ينتظر الألماس مناسبة خاصة. قطعنا صُنعت لحياتك اليومية: خفيفة على المعصم، تُلبس وحدها أو مع ساعة، وتناسب كل شيء من التيشيرت إلى القميص الرسمي.",
    "story.s3t": "كيف نصمم", "story.s3a": "هادئة، لا صاخبة.", "story.s3b": "خطوط نقية وتفاصيل دقيقة.", "story.s3c": "ألماس مع شهادة IGI، مثبّت في ذهب عيار 14.",
    "story.s4t": "المجموعة", "story.s4": "أربعة أساور، كل منها مصمم للاستخدام اليومي. اختر ما يشبهك.",
    "story.cta": "اكتشف المجموعة",
    "contact.title": "تواصل معنا", "contact.copy": "هل لديك سؤال عن KAYN؟ راسلنا.", "contact.email": "البريد الإلكتروني", "contact.phone": "الهاتف", "contact.city": "الموقع",
    "contact.tbc": "قيد التأكيد", "faq.title": "الأسئلة الشائعة",
    "faq.q1": "متى سيتم إطلاق KAYN؟", "faq.a1": "لم يُعلن عن موعد الإطلاق بعد.",
    "faq.q2": "كيف يعمل التحقق من التوفر؟", "faq.a2": "اختر سواراً ولوناً في صفحة المنتج، ثم تحقق من التوفر. في هذه النسخة التجريبية نموذج البريد الإلكتروني للعرض فقط: لا يتم حفظ أو إرسال أي شيء.",
    "faq.q3": "ما المواد المستخدمة؟", "faq.a3": "صُمّم الإطار من الذهب الأبيض عيار 14. ستُنشر تفاصيل المواد لكل مكوّن بعد تأكيدها.",
    "faq.q4": "ما نوع الألماس المستخدم؟", "faq.a4": "تستخدم KAYN ألماساً مصنّعاً في المختبر، يأتي مع شهادة IGI. يُذكر وزن القيراط لكل قطعة في صفحة المنتج.",
    "faq.q5": "إلى أين سيتم الشحن؟", "faq.a5": "ستُعلن وجهات الشحن وشروط التوصيل قبل الإطلاق. الأسعار معروضة بالدرهم المغربي (MAD).",
    "faq.q6": "كيف أعتني بالسوار؟", "faq.a6": "امسحه برفق بقطعة قماش ناعمة وجافة، واحتفظ به في علبة KAYN، وأبعده عن العطور والمواد الكيميائية القاسية.",
    "footer.rights": "جميع الحقوق محفوظة.", "footer.privacy": "سياسة الخصوصية", "footer.terms": "الشروط والأحكام", "footer.instagram": "إنستغرام", "footer.nav": "تنقل التذييل",
    "legal.privacy": "سياسة الخصوصية", "legal.terms": "الشروط",
    "legal.body": "هذه الصفحة نموذج مؤقت. سيتم توفير النص القانوني النهائي قبل الإطلاق.",
    "notfound.title": "الصفحة غير موجودة", "notfound.copy": "الصفحة التي تبحث عنها غير موجودة.", "notfound.cta": "العودة إلى الرئيسية",
    "meta.home": "KAYN — سوار الألماس اليومي", "meta.homeDesc": "تصمّم KAYN أساور ألماس فاخرة للرجال للاستخدام اليومي. أناقة هادئة.",
    "meta.collection": "المجموعة — KAYN", "meta.collectionDesc": "اكتشف أول مجموعة من KAYN: أربعة أساور ألماس للرجال. الأسعار بالدرهم.",
    "meta.story": "قصتنا — KAYN", "meta.storyDesc": "KAYN: لأن الرجال يستحقون أيضاً أن يرتدوا الألماس.",
    "meta.contact": "تواصل والأسئلة الشائعة — KAYN", "meta.contactDesc": "تواصل مع KAYN واقرأ إجابات الأسئلة الشائعة.",
    "meta.legal": "KAYN"
  }
};

KAYN.lang = "en";

/* Translate a key; falls back to English, then the key itself. */
KAYN.t = function (key) {
  var s = KAYN.strings[KAYN.lang] || {};
  if (s[key] != null) return s[key];
  var en = KAYN.strings.en[key];
  return en != null ? en : key;
};

/* Pick a localized value out of a { en, fr, ar } object. */
KAYN.L = function (obj) {
  if (obj == null) return "";
  return obj[KAYN.lang] != null ? obj[KAYN.lang] : obj.en;
};

KAYN.formatPrice = function (n) {
  var num = new Intl.NumberFormat(KAYN.langs[KAYN.lang].locale, { maximumFractionDigits: 0 }).format(n);
  return num + " " + KAYN.site.currency;
};

KAYN.setLang = function (code) {
  if (!KAYN.langs[code]) code = "en";
  KAYN.lang = code;
  var cfg = KAYN.langs[code];
  document.documentElement.lang = code;
  document.documentElement.dir = cfg.dir;
  try { localStorage.setItem("kayn-lang", code); } catch (e) { /* ignore */ }
};

KAYN.initLang = function () {
  var saved = null;
  try { saved = localStorage.getItem("kayn-lang"); } catch (e) { /* ignore */ }
  if (!saved || !KAYN.langs[saved]) {
    var nav = (navigator.language || "en").slice(0, 2);
    saved = KAYN.langs[nav] ? nav : "en";
  }
  KAYN.setLang(saved);
};

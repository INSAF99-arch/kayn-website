/* KAYN — Privacy Policy and Terms (English, French, Arabic).
   Standard text for a small online jewelry brand. Have it reviewed by a legal professional before relying on it.
   `{email}` is replaced with a mailto link to KAYN.site.contactEmail. */
window.KAYN = window.KAYN || {};
(function (K) {
  var P = function (en, fr, ar) { return { t: "p", v: { en: en, fr: fr, ar: ar } }; };
  var UL = function (items) { return { t: "ul", v: items.map(function (i) { return { en: i[0], fr: i[1], ar: i[2] }; }) }; };
  var S = function (en, fr, ar, body) { return { h: { en: en, fr: fr, ar: ar }, body: body }; };

  K.legalUpdated = { en: "Last updated: 25 October 2026", fr: "Dernière mise à jour : 25 octobre 2026", ar: "آخر تحديث: 25 أكتوبر 2026" };

  K.legal = {
    privacy: {
      title: { en: "Privacy Policy", fr: "Politique de confidentialité", ar: "سياسة الخصوصية" },
      sections: [
        S("Who we are", "Qui sommes-nous", "من نحن", [
          P("This website, maison-kayn.com, is operated by KAYN (“KAYN”, “we”, “us”). This policy explains what personal information we collect through the website, how we use it and what choices you have.",
            "Ce site, maison-kayn.com, est exploité par KAYN (« KAYN », « nous »). Cette politique explique quelles informations personnelles nous collectons via le site, comment nous les utilisons et quels choix s'offrent à vous.",
            "هذا الموقع maison-kayn.com تديره KAYN (\"KAYN\" أو \"نحن\"). توضّح هذه السياسة المعلومات الشخصية التي نجمعها عبر الموقع، وكيف نستخدمها، والخيارات المتاحة لك.")
        ]),
        S("Information we collect", "Informations que nous collectons", "المعلومات التي نجمعها", [
          P("We keep this to what is needed:", "Nous nous limitons à l'essentiel :", "نقتصر على ما هو ضروري:"),
          UL([
            ["Information you give us: your full name and email address when you ask to be informed about a product, and the order number and email address you enter on the Track package page.",
             "Informations que vous nous donnez : votre nom complet et votre adresse e-mail lorsque vous demandez à être informé au sujet d'un produit, ainsi que le numéro de commande et l'adresse e-mail saisis sur la page Suivre mon colis.",
             "معلومات تقدمها لنا: اسمك الكامل وبريدك الإلكتروني عندما تطلب أن نُبلغك بشأن منتج، ورقم الطلب والبريد الإلكتروني اللذان تدخلهما في صفحة تتبع الطرد."],
            ["Your choices on the site: the language you select is saved in your browser so the site remembers it.",
             "Vos choix sur le site : la langue sélectionnée est enregistrée dans votre navigateur pour que le site s'en souvienne.",
             "اختياراتك في الموقع: تُحفظ اللغة التي تختارها في متصفحك ليتذكرها الموقع."],
            ["Technical information: like most websites, our hosting providers may automatically record standard technical data such as IP address, browser type, device type and the pages visited, for security and to keep the site running.",
             "Informations techniques : comme la plupart des sites, nos hébergeurs peuvent enregistrer automatiquement des données techniques usuelles (adresse IP, type de navigateur, type d'appareil, pages consultées) à des fins de sécurité et de bon fonctionnement.",
             "معلومات تقنية: كمعظم المواقع، قد تسجّل شركات الاستضافة لدينا تلقائياً بيانات تقنية معتادة مثل عنوان IP ونوع المتصفح ونوع الجهاز والصفحات التي تمت زيارتها، لأغراض الأمان وتشغيل الموقع."]
          ])
        ]),
        S("How we use your information", "Comment nous utilisons vos informations", "كيف نستخدم معلوماتك", [
          UL([
            ["To respond to your request, for example to tell you when a product is available again.", "Répondre à votre demande, par exemple vous prévenir du retour d'un produit.", "للرد على طلبك، مثل إبلاغك عند توفر منتج من جديد."],
            ["To follow your order or delivery when you use the tracking page.", "Suivre votre commande ou votre livraison lorsque vous utilisez la page de suivi.", "لمتابعة طلبك أو توصيله عند استخدام صفحة التتبع."],
            ["To send you KAYN news and offers, only if you agreed.", "Vous envoyer l'actualité et les offres de KAYN, uniquement si vous y avez consenti.", "لإرسال أخبار KAYN وعروضها إليك، فقط إذا وافقت على ذلك."],
            ["To keep the website secure and improve it.", "Assurer la sécurité du site et l'améliorer.", "للحفاظ على أمان الموقع وتحسينه."],
            ["To meet our legal obligations.", "Respecter nos obligations légales.", "للوفاء بالتزاماتنا القانونية."]
          ]),
          P("We do not sell your personal information.", "Nous ne vendons pas vos informations personnelles.", "نحن لا نبيع معلوماتك الشخصية.")
        ]),
        S("Email communications", "Communications par e-mail", "الرسائل البريدية", [
          P("If you give us your email address, we may send you messages about the product you asked about and, where you agreed, news from KAYN. You can unsubscribe at any time using the link at the bottom of every email.",
            "Si vous nous donnez votre adresse e-mail, nous pouvons vous envoyer des messages concernant le produit demandé et, si vous y avez consenti, l'actualité de KAYN. Vous pouvez vous désabonner à tout moment grâce au lien en bas de chaque e-mail.",
            "إذا زوّدتنا ببريدك الإلكتروني، فقد نرسل إليك رسائل حول المنتج الذي سألت عنه، وأخبار KAYN إذا وافقت على ذلك. يمكنك إلغاء الاشتراك في أي وقت عبر الرابط الموجود أسفل كل رسالة.")
        ]),
        S("Who we share it with", "Avec qui nous les partageons", "مع من نشاركها", [
          P("We share information only with service providers who help us run the website and send emails (for example website hosting, email delivery and font services such as Google Fonts). They may only use it to provide their services to us. We may also disclose information if the law requires it.",
            "Nous ne partageons des informations qu'avec les prestataires qui nous aident à faire fonctionner le site et à envoyer des e-mails (par exemple l'hébergement, l'envoi d'e-mails et les services de polices comme Google Fonts). Ils ne peuvent les utiliser que pour nous fournir leurs services. Nous pouvons aussi divulguer des informations si la loi l'exige.",
            "لا نشارك المعلومات إلا مع مزوّدي الخدمات الذين يساعدوننا في تشغيل الموقع وإرسال الرسائل (مثل استضافة الموقع وإرسال البريد وخدمات الخطوط مثل Google Fonts). ولا يجوز لهم استخدامها إلا لتقديم خدماتهم لنا. وقد نفصح عن المعلومات أيضاً إذا اقتضى القانون ذلك.")
        ]),
        S("Cookies and local storage", "Cookies et stockage local", "ملفات تعريف الارتباط والتخزين المحلي", [
          P("We do not use advertising or tracking cookies. The website stores your language choice in your browser's local storage. Our hosting and security providers may use strictly necessary technical cookies to deliver the website safely. You can clear or block these in your browser settings.",
            "Nous n'utilisons pas de cookies publicitaires ni de suivi. Le site enregistre votre choix de langue dans le stockage local de votre navigateur. Nos prestataires d'hébergement et de sécurité peuvent utiliser des cookies techniques strictement nécessaires pour diffuser le site en toute sécurité. Vous pouvez les supprimer ou les bloquer dans les paramètres de votre navigateur.",
            "لا نستخدم ملفات تعريف ارتباط إعلانية أو للتتبع. يحفظ الموقع اختيارك للغة في التخزين المحلي لمتصفحك. وقد يستخدم مزوّدو الاستضافة والأمان لدينا ملفات تعريف ارتباط تقنية ضرورية لتشغيل الموقع بأمان. يمكنك حذفها أو حظرها من إعدادات متصفحك.")
        ]),
        S("How long we keep it", "Durée de conservation", "مدة الاحتفاظ بها", [
          P("We keep personal information only for as long as needed for the purposes described above, or as required by law, and then delete or anonymise it.",
            "Nous conservons les informations personnelles uniquement le temps nécessaire aux finalités décrites ci-dessus ou exigé par la loi, puis nous les supprimons ou les anonymisons.",
            "نحتفظ بالمعلومات الشخصية فقط للمدة اللازمة للأغراض المذكورة أعلاه أو وفق ما يقتضيه القانون، ثم نحذفها أو نجعلها مجهولة الهوية.")
        ]),
        S("Your rights", "Vos droits", "حقوقك", [
          P("Depending on where you live, you may have the right to access the personal information we hold about you, correct it, ask us to delete it, object to or restrict its use, and withdraw your consent at any time. To exercise these rights, contact us using the details below.",
            "Selon votre lieu de résidence, vous pouvez avoir le droit d'accéder aux informations personnelles que nous détenons sur vous, de les corriger, d'en demander la suppression, de vous opposer à leur utilisation ou d'en demander la limitation, et de retirer votre consentement à tout moment. Pour exercer ces droits, contactez-nous avec les coordonnées ci-dessous.",
            "بحسب مكان إقامتك، قد يحق لك الاطلاع على المعلومات الشخصية التي نحتفظ بها عنك وتصحيحها وطلب حذفها والاعتراض على استخدامها أو تقييده وسحب موافقتك في أي وقت. لممارسة هذه الحقوق، تواصل معنا عبر وسيلة الاتصال أدناه.")
        ]),
        S("Security", "Sécurité", "الأمان", [
          P("We take reasonable technical and organisational measures to protect your information. However, no method of transmission or storage is completely secure.",
            "Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos informations. Toutefois, aucun mode de transmission ou de stockage n'est totalement sûr.",
            "نتخذ تدابير تقنية وتنظيمية معقولة لحماية معلوماتك. ومع ذلك، لا توجد وسيلة نقل أو تخزين آمنة تماماً.")
        ]),
        S("International transfers", "Transferts internationaux", "النقل الدولي", [
          P("Our service providers may process data in countries other than your own. When they do, we expect them to protect it appropriately.",
            "Nos prestataires peuvent traiter des données dans des pays autres que le vôtre. Dans ce cas, nous attendons d'eux qu'ils les protègent de manière appropriée.",
            "قد يعالج مزوّدو خدماتنا البيانات في بلدان غير بلدك. وعندما يفعلون ذلك، نتوقع منهم حمايتها بشكل مناسب.")
        ]),
        S("Children", "Enfants", "الأطفال", [
          P("The website is not directed at children under 18, and we do not knowingly collect their personal information.",
            "Le site ne s'adresse pas aux enfants de moins de 18 ans et nous ne collectons pas sciemment leurs informations personnelles.",
            "الموقع غير موجّه للأطفال دون 18 عاماً، ولا نجمع عمداً معلومات شخصية عنهم.")
        ]),
        S("Changes to this policy", "Modifications de cette politique", "تعديلات هذه السياسة", [
          P("We may update this policy from time to time. The latest version is always on this page, with the date it was last updated.",
            "Nous pouvons mettre à jour cette politique de temps à autre. La dernière version figure toujours sur cette page, avec sa date de mise à jour.",
            "قد نحدّث هذه السياسة من وقت لآخر. تجد دائماً أحدث نسخة في هذه الصفحة مع تاريخ آخر تحديث.")
        ]),
        S("Contact us", "Nous contacter", "تواصل معنا", [
          P("For any question about this policy or your personal information, contact us by email at {email}.",
            "Pour toute question sur cette politique ou vos informations personnelles, contactez-nous par e-mail à {email}.",
            "لأي سؤال حول هذه السياسة أو معلوماتك الشخصية، تواصل معنا عبر البريد الإلكتروني {email}.")
        ])
      ]
    },

    terms: {
      title: { en: "Terms and Conditions", fr: "Conditions générales", ar: "الشروط والأحكام" },
      sections: [
        S("Acceptance", "Acceptation", "القبول", [
          P("By using maison-kayn.com (the “website”), you agree to these terms. If you do not agree, please do not use the website.",
            "En utilisant maison-kayn.com (le « site »), vous acceptez les présentes conditions. Si vous ne les acceptez pas, merci de ne pas utiliser le site.",
            "باستخدامك maison-kayn.com (\"الموقع\") فإنك توافق على هذه الشروط. إذا كنت لا توافق عليها، فيرجى عدم استخدام الموقع.")
        ]),
        S("About KAYN and our products", "À propos de KAYN et de nos produits", "عن KAYN ومنتجاتنا", [
          P("KAYN designs men's diamond bracelets. We do our best to describe and photograph our products accurately. Colours may look slightly different on your screen, and small variations can occur between pieces.",
            "KAYN crée des bracelets diamant pour homme. Nous faisons de notre mieux pour décrire et photographier nos produits avec exactitude. Les couleurs peuvent paraître légèrement différentes sur votre écran, et de petites variations peuvent exister d'une pièce à l'autre.",
            "تصمم KAYN أساور ألماس للرجال. نبذل قصارى جهدنا لوصف منتجاتنا وتصويرها بدقة. قد تظهر الألوان مختلفة قليلاً على شاشتك، وقد توجد فروق طفيفة بين القطع.")
        ]),
        S("Prices and availability", "Prix et disponibilité", "الأسعار والتوفر", [
          P("Prices are shown in Moroccan dirhams (MAD) and may change without notice. A product shown on the website is not guaranteed to be in stock. If a piece is unavailable, you can leave your details to be informed about it, but this does not reserve the product or guarantee its return.",
            "Les prix sont indiqués en dirhams marocains (MAD) et peuvent changer sans préavis. Un produit présenté sur le site n'est pas garanti en stock. Si une pièce est indisponible, vous pouvez laisser vos coordonnées pour être informé, mais cela ne réserve pas le produit et ne garantit pas son retour.",
            "الأسعار معروضة بالدرهم المغربي (MAD) وقد تتغير دون إشعار مسبق. عرض منتج في الموقع لا يضمن توفره في المخزون. إذا كانت قطعة غير متوفرة، يمكنك ترك بياناتك لإبلاغك بشأنها، لكن ذلك لا يحجز المنتج ولا يضمن عودته.")
        ]),
        S("Orders and payment", "Commandes et paiement", "الطلبات والدفع", [
          P("An order is only accepted once KAYN has confirmed it. We may decline or cancel an order, for example because of limited stock, a pricing or description error, or suspected misuse, and we will refund any amount you have already paid for it.",
            "Une commande n'est acceptée qu'une fois confirmée par KAYN. Nous pouvons refuser ou annuler une commande, par exemple en raison d'un stock limité, d'une erreur de prix ou de description, ou d'une suspicion d'utilisation abusive, et nous rembourserons toute somme déjà versée pour celle-ci.",
            "لا يُقبل الطلب إلا بعد تأكيده من KAYN. يجوز لنا رفض الطلب أو إلغاؤه، مثلاً بسبب محدودية المخزون أو خطأ في السعر أو الوصف أو الاشتباه في إساءة الاستخدام، وسنعيد إليك أي مبلغ دفعته بشأنه.")
        ]),
        S("Delivery and returns", "Livraison et retours", "التوصيل والإرجاع", [
          P("Delivery areas, costs and times, and the conditions for returns or exchanges, are communicated to you before you confirm a purchase.",
            "Les zones, coûts et délais de livraison, ainsi que les conditions de retour ou d'échange, vous sont communiqués avant que vous ne confirmiez un achat.",
            "تُبلَّغ بمناطق التوصيل وتكاليفه ومدته، وبشروط الإرجاع أو الاستبدال، قبل أن تؤكد أي عملية شراء.")
        ]),
        S("Product information", "Informations sur les produits", "معلومات المنتجات", [
          P("Product details, including diamond type, weight and certification, are shown on each product page.",
            "Les détails de chaque produit, notamment le type de diamant, son poids et sa certification, sont indiqués sur sa page produit.",
            "تظهر تفاصيل كل منتج، ومنها نوع الألماس ووزنه وشهادته، في صفحة المنتج.")
        ]),
        S("Tracking and notification features", "Fonctions de suivi et de notification", "ميزات التتبع والإشعارات", [
          P("The package tracking and product notification features are provided for your convenience. We do not guarantee that they will be available at all times or that a notification will be sent at a specific moment.",
            "Le suivi de colis et la notification de produit sont proposés pour votre confort. Nous ne garantissons pas qu'ils soient disponibles à tout moment ni qu'une notification soit envoyée à un moment précis.",
            "تُقدَّم ميزتا تتبع الطرد وإشعار المنتج لراحتك. لا نضمن توفرهما في كل وقت ولا إرسال الإشعار في لحظة محددة.")
        ]),
        S("Intellectual property", "Propriété intellectuelle", "الملكية الفكرية", [
          P("All content on this website, including the KAYN name and logo, texts, photographs and design, belongs to KAYN or is used with permission. You may not copy, reproduce or use it for commercial purposes without our written permission.",
            "Tout le contenu de ce site, y compris le nom et le logo KAYN, les textes, les photographies et le design, appartient à KAYN ou est utilisé avec autorisation. Vous ne pouvez pas le copier, le reproduire ni l'utiliser à des fins commerciales sans notre autorisation écrite.",
            "كل محتوى هذا الموقع، بما في ذلك اسم KAYN وشعارها والنصوص والصور والتصميم، مملوك لـ KAYN أو مستخدم بإذن. لا يجوز لك نسخه أو إعادة إنتاجه أو استخدامه لأغراض تجارية دون إذن كتابي منا.")
        ]),
        S("Acceptable use", "Utilisation acceptable", "الاستخدام المقبول", [
          P("You agree not to misuse the website, attempt to disrupt its operation, access it by unauthorised means or submit false information.",
            "Vous vous engagez à ne pas détourner le site, à ne pas tenter d'en perturber le fonctionnement, à ne pas y accéder par des moyens non autorisés et à ne pas fournir de fausses informations.",
            "تتعهد بعدم إساءة استخدام الموقع أو محاولة تعطيل عمله أو الوصول إليه بوسائل غير مصرّح بها أو تقديم معلومات غير صحيحة.")
        ]),
        S("Links to other websites", "Liens vers d'autres sites", "الروابط إلى مواقع أخرى", [
          P("The website may link to third-party sites such as Instagram. We are not responsible for their content or practices.",
            "Le site peut contenir des liens vers des sites tiers comme Instagram. Nous ne sommes pas responsables de leur contenu ni de leurs pratiques.",
            "قد يتضمن الموقع روابط إلى مواقع أطراف ثالثة مثل إنستغرام. ولسنا مسؤولين عن محتواها أو ممارساتها.")
        ]),
        S("Limitation of liability", "Limitation de responsabilité", "حدود المسؤولية", [
          P("To the fullest extent permitted by law, KAYN is not liable for indirect or consequential loss arising from your use of the website. Nothing in these terms limits any rights you have under mandatory consumer protection laws.",
            "Dans toute la mesure permise par la loi, KAYN n'est pas responsable des dommages indirects ou consécutifs résultant de votre utilisation du site. Rien dans ces conditions ne limite les droits que vous confèrent les lois impératives de protection des consommateurs.",
            "إلى أقصى حد يسمح به القانون، لا تتحمل KAYN مسؤولية الخسائر غير المباشرة أو التبعية الناشئة عن استخدامك للموقع. ولا يقيّد أي بند في هذه الشروط حقوقك بموجب قوانين حماية المستهلك الإلزامية.")
        ]),
        S("Changes to these terms", "Modification des conditions", "تعديل الشروط", [
          P("We may update these terms from time to time. The version on this page, with its date, applies from the moment it is published.",
            "Nous pouvons mettre à jour ces conditions de temps à autre. La version publiée sur cette page, avec sa date, s'applique dès sa publication.",
            "قد نحدّث هذه الشروط من وقت لآخر. تسري النسخة المنشورة في هذه الصفحة، بتاريخها، من لحظة نشرها.")
        ]),
        S("Governing law", "Droit applicable", "القانون الواجب التطبيق", [
          P("These terms are governed by the laws of the Kingdom of Morocco, and the courts of Morocco have jurisdiction, without affecting any mandatory consumer rights you have in your country of residence.",
            "Ces conditions sont régies par le droit du Royaume du Maroc et les tribunaux marocains sont compétents, sans préjudice des droits impératifs dont vous bénéficiez en tant que consommateur dans votre pays de résidence.",
            "تخضع هذه الشروط لقوانين المملكة المغربية، وتختص بها المحاكم المغربية، دون المساس بحقوقك الإلزامية كمستهلك في بلد إقامتك.")
        ]),
        S("Contact us", "Nous contacter", "تواصل معنا", [
          P("For any question about these terms, contact us by email at {email}.",
            "Pour toute question sur ces conditions, contactez-nous par e-mail à {email}.",
            "لأي سؤال حول هذه الشروط، تواصل معنا عبر البريد الإلكتروني {email}.")
        ])
      ]
    }
  };
})(window.KAYN);

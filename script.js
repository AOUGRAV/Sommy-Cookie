(() => {
  const phone = "905515352210";
  const html = document.documentElement;
  const header = document.querySelector("[data-header]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const copy = {
    ar: {
      dir: "rtl",
      pageTitle: "Sommy's Cookie | كوكيز هوم ميد",
      skip: "انتقل إلى النكهات",
      whatsappAria: "اطلب عبر واتساب",
      tagline: "كوكيز هوم ميد، مخبوزة بحب",
      heroCopy: "كوكيز سميكة وطريّة بحشوات غنية، تُخبز طازجة وتصل إليك بطعم يستحق كل قضمة.",
      orderNow: "اطلب عبر واتساب",
      explore: "اكتشف النكهات",
      flavorsLabel: "النكهات",
      flavorsTitle: "خمس نكهات. لكل واحدة شخصيتها.",
      flavorsLead: "من الكلاسيك إلى الدبل تشوكلت، اختر الحشوة التي تناسب مزاجك.",
      kinderTitle: "كيندر كوكيز",
      kinderDesc: "عجينة كوكيز كلاسيكية محشية بشوكولاتة كيندر.",
      whiteTitle: "وايت تشوكلت كوكيز",
      whiteDesc: "عجينة كوكيز طرية محشية بالشوكولاتة البيضاء الكريمية.",
      nutellaTitle: "نوتيلا دبل تشوكلت",
      nutellaDesc: "عجينة شوكولاتة غنية بقلب نوتيلا ذائب.",
      marbleTitle: "ماربل كوكيز",
      marbleDesc: "مزيج من العجينة الأصلية وعجينة الشوكولاتة، بحشوة نوتيلا أو شوكولاتة بيضاء أو بالحليب.",
      originalTitle: "أوريجينال كوكيز",
      originalDesc: "العجينة الكلاسيكية مع قطع الشوكولاتة وشوكولاتة الحليب.",
      orderFlavor: "اطلب هذه النكهة",
      galleryLabel: "من الفرن",
      galleryTitle: "تُخبز بحب، وتُقدّم طازجة.",
      galleryLead: "حواف ذهبية، قلب طري، وحشوة واضحة في كل قطعة.",
      orderLabel: "الطلب",
      orderTitle: "اطلب نكهتك المفضلة مباشرة عبر واتساب.",
      orderLead: "أرسل طلبك على الرقم الرسمي وسنرتب التفاصيل معك.",
      openWhatsapp: "افتح واتساب",
      contactNow: "تواصل معنا الآن",
      instagramAria: "افتح حسابنا على إنستغرام",
      tiktokAria: "افتح حسابنا على تيك توك",
      footerLine: "هوم ميد. مخبوز بحب.",
      generalMessage: "مرحباً Sommy's Cookie، أرغب بتقديم طلب.",
      productMessage: (name) => `مرحباً Sommy's Cookie، أرغب بطلب ${name}.`
    },
    en: {
      dir: "ltr",
      pageTitle: "Sommy's Cookie | Homemade Cookies",
      skip: "Skip to flavors",
      whatsappAria: "Order on WhatsApp",
      tagline: "Homemade cookies, baked with love",
      heroCopy: "Thick, soft cookies with generous fillings, baked fresh for a rich bite worth savoring.",
      orderNow: "Order on WhatsApp",
      explore: "Explore flavors",
      flavorsLabel: "Flavors",
      flavorsTitle: "Five flavors. Each with its own character.",
      flavorsLead: "From classic to double chocolate, choose the filling that matches your mood.",
      kinderTitle: "Kinder Cookies",
      kinderDesc: "Classic cookie dough filled with Kinder chocolate.",
      whiteTitle: "White Chocolate Cookies",
      whiteDesc: "Soft cookie dough filled with creamy white chocolate.",
      nutellaTitle: "Nutella Double Chocolate",
      nutellaDesc: "Rich chocolate cookie dough with a molten Nutella center.",
      marbleTitle: "Marble Cookies",
      marbleDesc: "Classic and chocolate cookie dough with your choice of Nutella, white chocolate, or milk chocolate filling.",
      originalTitle: "Original Cookies",
      originalDesc: "Classic cookie dough loaded with chocolate chips and milk chocolate chunks.",
      orderFlavor: "Order this flavor",
      galleryLabel: "From the oven",
      galleryTitle: "Baked with love. Served fresh.",
      galleryLead: "Golden edges, soft centers, and a generous filling in every cookie.",
      orderLabel: "Order",
      orderTitle: "Order your favorite flavor directly on WhatsApp.",
      orderLead: "Send your order to our official number and we will arrange the details with you.",
      openWhatsapp: "Open WhatsApp",
      contactNow: "Contact us now",
      instagramAria: "Open our Instagram account",
      tiktokAria: "Open our TikTok account",
      footerLine: "Homemade. Baked with love.",
      generalMessage: "Hello Sommy's Cookie, I'd like to place an order.",
      productMessage: (name) => `Hello Sommy's Cookie, I'd like to order ${name}.`
    },
    tr: {
      dir: "ltr",
      pageTitle: "Sommy's Cookie | Ev Yapımı Kurabiye",
      skip: "Lezzetlere geç",
      whatsappAria: "WhatsApp'tan sipariş ver",
      tagline: "Sevgiyle pişirilen ev yapımı kurabiyeler",
      heroCopy: "Zengin dolgulu, kalın ve yumuşak kurabiyeler. Her lokmada taze ve yoğun lezzet.",
      orderNow: "WhatsApp'tan sipariş ver",
      explore: "Lezzetleri keşfet",
      flavorsLabel: "Lezzetler",
      flavorsTitle: "Beş lezzet. Her birinin kendine özgü karakteri var.",
      flavorsLead: "Klasikten çift çikolataya, ruh halinize uygun dolguyu seçin.",
      kinderTitle: "Kinder Kurabiye",
      kinderDesc: "Kinder çikolatası dolgulu klasik kurabiye hamuru.",
      whiteTitle: "Beyaz Çikolatalı Kurabiye",
      whiteDesc: "Kremalı beyaz çikolata dolgulu yumuşak kurabiye hamuru.",
      nutellaTitle: "Nutellalı Çift Çikolata",
      nutellaDesc: "Akışkan Nutella dolgulu yoğun çikolatalı kurabiye hamuru.",
      marbleTitle: "Mermer Kurabiye",
      marbleDesc: "Klasik ve çikolatalı hamur; Nutella, beyaz çikolata veya sütlü çikolata dolgu seçeneğiyle.",
      originalTitle: "Klasik Kurabiye",
      originalDesc: "Damla çikolata ve sütlü çikolata parçalarıyla hazırlanan klasik kurabiye hamuru.",
      orderFlavor: "Bu lezzeti sipariş et",
      galleryLabel: "Fırından",
      galleryTitle: "Sevgiyle pişirilir, taze sunulur.",
      galleryLead: "Altın rengi kenarlar, yumuşak iç doku ve her parçada belirgin dolgu.",
      orderLabel: "Sipariş",
      orderTitle: "Favori lezzetinizi doğrudan WhatsApp'tan sipariş edin.",
      orderLead: "Siparişinizi resmi numaramıza gönderin; detayları sizinle birlikte netleştirelim.",
      openWhatsapp: "WhatsApp'ı aç",
      contactNow: "Şimdi iletişime geç",
      instagramAria: "Instagram hesabımızı aç",
      tiktokAria: "TikTok hesabımızı aç",
      footerLine: "Ev yapımı. Sevgiyle pişirildi.",
      generalMessage: "Merhaba Sommy's Cookie, sipariş vermek istiyorum.",
      productMessage: (name) => `Merhaba Sommy's Cookie, ${name} sipariş etmek istiyorum.`
    }
  };

  const productKeys = {
    kinder: "kinderTitle",
    white: "whiteTitle",
    nutella: "nutellaTitle",
    marble: "marbleTitle",
    original: "originalTitle"
  };

  let currentLanguage = "ar";

  const updateWhatsAppLinks = () => {
    const t = copy[currentLanguage];

    document.querySelectorAll("[data-wa='general']").forEach((link) => {
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(t.generalMessage)}`;
    });

    document.querySelectorAll("[data-wa-product]").forEach((link) => {
      const productKey = productKeys[link.dataset.waProduct];
      const productName = t[productKey];
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(t.productMessage(productName))}`;
    });
  };

  const setLanguage = (language, persist = true) => {
    const next = copy[language] ? language : "ar";
    const t = copy[next];
    currentLanguage = next;

    html.lang = next;
    html.dir = t.dir;
    document.title = t.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t[node.dataset.i18n];
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const value = t[node.dataset.i18nAria];
      if (typeof value === "string") {
        node.setAttribute("aria-label", value);
        node.setAttribute("title", value);
      }
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === next;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    updateWhatsAppLinks();
    if (persist) localStorage.setItem("sommys-language", next);
    window.ScrollTrigger?.refresh();
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  const storedLanguage = localStorage.getItem("sommys-language");
  const initialLanguage = storedLanguage || "ar";
  setLanguage(initialLanguage, false);

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 28);
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const progressBar = document.querySelector(".scroll-progress span");
    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  let lenis = null;
  if (window.Lenis && !reduceMotion.matches) {
    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -82 }
    });
  }

  if (!window.gsap) return;

  const { gsap } = window;
  const hasScrollTrigger = Boolean(window.ScrollTrigger);
  if (hasScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  if (lenis && hasScrollTrigger) {
    const update = () => ScrollTrigger.update();
    const tick = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
  } else if (lenis) {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  if (reduceMotion.matches) return;

  const intro = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });
  intro
    .from(".site-header", { y: -18, autoAlpha: 0, duration: 0.6 })
    .from(".hero-kicker", { y: 18, autoAlpha: 0 }, "<0.12")
    .from(".hero h1 span", { y: 34, autoAlpha: 0, stagger: 0.08 }, "<0.08")
    .from(".hero-copy", { y: 22, autoAlpha: 0 }, "<0.08")
    .from(".hero-actions .button", { y: 18, autoAlpha: 0, stagger: 0.08 }, "<0.08");

  if (!hasScrollTrigger) return;

  gsap.to(".hero-media", {
    scale: 1.08,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });

  ScrollTrigger.batch(".reveal", {
    start: "top 86%",
    once: true,
    interval: 0.08,
    batchMax: 3,
    onEnter: (batch) => {
      gsap.from(batch, {
        y: 34,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        overwrite: true
      });
    }
  });

  document.querySelectorAll(".gallery-shot").forEach((shot) => {
    const image = shot.querySelector("img");
    if (!image) return;
    gsap.fromTo(image, { yPercent: -5 }, {
      yPercent: 3,
      ease: "none",
      scrollTrigger: {
        trigger: shot,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8
      }
    });
  });

  const cookieButton = document.querySelector(".cookie-cta");
  if (cookieButton) {
    gsap.to(cookieButton, {
      y: -8,
      rotation: 1.4,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  gsap.to(".order-crumb", {
    y: (index) => index % 2 ? -12 : 10,
    rotation: "+=26",
    duration: 2.8,
    stagger: 0.35,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  if (window.matchMedia("(min-width: 900px) and (pointer: fine)").matches) {
    const hero = document.querySelector(".hero");
    const media = document.querySelector(".hero-media");
    if (hero && media) {
      const xTo = gsap.quickTo(media, "x", { duration: 0.8, ease: "power3.out" });
      const yTo = gsap.quickTo(media, "y", { duration: 0.8, ease: "power3.out" });
      hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        xTo(((event.clientX - rect.left) / rect.width - 0.5) * -12);
        yTo(((event.clientY - rect.top) / rect.height - 0.5) * -8);
      });
      hero.addEventListener("pointerleave", () => {
        xTo(0);
        yTo(0);
      });
    }
  }

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();

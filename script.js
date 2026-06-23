(() => {
  const phone = "905515352210";
  const html = document.documentElement;
  const header = document.querySelector("[data-header]");
  const progressBar = document.querySelector(".scroll-progress span");
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
      galleryPosterEyebrow: "من الفرن مباشرة",
      galleryPosterLine1: "كل النكهات.",
      galleryPosterLine2: "في دفعة واحدة.",
      orderLabel: "الطلب",
      orderTitle: "اطلب نكهتك المفضلة مباشرة عبر واتساب.",
      orderLead: "أرسل طلبك على الرقم الرسمي وسنقوم بترتيب التفاصيل معك.",
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
      galleryPosterEyebrow: "Fresh from the oven",
      galleryPosterLine1: "Every flavor.",
      galleryPosterLine2: "One fresh batch.",
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
      galleryPosterEyebrow: "Fırından taptaze",
      galleryPosterLine1: "Tüm lezzetler.",
      galleryPosterLine2: "Tek taze tepside.",
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
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  const storedLanguage = localStorage.getItem("sommys-language");
  const initialLanguage = storedLanguage || "ar";
  setLanguage(initialLanguage, false);

  let maxScroll = 1;
  let headerFrame = 0;

  const updateScrollBounds = () => {
    maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  };

  const updateHeader = () => {
    headerFrame = 0;
    const scrollY = window.scrollY;
    header?.classList.toggle("is-scrolled", scrollY > 28);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
  };

  const queueHeaderUpdate = () => {
    if (!headerFrame) headerFrame = requestAnimationFrame(updateHeader);
  };

  updateScrollBounds();
  updateHeader();
  window.addEventListener("scroll", queueHeaderUpdate, { passive: true });
  window.addEventListener("resize", () => {
    updateScrollBounds();
    queueHeaderUpdate();
  }, { passive: true });

  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -7% 0px",
      threshold: 0.08
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  let lenis = null;
  if (window.Lenis && !reduceMotion.matches) {
    lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      syncTouch: false,
      anchors: { offset: -82 }
    });
  }

  if (!window.gsap) return;

  const { gsap } = window;
  const hasScrollTrigger = Boolean(window.ScrollTrigger);
  if (hasScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  if (lenis && hasScrollTrigger) {
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tickLenis = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tickLenis);
    gsap.ticker.lagSmoothing(0);
  } else if (lenis) {
    const tickLenis = (time) => {
      lenis.raf(time);
      requestAnimationFrame(tickLenis);
    };
    requestAnimationFrame(tickLenis);
  }

  if (reduceMotion.matches) return;

  const intro = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });
  intro
    .from(".site-header", { y: -18, autoAlpha: 0, duration: 0.6 })
    .from(".hero-kicker", { y: 18, autoAlpha: 0 }, "<0.12")
    .from(".hero h1 span", { y: 34, autoAlpha: 0, stagger: 0.08 }, "<0.08")
    .from(".hero-copy", { y: 22, autoAlpha: 0 }, "<0.08")
    .from(".hero-actions .button", { y: 18, autoAlpha: 0, stagger: 0.08 }, "<0.08");

  if (hasScrollTrigger) {
    gsap.to(".hero-media", {
      scale: 1.045,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });

    const galleryStart = window.innerWidth <= 700 ? -2 : -4;
    document.querySelectorAll(".gallery-shot").forEach((shot) => {
      const image = shot.querySelector("img");
      if (!image || image.dataset.staticMedia === "true") return;

      gsap.fromTo(image, { yPercent: galleryStart }, {
        yPercent: 0,
        ease: "none",
        immediateRender: true,
        scrollTrigger: {
          trigger: shot,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
          onToggle: (self) => {
            image.style.willChange = self.isActive ? "transform" : "auto";
          }
        }
      });
    });
  }

  const contactButton = document.querySelector(".contact-cta");
  if (contactButton) {
    const contactIcon = contactButton.querySelector("svg");
    if (contactIcon) {
      gsap.to(contactIcon, {
        scale: 1.08,
        duration: 1.35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }

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

  window.addEventListener("load", () => {
    updateScrollBounds();
    if (hasScrollTrigger) ScrollTrigger.refresh();
  });
})();

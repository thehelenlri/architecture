import RealtoPages from "./RealtoPages";
import RealtoFooter from "./RealtoFooter";
import RealtoAgent from "./RealtoAgent";
import RealtoFloorPlan from "./RealtoFloorPlan";
import { useEffect, useMemo, useState } from "react";
import {
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Heart,
  Share2,
  Bookmark,
  Star,
  Home,
  Bath,
  BedDouble,
  Car,
  MapPinned,
} from "lucide-react";
import "./realto.css";

type Lang = "en" | "fa";

const photos = ["/house1.avif", "/house2.avif", "/house3.avif"];

function readStorage(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}


type RealtoPage = "home" | "projects" | "services" | "about" | "contact";

function readRealtoPage(): RealtoPage {
  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/projects") return "projects";
  if (path === "/services") return "services";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";

  return "home";
}

function App() {

  const [currentPage,setCurrentPage] = useState<RealtoPage>(
    readRealtoPage
  );

  useEffect(() => {
    const syncPage = () => {
      setCurrentPage(readRealtoPage());
      setMenuOpen(false);
      window.scrollTo({top:0,behavior:"auto"});
    };

    window.addEventListener("popstate",syncPage);

    return () => {
      window.removeEventListener("popstate",syncPage);
    };
  },[]);

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
  },[currentPage]);

  const [lang, setLang] = useState<Lang>(() =>
    readStorage("realto-lang", "en") === "fa" ? "fa" : "en"
  );
  const [dark, setDark] = useState(() => readStorage("realto-theme", "light") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [planZoom, setPlanZoom] = useState(1);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [liked, setLiked] = useState<number[]>(() => {
    try {
      const raw = JSON.parse(readStorage("realto-liked", "[]"));
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState("");

  const t = useMemo(() => {
    const en = {
      brand: "REALTO",
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      featured: "Featured architecture",
      heroTitle1: "Minimalist Duplex",
      heroTitle2: "Residence",
      bookNow: "Book Now",
      propertyTitle: "1580 Ocean View Dr, New Jersey, USA",
      propertyDesc:
        "A meticulously planned residential concept engineered for optimal space efficiency, natural light, long-term durability and modern living standards.",
      sleeping: "Sleeping Rooms",
      washrooms: "Washrooms",
      livingSpace: "Living Space",
      parking: "Parking Type",
      rating: "Neighborhood Rating",
      layoutTitle: "Layout & Market Insights",
      layoutDesc:
        "A detailed conceptual view of the plan with key architectural highlights and space-distribution insights.",
      floorLabel: "Floor 1A2",
      median: "Median Price",
      weekly: "Weekly median trend",
      potential: "Potential score",
      moreProps: "More Properties From Marvin McKinney",
      exploreMore: "Explore More",
      profileName: "Marvin McKinney",
      profileRole: "Senior Real Estate Advisor · Residential & Investment Properties",
      aboutMe: "About Me",
      profileDesc:
        "Helping buyers and design-conscious clients discover homes with comfort, functionality and long-term value.",
      stat1: "Listing Performance",
      stat2: "Client Engagement Report",
      stat3: "Market Responsiveness",
      testimonialTitle: "What Our Clients Say About Marvin McKinney",
      testimonialSub: "Trusted by home buyers & sellers",
      quote:
        "Working with Marvin was an outstanding experience from start to finish. His market knowledge, clear communication and attention to detail made the buying process smooth and stress-free.",
      quoteAuthor: "Darl Thorne",
      quoteRole: "Home Buyer",
      lifestyleTitle: "Homes That Match Your Lifestyle",
      lifestyleDesc:
        "Your real estate is a reliable property platform designed for buyers, sellers and investors. Make informed property decisions through verified listings, trusted agents and live market insights.",
      appBtn: "Download The App Store",
      dreamTitle: "Find Your Dream Home Faster",
      dreamDesc:
        "Explore architecture-inspired residences, discover refined living and reach out for your next property journey.",
      getStarted: "Get Started Now",
      footerExplore: "Explore",
      footerSubscribe: "Subscribe & Newsletter",
      footerContact: "Contact Us",
      footerText: "Architecture, refined living and modern real estate experiences.",
      emailPlaceholder: "Enter Your Email",
      subscribe: "Subscribe",
      copyOk: "Link copied",
      consultant: "Get in touch",
      property: "Property Details",
      projectGallery: "Project Gallery",
      residential: "Residential Design",
      saved: "Saved",
      openGallery: "Open Gallery",
      close: "Close",
      viewAll: "View All",
      fa: "فا",
      en: "EN",
      modern: "Modern Luxury Living Space Revealed",
      marketUpdate: "Market Update",
      activity: "Activity",
      recentViewed: "Recently Viewed Homes",
    };

    const fa = {
      brand: "REALTO",
      home: "خانه",
      projects: "پروژه‌ها",
      services: "خدمات",
      about: "درباره ما",
      contact: "تماس",
      featured: "معماری منتخب",
      heroTitle1: "اقامتگاه دوبلکس",
      heroTitle2: "مینیمال",
      bookNow: "رزرو مشاوره",
      propertyTitle: "۱۵۸۰ اوشن ویو، نیوجرسی، آمریکا",
      propertyDesc:
        "یک کانسپت مسکونی دقیق و برنامه‌ریزی‌شده با تمرکز بر استفاده بهینه از فضا، نور طبیعی، دوام بلندمدت و استانداردهای زندگی مدرن.",
      sleeping: "اتاق خواب",
      washrooms: "سرویس‌ها",
      livingSpace: "مساحت مفید",
      parking: "پارکینگ",
      rating: "امتیاز محله",
      layoutTitle: "پلان و تحلیل بازار",
      layoutDesc:
        "نمایی مفهومی از پلان همراه با نکات کلیدی معماری و تحلیل توزیع فضا.",
      floorLabel: "پلان ۱A2",
      median: "میانگین قیمت",
      weekly: "روند هفتگی",
      potential: "امتیاز پتانسیل",
      moreProps: "پروژه‌های بیشتر از Marvin McKinney",
      exploreMore: "مشاهده بیشتر",
      profileName: "ماروین مک‌کینی",
      profileRole: "مشاور ارشد املاک · مسکونی و سرمایه‌گذاری",
      aboutMe: "درباره من",
      profileDesc:
        "کمک به خریداران و مشتریان دقیق برای یافتن خانه‌هایی با آسایش، عملکرد بالا و ارزش بلندمدت.",
      stat1: "عملکرد لیستینگ",
      stat2: "گزارش تعامل مشتریان",
      stat3: "واکنش‌پذیری بازار",
      testimonialTitle: "نظر مشتریان درباره Marvin McKinney",
      testimonialSub: "مورد اعتماد خریداران و فروشندگان",
      quote:
        "همکاری با ماروین از ابتدا تا انتها تجربه‌ای عالی بود. دانش بازار، ارتباط شفاف و توجه او به جزئیات باعث شد فرایند خرید بسیار روان و بدون استرس پیش برود.",
      quoteAuthor: "دارل تورن",
      quoteRole: "خریدار خانه",
      lifestyleTitle: "خانه‌هایی متناسب با سبک زندگی شما",
      lifestyleDesc:
        "رئالتو یک پلتفرم قابل اعتماد برای خریداران، فروشندگان و سرمایه‌گذاران است تا با لیستینگ‌های معتبر، مشاوران قابل اعتماد و تحلیل زنده بازار تصمیم بهتری بگیرند.",
      appBtn: "دانلود از اپ‌استور",
      dreamTitle: "خانه رویایی‌ات را سریع‌تر پیدا کن",
      dreamDesc:
        "اقامتگاه‌های الهام‌گرفته از معماری را بررسی کن، زندگی لوکس‌تر را کشف کن و برای تجربه بعدی با ما در ارتباط باش.",
      getStarted: "شروع همکاری",
      footerExplore: "دسترسی سریع",
      footerSubscribe: "اشتراک خبرنامه",
      footerContact: "ارتباط با ما",
      footerText: "معماری، زندگی لوکس و تجربه‌ای مدرن از املاک.",
      emailPlaceholder: "ایمیل خود را وارد کنید",
      subscribe: "اشتراک",
      copyOk: "لینک کپی شد",
      consultant: "ارتباط با ما",
      property: "جزئیات ملک",
      projectGallery: "گالری پروژه",
      residential: "طراحی مسکونی",
      saved: "ذخیره‌شده",
      openGallery: "باز کردن گالری",
      close: "بستن",
      viewAll: "مشاهده همه",
      fa: "فا",
      en: "EN",
      modern: "فضای لوکس و مدرن برای زندگی",
      marketUpdate: "به‌روزرسانی بازار",
      activity: "فعالیت",
      recentViewed: "خانه‌های دیده‌شده اخیر",
    };

    return lang === "fa" ? fa : en;
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    localStorage.setItem("realto-lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("realto-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("realto-liked", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    if (!galleryOpen) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryOpen(false);
      if (e.key === "ArrowRight") setHeroIndex((n) => (n + 1) % photos.length);
      if (e.key === "ArrowLeft") setHeroIndex((n) => (n - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", onKey);
    };
  }, [galleryOpen]);


  const cards = new Array(8).fill(0).map((_, i) => ({
    id: i,
    image: photos[i % photos.length],
    price: ["$2,725,000", "$3,955,000", "$3,180,000", "$4,250,000", "$4,185,000", "$2,865,000", "$3,495,000", "$2,145,000"][i],
    titleEn: [
      "Modern Luxury Living",
      "Elegant Urban Home",
      "Minimal Residence",
      "Classic Family Villa",
      "Palm Court House",
      "Contemporary Duplex",
      "Residence With Patio",
      "Coastal Home",
    ][i],
    titleFa: [
      "خانه لوکس مدرن",
      "خانه شهری شیک",
      "اقامتگاه مینیمال",
      "ویلای خانوادگی کلاسیک",
      "خانه پالم کورت",
      "دوبلکس معاصر",
      "خانه با پاسیو",
      "خانه ساحلی",
    ][i],
  }));

  const toggleLike = (id: number) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(t.copyOk);
    } catch (error) {
      console.error("Clipboard error:", error);
      setToast(
        lang === "fa"
          ? "کپی لینک ناموفق بود."
          : "Failed to copy link."
      );
    }

    setTimeout(() => setToast(""), 2200);
  };

  const scrollToId = (id: string) => {
    const routes: Record<string,RealtoPage> = {
      top:"home",
      home:"home",
      properties:"projects",
      projects:"projects",
      layout:"services",
      services:"services",
      profile:"about",
      about:"about",
      footer:"contact",
      contact:"contact"
    };

    const next = routes[id] || "home";
    const path = next === "home" ? "/" : `/${next}`;

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setCurrentPage(next);
    setMenuOpen(false);
    setGalleryOpen(false);

    window.scrollTo({top:0,behavior:"auto"});
  };

  return (
    <div className={`realto ${dark ? "dark" : ""}`}>
      <header className="rt-header">
        <div className="rt-wrap rt-header-inner">
          <button className="rt-brand" onClick={() => scrollToId("top")} dir="ltr">
            <span>✳</span>
            {t.brand}
          </button>

          <nav className={`rt-nav ${menuOpen ? "open" : ""}`}>
            <button aria-current={currentPage === "home" ? "page" : undefined} onClick={() => scrollToId("top")}>{t.home}</button>
            <button aria-current={currentPage === "projects" ? "page" : undefined} onClick={() => scrollToId("properties")}>{t.projects}</button>
            <button aria-current={currentPage === "services" ? "page" : undefined} onClick={() => scrollToId("layout")}>{t.services}</button>
            <button aria-current={currentPage === "about" ? "page" : undefined} onClick={() => scrollToId("profile")}>{t.about}</button>
            <button aria-current={currentPage === "contact" ? "page" : undefined} onClick={() => scrollToId("footer")}>{t.contact}</button>
          </nav>

          <div className="rt-header-actions">
            <button className="rt-icon-btn" onClick={() => setLang(lang === "en" ? "fa" : "en")} aria-label="language">
              <Globe size={16} />
              <span>{lang === "en" ? t.fa : t.en}</span>
            </button>
            <button className="rt-circle" onClick={() => setDark(!dark)} aria-label="theme">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="rt-circle rt-mobile" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {currentPage === "home" ? (<>
        <section className="rt-wrap rt-hero-section">
          <div className="rt-breadcrumb">
            <span>{t.home}</span>
            <span>/</span>
            <span>{t.property}</span>
          </div>

          <div className="rt-hero-top">
            <div>
              <h1 className="rt-hero-title">
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>
              <div className="rt-rating-line">
                <Star size={14} />
                <span>4.3</span>
                <small>(706 reviews)</small>
              </div>
            </div>

            <div className="rt-hero-actions">
              <button className="rt-circle" onClick={copyLink} aria-label="share">
                <Share2 size={16} />
              </button>
              <button className="rt-circle rt-accent" onClick={() => toggleLike(900)} aria-label="save">
                <Bookmark size={16} fill={liked.includes(900) ? "currentColor" : "none"} />
              </button>
              <button className="rt-circle" onClick={() => setGalleryOpen(true)} aria-label="gallery">
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          <div className="rt-hero-image-wrap">
            <img className="rt-hero-image" src={photos[heroIndex]} alt={t.heroTitle1} />
            <div className="rt-hero-fade-top" />
            <div className="rt-hero-fade-bottom" />

            <div className="rt-thumb-row">
              <div className="rt-thumbs">
                {photos.map((src, i) => (
                  <button
                    key={src}
                    className={heroIndex === i ? "active" : ""}
                    onClick={() => setHeroIndex(i)}
                    aria-label={`thumb-${i}`}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>

              <div className="rt-price-box">
                <strong>$2,725,000</strong>
                <button className="rt-pill-btn">
                  {t.bookNow}
                </button>
              </div>
            </div>
          </div>

          <div className="rt-property-info">
            <div className="rt-info-copy">
              <h2>{t.propertyTitle}</h2>
              <p>{t.propertyDesc}</p>
            </div>

            <div className="rt-map-card">
              <div className="rt-map-header">{t.projectGallery}</div>
              <div className="rt-map-body">
                <MapPinned size={20} />
                <span>New York</span>
              </div>
            </div>
          </div>

          <div className="rt-spec-grid">
            <div className="rt-spec-item">
              <small>{t.sleeping}</small>
              <strong><BedDouble size={16} /> Four</strong>
            </div>
            <div className="rt-spec-item">
              <small>{t.washrooms}</small>
              <strong><Bath size={16} /> Four units</strong>
            </div>
            <div className="rt-spec-item">
              <small>{t.livingSpace}</small>
              <strong><Home size={16} /> 1,024 ft</strong>
            </div>
            <div className="rt-spec-item">
              <small>{t.parking}</small>
              <strong><Car size={16} /> Covered</strong>
            </div>
            <div className="rt-spec-item">
              <small>{t.rating}</small>
              <div className="rt-rating-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </section>

        <RealtoFloorPlan
  language={lang}
  zoom={planZoom}
  onZoom={setPlanZoom}
/>
<section className="rt-wrap rt-section" id="properties">
          <div className="rt-section-head">
            <div>
              <h2>{t.moreProps}</h2>
              <p>{t.residential}</p>
            </div>
            <button className="rt-pill-dark">
              {t.exploreMore}
            </button>
          </div>

          <div className="rt-property-grid">
            {cards.map((card) => (
              <article className="rt-property-card" key={card.id}>
                <img src={card.image} alt={lang === "fa" ? card.titleFa : card.titleEn} />
                <div className="rt-card-top">
                  <span>For Sale</span>
                  <button className={`rt-mini-heart ${liked.includes(card.id) ? "active" : ""}`} onClick={() => toggleLike(card.id)}>
                    <Heart size={13} fill={liked.includes(card.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="rt-card-bottom">
                  <strong>{card.price}</strong>
                  <h3>{lang === "fa" ? card.titleFa : card.titleEn}</h3>
                  <p>4 Bed · 4 Bath · 2,380 sq ft</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RealtoAgent language={lang} />

        <section className="rt-wrap rt-section">
          <div className="rt-section-head rt-testimonial-head">
            <div>
              <h2>{t.testimonialTitle}</h2>
              <p>{t.testimonialSub}</p>
            </div>
          </div>

          <div className="rt-testimonial-row">
            <div className="rt-testimonial-image">
              <img src={photos[0]} alt="testimonial-home" />
            </div>

            <div className="rt-testimonial-copy">
              <div className="rt-five-stars">
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="rt-quote-person">
                <strong>{t.quoteAuthor}</strong>
                <small>{t.quoteRole}</small>
              </div>
            </div>

            <div className="rt-testimonial-side">
              <img src={photos[2]} alt="side-home" />
              <div className="rt-side-nav">
                <button className="rt-circle" onClick={() => setHeroIndex((heroIndex - 1 + photos.length) % photos.length)}>
                  <ChevronLeft size={16} />
                </button>
                <button className="rt-circle" onClick={() => setHeroIndex((heroIndex + 1) % photos.length)}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rt-wrap rt-section">
          <div className="rt-center-head">
            <h2>{t.lifestyleTitle}</h2>
          </div>

          <div className="rt-lifestyle-block">
            <div className="rt-lifestyle-fade rt-left-fade">
              <img src={photos[0]} alt="" />
            </div>

            <div className="rt-phone-card">
              <div className="rt-phone-notch" />
              <small>PrimeNest Duplex</small>
              <img src={photos[1]} alt="mobile-preview" />
              <div className="rt-phone-price">$2,725,000</div>
              <div className="rt-phone-meta">4 Bed · 3 Bath · 2,380 sq ft</div>
              <button className="rt-pill-dark">{t.bookNow}</button>
            </div>

            <div className="rt-lifestyle-fade rt-right-fade">
              <img src={photos[2]} alt="" />
            </div>
          </div>

          <div className="rt-center-copy">
            <p>{t.lifestyleDesc}</p>
            <button className="rt-pill-dark">{t.appBtn}</button>
          </div>
        </section>

        
        </>) : (
          <RealtoPages
            key={currentPage}
            page={currentPage}
            language={lang}
            onNavigate={scrollToId}
          />
        )}
<RealtoFooter
  language={lang}
  onNavigate={scrollToId}
/>
      </main>

      {galleryOpen && (
        <div className="rt-gallery-modal" role="dialog" aria-modal="true">
          <button className="rt-circle rt-modal-close" onClick={() => setGalleryOpen(false)} aria-label={t.close}>
            <X size={18} />
          </button>

          <div className="rt-gallery-content">
            <img src={photos[heroIndex]} alt="gallery" />
            <div className="rt-gallery-controls" dir="ltr">
              <button className="rt-circle" onClick={() => setHeroIndex((heroIndex - 1 + photos.length) % photos.length)}>
                <ChevronLeft size={18} />
              </button>
              <span>{heroIndex + 1} / {photos.length}</span>
              <button className="rt-circle" onClick={() => setHeroIndex((heroIndex + 1) % photos.length)}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="rt-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;







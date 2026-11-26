import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Heart,
  Search,
  Building2,
  Layers,
  Ruler,
  Compass,
  Sun,
  Leaf,
  Mail,
  Phone,
  Clock,
  Check,
  ChevronDown,
  Plus,
  Minus,
  X,
  Send,
  Copy,
} from "lucide-react";

import "./RealtoPages.css";

type Page = "home" | "projects" | "services" | "about" | "contact";

interface Props {
  page: Page;
  language: "en" | "fa";
  onNavigate: (id: string) => void;
}

const photos = [
  "/house1.avif",
  "/house2.avif",
  "/house3.avif",
];

const projects = [
  {
    id: 0,
    image: photos[0],
    en: "Contemporary Residence",
    fa: "اقامتگاه معاصر",
    category: "residential",
    description: [
      "A contemporary architectural concept exploring geometric forms, natural light and an open relationship with the outdoors.",
      "طرحی معاصر با تمرکز بر فرم‌های هندسی، نور طبیعی و ارتباط میان فضای داخلی و محیط بیرون."
    ],
  },
  {
    id: 1,
    image: photos[1],
    en: "Classic Family Villa",
    fa: "ویلای خانوادگی کلاسیک",
    category: "residential",
    description: [
      "A residential design concept combining familiar architectural forms with warm materials and comfortable living spaces.",
      "طرحی مسکونی که فرم‌های کلاسیک معماری را با متریال گرم و فضاهای راحت زندگی ترکیب می‌کند."
    ],
  },
  {
    id: 2,
    image: photos[2],
    en: "Modern Architectural Retreat",
    fa: "اقامتگاه معماری مدرن",
    category: "concept",
    description: [
      "An architectural concept inspired by peaceful surroundings, minimal materials and expansive outdoor views.",
      "طرحی معماری الهام‌گرفته از محیط آرام، متریال مینیمال و چشم‌اندازهای باز."
    ],
  },
];

const services = [
  {
    Icon: Building2,
    en: "Architectural Design",
    fa: "طراحی معماری",
    desc: "Residential architecture shaped around function, natural light and contemporary living.",
    descFa: "طراحی معماری مسکونی بر اساس عملکرد، نور طبیعی و زندگی معاصر.",
    items: ["Concept development", "Spatial planning", "Facade design"],
    itemsFa: ["توسعه طرح مفهومی", "طراحی فضا", "طراحی نما"],
    image: photos[0],
  },
  {
    Icon: Layers,
    en: "Interior Design",
    fa: "طراحی داخلی",
    desc: "Thoughtful interior concepts with balanced materials, colors and spatial relationships.",
    descFa: "طراحی داخلی هدفمند با ترکیب متعادل متریال، رنگ‌ها و ارتباط فضاها.",
    items: ["Material selection", "Interior concepts", "Furniture planning"],
    itemsFa: ["انتخاب متریال", "طراحی مفهومی داخلی", "چیدمان مبلمان"],
    image: photos[1],
  },
  {
    Icon: Ruler,
    en: "Space Planning",
    fa: "طراحی و برنامه‌ریزی فضا",
    desc: "Functional layouts that make better use of available space.",
    descFa: "چیدمان کاربردی برای استفاده بهتر از فضای موجود.",
    items: ["Floor plan concepts", "Circulation", "Functional layouts"],
    itemsFa: ["طرح مفهومی پلان", "مسیرهای حرکتی", "چیدمان کاربردی"],
    image: photos[2],
  },
  {
    Icon: Compass,
    en: "Design Consultation",
    fa: "مشاوره طراحی",
    desc: "Exploring architectural possibilities and defining a clear direction for your project.",
    descFa: "بررسی امکانات معماری و تعیین مسیر مشخص برای طراحی پروژه.",
    items: ["Design direction", "Project requirements", "Concept review"],
    itemsFa: ["مسیر طراحی", "نیازهای پروژه", "بررسی کانسپت"],
    image: photos[0],
  },
];

export default function RealtoPages({
  page,
  language,
  onNavigate,
}: Props) {

  const fa = language === "fa";
  const t = (en:string,ir:string) => fa ? ir : en;
  const Arrow = fa ? ArrowLeft : ArrowRight;

  const [query,setQuery] = useState("");
  const [filter,setFilter] = useState("all");
  const [selected,setSelected] = useState<number|null>(null);
  const [activeImage,setActiveImage] = useState(0);
  const [faq,setFaq] = useState<number|null>(0);
  const [gallery,setGallery] = useState(false);
  const [notice,setNotice] = useState("");
  const [request,setRequest] = useState("");

  const [saved,setSaved] = useState<number[]>(() => {
    try {
      const data = JSON.parse(
        localStorage.getItem("realto-page-favorites") || "[]"
      );
      return Array.isArray(data)
        ? data.filter(n => Number.isInteger(n) && n >= 0 && n < projects.length)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    setSelected(null);
    setGallery(false);
    setNotice("");
  },[page]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "realto-page-favorites",
        JSON.stringify(saved)
      );
    } catch {
      // Favorites remain available in the current session.
    }
  },[saved]);

  useEffect(() => {
    if (!gallery) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keyboard = (e:KeyboardEvent) => {
      if (e.key === "Escape") setGallery(false);
      if (e.key === "ArrowRight") {
        setActiveImage(n => (n+1)%photos.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImage(n => (n+photos.length-1)%photos.length);
      }
    };

    window.addEventListener("keydown",keyboard);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown",keyboard);
    };
  },[gallery]);

  const save = (id:number) => {
    setSaved(old => old.includes(id)
      ? old.filter(n => n !== id)
      : [...old,id]);
  };

  const openProject = (id:number) => {
    setSelected(id);
    setActiveImage(id);
    window.scrollTo({top:0,behavior:"auto"});
  };

  const cta = (label:string,id:string) => (
    <button
      className="rps-button"
      onClick={() => onNavigate(id)}
    >
      {label}
      <Arrow size={16}/>
    </button>
  );

  const heading = (
    label:string,
    title:string,
    description:string
  ) => (
    <div className="rps-heading">
      <div className="rps-breadcrumb">
        <button onClick={() => onNavigate("top")}>
          {t("Home","خانه")}
        </button>
        <span>/</span>
        <span>{label}</span>
      </div>
      <span className="rps-kicker">
        {t("REALTO / ARCHITECTURE","رئالتو / معماری")}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );

  const filtered = projects.filter(project => {
    const matchesFilter =
      filter === "all" ||
      filter === project.category ||
      (filter === "saved" && saved.includes(project.id));

    const text = `${project.en} ${project.fa}`.toLowerCase();

    return matchesFilter && text.includes(query.toLowerCase().trim());
  });

  const questions = [
    [
      "How does a design project begin?",
      "پروژه طراحی چگونه آغاز می‌شود؟",
      "We begin by reviewing the requirements, available space and preferred architectural direction.",
      "ابتدا نیازها، فضای موجود و سبک معماری موردنظر بررسی می‌شوند."
    ],
    [
      "Can I request a custom design?",
      "آیا می‌توانم طراحی اختصاصی درخواست کنم؟",
      "You can prepare a consultation request describing your requirements and design preferences.",
      "می‌توانید درخواست مشاوره‌ای شامل نیازها و سلیقه طراحی خود آماده کنید."
    ],
    [
      "Are the displayed properties available for sale?",
      "آیا املاک نمایش‌داده‌شده برای فروش هستند؟",
      "The current collection is a portfolio demonstration, not a verified property marketplace.",
      "مجموعه فعلی یک نمونه‌کار نمایشی است و بازار تاییدشده خرید و فروش ملک نیست."
    ],
  ];

  return (
    <div
      className="rps"
      dir={fa ? "rtl" : "ltr"}
      lang={language}
    >

      {/* PROJECTS PAGE */}

      {page === "projects" && selected === null && (
        <section className="rps-wrap rps-page">

          {heading(
            t("Projects","پروژه‌ها"),
            t("Spaces worth exploring.","فضاهایی ارزشمند برای کشف."),
            t(
              "Discover our collection of architectural concepts and residential spaces.",
              "مجموعه طرح‌های معماری و فضاهای مسکونی را کشف کنید."
            )
          )}

          <div className="rps-project-hero">

            <img
              src={photos[2]}
              alt={t("Featured architecture","معماری منتخب")}
            />

            <div className="rps-photo-overlay"/>

            <div className="rps-project-hero-copy">

              <span>{t("FEATURED COLLECTION","مجموعه منتخب")}</span>

              <h2>
                {t(
                  "Architecture for modern living.",
                  "معماری برای زندگی مدرن."
                )}
              </h2>

              <button
                className="rps-white-button"
                onClick={() => openProject(2)}
              >
                {t("Explore project","مشاهده پروژه")}
                <ArrowUpRight size={17}/>
              </button>

            </div>

          </div>

          <div className="rps-section">

            <div className="rps-section-head">

              <div>
                <h2>{t("Selected projects","پروژه‌های منتخب")}</h2>
                <p>
                  {filtered.length} {t("projects","پروژه")}
                </p>
              </div>

              <label className="rps-search">
                <Search size={18}/>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t("Search projects...","جستجوی پروژه...")}
                  aria-label={t("Search projects","جستجوی پروژه")}
                />
              </label>

            </div>

            <div className="rps-filters">

              {[
                ["all","All projects","همه پروژه‌ها"],
                ["residential","Residential","مسکونی"],
                ["concept","Concept design","طراحی مفهومی"],
                ["saved","Saved","علاقه‌مندی‌ها"],
              ].map(([id,en,ir]) => (

                <button
                  key={id}
                  className={filter === id ? "active" : ""}
                  onClick={() => setFilter(id)}
                  aria-pressed={filter === id}
                >
                  {t(en,ir)}
                  {id === "saved" && ` (${saved.length})`}
                </button>

              ))}

            </div>

            <div className="rps-project-grid">

              {filtered.map(project => (

                <article className="rps-project-card" key={project.id}>

                  <button
                    className="rps-project-image"
                    onClick={() => openProject(project.id)}
                    aria-label={t(project.en,project.fa)}
                  >
                    <img
                      src={project.image}
                      alt={t(project.en,project.fa)}
                      loading="lazy"
                    />
                  </button>

                  <div className="rps-card-overlay"/>

                  <span className="rps-project-tag">
                    {t("Design concept","طرح مفهومی")}
                  </span>

                  <button
                    className="rps-heart"
                    aria-label={t("Save project","ذخیره پروژه")}
                    aria-pressed={saved.includes(project.id)}
                    onClick={() => save(project.id)}
                  >
                    <Heart
                      size={18}
                      fill={saved.includes(project.id)
                        ? "#e9b649"
                        : "none"}
                    />
                  </button>

                  <div className="rps-card-copy">
                    <small>
                      {t("Architecture & Design","معماری و طراحی")}
                    </small>
                    <h3>{t(project.en,project.fa)}</h3>
                    <button onClick={() => openProject(project.id)}>
                      {t("View project","مشاهده پروژه")}
                      <ArrowUpRight size={18}/>
                    </button>
                  </div>

                </article>

              ))}

            </div>

            {!filtered.length && (
              <div className="rps-empty">
                <Search size={32}/>
                <p>{t("No matching projects","پروژه‌ای پیدا نشد.")}</p>
                <button onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}>
                  {t("Clear filters","حذف فیلترها")}
                </button>
              </div>
            )}

          </div>

        </section>
      )}

      {/* PROJECT DETAILS */}

      {page === "projects" && selected !== null && (

        <section className="rps-wrap rps-page">

          <button
            className="rps-back"
            onClick={() => {
              setSelected(null);
              window.scrollTo({top:0,behavior:"auto"});
            }}
          >
            {fa ? <ArrowRight size={18}/> : <ArrowLeft size={18}/>}
            {t("Back to projects","بازگشت به پروژه‌ها")}
          </button>

          {heading(
            t("Project details","جزئیات پروژه"),
            t(projects[selected].en,projects[selected].fa),
            t("Architectural design concept","طرح مفهومی معماری")
          )}

          <div className="rps-detail-hero">

            <img
              src={photos[activeImage]}
              alt={t(projects[selected].en,projects[selected].fa)}
            />

            <div className="rps-detail-fade"/>

            <button
              className="rps-circle rps-expand"
              onClick={() => setGallery(true)}
              aria-label={t("Expand image","بزرگ‌نمایی تصویر")}
            >
              <ArrowUpRight size={21}/>
            </button>

          </div>

          <div className="rps-detail-gallery">

            <div className="rps-thumbnails">
              {photos.map((photo,id) => (
                <button
                  key={photo}
                  className={activeImage === id ? "active" : ""}
                  onClick={() => setActiveImage(id)}
                  aria-label={`${t("Collection image","تصویر مجموعه")} ${id+1}`}
                >
                  <img src={photo} alt=""/>
                </button>
              ))}
            </div>

            {cta(t("Request consultation","درخواست مشاوره"),"footer")}

          </div>

          <div className="rps-section">

            <h2>{t("Project overview","معرفی پروژه")}</h2>

            <p className="rps-long-copy">
              {projects[selected].description[fa ? 1 : 0]}
            </p>

            <div className="rps-detail-specs">

              {[
                {Icon:Building2,a:"Architecture",b:"معماری"},
                {Icon:Sun,a:"Natural light",b:"نور طبیعی"},
                {Icon:Layers,a:"Materials",b:"متریال"},
                {Icon:Ruler,a:"Spatial design",b:"طراحی فضا"},
              ].map(({Icon,a,b}) => (
                <div key={a}>
                  <Icon size={23} strokeWidth={1.5}/>
                  <strong>{t(a,b)}</strong>
                </div>
              ))}

            </div>

          </div>

          <div className="rps-section">

            <h2>{t("Discover more projects","پروژه‌های بیشتر")}</h2>

            <div className="rps-related">

              {projects.filter(p => p.id !== selected).map(project => (
                <button
                  key={project.id}
                  onClick={() => openProject(project.id)}
                >
                  <img src={project.image} alt=""/>
                  <span>{t(project.en,project.fa)}</span>
                  <ArrowUpRight size={18}/>
                </button>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* SERVICES PAGE */}

      {page === "services" && (

        <section className="rps-wrap rps-page">

          {heading(
            t("Services","خدمات"),
            t("Designed around your life.","طراحی متناسب با زندگی شما."),
            t(
              "From initial ideas to thoughtful architectural concepts.",
              "از ایده‌های اولیه تا طرح‌های هدفمند معماری."
            )
          )}

          <div className="rps-services-banner">
            <img src={photos[0]} alt={t("Architecture","معماری")}/>
            <div className="rps-photo-overlay"/>
            <div>
              <span>REALTO / DESIGN STUDIO</span>
              <h2>
                {t("Better spaces. Better living.","فضاهای بهتر، زندگی بهتر.")}
              </h2>
            </div>
          </div>

          <div className="rps-section">

            <div className="rps-center">
              <span className="rps-kicker">
                {t("OUR EXPERTISE","حوزه‌های طراحی")}
              </span>
              <h2>{t("What we do","خدمات ما")}</h2>
              <p>
                {t(
                  "A considered approach to every aspect of design.",
                  "رویکردی هدفمند به تمام جنبه‌های طراحی."
                )}
              </p>
            </div>

            <div className="rps-service-grid">

              {services.map((service,index) => (

                <article className="rps-service-card" key={service.en}>

                  <div className="rps-service-photo">
                    <img
                      src={service.image}
                      alt={t(service.en,service.fa)}
                      loading="lazy"
                    />
                    <span>0{index+1}</span>
                  </div>

                  <div className="rps-service-body">

                    <div className="rps-service-icon">
                      <service.Icon size={24} strokeWidth={1.5}/>
                    </div>

                    <h3>{t(service.en,service.fa)}</h3>

                    <p>{t(service.desc,service.descFa)}</p>

                    <div className="rps-checklist">
                      {(fa ? service.itemsFa : service.items).map(item => (
                        <div key={item}>
                          <Check size={15}/>
                          {item}
                        </div>
                      ))}
                    </div>

                    {cta(t("Get in touch","ارتباط با ما"),"footer")}

                  </div>

                </article>

              ))}

            </div>

          </div>

          <div className="rps-section">

            <div className="rps-center">
              <h2>{t("Our design process","فرایند طراحی ما")}</h2>
            </div>

            <div className="rps-process-grid">

              {[
                ["Discover","شناخت","Understanding your vision.","شناخت ایده‌ها و نیازهای شما."],
                ["Concept","کانسپت","Exploring design possibilities.","بررسی امکانات طراحی."],
                ["Develop","توسعه","Refining spaces and materials.","تکمیل فضاها و متریال."],
                ["Review","بازبینی","Reviewing the final concept.","بازبینی طرح نهایی."],
              ].map(([a,b,c,d],i) => (

                <article key={a}>
                  <div className="rps-step-number">0{i+1}</div>
                  <h3>{t(a,b)}</h3>
                  <p>{t(c,d)}</p>
                </article>

              ))}

            </div>

          </div>

          <div className="rps-section rps-faq">

            <div className="rps-center">
              <h2>{t("Frequently asked questions","سوالات متداول")}</h2>
            </div>

            {questions.map(([a,b,c,d],i) => (

              <article className="rps-faq-item" key={a}>

                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  aria-expanded={faq === i}
                >
                  {t(a,b)}
                  {faq === i ? <Minus size={19}/> : <Plus size={19}/>}
                </button>

                {faq === i && <p>{t(c,d)}</p>}

              </article>

            ))}

          </div>

        </section>
      )}

      {/* ABOUT US PAGE */}

      {page === "about" && (

        <section className="rps-wrap rps-page">

          {heading(
            t("About us","درباره ما"),
            t("Thoughtful architecture. Timeless spaces.","معماری هدفمند، فضاهای ماندگار."),
            t(
              "Exploring the relationship between people, architecture and everyday living.",
              "بررسی ارتباط میان انسان، معماری و زندگی روزمره."
            )
          )}

          <div className="rps-about-hero">
            <img src={photos[2]} alt={t("Architectural landscape","منظر معماری")}/>
            <div className="rps-detail-fade"/>
          </div>

          <div className="rps-section rps-about-intro">

            <div>
              <span className="rps-kicker">
                {t("OUR STORY","داستان ما")}
              </span>
              <h2>
                {t(
                  "Spaces with a meaningful perspective.",
                  "فضاهایی با دیدگاهی معنادار."
                )}
              </h2>
            </div>

            <div>
              <p>
                {t(
                  "REALTO is an architectural portfolio concept centered on thoughtful spaces, natural materials and modern living.",
                  "رئالتو یک نمونه‌کار معماری با تمرکز بر فضاهای هدفمند، متریال طبیعی و زندگی مدرن است."
                )}
              </p>

              <p>
                {t(
                  "Our design approach explores how simplicity, proportion and light can create a more comfortable relationship between people and their surroundings.",
                  "رویکرد طراحی ما بررسی می‌کند که چگونه سادگی، تناسب و نور می‌توانند ارتباط بهتری میان انسان و محیط پیرامون ایجاد کنند."
                )}
              </p>

              {cta(t("Explore our projects","مشاهده پروژه‌ها"),"properties")}
            </div>

          </div>

          <div className="rps-section">

            <div className="rps-center">
              <h2>{t("Our design values","ارزش‌های طراحی ما")}</h2>
            </div>

            <div className="rps-values">

              {[
                {Icon:Sun,a:"Natural light",b:"نور طبیعی",c:"Spaces shaped by light.",d:"فضاهایی شکل‌گرفته با نور."},
                {Icon:Leaf,a:"Nature",b:"طبیعت",c:"A connection to the environment.",d:"ارتباط با محیط پیرامون."},
                {Icon:Layers,a:"Materials",b:"متریال",c:"A timeless material palette.",d:"ترکیبی ماندگار از متریال."},
                {Icon:Compass,a:"Purpose",b:"هدفمندی",c:"Design with intention.",d:"طراحی با هدف مشخص."},
              ].map(({Icon,a,b,c,d}) => (

                <article key={a}>

                  <div className="rps-value-icon">
                    <Icon size={28} strokeWidth={1.4}/>
                  </div>

                  <h3>{t(a,b)}</h3>
                  <p>{t(c,d)}</p>

                </article>

              ))}

            </div>

          </div>

          <div className="rps-section rps-editorial">

            <img src={photos[1]} alt={t("Residential architecture","معماری مسکونی")}/>

            <div>

              <span className="rps-kicker">
                {t("DESIGN PHILOSOPHY","فلسفه طراحی")}
              </span>

              <h2>
                {t(
                  "Good design begins with understanding.",
                  "طراحی خوب با شناخت آغاز می‌شود."
                )}
              </h2>

              <p>
                {t(
                  "Every architectural concept begins with a conversation about how a space should feel, function and evolve.",
                  "هر طرح معماری با گفت‌وگو درباره حس فضا، عملکرد و نحوه تکامل آن آغاز می‌شود."
                )}
              </p>

              {cta(t("Discover our services","مشاهده خدمات"),"layout")}

            </div>

          </div>

        </section>
      )}

      {/* CONTACT PAGE */}

      {page === "contact" && (

        <section className="rps-wrap rps-page">

          {heading(
            t("Contact","تماس با ما"),
            t("Let's create something beautiful.","با هم فضایی زیبا خلق کنیم."),
            t(
              "Tell us about your ideas and your next architectural project.",
              "درباره ایده‌ها و پروژه معماری بعدی خود صحبت کنید."
            )
          )}

          <div className="rps-contact-grid">

            <div className="rps-contact-left">

              <div className="rps-contact-photo">
                <img src={photos[2]} alt={t("Modern residence","اقامتگاه مدرن")}/>
                <div>
                  <span>REALTO.</span>
                  <h2>{t("Your next space starts here.","فضای بعدی شما از اینجا آغاز می‌شود.")}</h2>
                </div>
              </div>

              <div className="rps-contact-info">

                {[
                  {Icon:Mail,a:"Email",b:"ایمیل",c:"Not configured",d:"هنوز ثبت نشده"},
                  {Icon:Phone,a:"Phone",b:"تلفن",c:"Not configured",d:"هنوز ثبت نشده"},
                  {Icon:Clock,a:"Consultation",b:"مشاوره",c:"By arrangement",d:"با هماهنگی"},
                ].map(({Icon,a,b,c,d}) => (

                  <div key={a}>
                    <span className="rps-contact-icon">
                      <Icon size={21} strokeWidth={1.5}/>
                    </span>
                    <div>
                      <small>{t(a,b)}</small>
                      <strong>{t(c,d)}</strong>
                    </div>
                  </div>

                ))}

              </div>

            </div>

            <form className="rps-contact-form" onSubmit={event => {

              event.preventDefault();

              const data = new FormData(event.currentTarget);

              const message = [
                `${t("Name","نام")}: ${data.get("name")}`,
                `${t("Email","ایمیل")}: ${data.get("email")}`,
                `${t("Service","خدمات")}: ${data.get("service")}`,
                `${t("Budget","بودجه")}: ${data.get("budget") || "-"}`,
                "",
                String(data.get("message")),
              ].join("\n");

              setRequest(message);

              setNotice(t(
                "Your request is ready to copy. It has not been sent.",
                "درخواست شما آماده کپی است؛ هنوز ارسال نشده است."
              ));

            }}>

              <span className="rps-kicker">
                {t("START A PROJECT","شروع پروژه")}
              </span>

              <h2>{t("Tell us about your project","درباره پروژه خود بگویید")}</h2>

              <p>
                {t(
                  "Prepare a consultation request using the form below.",
                  "با استفاده از فرم زیر درخواست مشاوره خود را آماده کنید."
                )}
              </p>

              <label>
                {t("Full name","نام و نام خانوادگی")}
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder={t("Your name","نام شما")}
                />
              </label>

              <label>
                {t("Email address","آدرس ایمیل")}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  dir="ltr"
                />
              </label>

              <label>
                {t("Service","نوع خدمات")}

                <div className="rps-select">

                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      {t("Select a service","انتخاب خدمات")}
                    </option>
                    {services.map(service => (
                      <option key={service.en} value={t(service.en,service.fa)}>
                        {t(service.en,service.fa)}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={17}/>

                </div>

              </label>

              <label>
                {t("Estimated budget (optional)","بودجه تقریبی (اختیاری)")}
                <input name="budget" placeholder={t("Your budget","بودجه شما")}/>
              </label>

              <label>
                {t("Project details","توضیحات پروژه")}
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={t("Describe your idea...","ایده خود را توضیح دهید...")}
                />
              </label>

              <button type="submit" className="rps-button">
                {t("Prepare request","آماده‌سازی درخواست")}
                <Send size={17}/>
              </button>

              {request && (

                <div className="rps-request">

                  <textarea
                    readOnly
                    value={request}
                    rows={7}
                    aria-label={t("Prepared request","درخواست آماده‌شده")}
                  />

                  <button
                    type="button"
                    className="rps-button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(request);
                        setNotice(t("Request copied","درخواست کپی شد"));
                      } catch {
                        setNotice(t(
                          "Please copy the request manually.",
                          "لطفا متن درخواست را دستی کپی کنید."
                        ));
                      }
                    }}
                  >
                    <Copy size={16}/>
                    {t("Copy request","کپی درخواست")}
                  </button>

                </div>

              )}

              {notice && (
                <p className="rps-notice" role="status">
                  {notice}
                </p>
              )}

            </form>

          </div>

          <div className="rps-section rps-faq">

            <div className="rps-center">
              <h2>{t("Before we begin","پیش از شروع همکاری")}</h2>
            </div>

            {questions.map(([a,b,c,d],i) => (

              <article className="rps-faq-item" key={a}>

                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  aria-expanded={faq === i}
                >
                  {t(a,b)}
                  {faq === i ? <Minus size={19}/> : <Plus size={19}/>}
                </button>

                {faq === i && <p>{t(c,d)}</p>}

              </article>

            ))}

          </div>

        </section>
      )}

      {/* FULLSCREEN IMAGE GALLERY */}

      {gallery && (

        <div
          className="rps-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={t("Image gallery","گالری تصاویر")}
        >

          <button
            className="rps-circle rps-modal-close"
            onClick={() => setGallery(false)}
            aria-label={t("Close","بستن")}
            autoFocus
          >
            <X size={23}/>
          </button>

          <div>

            <img src={photos[activeImage]} alt={t("Architecture","معماری")}/>

            <div className="rps-modal-controls" dir="ltr">

              <button
                className="rps-circle"
                onClick={() => setActiveImage(n => (n+photos.length-1)%photos.length)}
                aria-label={t("Previous","قبلی")}
              >
                <ArrowLeft size={19}/>
              </button>

              <span>{activeImage+1} / {photos.length}</span>

              <button
                className="rps-circle"
                onClick={() => setActiveImage(n => (n+1)%photos.length)}
                aria-label={t("Next","بعدی")}
              >
                <ArrowRight size={19}/>
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

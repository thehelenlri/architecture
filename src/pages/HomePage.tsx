import { useEffect, useState } from 'react';

import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Heart,
  Building2,
  Layers,
  Ruler,
  Maximize2,
  X,
  Menu,
  Check,
  Globe2,
  Mail,
  Grid2X2,
  Compass,
} from 'lucide-react';

import './RealtoPremium.css';

type Page = 'home' | 'projects' | 'about' | 'blog' | 'contact';
type Language = 'en' | 'fa';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const images = [
  '/house1.avif',
  '/house2.avif',
  '/house3.avif',
];

const dictionary = {
  en: {
    home: 'Home',
    projects: 'Projects',
    services: 'Services',
    about: 'About us',
    blog: 'Journal',
    contact: 'Contact us',
    featured: 'FEATURED ARCHITECTURE',
    title: 'Minimalist Duplex Residence',
    subtitle: 'A thoughtful balance of architecture, natural light and everyday comfort.',
    gallery: 'Project gallery',
    explore: 'Explore project',
    overview: 'Property overview',
    overviewText: 'Discover a collection of architectural spaces with a focus on simplicity, natural materials and meaningful design.',
    architecture: 'Architecture',
    residential: 'Residential',
    interior: 'Interior design',
    exterior: 'Exterior design',
    concept: 'Concept design',
    design: 'Design approach',
    designText: 'Every space begins with a vision. Explore the relationship between form, function and the way we live.',
    layout: 'Space & Design',
    layoutText: 'A closer look at the principles behind a thoughtfully designed home.',
    light: 'Natural light',
    materials: 'Materials',
    function: 'Functionality',
    lightText: 'Open spaces and a connection to the outdoors.',
    materialsText: 'A timeless and balanced material palette.',
    functionText: 'Comfortable spaces for everyday living.',
    collection: 'Explore our collection',
    collectionText: 'Discover spaces that match your architectural preferences.',
    all: 'All projects',
    saved: 'Saved',
    noSaved: 'Your saved collection is empty.',
    viewAll: 'Explore more',
    view: 'View design',
    studio: 'Meet our studio',
    studioText: 'We explore architecture through a human-centered approach, bringing together thoughtful spaces and enduring design.',
    philosophy: 'Design philosophy',
    scope: 'Project scope',
    approach: 'Our approach',
    process: 'Our design process',
    processText: 'From the first conversation to a considered architectural concept.',
    step1: 'Discover',
    step2: 'Design',
    step3: 'Refine',
    step1Text: 'Understanding your needs and the possibilities of the space.',
    step2Text: 'Exploring form, materials and spatial relationships.',
    step3Text: 'Developing the details of a cohesive design.',
    lifestyle: 'Homes that match your lifestyle.',
    lifestyleText: 'Discover the possibilities of architecture through a collection of inspiring spaces.',
    dream: 'Find inspiration for your next home.',
    dreamText: 'Explore architecture and start a conversation about your next project.',
    start: 'Get started',
    footerText: 'Architecture, spaces and design with a thoughtful perspective.',
    navigation: 'Explore',
    connect: 'Get in touch',
    rights: 'Architecture & Design.',
    day: 'Light mode',
    night: 'Dark mode',
    close: 'Close gallery',
    previous: 'Previous image',
    next: 'Next image',
    save: 'Save project',
    remove: 'Remove saved project',
    menu: 'Open menu',
    sample: 'Design inspiration',
    project1: 'Contemporary residence',
    project2: 'Modern living space',
    project3: 'Architectural retreat',
  },

  fa: {
    home: 'خانه',
    projects: 'پروژه‌ها',
    services: 'خدمات',
    about: 'درباره ما',
    blog: 'مجله معماری',
    contact: 'تماس با ما',
    featured: 'معماری منتخب',
    title: 'اقامتگاه دوبلکس مینیمال',
    subtitle: 'تعادلی میان معماری، نور طبیعی و آسایش زندگی روزمره.',
    gallery: 'گالری تصاویر پروژه',
    explore: 'مشاهده پروژه',
    overview: 'معرفی اقامتگاه',
    overviewText: 'مجموعه‌ای از فضاهای معماری با تمرکز بر سادگی، متریال طبیعی و طراحی هدفمند را کشف کنید.',
    architecture: 'معماری',
    residential: 'مسکونی',
    interior: 'طراحی داخلی',
    exterior: 'طراحی خارجی',
    concept: 'طراحی مفهومی',
    design: 'رویکرد طراحی',
    designText: 'هر فضا با یک ایده آغاز می‌شود. ارتباط میان فرم، عملکرد و شیوه زندگی را کشف کنید.',
    layout: 'فضا و طراحی',
    layoutText: 'نگاهی دقیق‌تر به اصول طراحی یک خانه زیبا و کاربردی.',
    light: 'نور طبیعی',
    materials: 'متریال',
    function: 'کارایی فضا',
    lightText: 'فضاهای باز و ارتباط با محیط بیرون.',
    materialsText: 'ترکیبی متعادل و ماندگار از متریال.',
    functionText: 'فضاهای راحت برای زندگی روزمره.',
    collection: 'مجموعه پروژه‌های ما',
    collectionText: 'فضاهایی متناسب با سلیقه معماری خود پیدا کنید.',
    all: 'همه پروژه‌ها',
    saved: 'ذخیره‌شده‌ها',
    noSaved: 'هنوز پروژه‌ای ذخیره نکرده‌اید.',
    viewAll: 'مشاهده بیشتر',
    view: 'مشاهده طراحی',
    studio: 'با استودیوی ما آشنا شوید',
    studioText: 'با رویکردی انسان‌محور، فضاهای هدفمند و طراحی ماندگار را در کنار یکدیگر قرار می‌دهیم.',
    philosophy: 'فلسفه طراحی',
    scope: 'گستره پروژه',
    approach: 'رویکرد ما',
    process: 'فرایند طراحی ما',
    processText: 'از نخستین گفت‌وگو تا شکل‌گیری یک ایده معماری.',
    step1: 'شناخت',
    step2: 'طراحی',
    step3: 'تکامل',
    step1Text: 'شناخت نیازهای شما و ظرفیت‌های فضای پروژه.',
    step2Text: 'بررسی فرم، متریال و ارتباط میان فضاها.',
    step3Text: 'توسعه جزئیات برای رسیدن به طراحی منسجم.',
    lifestyle: 'خانه‌هایی متناسب با سبک زندگی شما.',
    lifestyleText: 'امکانات معماری را در مجموعه‌ای از فضاهای الهام‌بخش کشف کنید.',
    dream: 'برای خانه بعدی خود الهام بگیرید.',
    dreamText: 'دنیای معماری را کشف کنید و گفت‌وگو درباره پروژه بعدی خود را آغاز کنید.',
    start: 'شروع همکاری',
    footerText: 'معماری، فضا و طراحی با نگاهی متفاوت.',
    navigation: 'دسترسی سریع',
    connect: 'ارتباط با ما',
    rights: 'معماری و طراحی.',
    day: 'حالت روز',
    night: 'حالت شب',
    close: 'بستن گالری',
    previous: 'تصویر قبلی',
    next: 'تصویر بعدی',
    save: 'ذخیره پروژه',
    remove: 'حذف پروژه ذخیره‌شده',
    menu: 'باز کردن منو',
    sample: 'الهام از طراحی',
    project1: 'اقامتگاه معاصر',
    project2: 'فضای زندگی مدرن',
    project3: 'اقامتگاه معماری',
  },
};

function readStorage(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export default function HomePage({
  onNavigate,
  darkMode,
  toggleDarkMode,
}: HomePageProps) {

  const [language, setLanguage] = useState<Language>(
    () => readStorage('arch-language', 'en') === 'fa' ? 'fa' : 'en'
  );

  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'saved'>('all');

  const [saved, setSaved] = useState<number[]>(() => {
    try {
      const value = JSON.parse(readStorage('arch-saved', '[]'));
      return Array.isArray(value)
        ? value.filter(n => Number.isInteger(n) && n >= 0 && n < 3)
        : [];
    } catch {
      return [];
    }
  });

  const t = dictionary[language];

  const projects = [
    { id: 0, title: t.project1, image: images[0] },
    { id: 1, title: t.project2, image: images[1] },
    { id: 2, title: t.project3, image: images[2] },
  ];

  const visibleProjects = filter === 'saved'
    ? projects.filter(p => saved.includes(p.id))
    : projects;

  useEffect(() => {
    try {
      localStorage.setItem('arch-language', language);
    } catch (error) { console.warn("Storage operation failed:", error); }
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('arch-saved', JSON.stringify(saved));
    } catch (error) { console.warn("Storage operation failed:", error); }
  }, [saved]);

  useEffect(() => {
    if (!galleryOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGalleryOpen(false);

      if (event.key === 'ArrowRight') {
        setActive(n => (n + 1) % images.length);
      }

      if (event.key === 'ArrowLeft') {
        setActive(n => (n - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };

  }, [galleryOpen]);

  const toggleSaved = (id: number) => {
    setSaved(previous => previous.includes(id)
      ? previous.filter(item => item !== id)
      : [...previous, id]
    );
  };

  const move = (direction: number) => {
    setActive(n => (n + direction + images.length) % images.length);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });

    setMenuOpen(false);
  };

  const Arrow = language === 'fa' ? ArrowLeft : ArrowRight;

  return (

    <div
      className={`rt-root ${darkMode ? 'rt-dark' : ''}`}
      lang={language}
      dir={language === 'fa' ? 'rtl' : 'ltr'}
    >

      <header className="rt-header">

        <div className="rt-container rt-header-inner">

          <button
            className="rt-brand"
            onClick={() => scrollTo('rt-top')}
            dir="ltr"
          >
            <span className="rt-logo-mark">✳</span>
            REALTO.
          </button>

          <nav className={`rt-nav ${menuOpen ? 'open' : ''}`}>

            <button onClick={() => scrollTo('rt-top')}>
              {t.home}
            </button>

            <button onClick={() => onNavigate('projects')}>
              {t.projects}
            </button>

            <button onClick={() => scrollTo('rt-services')}>
              {t.services}
            </button>

            <button onClick={() => onNavigate('about')}>
              {t.about}
            </button>

            <button onClick={() => onNavigate('blog')}>
              {t.blog}
            </button>

          </nav>

          <div className="rt-header-actions">

            <div className="rt-language" dir="ltr">

              <Globe2 size={15}/>

              <button
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
              >
                EN
              </button>

              <button
                className={language === 'fa' ? 'active' : ''}
                onClick={() => setLanguage('fa')}
                aria-pressed={language === 'fa'}
              >
                فا
              </button>

            </div>

            <button
              className="rt-circle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? t.day : t.night}
              title={darkMode ? t.day : t.night}
            >
              {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </button>

            <button
              className="rt-button rt-header-contact"
              onClick={() => onNavigate('contact')}
            >
              {t.contact}
            </button>

            <button
              className="rt-circle rt-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.menu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={19}/> : <Menu size={19}/>}
            </button>

          </div>

        </div>

      </header>

      <main id="rt-top">

        <section className="rt-container rt-feature">

          <div className="rt-breadcrumb">
            {t.home}
            <span>/</span>
            {t.gallery}
          </div>

          <div className="rt-property-feature">

    <div className="rt-property-heading">

        <div className="rt-property-heading-text">

            <h1>
                {language === 'fa' ? (
                    <>
                        اقامتگاه دوبلکس
                        <br/>
                        مینیمال
                    </>
                ) : (
                    <>
                        Minimalist Duplex
                        <br/>
                        Residence
                    </>
                )}
            </h1>

            <span className="rt-property-label">
                <span>✦</span>
                {language === 'fa'
                    ? 'معماری منتخب'
                    : 'Featured architecture'}
            </span>

        </div>

        <div className="rt-floating-actions">

            <button
                className="rt-circle"
                onClick={() => setGalleryOpen(true)}
                aria-label={t.gallery}
                title={t.gallery}
            >
                <Maximize2 size={17}/>
            </button>

            <button
                className={`rt-circle ${
                    saved.includes(active) ? 'rt-liked' : ''
                }`}
                onClick={() => toggleSaved(active)}
                aria-pressed={saved.includes(active)}
                aria-label={
                    saved.includes(active) ? t.remove : t.save
                }
            >
                <Heart
                    size={17}
                    fill={
                        saved.includes(active)
                            ? 'currentColor'
                            : 'none'
                    }
                />
            </button>

            <button
                className="rt-circle"
                onClick={() => onNavigate('projects')}
                aria-label={t.projects}
                title={t.projects}
            >
                <span className="rt-three-dots">⋮</span>
            </button>

        </div>

    </div>

    <div className="rt-hero rt-reference-hero">

        <img
            key={active}
            src={images[active]}
            alt={projects[active].title}
            className="rt-hero-img"
            fetchPriority="high"
        />

        <div className="rt-reference-fade-top"/>
        <div className="rt-reference-fade-bottom"/>

    </div>

    <div className="rt-gallery-row rt-reference-gallery">

        <div className="rt-thumbnails">

            {images.map((src, index) => (

                <button
                    key={src}
                    className={index === active ? 'active' : ''}
                    onClick={() => setActive(index)}
                    aria-label={`${t.gallery} ${index + 1}`}
                    aria-pressed={index === active}
                >

                    <img
                        src={src}
                        alt={projects[index].title}
                    />

                </button>

            ))}

        </div>

        <div className="rt-gallery-action">

            <strong>
                {language === 'fa'
                    ? 'طراحی مسکونی'
                    : 'Residential Design'}
            </strong>

            <button
                className="rt-button"
                onClick={() => onNavigate('contact')}
            >
                {language === 'fa'
                    ? 'درخواست مشاوره'
                    : 'Book a Consultation'}
            </button>

        </div>

    </div>

</div>
<div className="rt-overview">

            <div>

              <h2>{t.overview}</h2>

              <p>{t.overviewText}</p>

            </div>

            <div className="rt-overview-preview">

              <img
                src={images[(active + 1) % images.length]}
                alt={t.sample}
              />

              <button
                className="rt-circle"
                onClick={() => setGalleryOpen(true)}
                aria-label={t.gallery}
              >
                <ArrowUpRight size={18}/>
              </button>

            </div>

          </div>

          <div className="rt-specifications">

            {[
              { Icon: Building2, title: t.architecture, value: t.residential },
              { Icon: Layers, title: t.design, value: t.concept },
              { Icon: Ruler, title: t.services, value: t.interior },
              { Icon: Compass, title: t.approach, value: t.exterior },
            ].map(({ Icon, title, value }) => (

              <div className="rt-spec" key={title}>

                <small>{title}</small>

                <div>
                  <Icon size={21} strokeWidth={1.5}/>
                  <strong>{value}</strong>
                </div>

              </div>

            ))}

          </div>

        </section>

        <section className="rt-container rt-section" id="rt-services">

          <div className="rt-section-title">

            <span className="rt-kicker">01 / DESIGN</span>

            <h2>{t.layout}</h2>

            <p>{t.layoutText}</p>

          </div>

          <div className="rt-design-layout">

            <div className="rt-design-image">

              <img src={images[1]} alt={t.design} loading="lazy"/>

              <div>
                <span>{t.sample}</span>
                <h3>{t.design}</h3>
              </div>

            </div>

            <div className="rt-design-notes">

              {[
                { title: t.light, text: t.lightText, Icon: Sun },
                { title: t.materials, text: t.materialsText, Icon: Layers },
                { title: t.function, text: t.functionText, Icon: Grid2X2 },
              ].map(({ title, text, Icon }, index) => (

                <article className="rt-design-note" key={title}>

                  <div className={`rt-note-icon rt-tone-${index}`}>
                    <Icon size={24} strokeWidth={1.5}/>
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <span className="rt-note-index">0{index + 1}</span>

                </article>

              ))}

            </div>

          </div>

        </section>

        <section className="rt-container rt-section" id="rt-projects">

          <div className="rt-section-heading">

            <div>
              <span className="rt-kicker">02 / COLLECTION</span>
              <h2>{t.collection}</h2>
              <p>{t.collectionText}</p>
            </div>

            <button
              className="rt-button"
              onClick={() => onNavigate('projects')}
            >
              {t.viewAll}
              <Arrow size={15}/>
            </button>

          </div>

          <div className="rt-filter-bar">

            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
            >
              {t.all}
            </button>

            <button
              className={filter === 'saved' ? 'active' : ''}
              onClick={() => setFilter('saved')}
              aria-pressed={filter === 'saved'}
            >
              <Heart size={15}/>
              {t.saved} ({saved.length})
            </button>

          </div>

          <div className="rt-project-grid">

            {visibleProjects.map(project => (

              <article className="rt-project" key={project.id}>

                <button
                  className="rt-project-image"
                  onClick={() => {
                    setActive(project.id);
                    setGalleryOpen(true);
                  }}
                  aria-label={project.title}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </button>

                <div className="rt-project-top">

                  <span>{t.sample}</span>

                  <button
                    className={`rt-circle ${saved.includes(project.id) ? 'rt-liked' : ''}`}
                    onClick={() => toggleSaved(project.id)}
                    aria-label={saved.includes(project.id) ? t.remove : t.save}
                    aria-pressed={saved.includes(project.id)}
                  >
                    <Heart
                      size={17}
                      fill={saved.includes(project.id) ? 'currentColor' : 'none'}
                    />
                  </button>

                </div>

                <div className="rt-project-info">

                  <h3>{project.title}</h3>

                  <p>{t.architecture} / {t.residential}</p>

                  <button onClick={() => {
                    setActive(project.id);
                    setGalleryOpen(true);
                  }}>
                    {t.view}
                    <ArrowUpRight size={17}/>
                  </button>

                </div>

              </article>

            ))}

          </div>

          {!visibleProjects.length && (

            <div className="rt-empty">
              <Heart size={34} strokeWidth={1}/>
              <p>{t.noSaved}</p>
            </div>

          )}

        </section>

        <section className="rt-container rt-section">

          <div className="rt-studio">

            <img
              src={images[2]}
              alt={t.sample}
              loading="lazy"
            />

            <div className="rt-studio-copy">

              <span className="rt-kicker">03 / STUDIO</span>

              <h2>{t.studio}</h2>

              <p>{t.studioText}</p>

              <div className="rt-studio-tags">

                <span><Check size={15}/>{t.philosophy}</span>
                <span><Check size={15}/>{t.scope}</span>
                <span><Check size={15}/>{t.approach}</span>

              </div>

              <button
                className="rt-button"
                onClick={() => onNavigate('about')}
              >
                {t.about}
                <Arrow size={16}/>
              </button>

            </div>

          </div>

          <div className="rt-process-heading">
            <h2>{t.process}</h2>
            <p>{t.processText}</p>
          </div>

          <div className="rt-process-grid">

            {[
              { title: t.step1, text: t.step1Text },
              { title: t.step2, text: t.step2Text },
              { title: t.step3, text: t.step3Text },
            ].map((step, index) => (

              <article className="rt-process" key={step.title}>

                <span className="rt-process-number">0{index + 1}</span>

                <div className={`rt-process-graphic rt-graphic-${index}`}>

                  {Array.from({ length: 20 }).map((_, n) => (
                    <i key={n}/>
                  ))}

                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </article>

            ))}

          </div>

        </section>

        <section className="rt-container rt-section rt-lifestyle">

          <div className="rt-section-title">

            <span className="rt-kicker">04 / LIFESTYLE</span>

            <h2>{t.lifestyle}</h2>

            <p>{t.lifestyleText}</p>

          </div>

          <div className="rt-lifestyle-gallery">

            {images.map((src, index) => (

              <button
                key={src}
                className={`rt-lifestyle-image rt-life-${index}`}
                onClick={() => {
                  setActive(index);
                  setGalleryOpen(true);
                }}
                aria-label={projects[index].title}
              >
                <img src={src} alt={projects[index].title} loading="lazy"/>
              </button>

            ))}

          </div>

          <button
            className="rt-button"
            onClick={() => onNavigate('projects')}
          >
            {t.viewAll}
            <Arrow size={16}/>
          </button>

        </section>

        <section className="rt-final">

          <img
            src={images[2]}
            alt={t.sample}
            loading="lazy"
            className="rt-final-image"
          />

          <div className="rt-final-fade"/>

          <div className="rt-container rt-final-content">

            <span className="rt-kicker">05 / CONTACT</span>

            <h2>{t.dream}</h2>

            <p>{t.dreamText}</p>

            <button
              className="rt-button"
              onClick={() => onNavigate('contact')}
            >
              {t.start}
              <Arrow size={16}/>
            </button>

          </div>

        </section>

      </main>

      <footer className="rt-footer">

        <div className="rt-container">

          <div className="rt-footer-grid">

            <div>

              <div className="rt-brand" dir="ltr">
                <span className="rt-logo-mark">✳</span>
                REALTO.
              </div>

              <p>{t.footerText}</p>

            </div>

            <div>

              <h3>{t.navigation}</h3>

              <button onClick={() => scrollTo('rt-top')}>{t.home}</button>
              <button onClick={() => onNavigate('projects')}>{t.projects}</button>
              <button onClick={() => scrollTo('rt-services')}>{t.services}</button>
              <button onClick={() => onNavigate('about')}>{t.about}</button>

            </div>

            <div>

              <h3>{t.connect}</h3>

              <button onClick={() => onNavigate('contact')}>
                <Mail size={16}/>
                {t.contact}
              </button>

              <button onClick={() => onNavigate('blog')}>
                {t.blog}
              </button>

            </div>

            <div>

              <h3>{language === 'fa' ? 'تنظیمات نمایش' : 'Preferences'}</h3>

              <button onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}>
                <Globe2 size={16}/>
                {language === 'en' ? 'فارسی' : 'English'}
              </button>

              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun size={16}/> : <Moon size={16}/>}
                {darkMode ? t.day : t.night}
              </button>

            </div>

          </div>

          <div className="rt-footer-line">
            <span>© {new Date().getFullYear()} REALTO.</span>
            <span>{t.rights}</span>
          </div>

          <div className="rt-wordmark" aria-hidden="true" dir="ltr">
            <span>✳</span>
            <strong>REALTO</strong>
          </div>

        </div>

      </footer>

      {galleryOpen && (

        <div
          className="rt-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery}
          onClick={() => setGalleryOpen(false)}
        >

          <button
            className="rt-lightbox-close"
            onClick={() => setGalleryOpen(false)}
            aria-label={t.close}
            autoFocus
          >
            <X size={25}/>
          </button>

          <div
            className="rt-lightbox-content"
            onClick={event => event.stopPropagation()}
          >

            <img src={images[active]} alt={projects[active].title}/>

            <div className="rt-lightbox-controls" dir="ltr">

              <button
                className="rt-circle"
                onClick={() => move(-1)}
                aria-label={t.previous}
              >
                <ChevronLeft size={21}/>
              </button>

              <span>{active + 1} / {images.length}</span>

              <button
                className="rt-circle"
                onClick={() => move(1)}
                aria-label={t.next}
              >
                <ChevronRight size={21}/>
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}




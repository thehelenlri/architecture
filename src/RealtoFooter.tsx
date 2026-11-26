import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  X,
} from "lucide-react";

import "./RealtoFooter.css";

interface Props {
  language: "en" | "fa";
  onNavigate: (id: string) => void;
}

export default function RealtoFooter({
  language,
  onNavigate,
}: Props) {

  const fa = language === "fa";

  const t = (en: string, ir: string) =>
    fa ? ir : en;

  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const Arrow = fa ? ArrowLeft : ArrowRight;

  const links = [
    { id: "top", title: t("Home", "خانه") },
    { id: "properties", title: t("Projects", "پروژه‌ها") },
    { id: "layout", title: t("Services", "خدمات") },
    { id: "profile", title: t("About Us", "درباره ما") },
    { id: "profile", title: t("Agents", "مشاوران") },
  ];

  const contactNotice = () => {
    setNotice(t(
      "Contact information has not been configured yet.",
      "اطلاعات تماس هنوز ثبت نشده است."
    ));
  };

  return (

    <footer
      className="rft-root"
      id="footer"
      lang={language}
      dir={fa ? "rtl" : "ltr"}
    >

      {/* Continuous architectural background */}

      <div className="rft-background" aria-hidden="true">

        <img
          src="/house3.avif"
          alt=""
          loading="lazy"
        />

      </div>

      <div className="rft-background-fade"/>

      <div className="rft-container">

        {/* Top call to action */}

        <section className="rft-cta">

          <h2>
            {t(
              "Find Your Dream Home Faster",
              "خانه رویایی خود را سریع‌تر پیدا کنید"
            )}
          </h2>

          <p>

            {t(
              "Explore and uncover your ideal dream home with thoughtful tools and resources designed to streamline your search.",
              "خانه ایده‌آل خود را با ابزارها و امکاناتی که برای ساده‌تر کردن جستجوی شما طراحی شده‌اند، کشف کنید."
            )}

          </p>

          <button
            className="rft-button"
            onClick={() => onNavigate("properties")}
          >

            {t("Get Started Now", "شروع کنید")}

            <Arrow size={15} strokeWidth={1.7}/>

          </button>

        </section>

        {/* Reference-style footer information */}

        <div className="rft-information">

          {/* Left brand column */}

          <div className="rft-brand-column">

            <h3 className="rft-brand">REALTO</h3>

            <p className="rft-description">

              {t(
                "Find and explore properties with confidence. Realto brings thoughtful architecture and modern living together, with a focus on your lifestyle and long-term goals.",
                "با اطمینان خانه موردنظر خود را پیدا کنید. رئالتو معماری هدفمند و زندگی مدرن را متناسب با سبک زندگی و اهداف بلندمدت شما در کنار یکدیگر قرار می‌دهد."
              )}

            </p>

            <h3 className="rft-social-title">

              {t("Contact Us", "ارتباط با ما")}

            </h3>

            <div className="rft-socials" dir="ltr">

              {[
                { Icon: Facebook, name: "Facebook" },
                { Icon: Linkedin, name: "LinkedIn" },
                { Icon: X, name: "X" },
                { Icon: Instagram, name: "Instagram" },
              ].map(({ Icon, name }) => (

                <button
                  key={name}
                  aria-label={name}
                  title={name}
                  onClick={contactNotice}
                >

                  <Icon size={15} strokeWidth={1.7}/>

                </button>

              ))}

            </div>

          </div>

          {/* Right navigation and information */}

          <div className="rft-right">

            <nav
              className="rft-navigation"
              aria-label={t("Footer navigation", "منوی فوتر")}
            >

              {links.map((link) => (

                <button
                  key={link.title}
                  onClick={() => onNavigate(link.id)}
                >

                  {link.title}

                </button>

              ))}

            </nav>

            <div className="rft-columns">

              <section className="rft-contact">

                <h3>{t("Contact Us", "تماس با ما")}</h3>

                <button
                  className="rft-contact-pill"
                  onClick={contactNotice}
                >

                  {t("Request a callback", "درخواست تماس")}

                </button>

                <button
                  className="rft-contact-pill"
                  onClick={contactNotice}
                >

                  <Mail size={13}/>

                  {t("Send a message", "ارسال پیام")}

                </button>

              </section>

              <section className="rft-newsletter">

                <h3>

                  {t(
                    "Subscribe & Newsletter",
                    "اشتراک خبرنامه"
                  )}

                </h3>

                <form onSubmit={(event) => {

                  event.preventDefault();

                  setNotice(t(
                    "Newsletter service is not connected yet.",
                    "سرویس خبرنامه هنوز متصل نشده است."
                  ));

                }}>

                  <div className="rft-email-field">

                    <input
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder={t(
                        "Enter Your Email",
                        "ایمیل خود را وارد کنید"
                      )}
                      aria-label={t("Email", "ایمیل")}
                      required
                      dir="ltr"
                    />

                    <button
                      type="submit"
                      aria-label={t("Subscribe", "اشتراک")}
                    >

                      <ArrowUpRight size={15}/>

                    </button>

                  </div>

                  <button
                    type="submit"
                    className="rft-button"
                  >

                    {t("Subscribe", "اشتراک")}

                    <Arrow size={14}/>

                  </button>

                </form>

              </section>

            </div>

          </div>

        </div>

        {/* Copyright row */}

        <div className="rft-bottom">

          <span>
            ©{new Date().getFullYear()} Realto®
          </span>

          <span>
            {t(
              "Architecture — Thoughtfully Designed",
              "معماری — طراحی هدفمند"
            )}
          </span>

          <div className="rft-legal">

            <button onClick={() => setNotice(t(
              "Privacy policy has not been published.",
              "سیاست حریم خصوصی هنوز منتشر نشده است."
            ))}>
              {t("Privacy Policy", "حریم خصوصی")}
            </button>

            <button onClick={() => setNotice(t(
              "Terms have not been published.",
              "شرایط استفاده هنوز منتشر نشده است."
            ))}>
              {t("Terms & Conditions", "شرایط استفاده")}
            </button>

          </div>

        </div>

        {/* Oversized floral logo and image-filled text */}

        <div className="rft-wordmark" dir="ltr">

          <svg
            className="rft-flower"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >

            {Array.from({ length: 12 }).map((_, i) => (

              <ellipse
                key={i}
                cx="60"
                cy="28"
                rx="10"
                ry="25"
                transform={`rotate(${i * 30} 60 60)`}
                fill="#ffb63f"
                stroke="#b9802a"
                strokeWidth=".65"
              />

            ))}

            <circle
              cx="60"
              cy="60"
              r="19"
              fill="var(--rft-flower-center)"
            />

          </svg>

          <strong>REALTO</strong>

        </div>

      </div>

      {notice && (

        <div className="rft-notice" role="status">

          <span>{notice}</span>

          <button
            onClick={() => setNotice("")}
            aria-label={t("Close", "بستن")}
          >

            <X size={17}/>

          </button>

        </div>

      )}

    </footer>

  );

}

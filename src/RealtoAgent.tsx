import { useState, useId } from "react";
import {
  Star,
  UserRound,
  Check,
  X,
  Minus,
} from "lucide-react";

import "./RealtoAgent.css";

type Language = "en" | "fa";

interface Props {
  language: Language;
}

function arc(
  cx: number,
  cy: number,
  radius: number,
  start: number,
  end: number
) {
  const point = (angle: number) => ({
    x: cx + radius * Math.cos(angle * Math.PI / 180),
    y: cy + radius * Math.sin(angle * Math.PI / 180),
  });

  const a = point(start);
  const b = point(end);

  return `M ${a.x} ${a.y} A ${radius} ${radius} 0 ${
    end - start > 180 ? 1 : 0
  } 1 ${b.x} ${b.y}`;
}

function ListingChart() {

  const id = useId();

  return (
    <svg
      viewBox="0 0 280 220"
      className="ra-chart-svg"
      role="img"
      aria-label="Illustrative listing performance: 63 percent"
    >

      <defs>

        <linearGradient id={`${id}-gold`}>
          <stop stopColor="#fae58e"/>
          <stop offset="1" stopColor="#f6d1a3"/>
        </linearGradient>

        <pattern
          id={`${id}-texture`}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 4 L4 0"
            stroke="#ffffff"
            strokeWidth=".55"
            opacity=".48"
          />
        </pattern>

      </defs>

      <g
        fill="none"
        strokeWidth="28"
        strokeLinecap="round"
      >

        <path
          d={arc(140,155,100,180,290)}
          stroke={`url(#${id}-gold)`}
        />

        <path
          d={arc(140,155,100,307,334)}
          stroke="#f5cbb1"
        />

        <path
          d={arc(140,155,100,350,360)}
          stroke="#f2b9a1"
        />

        {[
          [180,290],
          [307,334],
          [350,360],
        ].map(([a,b]) => (
          <path
            key={a}
            d={arc(140,155,100,a,b)}
            stroke={`url(#${id}-texture)`}
          />
        ))}

      </g>

      <g
        fontSize="8"
        fill="#999"
        textAnchor="middle"
      >
        <text x="18" y="160">300</text>
        <text x="45" y="58">400</text>
        <text x="147" y="21">580</text>
        <text x="248" y="70">700</text>
        <text x="264" y="160">850</text>
      </g>

      <rect
        x="117"
        y="105"
        width="46"
        height="19"
        rx="10"
        fill="#f9e6b1"
      />

      <text
        x="140"
        y="118"
        textAnchor="middle"
        fill="#66532c"
        fontSize="8"
      >
        + 9.3%
      </text>

      <text
        x="137"
        y="157"
        textAnchor="middle"
        className="ra-svg-number"
        fontSize="42"
      >
        +63
      </text>

      <text
        x="190"
        y="157"
        className="ra-svg-unit"
        fontSize="18"
      >
        %
      </text>

    </svg>
  );
}

function EngagementChart() {

  const warning = [
    0,24,32,33,35,37,39,43,52,55,57,
  ];

  const inactive = [
    3,17,21,49,59,60,61,62,63,68,69,
  ];

  return (
    <svg
      viewBox="0 0 280 220"
      className="ra-chart-svg"
      role="img"
      aria-label="Illustrative engagement report"
    >

      {Array.from({ length:70 }).map((_,i) => {

        const x = 29 + (i % 10) * 24.6;
        const y = 32 + Math.floor(i / 10) * 24.6;

        const orange = warning.includes(i);
        const gray = inactive.includes(i);

        const color = gray
          ? "#e7e7e7"
          : orange
            ? "#eea17c"
            : "#f8d353";

        return (

          <g key={i}>

            <circle
              cx={x}
              cy={y}
              r="10"
              fill={color}
            />

            <circle
              cx={x}
              cy={y}
              r="6.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth=".8"
              strokeDasharray="1.2 1.1"
              opacity=".9"
            />

            {orange ? (

              <path
                d={`M${x-2.5} ${y-2.5}
                    l5 5
                    M${x+2.5} ${y-2.5}
                    l-5 5`}
                stroke="white"
                strokeWidth="1.1"
              />

            ) : gray ? (

              <path
                d={`M${x-2.5} ${y} h5`}
                stroke="#999"
                strokeWidth="1.1"
              />

            ) : (

              <path
                d={`M${x-2.5} ${y}
                    l2 2.5 l4 -4.5`}
                stroke="white"
                strokeWidth="1.1"
                fill="none"
              />

            )}

          </g>

        );

      })}

    </svg>
  );
}

function ResponsivenessChart() {

  const id = useId();

  const segments = [
    {start:55,end:225,color:"#e7e7e7"},
    {start:248,end:291,color:"#f9df78"},
    {start:311,end:365,color:"#f3c52c"},
    {start:22,end:43,color:"#ed9a70"},
  ];

  return (

    <svg
      viewBox="0 0 280 220"
      className="ra-chart-svg"
      role="img"
      aria-label="Illustrative responsiveness: 78 percent"
    >

      <defs>
        <pattern
          id={`${id}-ring`}
          width="5"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0 Q2.5 4 5 0"
            stroke="#fff"
            strokeWidth=".6"
            fill="none"
            opacity=".7"
          />
        </pattern>
      </defs>

      <g
        fill="none"
        strokeWidth="25"
        strokeLinecap="round"
      >

        {segments.map(segment => (

          <g key={segment.start}>

            <path
              d={arc(
                140,110,88,
                segment.start,
                segment.end
              )}
              stroke={segment.color}
            />

            <path
              d={arc(
                140,110,88,
                segment.start,
                segment.end
              )}
              stroke={`url(#${id}-ring)`}
            />

          </g>

        ))}

      </g>

      <text
        x="132"
        y="124"
        textAnchor="middle"
        fontSize="42"
        className="ra-svg-number"
      >
        +78
      </text>

      <text
        x="188"
        y="124"
        fontSize="18"
        className="ra-svg-unit"
      >
        %
      </text>

    </svg>

  );
}

interface MetricProps {
  value: string;
  badge: string;
  description: string;
  tone?: "gold" | "peach";
}

function Metric({
  value,
  badge,
  description,
  tone = "gold",
}: MetricProps) {

  return (

    <div className="ra-metric">

      <div className="ra-metric-top">

        <strong dir="ltr">{value}</strong>

        <span className={`ra-badge ${tone}`}>
          {badge}
        </span>

      </div>

      <small>{description}</small>

    </div>

  );
}

export default function RealtoAgent({
  language,
}: Props) {

  const fa = language === "fa";

  const t = (en:string,ir:string) => fa ? ir : en;

  const [portraitFailed,setPortraitFailed] = useState(false);

  const [saved,setSaved] = useState(() => {
    try {
      return localStorage.getItem("realto-agent-saved") === "yes";
    } catch {
      return false;
    }
  });

  const [notice,setNotice] = useState("");

  const toggleSave = () => {

    const next = !saved;

    setSaved(next);

    try {
      localStorage.setItem(
        "realto-agent-saved",
        next ? "yes" : "no"
      );
    } catch {
      // The current session still works without storage.
    }

  };

  const contact = () => {

    document.getElementById("footer")?.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });

  };

  const call = () => {
    setNotice(t(
      "No verified contact number has been configured.",
      "هنوز شماره تماس تاییدشده‌ای ثبت نشده است."
    ));
  };

  const high = t("High impact","اثرگذاری بالا");

  return (

    <section
      className="ra-section"
      id="profile"
      dir={fa ? "rtl" : "ltr"}
      lang={language}
    >

      <div className="ra-container">

        <div className="ra-profile">

          <div className="ra-portrait">

            {!portraitFailed ? (

              <img
                src="/agent.avif"
                alt={t("Advisor portrait","تصویر مشاور")}
                onError={() => setPortraitFailed(true)}
                loading="lazy"
              />

            ) : (

              <div className="ra-portrait-placeholder">

                <UserRound size={86} strokeWidth={.8}/>

                <span>{t(
                  "Advisor portrait",
                  "تصویر مشاور"
                )}</span>

              </div>

            )}

          </div>

          <div className="ra-profile-content">

            <div className="ra-profile-header">

              <div className="ra-identity">

                <h2>
                  {t("Marvin McKinney","ماروین مک‌کینی")}
                </h2>

                <p>
                  {t(
                    "Senior Real Estate Agent · Residential & Investment Properties",
                    "مشاور ارشد املاک · املاک مسکونی و سرمایه‌گذاری"
                  )}
                </p>

              </div>

              <div className="ra-profile-right">

                <div className="ra-review">

                  <Star
                    size={18}
                    fill="#f6c34b"
                    stroke="#f6c34b"
                  />

                  <strong>4.3</strong>

                  <span>
                    {t("(760 Reviews)","(۷۶۰ نظر)")}
                  </span>

                </div>

                <div className="ra-profile-actions">

                  <button
                    className="ra-primary"
                    onClick={toggleSave}
                    aria-pressed={saved}
                  >

                    {saved && <Check size={12}/>}

                    {saved
                      ? t("Saved","ذخیره شد")
                      : t("Save Agent","ذخیره مشاور")}

                  </button>

                  <button onClick={contact}>
                    {t("Message","پیام")}
                  </button>

                  <button onClick={call}>
                    {t("Call","تماس")}
                  </button>

                </div>

              </div>

            </div>

            <div className="ra-about">

              <h3>{t("About Me","درباره من")}</h3>

              <p>

                {t(
                  "Helping buyers and investors find the right property with confidence.",
                  "کمک به خریداران و سرمایه‌گذاران برای انتخاب ملک مناسب با اطمینان."
                )}

                <br/>

                {t(
                  "Focused on residential homes, duplexes and long-term investment opportunities across high-demand neighborhoods.",
                  "تمرکز بر خانه‌های مسکونی، دوبلکس و فرصت‌های سرمایه‌گذاری بلندمدت در مناطق پرتقاضا."
                )}

                <br/>

                {t(
                  "A thoughtful approach to transparent guidance, market insights and a smooth property experience.",
                  "رویکردی هدفمند برای ارائه راهنمایی شفاف، شناخت بازار و تجربه‌ای بهتر در انتخاب ملک."
                )}

              </p>

            </div>

            {notice && (

              <div className="ra-notice" role="status">

                {notice}

                <button
                  onClick={() => setNotice("")}
                  aria-label={t("Close","بستن")}
                >
                  <X size={15}/>
                </button>

              </div>

            )}

          </div>

        </div>

        <div className="ra-charts">

          <article className="ra-card">

            <h3>
              {t("Listing","عملکرد")}
              <br/>
              {t("Performance","فروش املاک")}
            </h3>

            <div className="ra-chart">
              <ListingChart/>
            </div>

            <div className="ra-card-footer">

              <Metric
                value="58%"
                badge={high}
                description={t(
                  "Listings sold within 30 days",
                  "فروش ملک در ۳۰ روز"
                )}
              />

              <Metric
                value="42%"
                badge={high}
                tone="peach"
                description={t(
                  "Listings received offers",
                  "املاک دارای پیشنهاد خرید"
                )}
              />

            </div>

          </article>

          <article className="ra-card">

            <h3>
              {t("Client","گزارش")}
              <br/>
              {t("Engagement Report","تعامل مشتریان")}
            </h3>

            <div className="ra-chart">
              <EngagementChart/>
            </div>

            <div className="ra-card-footer">

              <Metric
                value="51%"
                badge={high}
                description={t(
                  "Active buyer conversations",
                  "گفت‌وگوهای فعال خریداران"
                )}
              />

              <Metric
                value="49%"
                badge={high}
                tone="peach"
                description={t(
                  "Ongoing follow-ups",
                  "پیگیری‌های در حال انجام"
                )}
              />

            </div>

          </article>

          <article className="ra-card">

            <h3>
              {t("Market","سرعت پاسخگویی")}
              <br/>
              {t("Responsiveness","به بازار")}
            </h3>

            <div className="ra-chart">
              <ResponsivenessChart/>
            </div>

            <div className="ra-card-footer">

              <Metric
                value="54%"
                badge={high}
                description={t(
                  "Messages replied within 1 hour",
                  "پاسخ به پیام در یک ساعت"
                )}
              />

              <Metric
                value="46%"
                badge={high}
                tone="peach"
                description={t(
                  "Inquiry conversion rate",
                  "نرخ تبدیل درخواست‌ها"
                )}
              />

            </div>

          </article>

        </div>

        <div className="ra-demo-label">

          <Minus size={13}/>

          {t(
            "Demo profile and illustrative performance data",
            "پروفایل نمایشی و آمار نمونه"
          )}

          <Minus size={13}/>

        </div>

      </div>

    </section>

  );
}

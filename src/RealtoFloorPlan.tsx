import { useState } from "react";
import {
  Plus,
  Minus,
  Tag,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";
import "./RealtoFloorPlan.css";

interface Props {
  language: "en" | "fa";
  zoom: number;
  onZoom: (value: number) => void;
}

function Wall({
  x,
  y,
  w,
  h,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  return (
    <g>
      <rect
        x={x + 3}
        y={y + 4}
        width={w}
        height={h}
        fill="#95846a"
        opacity=".23"
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="url(#rp-wall)"
        stroke="#b9ad99"
        strokeWidth=".7"
      />
      <path
        d={`M${x} ${y+h} V${y} H${x+w}`}
        fill="none"
        stroke="#fffaf0"
        strokeWidth="1.8"
      />
    </g>
  );
}

function Bed({
  x,
  y,
  angle = 0,
}: {
  x: number;
  y: number;
  angle?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${angle},38,52)`}>

      <rect
        x="-12"
        y="-7"
        width="100"
        height="120"
        rx="2"
        fill="url(#rp-rug)"
      />

      <rect
        x="1"
        y="3"
        width="79"
        height="108"
        rx="4"
        fill="#998465"
        opacity=".24"
        filter="url(#rp-shadow)"
      />

      <rect
        width="76"
        height="104"
        rx="3"
        fill="#a9977c"
      />

      <rect
        x="4"
        y="4"
        width="68"
        height="96"
        rx="4"
        fill="#fffaf0"
        stroke="#d9cbb7"
      />

      {[8, 40].map(px => (
        <g key={px}>
          <rect
            x={px}
            y="9"
            width="28"
            height="20"
            rx="4"
            fill="url(#rp-pillow)"
            stroke="#d8ccbb"
            strokeWidth=".6"
          />
          <path
            d={`M${px+3} 13 h22`}
            stroke="white"
            opacity=".7"
          />
        </g>
      ))}

      <rect
        x="6"
        y="35"
        width="64"
        height="63"
        rx="2"
        fill="url(#rp-gold)"
      />

      {Array.from({ length: 7 }).map((_,i) => (
        <path
          key={i}
          d={`M9 ${40+i*8} H67`}
          stroke="#e7c995"
          strokeWidth=".6"
          opacity=".65"
        />
      ))}

      <rect
        x="6"
        y="36"
        width="64"
        height="9"
        fill="#eee1c7"
      />

      {[-21, 80].map(px => (
        <g key={px}>
          <rect
            x={px}
            y="4"
            width="17"
            height="20"
            rx="1"
            fill="#b5a287"
          />
          <rect
            x={px+1}
            y="3"
            width="15"
            height="17"
            fill="url(#rp-wood)"
          />
          <circle
            cx={px+8}
            cy="11"
            r="5"
            fill="#fff5d7"
            stroke="#cabb9e"
          />
        </g>
      ))}

    </g>
  );
}

function Sofa({
  x,
  y,
  angle = 0,
}: {
  x: number;
  y: number;
  angle?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${angle},48,20)`}>

      <rect
        x="2"
        y="4"
        width="99"
        height="43"
        rx="4"
        fill="#938571"
        opacity=".25"
        filter="url(#rp-shadow)"
      />

      <rect
        width="96"
        height="42"
        rx="4"
        fill="#b9aa94"
      />

      <rect
        x="4"
        y="3"
        width="88"
        height="12"
        rx="3"
        fill="#e8dfd1"
      />

      {[9, 36, 63].map(px => (
        <rect
          key={px}
          x={px}
          y="17"
          width="24"
          height="21"
          rx="3"
          fill="url(#rp-pillow)"
          stroke="#c7bca9"
          strokeWidth=".7"
        />
      ))}

      <rect
        x="1"
        y="12"
        width="8"
        height="29"
        rx="2"
        fill="#e9e1d4"
      />

      <rect
        x="87"
        y="12"
        width="8"
        height="29"
        rx="2"
        fill="#e9e1d4"
      />

    </g>
  );
}

function Plant({
  x,
  y,
  size = 1,
}: {
  x: number;
  y: number;
  size?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`}>
      <circle r="10" fill="#ac9b81" opacity=".4"/>
      <circle r="8" fill="#e2d8c3"/>

      {Array.from({ length: 8 }).map((_,i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-6"
          rx="3.1"
          ry="7.5"
          transform={`rotate(${i*45})`}
          fill={i%2 ? "#78815c" : "#a0a581"}
          stroke="#68714e"
          strokeWidth=".3"
        />
      ))}

      <circle r="3" fill="#75805a"/>
    </g>
  );
}

function Dining({ x, y }: {x:number;y:number}) {
  return (
    <g transform={`translate(${x},${y})`}>

      <rect
        x="-8"
        y="-8"
        width="86"
        height="65"
        rx="2"
        fill="url(#rp-rug)"
      />

      {[0,1,2].map(i => (
        <g key={i}>
          <rect
            x={8+i*21}
            y="-6"
            width="17"
            height="15"
            rx="4"
            fill="#ded2b9"
            stroke="#bbae96"
          />
          <rect
            x={8+i*21}
            y="42"
            width="17"
            height="15"
            rx="4"
            fill="#ded2b9"
            stroke="#bbae96"
          />
        </g>
      ))}

      <rect
        width="70"
        height="49"
        rx="5"
        fill="#c8b28c"
        filter="url(#rp-shadow)"
      />

      <rect
        x="2"
        y="1"
        width="66"
        height="45"
        rx="4"
        fill="url(#rp-wood)"
      />

      {[13,35,57].map(px => (
        <g key={px}>
          <circle cx={px} cy="12" r="6" fill="#fffaf1"/>
          <circle cx={px} cy="34" r="6" fill="#fffaf1"/>
          <circle cx={px} cy="12" r="3" fill="#d7b873"/>
          <circle cx={px} cy="34" r="3" fill="#d7b873"/>
        </g>
      ))}

    </g>
  );
}

function Bathroom({x,y}: {x:number;y:number}) {
  return (
    <g transform={`translate(${x},${y})`}>

      <rect
        width="86"
        height="63"
        fill="url(#rp-tile)"
        stroke="#b9ad98"
        strokeWidth="3"
      />

      <rect
        x="5"
        y="6"
        width="27"
        height="49"
        rx="4"
        fill="#fffdf6"
        stroke="#c9bda8"
      />

      <rect
        x="9"
        y="11"
        width="19"
        height="37"
        rx="6"
        fill="#e5e5df"
        stroke="#d7d2c7"
      />

      <rect
        x="43"
        y="5"
        width="29"
        height="18"
        fill="#c9b99e"
      />

      <ellipse
        cx="57"
        cy="14"
        rx="10"
        ry="6"
        fill="#fffdf7"
      />

      <rect
        x="49"
        y="33"
        width="20"
        height="9"
        rx="1"
        fill="#fffdf7"
      />

      <ellipse
        cx="59"
        cy="47"
        rx="10"
        ry="12"
        fill="#faf8f2"
        stroke="#d4cbbb"
      />

      <ellipse
        cx="59"
        cy="46"
        rx="5"
        ry="7"
        fill="#e2ded5"
      />

    </g>
  );
}

function WindowLine({
  x,
  y,
  width,
}: {
  x:number;
  y:number;
  width:number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height="7"
        fill="#e3e8e4"
        stroke="#b6b8af"
        strokeWidth=".8"
      />
      <path
        d={`M${x} ${y+3.5} H${x+width}`}
        stroke="#a7b8bc"
        strokeWidth="1"
      />
      <path
        d={`M${x+width/2} ${y} v7`}
        stroke="#b7c2c0"
      />
    </g>
  );
}

export default function RealtoFloorPlan({
  language,
  zoom,
  onZoom,
}: Props) {

  const fa = language === "fa";
  const t = (en:string,ir:string) => fa ? ir : en;

  const [floor,setFloor] = useState(1);

  const floors = [
    ["Basement","زیرزمین"],
    ["Floor 1 AZ","طبقه اول"],
    ["Floor 2 AZ","طبقه دوم"],
    ["Roof","پشت‌بام"],
  ];

  const metrics = [
    {
      Icon:Tag,
      title:t("Median Price","میانه قیمت"),
      value:"$410,000",
      ratio:67,
    },
    {
      Icon:CalendarDays,
      title:t("Weekly median rent","میانه اجاره هفتگی"),
      value:"$390",
      ratio:59,
    },
    {
      Icon:CircleDollarSign,
      title:t("Potential cashflow","بازده احتمالی"),
      value:"5.2%",
      ratio:68,
    },
  ];

  return (
    <section className="rp-section" id="layout">

      <div className="rp-heading">

        <h2>
          {t("Layout & Market Insights","پلان و تحلیل بازار")}
        </h2>

        <p>
          {t(
            "A detailed conceptual view of the floor plan with sample rental and value metrics.",
            "نمایی مفهومی از پلان ساختمان همراه با نمونه شاخص‌های اجاره و ارزش ملک."
          )}
        </p>

      </div>

      <div className="rp-layout">

        <nav
          className="rp-floor-menu"
          aria-label={t("Choose floor","انتخاب طبقه")}
        >

          <span className="rp-menu-caption">
            {t("Floor plans","پلان طبقات")}
          </span>

          {floors.map(([en,ir],index) => (

            <button
              key={en}
              className={floor === index ? "selected" : ""}
              onClick={() => {
                setFloor(index);
                onZoom(1);
              }}
              aria-pressed={floor === index}
            >
              {floor === index && <i/>}
              {t(en,ir)}
            </button>

          ))}

        </nav>

        <div className="rp-plan-stage">

          <svg
            viewBox="0 0 720 490"
            className="rp-plan"
            style={{transform:`scale(${zoom})`}}
            role="img"
            aria-label={t(
              "Illustrative furnished floor plan",
              "پلان مفهومی مبله ساختمان"
            )}
          >

            <defs>

              <linearGradient id="rp-wall" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#fffaf0"/>
                <stop offset=".45" stopColor="#e8decd"/>
                <stop offset="1" stopColor="#bfb09a"/>
              </linearGradient>

              <linearGradient id="rp-gold" x1="0" y1="0" x2=".7" y2="1">
                <stop stopColor="#f5dfb2"/>
                <stop offset=".65" stopColor="#e5c184"/>
                <stop offset="1" stopColor="#d4af73"/>
              </linearGradient>

              <linearGradient id="rp-pillow" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#fffdf8"/>
                <stop offset=".6" stopColor="#eee8dc"/>
                <stop offset="1" stopColor="#d1c6b5"/>
              </linearGradient>

              <pattern
                id="rp-wood"
                width="38"
                height="9"
                patternUnits="userSpaceOnUse"
              >
                <rect width="38" height="9" fill="#e6d5b9"/>
                <path
                  d="M0 0H38 M19 0V9 M0 8H38"
                  stroke="#bfaa87"
                  strokeWidth=".45"
                  opacity=".48"
                />
                <path
                  d="M3 3H13 M23 5H36"
                  stroke="#f6e9d3"
                  strokeWidth=".65"
                />
              </pattern>

              <pattern
                id="rp-tile"
                width="15"
                height="15"
                patternUnits="userSpaceOnUse"
              >
                <rect width="15" height="15" fill="#e8e1d5"/>
                <path
                  d="M0 0H15V15"
                  fill="none"
                  stroke="#c8bcaa"
                  strokeWidth=".5"
                />
              </pattern>

              <pattern
                id="rp-rug"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <rect width="5" height="5" fill="#dfc79d"/>
                <path
                  d="M0 0L5 5"
                  stroke="#f5e5c5"
                  strokeWidth=".6"
                />
              </pattern>

              <filter id="rp-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow
                  dx="2"
                  dy="3"
                  stdDeviation="2"
                  floodColor="#71634c"
                  floodOpacity=".24"
                />
              </filter>

              <filter id="rp-building-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="5"
                  floodColor="#8e806a"
                  floodOpacity=".19"
                />
              </filter>

            </defs>

            <g
              transform={
                floor === 2
                  ? "translate(720,0) scale(-1,1)"
                  : undefined
              }
              filter="url(#rp-building-shadow)"
            >

              {/* Main building footprint */}

              <path
                d="M90 20 H630 V100 H683 V175 H650 V235 H700
                   V303 H630 V385 H677 V470 H43 V385 H90 V303
                   H20 V235 H70 V175 H37 V100 H90 Z"
                fill="url(#rp-tile)"
                stroke="#b3a58e"
                strokeWidth="4"
              />

              {/* Main room surfaces */}

              {[
                [100,30,170,122],
                [100,157,170,133],
                [100,295,170,163],
                [450,30,170,122],
                [450,157,170,133],
                [450,295,170,163],
              ].map(([x,y,w,h],i) => (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  fill="url(#rp-wood)"
                  stroke="#cbbba0"
                  strokeWidth="1.3"
                />
              ))}

              {/* Central corridor */}

              <rect
                x="282"
                y="30"
                width="156"
                height="428"
                fill="url(#rp-tile)"
              />

              <rect
                x="292"
                y="93"
                width="136"
                height="290"
                fill="#ebe4d7"
                opacity=".65"
              />

              {/* Interior walls */}

              {[
                [90,20,540,7],
                [43,463,634,7],
                [90,20,7,443],
                [623,20,7,443],
                [273,25,9,111],
                [273,167,9,110],
                [273,311,9,147],
                [438,25,9,111],
                [438,167,9,110],
                [438,311,9,147],
                [97,149,176,8],
                [447,149,176,8],
                [97,288,176,8],
                [447,288,176,8],
                [282,81,156,8],
                [282,392,156,8],
              ].map(([x,y,w,h],i) => (
                <Wall key={i} x={x} y={y} w={w} h={h}/>
              ))}

              {/* Upper rooms */}

              {floor !== 3 && (
                <>
                  <Bed x={148} y={38} angle={90}/>
                  <Bed x={495} y={38} angle={-90}/>

                  <Bed x={148} y={171} angle={90}/>
                  <Bed x={495} y={171} angle={-90}/>

                  <Bathroom x={28} y={239}/>
                  <Bathroom x={606} y={239}/>

                  {[
                    [107,40],
                    [107,175],
                    [586,40],
                    [586,175],
                  ].map(([x,y],i) => (

                    <g key={i}>

                      <rect
                        x={x}
                        y={y}
                        width="23"
                        height="90"
                        fill="#b7a68b"
                        stroke="#a79780"
                      />

                      {Array.from({length:4}).map((_,n) => (
                        <rect
                          key={n}
                          x={x+2}
                          y={y+n*22+1}
                          width="19"
                          height="20"
                          fill="url(#rp-wood)"
                          stroke="#c4b398"
                          strokeWidth=".6"
                        />
                      ))}

                    </g>

                  ))}

                </>
              )}

              {/* Living room rugs */}

              <rect
                x="118"
                y="315"
                width="136"
                height="77"
                fill="url(#rp-rug)"
              />

              <rect
                x="466"
                y="315"
                width="136"
                height="77"
                fill="url(#rp-rug)"
              />

              <Sofa x={135} y={307}/>
              <Sofa x={483} y={307}/>

              <Sofa x={105} y={337} angle={90}/>
              <Sofa x={544} y={337} angle={-90}/>

              {[185,533].map(x => (
                <g key={x}>
                  <rect
                    x={x-25}
                    y="357"
                    width="50"
                    height="28"
                    rx="9"
                    fill="#b5a080"
                    opacity=".2"
                    filter="url(#rp-shadow)"
                  />
                  <rect
                    x={x-25}
                    y="354"
                    width="50"
                    height="28"
                    rx="9"
                    fill="#f5eee1"
                    stroke="#c0ac8f"
                  />
                  <circle cx={x} cy="369" r="6" fill="#b5a687"/>
                </g>
              ))}

              <Dining x={160} y={411}/>
              <Dining x={495} y={411}/>

              {/* Kitchen cabinets */}

              {[103,595].map(x => (

                <g key={x}>

                  <rect
                    x={x}
                    y="391"
                    width="23"
                    height="65"
                    fill="#b8a68d"
                    filter="url(#rp-shadow)"
                  />

                  <rect
                    x={x+2}
                    y="391"
                    width="19"
                    height="62"
                    fill="#f7f1e6"
                  />

                  <rect
                    x={x+5}
                    y="398"
                    width="13"
                    height="18"
                    rx="3"
                    fill="#c0c1b9"
                    stroke="#999d96"
                  />

                  {[0,1,2,3].map(n => (
                    <circle
                      key={n}
                      cx={x+7+n%2*8}
                      cy={435+Math.floor(n/2)*8}
                      r="3"
                      fill="#6f6d67"
                    />
                  ))}

                </g>

              ))}

              {/* Terrace */}

              <rect
                x="635"
                y="391"
                width="36"
                height="68"
                fill="url(#rp-wood)"
              />

              {[409,440].map(y => (
                <g key={y}>
                  <rect
                    x="642"
                    y={y}
                    width="22"
                    height="20"
                    rx="5"
                    fill="#dad4c5"
                    stroke="#b6ab98"
                    transform={`rotate(20,653,${y+10})`}
                  />
                  <rect
                    x="646"
                    y={y+4}
                    width="14"
                    height="12"
                    rx="3"
                    fill="#f1ede3"
                  />
                </g>
              ))}

              {/* Stairs */}

              {[0,1,2,3,4,5,6].map(i => (
                <rect
                  key={i}
                  x="300"
                  y={407+i*7}
                  width="118"
                  height="6"
                  fill={i%2 ? "#ded3c1" : "#f1e9db"}
                  stroke="#c4b7a2"
                  strokeWidth=".5"
                />
              ))}

              {/* Plants and interior details */}

              {[
                [116,140],
                [252,174],
                [470,174],
                [602,140],
                [110,303],
                [610,303],
                [650,395],
                [54,450],
              ].map(([x,y],i) => (
                <Plant key={i} x={x} y={y} size={0.85} />
              ))}

              {/* Windows */}

              {[
                [122,21,120],
                [474,21,120],
                [120,463,118],
                [480,463,118],
                [300,21,120],
              ].map(([x,y,width],i) => (
                <WindowLine
                  key={i}
                  x={x}
                  y={y}
                  width={width}
                />
              ))}

              {/* Door leaves and swing arcs */}

              {[136,277,458].slice(0,2).map(y => (

                <g key={y} stroke="#baa88a" fill="none" strokeWidth="1.2">

                  <path
                    d={`M281 ${y} h-28 M253 ${y} a28 28 0 0 0 28 28`}
                  />

                  <path
                    d={`M438 ${y} h28 M466 ${y} a28 28 0 0 1 -28 28`}
                  />

                </g>

              ))}

            </g>

          </svg>

          <span className="rp-plan-caption">
            {t(
              "Conceptual illustration",
              "تصویر مفهومی پلان"
            )}
          </span>

        </div>

        <div className="rp-controls">

          <button
            onClick={() => onZoom(Math.min(1.65,zoom+.15))}
            aria-label={t("Zoom in","بزرگ‌نمایی")}
            disabled={zoom >= 1.65}
          >
            <Plus size={17} strokeWidth={1.5}/>
          </button>

          <button
            onClick={() => onZoom(Math.max(.7,zoom-.15))}
            aria-label={t("Zoom out","کوچک‌نمایی")}
            disabled={zoom <= .7}
          >
            <Minus size={17} strokeWidth={1.5}/>
          </button>

        </div>

      </div>

      <div className="rp-market">

        {metrics.map(({Icon,title,value,ratio},index) => (

          <article
            key={title}
            className={`rp-metric rp-metric-${index}`}
          >

            <div className="rp-scale" dir="ltr">

              <div className="rp-scale-labels">
                <span>0%</span>
                <span>100%</span>
              </div>

              <div className="rp-track">

                <div
                  className="rp-track-first"
                  style={{width:`${ratio}%`}}
                />

                <div className="rp-track-last"/>

                <div
                  className="rp-marker"
                  style={{left:`${ratio}%`}}
                />

              </div>

            </div>

            <div className="rp-metric-label">

              <Icon size={18} strokeWidth={1.6}/>

              <span>{title}</span>

            </div>

            <strong dir="ltr">{value}</strong>

          </article>

        ))}

      </div>

      <p className="rp-disclaimer">
        {t(
          "Illustrative market figures — not live property data.",
          "ارقام نمونه برای نمایش رابط کاربری؛ نه اطلاعات واقعی بازار."
        )}
      </p>

    </section>
  );
}


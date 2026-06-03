import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import logo from "@/assets/rt38-logo-clean.png";
import tacoAlleyBadge from "@/assets/taco-alley-badge.png";
import tacoAlleyBadgeBrand from "@/assets/taco-alley-badge-brand.png";
// no storefront photo available — use pozole shot (shows real restaurant interior) for the dine-in card
import foodTruck from "@/assets/food-truck.jpg";
import sope from "@/assets/food/sope.jpg";
import shrimpPlate from "@/assets/food/shrimp-plate.jpg";
import pozole from "@/assets/food/pozole.jpg";
import shrimpRice from "@/assets/food/shrimp-rice.jpg";
import trompo from "@/assets/food/al-pastor-trompo.png";
import sopesTrio from "@/assets/food/sopes-trio.jpg";
import pastorQues from "@/assets/food/pastor-quesadilla.jpg";
import chili from "@/assets/chili.png";
import birriaDip from "@/assets/birria-dip.png";
import horchata from "@/assets/horchata.png";
import plazaAerial from "@/assets/plaza-aerial.jpg";
import { HandDrawnScatter } from "@/components/HandDrawnIcons";
// Storefront signage is referenced as inspiration (recreated in CSS/SVG), not embedded as photos.


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RT-38 Taco Alley · Tamales Los Girasoles · DeKalb, IL" },
      { name: "description", content: "Family-owned Mexican restaurant & food truck in DeKalb, IL. Tacos, quesabirria, tamales, birria ramen and more. Dine in, pick up, or catch the truck at NIU." },
      { property: "og:title", content: "RT-38 Taco Alley · Tamales Los Girasoles" },
      { property: "og:description", content: "Family-owned Mexican restaurant & food truck in DeKalb, IL." },
      { property: "og:image", content: logo },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ============== Decorative atoms ============== */
const PAPEL = ["#F47B3E", "#FFD23F", "#D62828", "#6B2D9C", "#2EC4B6", "#6BBF59"];

function PapelPicado({ count = 14 }: { count?: number }) {
  return (
    <div className="papel-row" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="papel-flag" style={{ color: PAPEL[i % PAPEL.length], backgroundColor: PAPEL[i % PAPEL.length] }} />
      ))}
    </div>
  );
}

function Sunflower({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="50" cy="22" rx="9" ry="20" fill="#FFD23F" stroke="#F47B3E" strokeWidth="2"
          transform={`rotate(${i * 30} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="14" fill="#2C1A0E" />
      <circle cx="46" cy="46" r="3" fill="#FFD23F" opacity="0.7" />
    </svg>
  );
}

function Pepper({ className = "", size = 60, style }: { className?: string; size?: number; style?: CSSProperties }) {
  return (
    <img
      src={chili}
      alt=""
      aria-hidden
      width={size}
      height={size * 1.5}
      style={{ width: size, height: "auto", filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.55))", ...style }}
      className={className}
      loading="lazy"
    />
  );
}

function Star({ className = "", color = "#FFD23F" }: { className?: string; color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z" fill={color} stroke="#2C1A0E" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Aztec() {
  return <div className="aztec-border" aria-hidden />;
}

/* ============== Hero ============== */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1A0E07 0%, #2C1A0E 100%)" }}>
      <PapelPicado />
      <HandDrawnScatter count={18} opacity={0.13} seed={1} />


      {/* Floating decor */}
      <Pepper size={70} className="absolute top-24 left-6 wiggle hidden md:block" />
      <Pepper size={50} className="absolute top-[420px] left-[4%] bob hidden lg:block" />
      <Pepper size={44} className="absolute top-[180px] right-[6%] wiggle hidden md:block" style={{ transform: "rotate(25deg)" }} />
      <Star className="absolute top-44 left-1/3 bob" />
      <Star className="absolute top-60 right-1/4 bob" color="#FF6B1A" />


      {/* Hero birria-dipping tacos — floating right of brand */}
      <img
        src={birriaDip}
        alt="Quesabirria tacos dipping in broth"
        width={520}
        height={520}
        className="absolute -right-16 top-[340px] w-[260px] lg:w-[360px] pointer-events-none hidden lg:block bob"
        style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.7)) drop-shadow(0 0 60px rgba(255,107,26,0.35))", transform: "rotate(-6deg)", zIndex: 1 }}
      />

      {/* Horchata glass — floating left of brand */}
      <img
        src={horchata}
        alt="Glass of creamy horchata with cinnamon stick"
        width={512}
        height={512}
        className="absolute -left-8 top-[280px] w-[200px] lg:w-[280px] pointer-events-none hidden lg:block bob"
        style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(245,222,179,0.25))", transform: "rotate(6deg)", zIndex: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        {/* Top row: brand */}
        <div className="text-center relative z-10">

          {/* Brand panel — cream background so the badge's true colors (orange, brown, cream) read correctly */}
          <div
            className="relative mx-auto rounded-[28px] overflow-hidden"
            style={{
              background: "radial-gradient(ellipse at center, #FFFBF0 0%, #FBEFD4 100%)",
              border: "5px solid #2C1A0E",
              boxShadow: "0 0 0 3px var(--gold), 0 24px 50px rgba(0,0,0,0.6), 0 0 70px rgba(255,107,26,0.45)",
              padding: "24px 28px",
              maxWidth: "640px",
              width: "92%",
            }}
          >
            {/* Soft sunray streaks behind the badge */}
            <svg aria-hidden viewBox="0 0 600 600" className="absolute inset-0 w-full h-full opacity-15 spin-slow pointer-events-none">
              {Array.from({ length: 18 }).map((_, i) => (
                <line
                  key={i}
                  x1="300" y1="300" x2="300" y2="40"
                  stroke="#E85D3A" strokeWidth="2"
                  transform={`rotate(${i * 20} 300 300)`}
                />
              ))}
            </svg>

            <img
              src={tacoAlleyBadgeBrand}
              alt="Tamales Los Girasoles · RT-38 Taco Alley badge"
              width={1024}
              height={1024}
              className="relative w-full h-auto select-none bob"
              style={{
                filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.35))",
              }}
            />
          </div>







          <p className="mt-4 text-2xl md:text-4xl text-gold" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
            The Taste of Tradition
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            RT-38 TACO <span style={{ color: "var(--burnt)" }}>ALLEY</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl tracking-widest" style={{ fontFamily: "var(--font-marker)", color: "var(--burnt)" }}>
            ✦ TAMALES LOS GIRASOLES ✦
          </p>

          {/* Open pill + CTAs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider"
              style={{ background: "var(--lime)", color: "#0d2410", fontFamily: "var(--font-bang)" }}>
              <span className="w-3 h-3 rounded-full bg-white pulse-dot" />
              We're Open
            </span>
            <a href="#menu" className="px-7 py-3 rounded-full text-xl border-4 lift"
              style={{ fontFamily: "var(--font-action)", borderColor: "var(--gold)", color: "var(--gold)", letterSpacing: "0.08em" }}>
              VIEW MENU
            </a>
          </div>
        </div>

        {/* Find us at both spots */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>
              ✦ Find us at both spots ✦
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] mt-1" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>
              Two homes · One family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <LocationCard
              img={pozole}
              tilt="tilt-l"
              emoji="🏠"
              title="The Restaurant"
              addr="817 W Lincoln Hwy · DeKalb, IL"
              hours="Mon–Sun · 10am – 9pm"
              phone="779-270-2160"
              accent="var(--burnt)"
              showMap
            />
            <LocationCard
              img={foodTruck}
              tilt="tilt-r"
              emoji="🚚"
              title="The Food Truck"
              addr="Currently at NIU Campus"
              hours="Today · 11am – 8pm · LIVE"
              phone="815-517-3718"
              accent="var(--gold)"
              live
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function LocationCard({ img, tilt, emoji, title, addr, hours, phone, accent, live, showMap }: {
  img: string; tilt: string; emoji: string; title: string; addr: string; hours: string; phone: string; accent: string; live?: boolean; showMap?: boolean;
}) {
  const tacoTrailPath = "M 280 20 L 280 320 Q 285 360 330 372 L 780 336";
  const runners = [0, -1.4, -2.8, -4.2, -5.6];
  return (
    <div className={`relative ${tilt} lift`}>
      <div className="rounded-2xl overflow-hidden border-4 shadow-pop-lg" style={{ borderColor: "var(--gold)", background: "var(--brown)" }}>
        <div className="papel-row" style={{ height: 28 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="papel-flag" style={{ height: 28, color: PAPEL[i % PAPEL.length], backgroundColor: PAPEL[i % PAPEL.length] }} />
          ))}
        </div>
        <div className="relative">
          {showMap ? (
            <div
              className="relative w-full h-72"
              style={{
                backgroundImage: `url(${plazaAerial})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 78% 56%, rgba(255,80,40,0.35), transparent 40%), linear-gradient(180deg, rgba(0,0,0,0.05), rgba(20,8,0,0.35))" }}
              />
              <svg aria-hidden className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <path id={`tacoTrailPath-${title}`} d={tacoTrailPath} fill="none" stroke="var(--gold)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="26 20" opacity="0.95" />
                <path d={tacoTrailPath} fill="none" stroke="rgba(255, 105, 32, 0.65)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path id={`tacoTrailPathSouth-${title}`} d="M 280 320 L 280 600" fill="none" stroke="var(--gold)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="26 20" opacity="0.95" />
                <path d="M 280 320 L 280 600" fill="none" stroke="rgba(255, 105, 32, 0.65)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {runners.map((delay, i) => (
                  <text key={i} className="taco-runner-svg" x="0" y="0" fontSize="42">
                    🌮
                    <animateMotion dur="7s" begin={`${delay}s`} repeatCount="indefinite" rotate="0">
                      <mpath href={`#tacoTrailPath-${title}`} />
                    </animateMotion>
                  </text>
                ))}
                {runners.map((delay, i) => (
                  <text key={`s-${i}`} className="taco-runner-svg" x="0" y="0" fontSize="42">
                    🌮
                    <animateMotion dur="5s" begin={`${delay * 0.7}s`} repeatCount="indefinite" rotate="0">
                      <mpath href={`#tacoTrailPathSouth-${title}`} />
                    </animateMotion>
                  </text>
                ))}
                <circle cx="780" cy="336" r="22" fill="rgba(0,0,0,0.45)" />
                <circle cx="780" cy="336" r="16" fill="var(--burnt)" stroke="var(--cream)" strokeWidth="4" />
                <circle cx="780" cy="336" r="6" fill="var(--cream)" opacity="0.9" />
              </svg>
              <span className="absolute top-3 right-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--burnt)", color: "white", fontFamily: "var(--font-bang)" }}>
                🌮 FOLLOW THE TRAIL
              </span>
            </div>
          ) : (
            <img src={img} alt={title} className="w-full h-72 object-cover" loading="lazy" width={1024} height={576} />
          )}
          {live && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "var(--chili)", color: "white", fontFamily: "var(--font-bang)" }}>
              <span className="w-2 h-2 rounded-full bg-white pulse-hot" /> LIVE PIN
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-2xl" style={{ fontFamily: "var(--font-marker)", color: accent }}>
            <span className="text-3xl">{emoji}</span> {title}
          </div>
          <div className="mt-1 text-sm" style={{ fontFamily: "var(--font-item)", color: "var(--cream)" }}>{addr}</div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-2" style={{ fontFamily: "var(--font-bang)", color: "var(--lime)" }}>
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] pulse-dot" /> OPEN NOW · {hours}
            </span>
            <a href={`tel:${phone}`} className="underline decoration-dotted" style={{ color: "var(--gold)" }}>{phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== Ordering ============== */
const CATEGORIES = [
  { name: "Tacos", emoji: "🌮", count: 8 },
  { name: "Burritos", emoji: "🌯", count: 6 },
  { name: "Quesabirria", emoji: "🧀", count: 4 },
  { name: "Tamales", emoji: "🫔", count: 5 },
  { name: "Ramen", emoji: "🍜", count: 2 },
  { name: "Desserts", emoji: "🍰", count: 3 },
];

const ITEMS = [
  { name: "Street Taco", price: "3.89", desc: "Asada, pastor, chicken, or chorizo · cilantro · onion", emoji: "🌮", tag: "Classic" },
  { name: "Burrito Grande", price: "10.99", desc: "Flour tortilla · beans · rice · meat · pico · crema", emoji: "🌯", tag: "Favorite" },
  { name: "Birria Ramen", price: "15.00", desc: "Slow-braised beef · ramen noodles · broth dip", emoji: "🍜", tag: "🔥 Hot" },
  { name: "Quesabirria Tacos", price: "4.89", desc: "Crispy cheese tortilla · birria · onion · cilantro · dip", emoji: "🧀", tag: "Trending" },
  { name: "Dozen Tamales", price: "30.00", desc: "Pork, chicken, or rajas con queso · masa from scratch", emoji: "🫔", tag: "Family" },
  { name: "Churro Cheesecake", price: "6.50", desc: "Cinnamon sugar · cream cheese · caramel drizzle", emoji: "🍰", tag: "Sweet" },
  { name: "Huskie Special", price: "15.99", desc: "Two tacos · burrito · drink · NIU students only", emoji: "🐺", tag: "NIU" },
];

function OnlineOrdering() {
  const [active, setActive] = useState("Tacos");
  return (
    <section id="order" className="relative overflow-hidden py-20 px-6" style={{ background: "linear-gradient(180deg, #2C1A0E 0%, #1A0E07 100%)" }}>
      <HandDrawnScatter count={14} opacity={0.1} seed={3} />
      {/* Trompo pillar header */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center mb-12">
        <div className="relative mx-auto">
          <div className="absolute inset-0 -inset-x-4 rounded-[200px] glow-pulse" style={{ background: "radial-gradient(ellipse, rgba(255,107,26,0.5), transparent 70%)" }} />
          <div className="relative rounded-[140px] overflow-hidden border-4" style={{ borderColor: "var(--gold)", height: 360, width: 220 }}>
            <img src={trompo} alt="Al pastor trompo" className="w-full h-full object-cover" loading="lazy" width={704} height={1152} />
          </div>
          <Star className="absolute -top-3 -right-3 spin-slow" />
          <Star className="absolute -bottom-3 -left-3 spin-slow" color="#6B2D9C" />
        </div>
        <div>
          <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Online Ordering</p>
          <h2 className="text-5xl md:text-7xl mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            ORDER<br/>
            <span style={{ color: "var(--burnt)" }}>FRESH.</span> <span style={{ color: "var(--gold)" }}>FAST.</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ fontFamily: "var(--font-hand)", color: "var(--cream)", fontSize: "1.4rem" }}>
            From the trompo to your table. Pickup, delivery, or eat in — all in one tap.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="rounded-2xl p-4 border-2 h-fit sticky top-6" style={{ background: "var(--brown)", borderColor: "var(--gold)" }}>
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Categories</div>
          <ul className="space-y-1">
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <button
                  onClick={() => setActive(c.name)}
                  className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition ${active === c.name ? "bg-[var(--hot)] text-white" : "hover:bg-[var(--muted)]"}`}
                  style={{ fontFamily: "var(--font-item)", letterSpacing: "0.04em" }}
                >
                  <span className="flex items-center gap-2"><span className="text-xl">{c.emoji}</span> {c.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: active === c.name ? "rgba(255,255,255,0.25)" : "var(--brown-deep)" }}>{c.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Items grid */}
        <div className="relative">
          {/* Sunflower badge floating special */}
          <div className="absolute -top-12 right-2 z-20 hidden md:block">
            <div className="relative w-44 h-44 bob">
              <div className="absolute inset-0 starburst" style={{ background: "var(--gradient-fiesta)" }} />
              <div className="absolute inset-3 rounded-full overflow-hidden border-4" style={{ borderColor: "var(--gold)" }}>
                <img src={pastorQues} alt="Pastor quesadilla" className="w-full h-full object-cover" loading="lazy" width={400} height={400} />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs whitespace-nowrap text-white"
                style={{ background: "var(--chili)", fontFamily: "var(--font-bang)" }}>
                TODAY'S SPECIAL · $11.99
              </div>
            </div>
          </div>

          {/* Signature Camarones — featured at top of menu */}
          <div className="relative rounded-2xl overflow-hidden border-4 lift mb-6" style={{ borderColor: "var(--gold)" }}>
            <div className="grid sm:grid-cols-[1fr_1.2fr]">
              <div className="relative">
                <img src={shrimpPlate} alt="Camarones combo" className="w-full h-64 object-cover" loading="lazy" width={896} height={896} />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white" style={{ background: "var(--chili)", fontFamily: "var(--font-bang)" }}>🔥 SIGNATURE</div>
              </div>
              <div className="p-5 relative" style={{ background: "var(--brown)" }}>
                <Pepper className="absolute -top-3 right-3 wiggle" />
                <div className="text-xs tracking-widest uppercase" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Camarones Combo</div>
                <h3 className="text-3xl mt-1" style={{ fontFamily: "var(--font-item)", color: "var(--cream)" }}>Camarones a la Diabla</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Plump gulf shrimp tossed in Efraen's red chile sauce. Served with rice, beans, and warm tortillas.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-3xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>$16.50</div>
                  <button className="px-5 py-2 rounded-full gradient-fiesta gradient-shift text-white text-lg" style={{ fontFamily: "var(--font-action)" }}>ADD +</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {ITEMS.filter((it) => it.name !== "Huskie Special").map((it, i) => (
              <ItemCard key={it.name} item={it} delay={i * 0.08} oversized={it.name === "Birria Ramen"} niu={false} />
            ))}
          </div>

          {/* Huskie Special — visually separated callout so it doesn't blend with the menu */}
          <div className="mt-12 pt-8 border-t-2 border-dashed" style={{ borderColor: "rgba(200,16,46,0.5)" }}>
            <div className="text-center mb-5">
              <span className="inline-block px-4 py-1 rounded-full text-xs tracking-[0.3em] text-white" style={{ background: "#C8102E", fontFamily: "var(--font-bang)" }}>
                🐺 NIU STUDENTS ONLY
              </span>
            </div>
            <ItemCard item={ITEMS.find((it) => it.name === "Huskie Special")!} delay={0} niu />
          </div>
        </div>
      </div>
    </section>
  );
}

function ItemCard({ item, delay, oversized, niu }: { item: typeof ITEMS[number]; delay: number; oversized?: boolean; niu?: boolean }) {
  if (niu) {
    return (
      <div className={`pop-in relative rounded-2xl overflow-hidden lift sm:col-span-2`}
        style={{
          animationDelay: `${delay}s`,
          background: "linear-gradient(135deg, #6b0a0a 0%, #1a0505 55%, #000 100%)",
          border: "3px solid #C8102E",
          boxShadow: "0 0 0 2px #000, 0 0 30px rgba(200,16,46,0.55), 0 18px 40px rgba(0,0,0,0.6)",
        }}>
        {/* Corner ribbon */}
        <div className="absolute -right-12 top-6 rotate-45 px-14 py-1 text-xs tracking-[0.3em] text-white z-10"
          style={{ background: "#000", border: "2px solid #C8102E", fontFamily: "var(--font-bang)" }}>
          NIU ONLY
        </div>
        {/* Glow pulse bg */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 30%, rgba(200,16,46,0.8), transparent 60%)" }} />
        <div className="relative p-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-5xl border-4 shrink-0"
            style={{ background: "#000", borderColor: "#C8102E", boxShadow: "0 0 20px rgba(200,16,46,0.8)" }}>
            🐺
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] px-2 py-0.5 rounded-full text-white tracking-[0.2em]"
                style={{ background: "#C8102E", fontFamily: "var(--font-bang)" }}>HUSKIES</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full text-white"
                style={{ background: "transparent", border: "1px solid #C8102E", fontFamily: "var(--font-bang)" }}>STUDENT ID REQUIRED</span>
            </div>
            <h3 className="text-4xl md:text-5xl mt-1 leading-none" style={{ fontFamily: "var(--font-display)", color: "#fff", textShadow: "0 0 12px rgba(200,16,46,0.9), 2px 2px 0 #000" }}>
              HUSKIE SPECIAL
            </h3>
            <p className="text-sm mt-2" style={{ color: "#f4d4d4", fontFamily: "var(--font-hand)", fontSize: "1.1rem" }}>{item.desc}</p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="text-4xl" style={{ fontFamily: "var(--font-display)", color: "#FFD23F", textShadow: "2px 2px 0 #000" }}>${item.price}</div>
              <button className="px-6 py-2 rounded-full text-white text-lg hover:scale-105 transition"
                style={{ background: "#C8102E", border: "2px solid #000", fontFamily: "var(--font-action)", boxShadow: "0 0 18px rgba(200,16,46,0.7)" }}>
                ORDER NOW →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`pop-in rounded-2xl border-2 overflow-hidden lift ${oversized ? "sm:col-span-2" : ""}`}
      style={{ background: "var(--card)", borderColor: "var(--gold)", animationDelay: `${delay}s` }}>
      <div className="p-4 flex items-start gap-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl border-2"
          style={{ background: "var(--gradient-fiesta)", borderColor: "var(--gold)" }}>
          {item.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl truncate" style={{ fontFamily: "var(--font-item)", color: "var(--cream)" }}>{item.name}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "var(--chili)", color: "white", fontFamily: "var(--font-bang)" }}>{item.tag}</span>
          </div>
          <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>${item.price}</div>
            <button className="text-sm px-4 py-1.5 rounded-full border-2 hover:bg-[var(--hot)] hover:text-white transition"
              style={{ borderColor: "var(--burnt)", color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>
              ADD +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== Diagonal Banner ============== */
function DiagonalBanner() {
  return (
    <section className="relative my-0 overflow-hidden" style={{ background: "var(--brown-deep)" }}>
      <div className="skew-band relative" style={{ height: 280, background: "var(--gradient-fiesta)" }}>
        <img src={shrimpRice} alt="Camarones a la diabla" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy" width={1280} height={720} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(26,14,7,0.7), transparent 60%, rgba(214,40,40,0.6))" }} />
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Signature Dish</p>
            <h3 className="text-5xl md:text-7xl text-white drop-shadow-lg" style={{ fontFamily: "var(--font-display)" }}>
              CAMARONES <span style={{ color: "var(--gold)" }}>A LA DIABLA</span>
            </h3>
            <p className="mt-2 text-xl text-white" style={{ fontFamily: "var(--font-hand)" }}>Spicy. Smoky. Straight from Efraen's kitchen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============== Menu board — matches losgirasoles.com aesthetic ============== */
function MenuItem({ name, desc, price }: { name: string; desc?: string; price?: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between gap-3">
        <h5
          className="uppercase font-black italic text-[#F47B3E] text-xl md:text-2xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h5>
        {price && (
          <span className="text-[#FFF6E5] font-bold text-base md:text-lg whitespace-nowrap tabular-nums">
            ${price}
          </span>
        )}
      </div>
      {desc && (
        <p className="text-[#FFF6E5] text-xs md:text-sm leading-snug mt-1 uppercase font-semibold italic tracking-wide opacity-90">
          {desc}
        </p>
      )}
    </div>
  );
}

function SideLabel({ text, side = "left" }: { text: string; side?: "left" | "right" }) {
  return (
    <div
      className="font-black italic uppercase text-[#FFF6E5] text-4xl md:text-6xl select-none whitespace-nowrap"
      style={{
        fontFamily: "var(--font-display)",
        writingMode: "vertical-rl",
        transform: side === "left" ? "rotate(180deg)" : "none",
        letterSpacing: "0.15em",
      }}
    >
      {text}
    </div>
  );
}

function MenuBoard() {
  return (
    <section id="menu" className="py-20 px-4 md:px-8" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto">
        {/* Big MENU title */}
        <div className="mb-12">
          <h2
            className="text-7xl md:text-[10rem] font-black italic text-[#FFF6E5] leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display)", transform: "skew(-6deg)" }}
          >
            MENU
          </h2>
          <div className="h-1 w-32 mt-2" style={{ background: "#F47B3E" }} />
        </div>

        {/* Two-column layout with vertical labels flanking */}
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 md:gap-8">
          <div className="flex flex-col justify-between py-4 gap-8">
            <SideLabel text="APPS" side="left" />
            <SideLabel text="SPECIALS" side="left" />
          </div>

          <div>
            <MenuItem name="Lazy Salsa and Chips" desc="Our version of pico de gallo." price="6.00" />
            <MenuItem name="Guacamole and Chips" price="8.00" />
            <MenuItem name="3 Tacos" desc="Your choice of meat and toppings. Comes with rice, beans, and 16oz drink." price="14.99" />
            <MenuItem name="3 Enchiladas" desc="3 fried tortillas topped with a red sauce, lettuce, tomato, cotija cheese, and sour cream and filled with your choice of meat. Comes with rice, beans, and 16oz drink." price="15.99" />
            <MenuItem name="Burrito" desc="Your choice of meat. Comes with rice, beans, and 16oz drink." price="14.99" />
            <MenuItem name="Tostada" desc="Your choice of meat. Comes with rice, beans, and 16oz drink." price="14.99" />
            <MenuItem name="Quesadilla" desc="Quesadilla with choice of meat. Comes with a side of lazy salsa, guacamole, sour cream, and 16oz drink." price="14.99" />
            <h4 className="uppercase font-black italic text-[#F47B3E] text-2xl md:text-3xl mt-6 mb-3" style={{ fontFamily: "var(--font-display)" }}>Sides</h4>
            <MenuItem name="Rice" price="3.00" />
            <MenuItem name="Beans" price="3.00" />
          </div>

          <div>
            <MenuItem name="Taco" desc="Mexican: Onion, cilantro, lime. American: Lettuce, tomato, cheese." price="3.89" />
            <MenuItem name="Tostada" desc="Flat shell topped with beans, choice of meat, lettuce, tomato, cheese, and sour cream." price="4.50" />
            <MenuItem name="Burrito" desc="Large flour tortilla filled with beans, choice of meat, lettuce, tomato, and cheese. Add sour cream for $.50" price="9.99" />
            <MenuItem name="Torta" desc="Large telera bun filled with beans, choice of meat, cheese, lettuce, tomato, and sour cream." price="10.99" />
            <MenuItem name="Cheese Quesadilla" desc="Quesadilla with cheese." price="6.99" />
            <MenuItem name="Quesadilla With Meat" desc="Large flour tortilla filled your choice of meat and cheese." price="9.99" />
            <MenuItem name="Loaded Nachos" desc="Tortilla chips topped with nacho cheese, choice of meat, lettuce, tomato, onion, cilantro, and sour cream." price="11.99" />
            <MenuItem name="Walking Taco" desc="Bag of Doritos, choice of meat, lettuce, tomato, cheese, and sour cream." price="9.99" />
            <MenuItem name="Corn in a Cup" desc="12oz cup of corn topped with mayo, cotija cheese, and chili powder." price="4.99" />
            <MenuItem name="Birria Ramen" desc="Comes with 2 quesabirrias tacos." price="15.00" />
            <MenuItem name="Quesabirrias Tacos" desc="Taco with birria and cheese, topped with onion, cilantro, and cheese." price="4.89" />
          </div>

          <div className="flex items-center py-4">
            <SideLabel text="FAVORITES" side="right" />
          </div>
        </div>

        {/* Meats strip */}
        <div className="mt-12 py-4 px-6" style={{ background: "#F47B3E" }}>
          <p className="text-black font-black uppercase italic tracking-wide text-sm md:text-base" style={{ fontFamily: "var(--font-display)" }}>
            <span className="mr-3">Meats:</span>
            Steak · Chicken · Al Pastor · Ground Beef · Barbacoa · Cabeza · Chicharrones (green)
          </p>
        </div>

        {/* Today's Specials — polaroid photo gallery */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-5xl md:text-7xl font-black italic text-[#FFF6E5]" style={{ fontFamily: "var(--font-display)", transform: "skew(-6deg)" }}>
              TODAY'S <span style={{ color: "#F47B3E" }}>SPECIALS</span>
            </h3>
            <div className="h-1 w-32 mt-2" style={{ background: "#F47B3E" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: pastorQues, title: "Pastor Quesadilla", price: "$11.99", caption: "Crispy · cheesy · trompo-carved al pastor", tilt: "tilt-l" },
              { img: birriaDip, title: "Quesabirria Trio", price: "$14.67", caption: "Slow-braised · dipped in rich broth", tilt: "tilt-r" },
              { img: sopesTrio, title: "Sopes de la Casa", price: "$10.50", caption: "Hand-pressed masa · house salsa", tilt: "tilt-l" },
            ].map((s) => (
              <figure key={s.title} className={`relative ${s.tilt} lift bg-[#FBEFD4] p-3 pb-5 rounded-sm shadow-pop-lg`}>
                <div className="relative overflow-hidden bg-[#2C1A0E]" style={{ aspectRatio: "1 / 1" }}>
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: "var(--chili)", color: "white", fontFamily: "var(--font-bang)" }}>
                    Special
                  </span>
                </div>
                <figcaption className="mt-3 text-center" style={{ color: "#2C1A0E" }}>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-2xl" style={{ fontFamily: "var(--font-marker)" }}>{s.title}</span>
                    <span className="text-lg" style={{ fontFamily: "var(--font-bang)", color: "#C14521" }}>{s.price}</span>
                  </div>
                  <p className="text-sm mt-1" style={{ fontFamily: "var(--font-hand)" }}>{s.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Family story over pozole banner ============== */
function FamilyStory() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <img src={pozole} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,14,7,0.92), rgba(44,26,14,0.88))" }} />
      <HandDrawnScatter count={14} opacity={0.14} seed={7} />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="mx-auto inline-block text-5xl" aria-hidden>✦</div>
        <p className="text-sm tracking-[0.4em] uppercase mt-4" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Our Family</p>
        <h2 className="text-5xl md:text-6xl mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
          TERESA & <span style={{ color: "var(--burnt)" }}>EFRAEN</span>
        </h2>
        <p className="mt-6 text-xl leading-relaxed" style={{ fontFamily: "var(--font-hand)", color: "var(--cream)", fontSize: "1.6rem" }}>
          "We started Los Girasoles with one tamale recipe from my abuela in Michoacán. Today we feed DeKalb out of two kitchens and one trusty red trailer — and every plate still passes through our hands."
        </p>
        <p className="mt-4" style={{ fontFamily: "var(--font-script)", color: "var(--gold)", fontSize: "1.4rem" }}>
          — The Garcia Family
        </p>
      </div>
    </section>
  );
}

/* ============== Loyalty + Reviews ============== */
function LoyaltyReviews() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--brown-deep)" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Punch card */}
        <div className="rounded-2xl border-4 p-6" style={{ borderColor: "var(--gold)", background: "var(--brown)" }}>
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Loyalty</p>
          <h3 className="text-4xl mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>TACO PUNCH CARD</h3>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>9 tacos = 1 free · stamped automatically with every order.</p>

          <div className="mt-5 grid grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, i) => {
              const stamped = i < 6;
              const free = i === 9;
              return (
                <div key={i} className="aspect-square rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: free ? "var(--chili)" : "var(--gold)", background: stamped ? "rgba(244,123,62,0.15)" : "transparent" }}>
                  {stamped ? <span style={{ fontFamily: "var(--font-bang)", color: "var(--chili)", fontSize: "1.5rem" }}>✓</span> : free ? <span style={{ fontFamily: "var(--font-bang)", color: "var(--chili)" }}>FREE</span> : <span style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-bang)" }}>{i + 1}</span>}
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
            {[["🥉 Friend", "0+"], ["🥈 Family", "10+"], ["🥇 Regular", "25+"]].map(([t, c]) => (
              <div key={t} className="p-2 rounded-lg border" style={{ borderColor: "var(--gold)" }}>
                <div style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>{t}</div>
                <div style={{ color: "var(--muted-foreground)" }}>{c} orders</div>
              </div>
            ))}
          </div>

          <div className="mt-5 coupon-edge p-4 rounded-lg flex items-center justify-between" style={{ background: "var(--brown-deep)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-marker)", color: "var(--pink)" }}>🎂 Birthday gift</div>
              <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>Free churro cheesecake on your day</div>
            </div>
            <div className="w-16 h-16 rounded grid place-items-center text-[10px]" style={{ background: "white", color: "black", fontFamily: "var(--font-bang)" }}>
              [ QR ]
            </div>
          </div>
        </div>

        {/* Reviews chalkboard with sopes polaroid */}
        <div className="relative">
          <div className="chalkboard p-6 md:p-8">
            <h3 className="text-4xl text-center mb-6" style={{ fontFamily: "var(--font-chalk)", color: "#FFD23F" }}>
              ★ Lo Que Dicen ★
            </h3>
            {[
              ["Maria S.", "Best birria in DeKalb. No contest. 🔥"],
              ["Jake T. (NIU)", "Huskie Special saved my finals week."],
              ["Sandra R.", "Teresa's tamales taste like my grandma's kitchen."],
            ].map(([who, q]) => (
              <div key={who as string} className="mb-5">
                <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.5rem", color: "#fffbe6" }}>"{q}"</p>
                <p className="text-sm mt-1" style={{ fontFamily: "var(--font-marker)", color: "#FF6B1A" }}>— {who}</p>
              </div>
            ))}
            <div className="flex items-center gap-2 justify-center mt-4">
              {[1,2,3,4,5].map((i) => <Star key={i} />)}
              <span className="ml-2" style={{ fontFamily: "var(--font-bang)", color: "var(--gold)" }}>4.9 / 5 · 312 reviews</span>
            </div>
          </div>

          {/* Polaroid */}
          <div className="absolute -bottom-8 -right-6 w-56 polaroid tilt-r hidden md:block">
            <img src={sopesTrio} alt="Teresa's sopes" className="w-full h-40 object-cover" loading="lazy" width={1152} height={896} />
            <div className="absolute bottom-2 left-0 right-0 text-center" style={{ fontFamily: "var(--font-hand)", color: "#2C1A0E", fontSize: "1.3rem" }}>
              Teresa's famous sopes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Footer ============== */
function Footer() {
  return (
    <footer className="relative">
      <Aztec />
      <div className="px-6 py-12" style={{ background: "var(--brown-deep)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="RT-38" className="w-32" width={128} height={128} />
            <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Family-owned · DeKalb County, IL.
            </p>
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>Visit</h5>
            <p className="text-sm mt-2">817 W Lincoln Hwy<br/>DeKalb, IL 60115</p>
            <p className="text-sm mt-2">🏠 779-270-2160 · 🚚 815-517-3718</p>
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>Hours</h5>
            <p className="text-sm mt-2">Mon–Sun · 10am – 9pm<br/>Truck: see schedule</p>
          </div>
        </div>
        <p className="text-center text-xs mt-10" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} RT-38 Taco Alley / Tamales Los Girasoles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


/* ============== Find Us — Taco Trail Map ============== */
function FindUsMap() {
  // SVG coordinates scale with the map, keeping the tacos locked to the yellow route on mobile and desktop.
  const runners = [0, -1.4, -2.8, -4.2, -5.6];
  const tacoTrailPath = "M 280 20 L 280 320 Q 285 360 330 372 L 780 336";
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--brown-deep) 0%, #1a0e07 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Finding Us</p>
          <h2 className="mt-2 text-5xl md:text-6xl leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            🌮 TACO ALLEY <span style={{ color: "var(--burnt)" }}>AHEAD</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base md:text-lg" style={{ color: "var(--cream)", fontFamily: "var(--font-item)" }}>
            Just follow the taco trail to the RT-38 badge. You're almost there.
          </p>
        </div>

        <div
          className="relative mx-auto rounded-3xl overflow-hidden border-4 shadow-pop-lg"
          style={{
            borderColor: "var(--gold)",
            aspectRatio: "1000 / 600",
            backgroundImage: `url(${plazaAerial})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Warm glow vignette */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 78% 56%, rgba(255,80,40,0.35), transparent 40%), linear-gradient(180deg, rgba(0,0,0,0.05), rgba(20,8,0,0.35))" }}
          />

          {/* Scaled route, moving tacos, and red-dot pin */}
          <svg aria-hidden className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path
              id="tacoTrailPath"
              d={tacoTrailPath}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="26 20"
              opacity="0.95"
            />
            <path
              d={tacoTrailPath}
              fill="none"
              stroke="rgba(255, 105, 32, 0.65)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {runners.map((delay, i) => (
              <text key={i} className="taco-runner-svg" x="0" y="0">
                🌮
                <animateMotion dur="7s" begin={`${delay}s`} repeatCount="indefinite" rotate="0">
                  <mpath href="#tacoTrailPath" />
                </animateMotion>
              </text>
            ))}
            <circle cx="780" cy="336" r="18" fill="rgba(0,0,0,0.45)" />
            <circle cx="780" cy="336" r="13" fill="var(--burnt)" stroke="var(--cream)" strokeWidth="4" />
            <circle cx="780" cy="336" r="5" fill="var(--cream)" opacity="0.9" />
          </svg>

        </div>


        {/* CTA + footer note */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://maps.google.com/?q=RT-38+Taco+Alley+DeKalb+IL"
            target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full text-xl gradient-fiesta gradient-shift text-white border-4 border-gold lift shadow-glow"
            style={{ fontFamily: "var(--font-action)", letterSpacing: "0.08em" }}
          >
            GET DIRECTIONS →
          </a>
          <p className="text-center text-sm md:text-base max-w-xl" style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>
            The chains are easy to find. The best tacos are worth a few extra steps.
          </p>
        </div>
      </div>
    </section>
  );
}




/* ============== Page ============== */
function Index() {
  return (
    <main className="min-h-screen" style={{ background: "var(--brown-deep)", color: "var(--cream)" }}>
      {/* 1. Hook */}
      <Hero />
      <Aztec />
      {/* 3. Menu */}
      <MenuBoard />
      <DiagonalBanner />
      <Aztec />
      {/* 4. Social proof */}
      <LoyaltyReviews />
      {/* 5. Who we are */}
      <FamilyStory />
      <Footer />
    </main>
  );
}



import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import logo from "@/assets/rt38-logo-clean.png";
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


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RT-38 Taco Alley × MYB Platform Mockup" },
      { name: "description", content: "Pitch mockup: RT-38 Taco Alley / Tamales Los Girasoles on the Mind Ya Biz all-in-one digital platform — online ordering, food truck tracker, loyalty, and admin dashboard." },
      { property: "og:title", content: "RT-38 Taco Alley × MYB Platform Mockup" },
      { property: "og:description", content: "Family-owned Mexican restaurant & food truck in DeKalb, IL — powered by Mind Ya Biz." },
      { property: "og:image", content: logo },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ============== Decorative atoms ============== */
const PAPEL = ["#F47B3E", "#FFD23F", "#D62828", "#FF4F8B", "#2EC4B6", "#6BBF59"];

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

      {/* Floating decor */}
      <Pepper size={70} className="absolute top-24 left-6 wiggle hidden md:block" />
      <Pepper size={50} className="absolute top-[420px] left-[4%] bob hidden lg:block" />
      <Pepper size={44} className="absolute top-[180px] right-[6%] wiggle hidden md:block" style={{ transform: "rotate(25deg)" }} />
      <Star className="absolute top-44 left-1/3 bob" />
      <Star className="absolute top-60 right-1/4 bob" color="#FF6B1A" />


      {/* Hero birria-dipping tacos — floating right of brand */}
      <img
        src={birriaDip}
        alt="Quesabirria tacos dipping in consomé"
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

          <div
            className="inline-flex items-center justify-center relative rounded-full p-3 md:p-4"
            style={{
              background: "radial-gradient(circle at 30% 25%, #FBEFD4 0%, #F5E6C8 55%, #E9D29A 100%)",
              border: "6px solid var(--burnt)",
              boxShadow:
                "0 0 0 3px var(--gold), 0 0 0 9px rgba(0,0,0,0.35), 0 18px 40px rgba(0,0,0,0.55), 0 0 60px rgba(255,107,26,0.45)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-2 rounded-full pointer-events-none"
              style={{ border: "2px dashed rgba(193,69,33,0.45)" }}
            />
            <img
              src={logo}
              alt="RT-38 Taco Alley / Tamales Los Girasoles"
              className="relative w-44 md:w-56"
              width={288}
              height={288}
              style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.35))" }}
            />
          </div>



          <p className="mt-4 text-2xl md:text-4xl text-gold" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
            El Sabor de la Tradición
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
            <a href="#order" className="px-7 py-3 rounded-full text-xl shadow-glow gradient-fiesta gradient-shift text-white border-4 border-gold lift"
              style={{ fontFamily: "var(--font-action)", letterSpacing: "0.08em" }}>
              ORDER NOW 🌮
            </a>
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
              Two homes · One familia
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
              phone="815-825-3069"
              accent="var(--burnt)"
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

        {/* Status strip */}
        <div className="mt-10 rounded-2xl border-2 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x text-sm"
          style={{ borderColor: "var(--gold)", background: "rgba(44,26,14,0.7)" }}>
          <div className="p-4 text-center">
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Restaurant</div>
            <div className="mt-1" style={{ fontFamily: "var(--font-item)" }}>10 AM – 9 PM · 815-825-3069</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Food Truck</div>
            <div className="mt-1" style={{ fontFamily: "var(--font-item)" }}>📍 NIU Campus · 815-517-3718</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--pink)", fontFamily: "var(--font-bang)" }}>Today</div>
            <div className="mt-1" style={{ fontFamily: "var(--font-item)" }}>🔥 Pastor Quesadilla $11.99</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ img, tilt, emoji, title, addr, hours, phone, accent, live }: {
  img: string; tilt: string; emoji: string; title: string; addr: string; hours: string; phone: string; accent: string; live?: boolean;
}) {
  return (
    <div className={`relative ${tilt} lift`}>
      <div className="rounded-2xl overflow-hidden border-4 shadow-pop-lg" style={{ borderColor: "var(--gold)", background: "var(--brown)" }}>
        <div className="papel-row" style={{ height: 28 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="papel-flag" style={{ height: 28, color: PAPEL[i % PAPEL.length], backgroundColor: PAPEL[i % PAPEL.length] }} />
          ))}
        </div>
        <div className="relative">
          <img src={img} alt={title} className="w-full h-72 object-cover" loading="lazy" width={1024} height={576} />
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
  { name: "Birria Ramen", price: "15.00", desc: "Slow-braised beef · ramen noodles · consomé dip", emoji: "🍜", tag: "🔥 Hot" },
  { name: "Quesabirria Tacos", price: "4.89", desc: "Crispy cheese tortilla · birria · onion · cilantro · dip", emoji: "🧀", tag: "Trending" },
  { name: "Dozen Tamales", price: "30.00", desc: "Pork, chicken, or rajas con queso · masa from scratch", emoji: "🫔", tag: "Family" },
  { name: "Churro Cheesecake", price: "6.50", desc: "Cinnamon sugar · cream cheese · caramel drizzle", emoji: "🍰", tag: "Sweet" },
  { name: "Huskie Special", price: "15.99", desc: "Two tacos · burrito · drink · NIU students only", emoji: "🐺", tag: "NIU" },
];

function OnlineOrdering() {
  const [active, setActive] = useState("Tacos");
  return (
    <section id="order" className="relative py-20 px-6" style={{ background: "linear-gradient(180deg, #2C1A0E 0%, #1A0E07 100%)" }}>
      {/* Trompo pillar header */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center mb-12">
        <div className="relative mx-auto">
          <div className="absolute inset-0 -inset-x-4 rounded-[200px] glow-pulse" style={{ background: "radial-gradient(ellipse, rgba(255,107,26,0.5), transparent 70%)" }} />
          <div className="relative rounded-[140px] overflow-hidden border-4" style={{ borderColor: "var(--gold)", height: 360, width: 220 }}>
            <img src={trompo} alt="Al pastor trompo" className="w-full h-full object-cover" loading="lazy" width={704} height={1152} />
          </div>
          <Star className="absolute -top-3 -right-3 spin-slow" />
          <Star className="absolute -bottom-3 -left-3 spin-slow" color="#FF4F8B" />
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
          <div className="mt-4 p-3 rounded-lg text-center" style={{ background: "var(--gold)", color: "var(--brown)" }}>
            <div style={{ fontFamily: "var(--font-bang)" }}>🎁 First order</div>
            <div className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>10% OFF</div>
          </div>
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

          <div className="grid sm:grid-cols-2 gap-5">
            {ITEMS.map((it, i) => (
              <ItemCard key={it.name} item={it} delay={i * 0.08} oversized={it.name === "Birria Ramen"} niu={it.name === "Huskie Special"} />
            ))}

            {/* Oversized torn-paper camarones card spanning 2 cols */}
            <div className="sm:col-span-2 relative rounded-2xl overflow-hidden border-4 lift" style={{ borderColor: "var(--gold)" }}>
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

/* ============== Locations expanded + Food Truck Tracker ============== */
function LocationsSection() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--brown-deep)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Find Us</p>
          <h2 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            LOCATIONS & <span style={{ color: "var(--gold)" }}>TRUCK TRACKER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map illustration */}
          <div className="relative rounded-2xl overflow-hidden border-4 p-6" style={{ borderColor: "var(--gold)", background: "linear-gradient(135deg, #1a3c2a, #0d2410)" }}>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "linear-gradient(rgba(255,210,63,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,63,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="relative h-80 flex items-center justify-center">
              {/* Pins */}
              <div className="absolute" style={{ top: "30%", left: "25%" }}>
                <div className="w-6 h-6 rounded-full pulse-hot" style={{ background: "var(--burnt)" }} />
                <div className="text-xs mt-1" style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>Restaurant</div>
              </div>
              <div className="absolute" style={{ top: "55%", right: "20%" }}>
                <div className="w-6 h-6 rounded-full pulse-dot" style={{ background: "var(--lime)" }} />
                <div className="text-xs mt-1" style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>🚚 Truck · NIU</div>
              </div>
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-40">
                <path d="M0,200 Q150,150 200,180 T400,160" stroke="#FFD23F" strokeWidth="3" fill="none" strokeDasharray="6 6" />
                <path d="M100,0 L100,300" stroke="#F47B3E" strokeWidth="2" opacity="0.4" />
                <path d="M300,0 L300,300" stroke="#F47B3E" strokeWidth="2" opacity="0.4" />
              </svg>
              <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded" style={{ background: "var(--brown)", color: "var(--gold)", fontFamily: "var(--font-bang)" }}>
                DeKalb County, IL
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-2xl border-4 p-6 space-y-4" style={{ borderColor: "var(--gold)", background: "var(--brown)" }}>
            <h3 className="text-3xl flex items-center gap-2" style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>
              🚚 Food Truck This Week
            </h3>
            {[
              ["MON", "NIU Campus · MLK Commons", "11a–8p", true],
              ["TUE", "Hopkins Park · DeKalb", "11a–7p"],
              ["WED", "Sycamore Farmers Market", "3p–8p"],
              ["THU", "NIU Campus · Engineering", "11a–8p"],
              ["FRI", "Downtown DeKalb · Lincoln Hwy", "5p–10p"],
              ["SAT", "Private Booking 🎉", "—"],
            ].map(([d, loc, time, today]: any) => (
              <div key={d as string} className={`flex items-center justify-between p-3 rounded-lg ${today ? "border-2" : ""}`}
                style={{ background: today ? "var(--brown-deep)" : "transparent", borderColor: today ? "var(--burnt)" : undefined }}>
                <div className="flex items-center gap-3">
                  <span className="w-10 text-center" style={{ fontFamily: "var(--font-bang)", color: "var(--burnt)" }}>{d}</span>
                  <span style={{ fontFamily: "var(--font-item)" }}>{loc}</span>
                  {today && <span className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: "var(--lime)", color: "#0d2410", fontFamily: "var(--font-bang)" }}>TODAY</span>}
                </div>
                <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{time}</span>
              </div>
            ))}
            <div className="pt-3 mt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--muted)" }}>
              <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>Book the truck for private events</div>
              <a href="tel:815-517-3718" className="px-4 py-2 rounded-full gradient-fiesta text-white text-sm" style={{ fontFamily: "var(--font-action)" }}>
                CALL 815-517-3718
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Menu board (chalkboard) ============== */
function MenuBoard() {
  const cats = [
    { name: "Appetizers", items: [["Chips & Queso", "5.99"], ["Guac & Chips", "7.50"], ["Elote en Vaso", "5.00"]] },
    { name: "Dinners", items: [["Carne Asada Plate", "16.99"], ["Camarones a la Diabla", "16.50"], ["Pollo Asado", "14.99"]] },
    { name: "Favorites", items: [["Quesabirria (3)", "14.67"], ["Birria Ramen", "15.00"], ["Pastor Quesadilla", "11.99"]] },
    { name: "NIU Specials", items: [["Huskie Special", "15.99"], ["Late Night Burrito", "9.99"], ["Student Combo", "10.50"]] },
    { name: "Tamales Los Girasoles", items: [["Dozen Pork", "30.00"], ["Dozen Chicken", "30.00"], ["Rajas con Queso", "30.00"]] },
    { name: "Sides & Bebidas", items: [["Rice & Beans", "3.50"], ["Horchata", "3.99"], ["Jarritos", "2.99"]] },
  ];
  return (
    <section id="menu" className="py-20 px-6" style={{ background: "var(--brown)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-center mb-10">
          {/* Shield with sope photo */}
          <div className="relative mx-auto">
            <div className="relative shield w-52 h-60 mx-auto overflow-hidden border-4" style={{ borderColor: "var(--gold)" }}>
              <img src={sope} alt="Sope" className="w-full h-full object-cover" loading="lazy" width={896} height={896} />
            </div>
          </div>

          <div>
            <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>La Carta</p>
            <h2 className="text-6xl md:text-7xl" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
              THE FULL <span style={{ color: "var(--gold)" }}>MENU</span>
            </h2>
            <p className="mt-2 text-xl" style={{ fontFamily: "var(--font-hand)", color: "var(--cream)" }}>
              Hand-pressed masa · slow-braised meats · salsas made fresh every morning.
            </p>
          </div>
        </div>

        <div className="chalkboard p-6 md:p-10 relative">
          <Star className="absolute -top-4 -left-4" color="#FFD23F" />
          <Star className="absolute -top-4 -right-4" color="#FFD23F" />

          <h3 className="text-center text-5xl md:text-6xl mb-8" style={{ fontFamily: "var(--font-chalk)", color: "#FFD23F" }}>
            ~ La Pizarra ~
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cats.map((cat) => (
              <div key={cat.name}>
                <h4 className="text-2xl mb-3 pb-1 border-b-2 border-dashed" style={{ fontFamily: "var(--font-marker)", color: "#FFD23F", borderColor: "rgba(255,210,63,0.4)" }}>
                  {cat.name}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map(([n, p]) => (
                    <li key={n} className="flex justify-between items-baseline">
                      <span style={{ fontFamily: "var(--font-chalk)", fontSize: "1.2rem" }}>{n}</span>
                      <span className="flex-1 mx-2 border-b border-dotted opacity-40" />
                      <span style={{ fontFamily: "var(--font-bang)", color: "#FF6B1A" }}>${p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center" style={{ fontFamily: "var(--font-hand)", fontSize: "1.4rem", color: "rgba(255,255,255,0.7)" }}>
            ~ ask about today's especial ~
          </p>
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
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="mx-auto inline-block text-5xl" aria-hidden>✦</div>
        <p className="text-sm tracking-[0.4em] uppercase mt-4" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Nuestra Familia</p>
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
            {[["🥉 Amigo", "0+"], ["🥈 Familia", "10+"], ["🥇 Patrón", "25+"]].map(([t, c]) => (
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

/* ============== Admin (MYB pitch) ============== */
function AdminDashboard() {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, var(--brown-deep), #0d0805)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Mind Ya Biz · Back of House</p>
          <h2 className="text-5xl md:text-6xl mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            ONE DASHBOARD. <span style={{ color: "var(--burnt)" }}>EVERYTHING.</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Orders, revenue, food truck location, marketing — Teresa runs both spots from her phone.
          </p>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden shadow-pop-lg" style={{ borderColor: "var(--gold)", background: "#0f0a06" }}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "var(--muted)", background: "#1a110a" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md grid place-items-center text-xs" style={{ background: "var(--gradient-fiesta)", fontFamily: "var(--font-bang)", color: "white" }}>MYB</div>
              <span style={{ fontFamily: "var(--font-item)", color: "var(--cream)" }}>RT-38 Taco Alley · Dashboard</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <ToggleRow label="🏠 Restaurant" on />
              <ToggleRow label="🚚 Truck @ NIU" on />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0 divide-x" style={{ borderColor: "var(--muted)" }}>
            {/* Live orders */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 style={{ fontFamily: "var(--font-marker)", color: "var(--gold)", fontSize: "1.4rem" }}>🔔 Live Orders</h4>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--lime)", color: "#0d2410", fontFamily: "var(--font-bang)" }}>7 ACTIVE</span>
              </div>
              <div className="space-y-2">
                {[
                  ["#1284", "3× Quesabirria · 1× Horchata", "$18.66", "Pickup · 4 min", "var(--burnt)"],
                  ["#1285", "Huskie Special × 2", "$31.98", "NIU Truck · ready", "var(--lime)"],
                  ["#1286", "Dozen Pork Tamales", "$30.00", "Pickup · 12 min", "var(--gold)"],
                  ["#1287", "Birria Ramen · Churro Cheesecake", "$21.50", "Delivery · driver assigned", "var(--pink)"],
                ].map(([id, items, total, status, c]) => (
                  <div key={id as string} className="p-3 rounded-lg border flex items-center justify-between" style={{ borderColor: "var(--muted)", background: "#160e08" }}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span style={{ fontFamily: "var(--font-bang)", color: c as string }}>{id}</span>
                        <span className="text-sm" style={{ color: "var(--cream)" }}>{items}</span>
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{status}</div>
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>{total}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="p-5 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Today" value="$2,847" sub="+18% vs yest" color="var(--burnt)" />
                <Stat label="Orders" value="142" sub="71 restaurant · 71 truck" color="var(--gold)" />
                <Stat label="Avg ticket" value="$20.05" sub="+$1.20" color="var(--lime)" />
                <Stat label="Loyalty" value="892" sub="active members" color="var(--pink)" />
              </div>

              <div className="p-4 rounded-lg border" style={{ borderColor: "var(--muted)", background: "#160e08" }}>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--burnt)", fontFamily: "var(--font-bang)" }}>Top items today</div>
                {[["🌮 Street Taco", 84], ["🧀 Quesabirria", 52], ["🍜 Birria Ramen", 38], ["🫔 Tamales (dozen)", 12]].map(([n, v]) => (
                  <div key={n as string} className="flex items-center gap-3 mb-2 text-sm">
                    <span className="w-40" style={{ color: "var(--cream)", fontFamily: "var(--font-item)" }}>{n}</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
                      <div className="h-full gradient-fiesta" style={{ width: `${(v as number) / 84 * 100}%` }} />
                    </div>
                    <span className="w-8 text-right" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>{v}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg border" style={{ borderColor: "var(--muted)", background: "#160e08" }}>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--pink)", fontFamily: "var(--font-bang)" }}>📣 Marketing blast</div>
                <textarea
                  readOnly
                  className="w-full p-2 rounded text-sm resize-none"
                  rows={2}
                  style={{ background: "#0a0604", color: "var(--cream)", border: "1px solid var(--muted)", fontFamily: "var(--font-hand)", fontSize: "1.1rem" }}
                  defaultValue="🌮 Truck at NIU 'til 8pm! Show this text for free chips & queso."
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>SMS · 892 members · Loyalty list</span>
                  <button className="px-3 py-1 rounded-full text-xs gradient-fiesta text-white" style={{ fontFamily: "var(--font-action)" }}>SEND →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleRow({ label, on }: { label: string; on?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "var(--cream)" }}>
      {label}
      <span className={`w-8 h-4 rounded-full relative ${on ? "bg-[var(--lime)]" : "bg-gray-500"}`}>
        <span className={`absolute top-0.5 ${on ? "right-0.5" : "left-0.5"} w-3 h-3 bg-white rounded-full`} />
      </span>
    </span>
  );
}

function Stat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="p-4 rounded-lg border" style={{ borderColor: "var(--muted)", background: "#160e08" }}>
      <div className="text-[10px] uppercase tracking-widest" style={{ color, fontFamily: "var(--font-bang)" }}>{label}</div>
      <div className="text-3xl mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>{value}</div>
      <div className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{sub}</div>
    </div>
  );
}

/* ============== Footer + badge ============== */
function Footer() {
  return (
    <footer className="relative">
      <Aztec />
      <div className="px-6 py-12" style={{ background: "var(--brown-deep)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="RT-38" className="w-32" width={128} height={128} />
            <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Family-owned · DeKalb County, IL · Powered by Mind Ya Biz.
            </p>
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>Visit</h5>
            <p className="text-sm mt-2">817 W Lincoln Hwy<br/>DeKalb, IL 60115</p>
            <p className="text-sm mt-2">🏠 815-825-3069 · 🚚 815-517-3718</p>
          </div>
          <div>
            <h5 style={{ fontFamily: "var(--font-marker)", color: "var(--gold)" }}>Hours</h5>
            <p className="text-sm mt-2">Mon–Sun · 10am – 9pm<br/>Truck: see schedule</p>
          </div>
        </div>
        <p className="text-center text-xs mt-10" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} RT-38 Taco Alley / Tamales Los Girasoles · MYB Pitch Mockup
        </p>
      </div>
    </footer>
  );
}

function MybBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-lg border-2 shadow-glow"
      style={{ background: "var(--brown)", borderColor: "var(--gold)", fontFamily: "var(--font-display)", color: "var(--gold)", letterSpacing: "0.08em" }}>
      MIND YA BIZ × MOCKUP
    </div>
  );
}

/* ============== Find Us — Taco Trail Map ============== */
function FindUsMap() {
  // Path matches the offset-path in styles.css (viewBox 1000x600)
  // Trail follows the road down (left), turns right into the parking lot, and arrives at Taco Alley (right building).
  const trail = [
    { d: "12%", left: "32%", top: "12%" },
    { d: "28%", left: "33%", top: "38%" },
    { d: "46%", left: "36%", top: "66%" },
    { d: "64%", left: "55%", top: "72%" },
    { d: "80%", left: "72%", top: "56%" },
  ];
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--brown-deep) 0%, #1a0e07 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-bang)" }}>Finding Us</p>
          <h2 className="mt-2 text-5xl md:text-6xl leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            🌮 TACO ALLEY <span style={{ color: "var(--burnt)" }}>AHEAD</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base md:text-lg" style={{ color: "var(--cream)", fontFamily: "var(--font-item)" }}>
            Just follow the moving taco and the red pin. You're almost there.
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
            style={{ background: "radial-gradient(ellipse at 82% 45%, rgba(255,120,40,0.35), transparent 45%), linear-gradient(180deg, rgba(0,0,0,0.05), rgba(20,8,0,0.35))" }}
          />

          {/* Trail of small tacos */}
          {trail.map((t, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute text-2xl md:text-3xl select-none"
              style={{
                left: t.left,
                top: t.top,
                animation: `trail-pop 9s linear ${(i + 1) * 0.9}s infinite`,
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.5))",
              }}
            >
              🌮
            </span>
          ))}

          {/* Moving taco mascot */}
          <div className="taco-runner" aria-hidden>
            <span>🌮</span>
          </div>

          {/* Steam wisps near Taco Alley */}
          {[0, 0.6, 1.2].map((delay, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute rounded-full"
              style={{
                left: `${14 + i * 3}%`,
                top: "70%",
                width: 18,
                height: 18,
                background: "radial-gradient(circle, rgba(255,255,255,0.85), rgba(255,255,255,0) 70%)",
                animation: `steam-rise 2.4s ease-out ${delay}s infinite`,
              }}
            />
          ))}

          {/* Red pin over Taco Alley (upper-right) */}
          <div className="absolute" style={{ left: "18%", top: "72%" }}>
            {/* Pulse rings */}
            <span aria-hidden className="absolute rounded-full" style={{
              left: 0, top: 0, width: 36, height: 36,
              background: "rgba(214,40,40,0.5)",
              animation: "pin-pulse-ring 1.8s ease-out infinite",
            }} />
            <span aria-hidden className="absolute rounded-full" style={{
              left: 0, top: 0, width: 36, height: 36,
              background: "rgba(214,40,40,0.4)",
              animation: "pin-pulse-ring 1.8s ease-out 0.9s infinite",
            }} />
            {/* Pin */}
            <svg
              width="44" height="56" viewBox="0 0 44 56"
              style={{
                position: "absolute", left: 0, top: 0,
                transformOrigin: "50% 100%",
                animation: "pin-bob 1.6s ease-in-out infinite",
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(255,60,40,0.7))",
              }}
              aria-hidden
            >
              <path d="M22 0 C9.85 0 0 9.85 0 22 c0 16 22 34 22 34 s22-18 22-34 C44 9.85 34.15 0 22 0 z"
                fill="#D62828" stroke="#fff8e7" strokeWidth="2.5" />
              <circle cx="22" cy="21" r="7" fill="#fff8e7" />
            </svg>
            {/* Label */}
            <span
              className="absolute whitespace-nowrap px-2 py-1 rounded-md text-xs font-bold"
              style={{
                left: 50, top: -8,
                background: "var(--cream)", color: "var(--chili)",
                fontFamily: "var(--font-bang)", letterSpacing: "0.06em",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
            >
              RT-38 TACO ALLEY
            </span>
          </div>
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
      <Hero />
      <Aztec />
      <OnlineOrdering />
      <DiagonalBanner />
      <LocationsSection />
      <FindUsMap />
      <Aztec />
      <MenuBoard />
      <FamilyStory />
      <LoyaltyReviews />
      <AdminDashboard />
      <Footer />
      <MybBadge />
    </main>
  );
}


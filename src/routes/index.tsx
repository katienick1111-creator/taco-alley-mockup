import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/rt38-logo.png";
import tacoSpread from "@/assets/taco-spread.jpg";
import birria from "@/assets/birria.jpg";
import foodTruck from "@/assets/food-truck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RT-38 Taco Alley & Tamales Los Girasoles — DeKalb, IL" },
      { name: "description", content: "Family-owned Mexican kitchen by Teresa & Efraen Garcia. Two locations + a food truck slinging quesabirrias, tamales, al pastor de trompo and more in DeKalb County, Illinois." },
      { property: "og:title", content: "RT-38 Taco Alley & Tamales Los Girasoles" },
      { property: "og:description", content: "Quesabirrias. Tamales. Al pastor de trompo. Hecho con amor in DeKalb, IL." },
    ],
  }),
  component: Index,
});

/* ---------- Decorative bits ---------- */

const Papel = () => (
  <div className="papel-row" aria-hidden>
    {Array.from({ length: 16 }).map((_, i) => {
      const colors = ["text-[var(--hot)]", "text-[var(--gold)]", "text-[var(--chili)]", "text-[var(--lime)]", "text-[var(--pink)]", "text-[var(--teal)]"];
      return <div key={i} className={`papel-flag ${colors[i % colors.length]}`} />;
    })}
  </div>
);

const AztecBar = () => <div className="aztec-border w-full" aria-hidden />;

const Sunflower = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
    {Array.from({ length: 12 }).map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="20"
        rx="8"
        ry="18"
        fill="#FFD23F"
        stroke="#2C1A0E"
        strokeWidth="2"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="14" fill="#2C1A0E" />
    <circle cx="50" cy="50" r="10" fill="#F47B3E" />
  </svg>
);

const Star = ({ className = "" }: { className?: string }) => (
  <div className={`starburst bg-[var(--gold)] ${className}`} />
);

const Pepper = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 100" className={className} aria-hidden>
    <path d="M30 95 C 10 80, 5 50, 20 25 C 28 12, 38 12, 42 22 C 50 45, 48 80, 30 95 Z" fill="#D62828" stroke="#2C1A0E" strokeWidth="3" />
    <path d="M20 25 C 22 12, 30 8, 36 10 L 38 22" fill="#6BBF59" stroke="#2C1A0E" strokeWidth="3" />
  </svg>
);

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brown)] text-[var(--cream)] pt-6">
      <Papel />
      <div className="relative px-6 md:px-12 py-16 md:py-24">
        {/* deco */}
        <Sunflower size={140} className="absolute -top-6 -left-10 spin-slow opacity-90" />
        <Sunflower size={110} className="absolute bottom-10 right-4 wiggle opacity-90" />
        <Pepper className="absolute top-20 right-20 w-16 wiggle hidden md:block" />
        <Star className="absolute top-10 right-1/3 w-12 h-12 hidden md:block" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="font-[family-name:var(--font-script)] text-[var(--gold)] text-2xl md:text-3xl mb-2">
              ¡Bienvenidos a la familia!
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-[0.95] text-[var(--gold)] drop-shadow-[4px_4px_0_var(--chili)]">
              TACO ALLEY
            </h1>
            <h2 className="font-[family-name:var(--font-action)] text-3xl md:text-5xl text-[var(--hot)] mt-2 text-stroke">
              & TAMALES LOS GIRASOLES
            </h2>
            <p className="font-[family-name:var(--font-hand)] text-2xl md:text-3xl text-[var(--cream)]/90 mt-6 max-w-lg">
              Two kitchens, one food truck, and a whole lot of <span className="text-[var(--gold)] font-bold">birria</span>.
              Hecho con amor by Teresa & Efraen Garcia in DeKalb County, IL since 2023.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="bg-[var(--hot)] text-white font-[family-name:var(--font-bang)] tracking-wider text-2xl px-8 py-4 rounded-xl shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-[var(--brown)]">
                🌮 SEE THE MENU
              </a>
              <a href="#locations" className="bg-[var(--gold)] text-[var(--brown)] font-[family-name:var(--font-bang)] tracking-wider text-2xl px-8 py-4 rounded-xl shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-[var(--brown)]">
                📍 FIND US
              </a>
            </div>
            <div className="mt-8 flex gap-6 font-[family-name:var(--font-marker)] text-[var(--cream)]/80 text-sm uppercase">
              <span>★ Since 2023</span>
              <span>★ 2 Locations</span>
              <span>★ 1 Food Truck</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--gold)] rounded-3xl rotate-3" />
            <div className="absolute -inset-4 bg-[var(--hot)] rounded-3xl -rotate-2" />
            <img
              src={tacoSpread}
              alt="Spread of tacos, tamales, and salsas at RT-38 Taco Alley"
              width={1920}
              height={1080}
              className="relative rounded-2xl border-8 border-[var(--brown)] shadow-pop-lg"
            />
            <div className="absolute -top-6 -right-6 bg-[var(--chili)] text-white font-[family-name:var(--font-bang)] text-xl px-4 py-2 rounded-full border-4 border-[var(--brown)] -rotate-12 shadow-pop">
              ¡MUY RICO!
            </div>
            <img src={logo} alt="" aria-hidden className="absolute -bottom-10 -left-10 w-28 h-28 bg-white rounded-full border-4 border-[var(--brown)] shadow-pop wiggle" />
          </div>
        </div>
      </div>
      <AztecBar />
    </section>
  );
}

function Specials() {
  const items = [
    { name: "Quesabirrias", desc: "Birria + cheese, dipped in consomé", price: "$15", color: "var(--hot)", emoji: "🧀" },
    { name: "Birria Ramen", desc: "Two quesabirrias swimming in broth", price: "$15", color: "var(--chili)", emoji: "🍜" },
    { name: "Tamales", desc: "Red or green. Dozen for $30", price: "$3.50", color: "var(--lime)", emoji: "🌽" },
    { name: "Al Pastor de Trompo", desc: "Cut fresh off the spit", price: "$3.99", color: "var(--gold)", emoji: "🔥" },
    { name: "Empanadas", desc: "Potato or chicken, golden fried", price: "$3.99", color: "var(--pink)", emoji: "🥟" },
    { name: "Green Leaf Tamales", desc: "Pork, wrapped in banana leaf", price: "ask!", color: "var(--teal)", emoji: "🌿" },
  ];
  return (
    <section id="menu" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-script)] text-[var(--chili)] text-2xl">Lo que cocinamos hoy</p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-[var(--brown)] scribble-underline inline-block">
            OUR SPECIALS
          </h2>
        </div>

        <div className="chalkboard p-8 md:p-12 rotate-[-0.5deg]">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[var(--gold)] text-3xl">✺</span>
            <h3 className="font-[family-name:var(--font-chalk)] text-4xl md:text-5xl text-white">Pinned to the Sidewalk Sign</h3>
            <span className="text-[var(--gold)] text-3xl">✺</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {items.map((it) => (
              <div key={it.name} className="flex items-start gap-4 border-b border-dashed border-white/30 pb-4">
                <span className="text-3xl">{it.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-[family-name:var(--font-item)] text-2xl md:text-3xl" style={{ color: it.color }}>
                      {it.name}
                    </h4>
                    <span className="font-[family-name:var(--font-marker)] text-[var(--gold)] text-xl">{it.price}</span>
                  </div>
                  <p className="font-[family-name:var(--font-hand)] text-xl text-white/80">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 font-[family-name:var(--font-marker)] text-[var(--gold)] text-xl">
            ★ Meats: Steak · Chicken · Al Pastor · Ground Beef · Barbacoa · Cabeza · Chicharrones ★
          </p>
        </div>
      </div>
    </section>
  );
}

function Favorites() {
  const cards = [
    { tag: "FAVORITE", name: "Birria Pizza", price: "$15.99", desc: "Two large tortillas with birria + cheese. Onion, cilantro, consomé on the side.", bg: "var(--hot)" },
    { tag: "STUDENT", name: "Huskie Special", price: "$15.99", desc: "Any 3 of: taco, burrito, enchilada, empanada, tamale. Rice & beans included.", bg: "var(--gold)" },
    { tag: "FAMILY", name: "Dozen Tamales", price: "$30", desc: "Red or green. The whole table eats happy.", bg: "var(--lime)" },
    { tag: "FUN", name: "Walking Taco", price: "$5.49", desc: "A bag of Doritos, your meat, lettuce, tomato, cheese, sour cream.", bg: "var(--pink)" },
  ];

  return (
    <section className="relative py-20 px-6 bg-[var(--gold)]/40">
      <AztecBar />
      <div className="max-w-6xl mx-auto pt-12">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-marker)] text-[var(--chili)] text-xl tracking-widest">★ CROWD FAVORITES ★</p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--brown)] mt-2">
            EAT THE HITS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.name}
              className="bg-white border-4 border-[var(--brown)] rounded-2xl p-6 shadow-pop relative hover:rotate-1 transition-transform"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              <span
                className="absolute -top-4 -left-4 font-[family-name:var(--font-bang)] text-white text-sm px-3 py-1 rounded-full border-2 border-[var(--brown)]"
                style={{ background: c.bg }}
              >
                {c.tag}
              </span>
              <h3 className="font-[family-name:var(--font-item)] text-2xl text-[var(--brown)]">{c.name}</h3>
              <p className="font-[family-name:var(--font-action)] text-3xl text-[var(--hot)] mt-1">{c.price}</p>
              <p className="font-[family-name:var(--font-hand)] text-xl text-[var(--brown)]/80 mt-3">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={birria}
            alt="Quesabirria being dipped in red consomé"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-2xl border-8 border-[var(--brown)] shadow-pop-lg rotate-[-2deg]"
          />
          <div>
            <p className="font-[family-name:var(--font-script)] text-[var(--chili)] text-3xl">El famoso…</p>
            <h3 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--brown)] leading-none">DIP. BITE. REPEAT.</h3>
            <p className="font-[family-name:var(--font-hand)] text-2xl text-[var(--brown)]/80 mt-4">
              Our birria is slow-stewed every morning, the consomé built layer by layer. You'll be back. Everyone is.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              {["#Birria", "#Quesabirrias", "#Tamales", "#AlPastor", "#DeKalb"].map((t) => (
                <span key={t} className="font-[family-name:var(--font-bang)] bg-[var(--brown)] text-[var(--gold)] px-4 py-2 rounded-full text-lg tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const spots = [
    { name: "RT-38 Brick & Mortar #1", line1: "Main Kitchen · DeKalb, IL", hours: "Tue–Sun · 11a–9p", color: "var(--hot)", icon: "🏪" },
    { name: "RT-38 Brick & Mortar #2", line1: "Sycamore Side · DeKalb County", hours: "Wed–Sun · 11a–9p", color: "var(--chili)", icon: "🏠" },
    { name: "The Food Truck", line1: "Wherever the people are", hours: "Catch us on Facebook!", color: "var(--gold)", icon: "🚚" },
  ];

  return (
    <section id="locations" className="relative py-20 px-6 bg-[var(--brown)] text-[var(--cream)]">
      <Sunflower size={120} className="absolute top-10 right-10 spin-slow opacity-30" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-script)] text-[var(--gold)] text-2xl">Three ways to find us</p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-[var(--gold)]">
            COME SAY HOLA
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spots.map((s) => (
            <div key={s.name} className="bg-[var(--cream)] text-[var(--brown)] rounded-2xl p-6 border-4 border-[var(--gold)] shadow-pop-lg relative">
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="font-[family-name:var(--font-item)] text-2xl" style={{ color: s.color }}>{s.name}</h3>
              <p className="font-[family-name:var(--font-hand)] text-2xl mt-2">{s.line1}</p>
              <p className="font-[family-name:var(--font-marker)] text-lg mt-3 text-[var(--brown)]/70">{s.hours}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 relative rounded-3xl overflow-hidden border-8 border-[var(--gold)] shadow-pop-lg">
          <img src={foodTruck} alt="The RT-38 food truck" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brown)]/90 via-[var(--brown)]/40 to-transparent flex items-end p-8">
            <div>
              <p className="font-[family-name:var(--font-script)] text-[var(--gold)] text-2xl">¡Now serving!</p>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--cream)]">THE TRUCK IS ROLLING</h3>
              <p className="font-[family-name:var(--font-hand)] text-2xl text-[var(--cream)]/90 mt-2 max-w-xl">
                Festivals, NIU campus drops, private parties — we bring the trompo to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MybPitch() {
  const features = [
    { title: "One Menu, Three Locations", desc: "Edit the birria price once. Updates the website, the truck's menu board, and online ordering in seconds.", icon: "📋", color: "var(--hot)" },
    { title: "Online Ordering + Pickup", desc: "Huskies place orders from their phone. You get a ticket. They skip the line. Everybody wins.", icon: "📱", color: "var(--gold)" },
    { title: "Loyalty in Spanish & English", desc: "Stamp cards reborn. Every 10th taco free, tracked automatically. Built for la familia.", icon: "❤️", color: "var(--pink)" },
    { title: "Food Truck GPS", desc: "Live map shows wherever the truck is parked today. Customers find you. You don't lift a finger.", icon: "📍", color: "var(--lime)" },
    { title: "Catering Inquiries", desc: "One form. One inbox. Dozens of tamales sold before the dough is even mixed.", icon: "🎉", color: "var(--chili)" },
    { title: "Reviews on Autopilot", desc: "After every order, customers get a friendly nudge to leave a review. Your star rating climbs.", icon: "⭐", color: "var(--teal)" },
  ];

  return (
    <section className="relative py-20 px-6 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-[family-name:var(--font-marker)] bg-[var(--brown)] text-[var(--gold)] px-4 py-2 rounded-full text-lg tracking-widest">
            PRESENTED BY MIND YA BIZ
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--brown)] mt-6 leading-tight">
            ONE PLATFORM,
            <br />
            <span className="text-[var(--hot)] drop-shadow-[3px_3px_0_var(--gold)]">ALL YOUR HUSTLE.</span>
          </h2>
          <p className="font-[family-name:var(--font-hand)] text-2xl md:text-3xl text-[var(--brown)]/80 mt-4 max-w-3xl mx-auto">
            Teresa & Efraen run two restaurants and a food truck. MYB makes that feel like running <em>one</em>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white border-4 border-[var(--brown)] rounded-2xl p-6 shadow-pop hover:-translate-y-1 transition-transform"
              style={{ transform: `rotate(${(i % 3 - 1) * 0.6}deg)` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl border-2 border-[var(--brown)] mb-4"
                style={{ background: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-item)] text-2xl text-[var(--brown)]">{f.title}</h3>
              <p className="font-[family-name:var(--font-hand)] text-xl text-[var(--brown)]/80 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 bg-[var(--brown)] rounded-3xl p-4 md:p-6 border-4 border-[var(--brown)] shadow-pop-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[var(--chili)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--gold)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--lime)]" />
            <span className="ml-3 font-[family-name:var(--font-marker)] text-[var(--cream)]/70 text-sm">myb.app / rt-38-taco-alley / dashboard</span>
          </div>
          <div className="bg-[var(--cream)] rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <p className="font-[family-name:var(--font-hand)] text-2xl text-[var(--brown)]/60">Today, Tuesday</p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--brown)]">Buenos días, Teresa 🌻</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="font-[family-name:var(--font-bang)] bg-[var(--lime)] text-[var(--brown)] px-3 py-1 rounded-full border-2 border-[var(--brown)]">Truck: Live</span>
                <span className="font-[family-name:var(--font-bang)] bg-[var(--gold)] text-[var(--brown)] px-3 py-1 rounded-full border-2 border-[var(--brown)]">Store #1: Open</span>
                <span className="font-[family-name:var(--font-bang)] bg-[var(--hot)] text-white px-3 py-1 rounded-full border-2 border-[var(--brown)]">Store #2: Open</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Orders today", val: "147", c: "var(--hot)" },
                { label: "Revenue", val: "$2,318", c: "var(--lime)" },
                { label: "Tamales sold", val: "94", c: "var(--gold)" },
                { label: "New reviews", val: "★ 12", c: "var(--pink)" },
              ].map((k) => (
                <div key={k.label} className="rounded-xl p-4 border-2 border-[var(--brown)]" style={{ background: k.c }}>
                  <p className="font-[family-name:var(--font-marker)] text-[var(--brown)] text-sm uppercase tracking-wider">{k.label}</p>
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--brown)] mt-1">{k.val}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-[var(--brown)] p-4 bg-white">
                <h4 className="font-[family-name:var(--font-item)] text-xl text-[var(--brown)] mb-3">🔥 Top sellers this week</h4>
                <ul className="space-y-2 font-[family-name:var(--font-hand)] text-xl text-[var(--brown)]">
                  {[
                    ["Quesabirrias Tacos", 86],
                    ["Birria Ramen", 71],
                    ["Huskie Special", 58],
                    ["Tamales (red)", 44],
                  ].map(([n, c]) => (
                    <li key={n as string} className="flex justify-between border-b border-dashed border-[var(--brown)]/30 pb-1">
                      <span>{n}</span>
                      <span className="text-[var(--hot)] font-bold">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-[var(--brown)] p-4 bg-white">
                <h4 className="font-[family-name:var(--font-item)] text-xl text-[var(--brown)] mb-3">🚚 Truck schedule</h4>
                <ul className="space-y-2 font-[family-name:var(--font-hand)] text-xl text-[var(--brown)]">
                  {[
                    ["Tue", "NIU Campus · 11a–2p"],
                    ["Wed", "Sycamore Farmer's Market · 4p–8p"],
                    ["Fri", "Egyptian Theatre Event · 5p–10p"],
                    ["Sat", "Private catering · booked"],
                  ].map(([d, w]) => (
                    <li key={d as string} className="flex gap-3">
                      <span className="font-[family-name:var(--font-marker)] text-[var(--chili)] w-12">{d}</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <a href="#" className="inline-block bg-[var(--chili)] text-white font-[family-name:var(--font-bang)] tracking-wider text-3xl px-10 py-5 rounded-2xl shadow-pop-lg border-4 border-[var(--brown)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            🌶️  BOOK THE MYB DEMO
          </a>
          <p className="font-[family-name:var(--font-hand)] text-2xl text-[var(--brown)]/70 mt-4">
            30 minutes. We'll wire it up for RT-38 live.
          </p>
        </div>
      </div>
    </section>
  );
}

function FamilyStory() {
  return (
    <section className="relative py-20 px-6 bg-[var(--hot)] text-[var(--brown)] overflow-hidden">
      <Pepper className="absolute -left-4 top-10 w-24 wiggle" />
      <Pepper className="absolute right-10 bottom-10 w-20 wiggle" />
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="font-[family-name:var(--font-script)] text-[var(--brown)] text-3xl">La Familia García</p>
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--cream)] mt-2 drop-shadow-[3px_3px_0_var(--brown)]">
          BUILT BY HAND. SHARED WITH HEART.
        </h2>
        <p className="font-[family-name:var(--font-hand)] text-2xl md:text-3xl text-[var(--brown)] mt-6 leading-relaxed">
          Teresa and Efraen opened RT-38 Taco Alley in 2023. The tamales came from Teresa's grandmother's recipe.
          The al pastor trompo came from Efraen stubbornly refusing to do it any other way. The food truck came because
          DeKalb County kept asking. <span className="font-[family-name:var(--font-marker)] text-[var(--chili)]">¡Gracias por la confianza!</span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--brown)] text-[var(--cream)] pt-2">
      <Papel />
      <div className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="RT-38 Taco Alley logo" className="w-32 h-32 bg-white rounded-2xl p-2 border-4 border-[var(--gold)]" />
          <p className="font-[family-name:var(--font-script)] text-[var(--gold)] text-2xl mt-4">¡Gracias!</p>
        </div>
        <div>
          <h4 className="font-[family-name:var(--font-action)] text-2xl text-[var(--gold)]">VISIT</h4>
          <p className="font-[family-name:var(--font-hand)] text-xl mt-2">DeKalb County, Illinois</p>
          <p className="font-[family-name:var(--font-hand)] text-xl">Two storefronts + one food truck</p>
          <a href="https://www.facebook.com/share/1C5dSoBNAT/?mibextid=wwXIfr" className="font-[family-name:var(--font-marker)] text-[var(--hot)] text-xl mt-3 inline-block">→ Facebook</a>
        </div>
        <div>
          <h4 className="font-[family-name:var(--font-action)] text-2xl text-[var(--gold)]">EAT</h4>
          <ul className="font-[family-name:var(--font-hand)] text-xl mt-2 space-y-1">
            <li>🌮 Quesabirrias</li>
            <li>🌽 Tamales (dozen $30)</li>
            <li>🔥 Al Pastor de Trompo</li>
            <li>🥟 Empanadas</li>
          </ul>
        </div>
      </div>
      <div className="text-center pb-6 font-[family-name:var(--font-marker)] text-[var(--cream)]/60 text-sm">
        © {new Date().getFullYear()} RT-38 Taco Alley & Tamales Los Girasoles · Mockup by Mind Ya Biz
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Specials />
      <Favorites />
      <Locations />
      <MybPitch />
      <FamilyStory />
      <Footer />
    </main>
  );
}

import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.ezst.app/projects/98fdfeff-b2ac-44e7-865a-a6454acda472/files/b31a5392-b441-40bb-813b-afac50f3a57a.jpg";

const MARQUEE_ITEMS = [
  "Brand Identity", "·", "Visual Design", "·", "Art Direction", "·",
  "UX / Interface", "·", "Creative Direction", "·", "Editorial", "·",
  "Brand Identity", "·", "Visual Design", "·", "Art Direction", "·",
  "UX / Interface", "·", "Creative Direction", "·", "Editorial", "·",
];

const WORKS = [
  { num: "01", title: "Arch Studio", category: "Brand Identity", year: "2024", color: "#FF3B00" },
  { num: "02", title: "Luminary App", category: "UX / Interface", year: "2024", color: "#FFD600" },
  { num: "03", title: "Monolith", category: "Art Direction", year: "2023", color: "#00E5FF" },
  { num: "04", title: "Sable Editorial", category: "Creative Direction", year: "2023", color: "#B8FF00" },
];

const SERVICES = ["Brand Identity", "Visual Systems", "Digital Product Design", "Art Direction", "Packaging", "Motion Design"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#0A0A0A] text-white font-sans min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-5 h-5 rounded-full border border-[#FF3B00] transition-transform duration-100"
        style={{ left: cursorPos.x - 10, top: cursorPos.y - 10 }}
      />

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5" : ""
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl tracking-widest text-white hover:text-[#FF3B00] transition-colors duration-200"
        >
          STUDIO
        </button>

        <div className="hidden md:flex items-center gap-10">
          {[["work", "Work"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 bg-[#FF3B00] text-white font-mono text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-white hover:text-[#0A0A0A] transition-all duration-200"
        >
          Hire me
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10">
          {[["work", "Work"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display text-6xl tracking-widest text-white hover:text-[#FF3B00] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative flex-1 flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20 pt-32">
          <div className="opacity-0 animate-slide-left">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#FF3B00] mb-6">
              Creative Designer · Available for Projects
            </p>
          </div>

          <h1 className="font-display text-[clamp(4.5rem,16vw,14rem)] leading-[0.9] tracking-wider mb-6 opacity-0 animate-slide-left-delay">
            MAKE IT<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>MATTER</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0 animate-slide-left-delay2">
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-sans font-light">
              Independent creative studio crafting bold visual identities, digital experiences, and brand systems that leave a mark.
            </p>
            <button
              onClick={() => scrollTo("work")}
              className="group flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-white border border-white/20 px-7 py-4 hover:border-[#FF3B00] hover:text-[#FF3B00] transition-all duration-300 w-fit"
            >
              View Selected Work
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
          {[["10+", "Years Experience"], ["80+", "Projects Delivered"], ["3×", "Award Winner"]].map(([num, label]) => (
            <div key={label} className="px-6 md:px-10 py-6 flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl text-[#FF3B00]">{num}</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/10 py-4 bg-[#FF3B00]">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="font-display text-xl tracking-widest text-black mx-6">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider">PROJECTS</h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-white/30 tracking-widest">2023 — 2024</span>
        </div>

        <div className="divide-y divide-white/10">
          {WORKS.map((work, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-between py-7 md:py-9 cursor-pointer transition-all duration-300 hover:pl-4"
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300"
                style={{ backgroundColor: work.color }}
              />
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-[10px] tracking-widest text-white/20">{work.num}</span>
                <span
                  className="font-display text-3xl md:text-5xl tracking-wider transition-colors duration-300"
                  style={{ color: hoveredWork === i ? work.color : "white" }}
                >
                  {work.title}
                </span>
              </div>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="hidden md:block font-mono text-xs tracking-widest uppercase text-white/40">
                  {work.category}
                </span>
                <span className="font-mono text-xs text-white/20">{work.year}</span>
                <Icon
                  name="ArrowUpRight"
                  size={16}
                  className="text-white/20 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#111111] px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">About</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider leading-[0.95] mb-10">
              DESIGN IS<br />
              <span className="text-[#FF3B00]">STRATEGY</span><br />
              MADE<br />VISIBLE
            </h2>
            <div className="w-14 h-px bg-[#FF3B00] mb-8" />
            <p className="text-white/50 text-sm leading-relaxed mb-4 font-light">
              With over a decade in visual communication, I help brands move from generic to iconic. Every project starts with a sharp strategic question and ends with design that performs.
            </p>
            <p className="text-white/30 text-sm leading-relaxed font-light">
              Based independently. Working globally with clients who know that bold ideas need bold execution.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Services</p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <span
                    key={s}
                    className="border border-white/10 font-mono text-xs tracking-wider uppercase px-4 py-2 text-white/50 hover:border-[#FF3B00] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: "Approach", value: "Research-first, concept-led, execution-obsessed" },
                { label: "Clients", value: "Startups, agencies, cultural institutions" },
                { label: "Availability", value: "Open to projects — let's talk" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-5">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-1.5">{item.label}</p>
                  <p className="text-white/70 text-sm font-light">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF3B00] mb-6">Get In Touch</p>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] tracking-wider leading-[0.9] mb-10">
            LET'S<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>BUILD</span><br />
            SOMETHING
          </h2>

          {sent ? (
            <div className="border border-[#FF3B00] p-10 mt-10">
              <p className="font-display text-4xl tracking-wider mb-2">RECEIVED.</p>
              <p className="text-white/50 text-sm font-light">I'll get back to you within 24 hours. Big things ahead.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0 mt-10 border border-white/10">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="p-6">
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-white/30 mb-3">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/20 font-light"
                  />
                </div>
                <div className="p-6">
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-white/30 mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/20 font-light"
                  />
                </div>
              </div>
              <div className="border-t border-white/10 p-6">
                <label className="block font-mono text-[10px] tracking-widest uppercase text-white/30 mb-3">Project Brief</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent text-white text-sm outline-none resize-none placeholder:text-white/20 font-light"
                />
              </div>
              <div className="border-t border-white/10">
                <button
                  type="submit"
                  className="w-full bg-[#FF3B00] text-white font-display text-2xl tracking-widest py-6 hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 flex items-center justify-center gap-4"
                >
                  SEND MESSAGE
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest">STUDIO</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/25">
          © 2024 · All Rights Reserved
        </span>
        <div className="flex gap-6">
          {["Instagram", "Behance", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono text-[10px] tracking-widest uppercase text-white/30 hover:text-[#FF3B00] transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

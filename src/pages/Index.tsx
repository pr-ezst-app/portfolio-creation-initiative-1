import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.ezst.app/projects/98fdfeff-b2ac-44e7-865a-a6454acda472/files/4685950b-dfa7-40c9-b214-611d5825130b.jpg";

const NAV_LINKS = ["Home", "About", "Contact"];

const WORKS = [
  { year: "2024", title: "Brand Identity", category: "Visual Design" },
  { year: "2024", title: "Digital Experience", category: "UX / Interface" },
  { year: "2023", title: "Art Direction", category: "Creative Direction" },
  { year: "2023", title: "Editorial Series", category: "Photography" },
];

export default function Index() {
  const [active, setActive] = useState("Home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-[#F9F7F4]/90 backdrop-blur-sm">
        <span className="font-display text-xl font-light tracking-widest uppercase text-[#1A1A1A]">
          D. Yaroc
        </span>
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                  active === link ? "text-[#1A1A1A]" : "text-[#9A9A8A] hover:text-[#1A1A1A]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="mailto:yaroc.d@gmail.com"
          className="text-xs tracking-widest uppercase text-[#9A9A8A] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          yaroc.d@gmail.com
        </a>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col">
        <div className="flex-1 grid md:grid-cols-2 pt-24">
          <div className="flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-24">
            <div className="opacity-0 animate-fade-up">
              <p className="text-xs tracking-widest uppercase text-[#9A9A8A] mb-6">
                Creative Professional
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[1.05] tracking-tight mb-8">
                Craft &<br />
                <em>Precision</em>
              </h1>
            </div>
            <div className="opacity-0 animate-fade-up-delay">
              <p className="text-sm text-[#6A6A5A] leading-relaxed max-w-sm mb-10">
                Independent creative working at the intersection of identity,
                space, and visual communication.
              </p>
              <button
                onClick={() => scrollTo("About")}
                className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:gap-5 transition-all duration-300"
              >
                View Work
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Studio"
              className="w-full h-full object-cover min-h-[50vh] md:min-h-full"
            />
            <div className="absolute inset-0 bg-[#F9F7F4]/10" />
          </div>
        </div>

        {/* Work List */}
        <div className="px-8 md:px-16 py-16 border-t border-[#E8E6E0]">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs tracking-widest uppercase text-[#9A9A8A]">Selected Work</span>
            <span className="text-xs tracking-widest uppercase text-[#9A9A8A]">2023 — 2024</span>
          </div>
          <div className="divide-y divide-[#E8E6E0]">
            {WORKS.map((work, i) => (
              <div
                key={i}
                className="group flex items-center justify-between py-5 cursor-pointer hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-center gap-8">
                  <span className="text-xs text-[#9A9A8A] w-10">{work.year}</span>
                  <span className="font-display text-xl font-light group-hover:italic transition-all duration-300">
                    {work.title}
                  </span>
                </div>
                <span className="text-xs tracking-wider uppercase text-[#9A9A8A]">{work.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-8 md:px-16 py-24 md:py-32 bg-[#1A1A1A] text-[#F9F7F4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#6A6A5A] mb-16">About</p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] mb-10">
                Making things
                <br />
                <em className="text-[#C8C4B8]">that matter</em>
              </h2>
              <div className="w-12 h-px bg-[#6A6A5A] mb-10" />
              <p className="text-[#9A9A8A] text-sm leading-relaxed mb-6">
                With over a decade of experience across branding, digital products, and
                spatial design — I help businesses and individuals communicate with clarity
                and intention.
              </p>
              <p className="text-[#9A9A8A] text-sm leading-relaxed">
                Based in an independent studio. Working globally with clients who
                understand that good design is not decoration — it is strategy made visible.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-10">
              {[
                { label: "Approach", value: "Thoughtful, research-led design process" },
                { label: "Clients", value: "Startups, agencies, cultural institutions" },
                { label: "Availability", value: "Open to new projects" },
              ].map((item) => (
                <div key={item.label} className="border-t border-[#2E2E2E] pt-6">
                  <p className="text-xs tracking-widest uppercase text-[#6A6A5A] mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#C8C4B8] text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-8 md:px-16 py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#9A9A8A] mb-6">Contact</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] mb-4">
            Let's work
            <br />
            <em>together</em>
          </h2>
          <p className="text-sm text-[#6A6A5A] mb-14 leading-relaxed">
            Have a project in mind? Send a message and I'll get back to you within 24 hours.
          </p>

          {sent ? (
            <div className="border border-[#E8E6E0] p-10 text-center">
              <p className="font-display text-2xl font-light mb-3">Thank you.</p>
              <p className="text-sm text-[#6A6A5A]">Your message has been received. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#9A9A8A] mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C8C4B8] py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors duration-300 placeholder:text-[#C8C4B8]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#9A9A8A] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C8C4B8] py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors duration-300 placeholder:text-[#C8C4B8]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#9A9A8A] mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#C8C4B8] py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors duration-300 placeholder:text-[#C8C4B8] resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-[#1A1A1A] text-[#F9F7F4] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#333] transition-colors duration-300"
                >
                  Send Message
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </form>
          )}

          <div className="mt-20 pt-10 border-t border-[#E8E6E0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <a
              href="mailto:yaroc.d@gmail.com"
              className="text-sm text-[#1A1A1A] hover:text-[#6A6A5A] transition-colors duration-300 font-light"
            >
              yaroc.d@gmail.com
            </a>
            <p className="text-xs text-[#C8C4B8]">© 2024 D. Yaroc. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

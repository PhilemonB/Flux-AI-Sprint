import Image from "next/image";

const stats = [
  { value: "97%", label: "Win Rate" },
  { value: "2,400+", label: "Cases Closed" },
  { value: "22", label: "Years of Dominance" },
  { value: "#1", label: "Closer in NYC" },
];

const practices = [
  {
    title: "Corporate Litigation",
    description:
      "When the stakes are existential, you need someone who doesn't flinch. We go to trial so others settle.",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Structured, swift, and airtight. We close deals others said couldn't be done — on your terms.",
  },
  {
    title: "Crisis Management",
    description:
      "Before your board finds out, before the press does, before the damage is permanent — call us first.",
  },
  {
    title: "Securities Defense",
    description:
      "Regulatory exposure requires an offense. We don't manage investigations. We end them.",
  },
];

const quotes = [
  "I don't have dreams. I have goals.",
  "Win a no-win situation by rewriting the rules.",
  "I don't get lucky. I make my own luck.",
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-[var(--font-geist-sans)]">

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-amber-500 font-bold tracking-widest text-xs uppercase hover:text-amber-400 transition-colors">
            Specter &amp; Associates
          </a>
          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#practice" className="hover:text-white transition-colors">Practice</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a
              href="#contact"
              className="px-5 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-200 rounded-none"
            >
              Engage
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden">
        {/* City background image */}
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
          alt="City skyline"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Bottom fade so scroll indicator stays legible */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-amber-500 uppercase tracking-[0.4em] text-xs font-semibold mb-10">
            Attorney at Law · New York City
          </p>
          <h1 className="text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight mb-6">
            Harvey
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Specter
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-14">
            The best closer in New York City. When you can&apos;t afford to lose,
            you can&apos;t afford anyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-amber-500 text-black font-semibold text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors"
            >
              Request a Consultation
            </a>
            <a
              href="#results"
              className="px-10 py-4 border border-white/20 text-white text-sm uppercase tracking-widest hover:border-white/50 transition-colors"
            >
              Our Record
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-300">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section id="results" className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-black flex flex-col items-center justify-center py-14 px-8 text-center">
              <span className="text-5xl font-bold text-amber-500 mb-3">{s.value}</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6">About</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            I don&apos;t have dreams.
            <br />
            <span className="text-zinc-500">I have goals.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Harvard Law. Pearson Hardman. Specter &amp; Associates. Every step a
            deliberate move forward. Harvey Specter built a career not on
            luck, but on preparation, instinct, and an unwillingness to accept
            anything other than victory.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            With over two decades of litigation experience and an unmatched
            record in corporate law, Harvey operates where the law meets power —
            and where the outcome is never in question.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {quotes.map((q) => (
            <blockquote
              key={q}
              className="border-l-2 border-amber-500 pl-6 py-4 text-zinc-300 italic text-sm leading-relaxed"
            >
              &ldquo;{q}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-32">
          <div className="mb-16">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-4">Practice Areas</p>
            <h2 className="text-4xl md:text-5xl font-bold">Where We Win</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {practices.map((p) => (
              <div
                key={p.title}
                className="bg-black p-10 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-8 h-px bg-amber-500 mb-8 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-8 py-40 text-center">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-6">Contact</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Win?
        </h2>
        <p className="text-zinc-500 text-lg mb-14 max-w-lg mx-auto">
          If you&apos;re in the room with us, it&apos;s because losing is not an option.
        </p>
        <a
          href="mailto:harvey@specterassociates.com"
          className="inline-block px-14 py-5 bg-amber-500 text-black font-bold text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors"
        >
          harvey@specterassociates.com
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Specter &amp; Associates</span>
          <span>New York · London · Hong Kong</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

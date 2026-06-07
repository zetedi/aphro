import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero({ onEnter }) {
  return (
    <header className="relative isolate overflow-hidden bg-hero-glow">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-52 w-52 rounded-full bg-velvet/35 blur-3xl animate-drift" />
        <div className="absolute right-[12%] top-32 h-72 w-72 rounded-full bg-crimson/20 blur-3xl animate-pulseSlow" />
        <div className="sea-wave absolute bottom-0 left-0 right-0 h-48 opacity-50" />
      </div>

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.28em] text-linen">
            APHRO
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.55em] text-gold/75">
            Ibiza Temple Society
          </p>
        </div>
        <a
          href="#gatherings"
          className="rounded-full border border-gold/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sand transition duration-500 hover:border-gold/40 hover:bg-white/10"
        >
          Gatherings
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-10 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gold/80">
            Exclusive Sensual Community
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.9] text-linen sm:text-7xl lg:text-[6.4rem]">
            We heal by honoring desire.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-sand/80 sm:text-lg">
            We release frustration, sharing pure passion, pleasure, and
            authentic connection in the heart of Ibiza.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onEnter}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-7 py-4 text-sm uppercase tracking-[0.28em] text-linen shadow-glow transition duration-500 hover:scale-[1.02] hover:border-gold/45 hover:bg-gold/15"
            >
              Enter the Temple
              <ArrowDownRight className="h-4 w-4 text-gold transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <p className="text-sm italic text-sand/65">
              For seekers of refinement, safety, and electric softness.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            ["Private villas", "Curated sanctuaries across the southern coast."],
            ["Intentional intimacy", "Every gathering begins with consent, presence, and reverence."],
            ["Editorial atmosphere", "Mediterranean textures, candlelight, and moon-drenched ritual design."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <h2 className="font-display text-2xl text-linen">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-sand/72">{copy}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}

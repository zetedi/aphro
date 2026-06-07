import { motion } from "framer-motion";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Events({ events, onApply }) {
  return (
    <section
      id="gatherings"
      className="mx-auto max-w-7xl px-6 py-24 sm:px-10"
    >
      <SectionHeading
        eyebrow="Upcoming Gatherings"
        title="Temple weekends and sunset rituals with intentional scarcity."
        description="Attendance is curated to preserve intimacy. Each invitation prioritizes energetic fit, relational maturity, and a desire to contribute to the collective atmosphere."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {events.map((event, index) => (
          <motion.article
            key={event.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-7 shadow-velvet backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(154,3,30,0.26),transparent_28%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
                  {event.status}
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-sand/55">
                  Curated Entry
                </span>
              </div>

              <h3 className="mt-8 font-display text-4xl leading-none text-linen">
                {event.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-sand/74">
                {event.description}
              </p>

              <div className="mt-8 space-y-3 text-sm text-sand/78">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
                  <span>{event.location}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onApply(event)}
                className="mt-10 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-linen transition duration-500 hover:scale-[1.02] hover:border-gold/35 hover:bg-white/10"
              >
                Apply for Invitation
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

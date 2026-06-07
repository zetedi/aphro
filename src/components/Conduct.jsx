import { motion } from "framer-motion";
import { LockKeyhole, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    title: "Consent First",
    copy: "Presence, clear communication, and active consent shape every interaction from start to finish.",
  },
  {
    icon: LockKeyhole,
    title: "Discretion Always",
    copy: "Privacy is honored with the same seriousness as pleasure. What is shared in the temple stays protected.",
  },
  {
    icon: Users,
    title: "Collective Care",
    copy: "We expect emotional maturity, self-awareness, and a felt commitment to the safety of the whole room.",
  },
];

export default function Conduct({ onApply }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 pb-28 sm:px-10">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-velvet/40 via-obsidian to-obsidian shadow-velvet">
        <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Code of Conduct"
              title="Sacred structure is what creates freedom."
              description="Before any invitation is extended, we ask each guest to align with the container. The process is elegant, direct, and intentionally human."
              align="left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            {values.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gold/85" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-linen">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-sand/72">{copy}</p>
              </div>
            ))}

            <button
              type="button"
              onClick={onApply}
              className="mt-4 inline-flex rounded-full border border-gold/25 bg-gold/10 px-6 py-4 text-sm uppercase tracking-[0.26em] text-linen transition duration-500 hover:scale-[1.02] hover:border-gold/45 hover:bg-gold/15"
            >
              Begin Private Application
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

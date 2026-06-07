import { motion } from "framer-motion";
import { Flame, HeartHandshake, Waves } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Honor Desire",
    description:
      "A return to truth. Desire is welcomed as a guide toward vitality, honesty, and creative power.",
    icon: HeartHandshake,
    size: "sm:col-span-2",
  },
  {
    title: "Release Frustration",
    description:
      "We create contained spaces where pressure softens and emotional armor can safely fall away.",
    icon: Flame,
    size: "sm:row-span-2",
  },
  {
    title: "Embody Pleasure",
    description:
      "Pleasure becomes a devotional practice, grounded in consent, breath, and exquisite attention.",
    icon: Waves,
    size: "",
  },
];

export default function Awakening() {
  return (
    <section id="awakening" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="The Awakening"
        title="A philosophy designed for expansion, not excess."
        description="The experience is sensual, but never careless. Each encounter is guided by aesthetics, emotional intelligence, and a profound respect for personal sovereignty."
      />

      <div className="grid auto-rows-[minmax(220px,1fr)] gap-5 sm:grid-cols-3">
        {pillars.map(({ title, description, icon: Icon, size }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-velvet backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.07] ${size}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,169,109,0.18),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <Icon className="h-8 w-8 text-gold/85" strokeWidth={1.3} />
              <h3 className="mt-10 font-display text-3xl text-linen">{title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-sand/72">
                {description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

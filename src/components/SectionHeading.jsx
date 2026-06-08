import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignmentClass =
    align === "left" ? "mx-0 max-w-2xl text-left" : "mx-auto max-w-3xl text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 ${alignmentClass}`}
    >
      <p className="mb-4 text-xs uppercase leading-6 tracking-[0.22em] text-gold/80 sm:tracking-[0.45em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-[1.02] text-linen sm:text-5xl sm:leading-none">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-sand/76 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

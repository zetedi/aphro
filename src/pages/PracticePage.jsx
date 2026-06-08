import { motion } from "framer-motion";
import { practiceOfferings, whatsappLink } from "../content";
import { PrimaryLink, SecondaryLink } from "../components/ActionLinks";
import SectionHeading from "../components/SectionHeading";

export default function PracticePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:py-24">
      <SectionHeading
        eyebrow="The practice"
        title="Psychotherapy, somatics, and intimacy work for individuals, couples, and lovers."
        description="Choose the work that meets the real threshold of your life: therapeutic depth, transpersonal insight, embodied pleasure, relational repair, or private retreat."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {practiceOfferings.map((offering, index) => (
          <OfferingCard key={offering.title} offering={offering} index={index} />
        ))}
      </div>
    </section>
  );
}

function OfferingCard({ offering, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.04, ease: "easeOut" }}
      className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-velvet"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gold">
          {offering.audience}
        </span>
        <span className="text-sm text-sand/45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-display text-3xl leading-none text-linen sm:text-4xl">
        {offering.title}
      </h3>
      {offering.quote ? (
        <p className="mt-4 text-sm italic leading-7 text-gold/82">
          {offering.quote}
        </p>
      ) : null}
      <p className="mt-4 text-sm leading-7 text-sand/74">{offering.copy}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <SecondaryLink href={whatsappLink}>Chat with me</SecondaryLink>
        <PrimaryLink href={whatsappLink}>{offering.cta}</PrimaryLink>
      </div>
    </motion.article>
  );
}

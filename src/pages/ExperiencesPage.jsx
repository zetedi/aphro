import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, FileText, Instagram, MapPin, Phone } from "lucide-react";
import { experiences, images, whatsappLinks, whatsappPhone } from "../content";
import { PrimaryLink, SecondaryLink } from "../components/ActionLinks";
import SectionHeading from "../components/SectionHeading";
import PDFPreviewModal from "../components/PDFPreviewModal";

const FEATURED_EVENT = {
  title: "OUR NEXT EXPERIENCE",
  eyebrow: "One Endless Night",
  date: "Wed 24/06, doors open at 5PM",
  location: "Private villa in Es Cubells",
  image: images.candles,
  description: [
    "Pause, breathe, listen.",
    "It is your body vibrating while Aphrodisia whispers to your ear: Are you ready to enter the temple?",
    "The House of Aphrodisia in collaboration with Lina invites you to the first exclusive Temple Nights gathering of the Summer: One Endless Night.",
    "Do not let others tell you how it was. See you in the Temple.",
  ],
};

export default function ExperiencesPage() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 sm:pb-24 sm:pt-10">
      <SectionHeading
        eyebrow="Aphrodisia Experiences"
        title="Workshops, private rituals, Temple Nights, and Aphrodisia on the Sea."
        description="Aphrodisia Experiences are designed as living laboratories for presence, pleasure, consent, beauty, and authentic connection."
      />

      <FeaturedEvent onGeneratePDF={() => setIsPDFModalOpen(true)} />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {isPDFModalOpen && (
          <PDFPreviewModal
            event={FEATURED_EVENT}
            onClose={() => setIsPDFModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ExperienceCard({ experience, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-velvet"
    >
      {experience.image ? (
        <img
          src={experience.image}
          alt={experience.title}
          className="aspect-[16/10] w-full object-cover"
        />
      ) : null}
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold/75">
          {experience.label}
        </p>
        <h3 className="mt-4 font-display text-3xl text-linen sm:text-4xl">
          {experience.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-sand/74">{experience.copy}</p>
        <div className="mt-6">
          <SecondaryLink href={experience.href}>{experience.cta}</SecondaryLink>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedEvent({ onGeneratePDF }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-velvet/45 via-obsidian to-[#14110f] shadow-velvet">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src={FEATURED_EVENT.image}
          alt={FEATURED_EVENT.title}
          className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        />
        <div>
          <div className="flex flex-wrap gap-3 text-sm text-sand/76">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" /> {FEATURED_EVENT.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> {FEATURED_EVENT.location}
            </span>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-gold/75">
            {FEATURED_EVENT.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-4xl leading-none text-linen sm:text-5xl">
            {FEATURED_EVENT.title}
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-sand/78">
            {FEATURED_EVENT.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryLink href="https://hipsy.eu/event/214251-the-temple-of-aphrodisia-a-timeless-night">
              Dive into the Experience
            </PrimaryLink>
            <SecondaryLink href="https://forms.gle/1ivBAhMq8CCSQ1cK6">
              Apply to join
            </SecondaryLink>
            <button
              onClick={onGeneratePDF}
              title="Download Event PDF"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-linen transition duration-500 hover:border-gold/35 hover:bg-white/10"
            >
              <FileText className="h-5 w-5 text-gold" />
            </button>
          </div>
          <div className="mt-6 border-t border-white/10 pt-5 text-sm text-sand/68">
            <p className="font-display text-2xl text-linen">
              See you in the Temple
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
              <a
                href={whatsappLinks.templeNightDiscovery15}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition duration-300 hover:text-linen"
              >
                <Phone className="h-4 w-4 text-gold/85" strokeWidth={1.5} />
                +{whatsappPhone}
              </a>
              <a
                href="https://www.instagram.com/templeofaphrodisia/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition duration-300 hover:text-linen"
              >
                <Instagram className="h-4 w-4 text-gold/85" strokeWidth={1.5} />
                @templeofaphrodisia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

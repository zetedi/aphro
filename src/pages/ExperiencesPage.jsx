import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { experiences, images } from "../content";
import { PrimaryLink, SecondaryLink } from "../components/ActionLinks";
import SectionHeading from "../components/SectionHeading";

export default function ExperiencesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:py-24">
      <SectionHeading
        eyebrow="Experiences"
        title="Workshops, private rituals, temple nights, and Aphrodisia on the sea."
        description="Aphrodisia experiences are designed as living laboratories for presence, pleasure, consent, beauty, and authentic connection."
      />

      <div className="grid auto-rows-[260px] gap-5 md:grid-cols-4">
        {[
          [images.greet, "Eliane greets you", "md:col-span-2 md:row-span-2"],
          [images.facing, "Two lines of people facing each other", "md:col-span-2"],
          [images.hand, "Two hands touching", ""],
          [images.blind, "A couple blindfolded", ""],
        ].map(([image, alt, className]) => (
          <article
            key={alt}
            className={`overflow-hidden rounded-[1.75rem] border border-white/10 shadow-velvet ${className}`}
          >
            <img src={image} alt={alt} className="h-full w-full object-cover" />
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <FeaturedEvent />
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

function FeaturedEvent() {
  return (
    <div className="mt-12 overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-velvet/45 via-obsidian to-[#14110f] shadow-velvet">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src={images.candles}
          alt="Hands around candles"
          className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        />
        <div>
          <div className="flex flex-wrap gap-3 text-sm text-sand/76">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" /> Wed 24/06, doors
              open at 5PM
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Private villa in Es
              Cubells
            </span>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-gold/75">
            One Endless Night
          </p>
          <h3 className="mt-3 font-display text-4xl leading-none text-linen sm:text-5xl">
            Are you ready to enter the temple?
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-sand/78">
            <p>Pause, breathe, listen.</p>
            <p>
              It is your body vibrating while Aphrodisia whispers to your ear:
              Are you ready to enter the temple?
            </p>
            <p>
              The House of Aphrodisia in collaboration with Lina invites you to
              the first Exclusive Temple Night of the Summer: One Endless Night.
            </p>
            <p>Do not let others tell you how it was. See you in the Temple.</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="https://hipsy.eu/event/214251-the-temple-of-aphrodisia-a-timeless-night">
              Dive into the Experience
            </PrimaryLink>
            <SecondaryLink href="https://forms.gle/1ivBAhMq8CCSQ1cK6">
              Apply to join
            </SecondaryLink>
          </div>
          <p className="mt-5 text-sm text-sand/58">
            Eliane, Lina and the House of Aphrodisia · +329 3297423897 ·
            instagram.com/templeofaphrodisia
          </p>
        </div>
      </div>
    </div>
  );
}

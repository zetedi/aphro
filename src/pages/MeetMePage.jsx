import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  PlayCircle,
  Quote,
} from "lucide-react";
import elianeWhiteImage from "../../assets/images/eliane-white.webp";
import { podcasts, testimonials, whatsappLinks } from "../content";
import {
  DiscoveryCallText,
  PrimaryLink,
  SecondaryLink,
} from "../components/ActionLinks";
import SectionHeading from "../components/SectionHeading";

export default function MeetMePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 sm:pb-24 sm:pt-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-velvet"
        >
          <img
            src={elianeWhiteImage}
            alt="Eliane in a white dress"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Meet me"
            title="The most intimate place you have never been is yourself."
            description="Something brings you here. Perhaps a relationship that once felt alive has grown quiet. Perhaps you have built a life that looks complete from the outside and feels hollow from within. Perhaps your body has been waiting for you to come back."
            align="left"
          />
          <div className="space-y-5 text-sm leading-8 text-sand/78 sm:text-base">
            <p>
              Eliane is a psychotherapist specialized in intimacy and
              relationships, trained in transpersonal psychology, Gestalt,
              somatic sexuality, and the teachings of ISTA.
            </p>
            <p>
              What her clients find in her is rare: a guide who has made the
              journey herself, and who holds the therapeutic and the sacred with
              equal precision.
            </p>
            <p>
              She is based in Ibiza, where she has built House of Aphrodisia, a
              private world for those who are ready to stop performing their
              lives and begin inhabiting them.
            </p>
          </div>
          <a
            href="https://www.instagram.com/aspicyspirit"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm text-sand/70 transition duration-300 hover:text-linen"
          >
            <Instagram className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
            @aspicyspirit
          </a>
          <div className="mt-6 flex flex-col items-start gap-3 xl:flex-row">
            <PrimaryLink href={whatsappLinks.practiceDiscovery15}>
              <DiscoveryCallText minutes={15} />
            </PrimaryLink>
            <SecondaryLink href="/experiences">
              <span className="flex flex-col leading-5">
                <span className="whitespace-nowrap">Find out our</span>
                <span className="whitespace-nowrap">
                  Aphrodisia Experiences
                </span>
              </span>
            </SecondaryLink>
          </div>
        </div>
      </div>

      <MediaAndVoices />
    </section>
  );
}

function MediaAndVoices() {
  return (
    <div className="mt-20 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-velvet">
        <div className="flex items-center gap-3">
          <PlayCircle className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <h3 className="font-display text-3xl text-linen">
            Podcasts & interviews
          </h3>
        </div>
        <div className="mt-6 space-y-3">
          {podcasts.map(([title, href]) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-obsidian/45 px-4 py-3 text-sm leading-6 text-sand/78 transition duration-300 hover:border-gold/35 hover:text-linen"
            >
              <span>{title}</span>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-gold/80" />
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-velvet">
        <div className="flex items-center gap-3">
          <Quote className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <h3 className="font-display text-3xl text-linen">Testimonials</h3>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {testimonials.map((quote, index) => {
            const testimonial = splitTestimonial(quote);

            return (
              <motion.blockquote
                key={quote}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-sand/76 shadow-velvet"
              >
                <p>{testimonial.copy}</p>
                <footer className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-gold/80">
                  {testimonial.author}
                </footer>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function splitTestimonial(quote) {
  const match = quote.match(/^(.*)\s(\([^)]+\))$/);

  if (!match) {
    return { copy: quote, author: "" };
  }

  return {
    copy: match[1],
    author: match[2],
  };
}

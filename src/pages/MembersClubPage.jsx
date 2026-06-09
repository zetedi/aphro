import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { conduct, images, whatsappLinks } from "../content";
import { PrimaryLink } from "../components/ActionLinks";
import SectionHeading from "../components/SectionHeading";

export default function MembersClubPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-10 sm:pb-28 sm:pt-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Conscious only. No substances, no alcohol."
            title="Aphrodisia Members Club — Memberships Opening Soon"
            description="The invitation is never public. The Temple opens its doors only to a carefully curated circle of guests who choose experience over comfort, presence over distraction, and truth over performance."
            align="left"
          />
          <div className="space-y-4 text-sm leading-7 text-sand/76">
            <p>
              Temple Nights are transpersonal spaces where connection
              transcends ego, gender, and judgment. Freedom reigns: the freedom
              to say yes or no, to experiment, to feel, and to be truly
              yourself.
            </p>
            <p>
              Before any intimate gathering occurs, the agreements below hold
              the space together. They are simple, clear, and designed to keep
              things safe, playful, and respectful.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href={whatsappLinks.membersClubDiscovery15}>
              Chat with me
            </PrimaryLink>
          </div>
        </div>

        <div className="grid gap-5">
          <img
            src={images.hug}
            alt="Eliane hugs a lady"
            className="aspect-[5/3] w-full rounded-[1.75rem] border border-white/10 object-cover shadow-velvet"
          />
          <img
            src={images.hourglass}
            alt="An hourglass"
            className="aspect-[5/3] w-full rounded-[1.75rem] border border-white/10 object-cover shadow-velvet"
          />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <Quote className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <h3 className="font-display text-3xl text-linen">
            Agreements of Members Club:
          </h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conduct.map((item, index) => (
          <motion.blockquote
            key={item}
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
            <p>{item}</p>
            <footer className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-gold/80">
              Agreement {index + 1}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

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

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {conduct.map((item, index) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-velvet"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-sm text-gold">
              {index + 1}
            </div>
            <p className="text-sm leading-7 text-sand/76">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

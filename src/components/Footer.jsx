import { useState } from "react";
import { Instagram } from "lucide-react";
import {
  whatsappExperienceChoiceOptions,
  whatsappPhone,
  whatsappQualificationFlows,
} from "../content";
import { WhatsAppIcon } from "./ActionLinks";
import WhatsAppChoiceModal from "./WhatsAppChoiceModal";

const instagramUrl = "https://www.instagram.com/templeofaphrodisia/";

export default function Footer() {
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-[#080607] px-6 py-8 text-sand/68 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="order-2 sm:order-1">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold/75">
            House of Aphrodisia
          </p>
          <p className="mt-2 text-xs">
            © 2026 House of Aphrodisia. All rights reserved.
          </p>
        </div>

        <div className="order-1 flex flex-col gap-3 sm:order-2 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 leading-none transition duration-300 hover:text-linen"
          >
            <Instagram className="h-4 w-4 shrink-0 text-gold/80" strokeWidth={1.5} />
            @templeofaphrodisia
          </a>
          <button
            type="button"
            onClick={() => setExperienceModalOpen(true)}
            className="inline-flex items-center gap-2 leading-none transition duration-300 hover:text-linen"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold/80" />
            +{whatsappPhone}
          </button>
        </div>
      </div>
      {experienceModalOpen ? (
        <WhatsAppChoiceModal
          question={whatsappQualificationFlows.experience.question}
          options={whatsappExperienceChoiceOptions}
          onClose={() => setExperienceModalOpen(false)}
        />
      ) : null}
    </footer>
  );
}

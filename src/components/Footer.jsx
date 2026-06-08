import { Instagram, MessageCircle } from "lucide-react";

const instagramUrl = "https://www.instagram.com/templeofaphrodisia/";
const whatsappUrl = "https://wa.me/3293297423897";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080607] px-6 py-8 text-sand/68 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold/75">
            House of Aphrodisia
          </p>
          <p className="mt-2 text-xs">
            © 2026 House of Aphrodisia. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition duration-300 hover:text-linen"
          >
            <Instagram className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
            @templeofaphrodisia
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition duration-300 hover:text-linen"
          >
            <MessageCircle className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
            +329 3297423897
          </a>
        </div>
      </div>
    </footer>
  );
}

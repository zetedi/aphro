import { ArrowRight } from "lucide-react";
import AppLink from "./AppLink";

export function DiscoveryCallText({ minutes = 15 }) {
  return (
    <span className="flex min-w-0 flex-col leading-5">
      <span className="whitespace-nowrap">
        Book your <span className="text-gold">{minutes} min</span>
      </span>
      <span className="whitespace-nowrap">Discovery call</span>
    </span>
  );
}

export function PrimaryLink({ href, children, icon: Icon = ArrowRight }) {
  const whatsapp = isWhatsAppHref(href);

  return (
    <AppLink
      href={href}
      className="inline-flex items-center justify-center gap-4 rounded-full border border-gold/30 bg-gold/10 px-4 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-linen shadow-[0_0_0_1px_rgba(224,169,109,0.18),0_0_22px_rgba(255,215,120,0.17),0_18px_46px_rgba(224,169,109,0.13)] transition duration-500 hover:scale-[1.01] hover:border-gold/50 hover:bg-gold/15 hover:shadow-[0_0_0_1px_rgba(224,169,109,0.24),0_0_28px_rgba(255,215,120,0.23),0_20px_52px_rgba(224,169,109,0.16)] sm:gap-5 sm:px-5 sm:text-xs sm:tracking-[0.2em]"
    >
      {whatsapp ? <WhatsAppMark /> : null}
      {children}
      {whatsapp ? null : (
        <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
      )}
    </AppLink>
  );
}

export function SecondaryLink({ href, children }) {
  const whatsapp = isWhatsAppHref(href);

  return (
    <AppLink
      href={href}
      className="inline-flex items-center justify-center gap-4 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-sand transition duration-500 hover:border-gold/35 hover:bg-white/10 hover:text-linen sm:gap-5 sm:px-5 sm:text-xs sm:tracking-[0.2em]"
    >
      {whatsapp ? <WhatsAppMark /> : null}
      {children}
      {whatsapp ? null : (
        <ArrowRight className="h-4 w-4 shrink-0 text-gold/85" strokeWidth={1.5} />
      )}
    </AppLink>
  );
}

export function WhatsAppMark() {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/12 text-gold shadow-[0_0_18px_rgba(224,169,109,0.22)]"
      aria-hidden="true"
    >
      <WhatsAppIcon />
    </span>
  );
}

export const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.04 3C8.85 3 3 8.74 3 15.83c0 2.48.73 4.88 2.1 6.94L3 29l6.42-2.04a13.1 13.1 0 0 0 6.62 1.8H16c7.2 0 13.04-5.74 13.04-12.83C29.04 8.74 23.2 3 16.04 3zm0 23.6a10.8 10.8 0 0 1-5.53-1.52l-.4-.24-3.8 1.2 1.23-3.68-.26-.38a10.55 10.55 0 0 1-1.67-5.7c0-5.85 4.7-10.6 10.43-10.6 5.76 0 10.44 4.75 10.44 10.6 0 5.85-4.68 10.6-10.44 10.6zm5.72-7.97c-.31-.16-1.84-.9-2.13-1-.29-.1-.5-.16-.71.16-.21.31-.82 1-1.01 1.2-.19.21-.37.23-.68.08-.31-.16-1.32-.48-2.5-1.54-.92-.81-1.54-1.81-1.72-2.12-.18-.31-.02-.48.13-.63.13-.13.31-.34.47-.5.16-.16.21-.29.31-.5.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.35-.26-.63-.53-.55-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.04 1.29 3.25c.16.21 2.22 3.34 5.37 4.69.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.47.26-.73.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z" />
  </svg>
);

function isWhatsAppHref(href) {
  return typeof href === "string" && href.startsWith("https://wa.me/");
}

import { ArrowRight } from "lucide-react";
import AppLink from "./AppLink";

export function PrimaryLink({ href, children, icon: Icon = ArrowRight }) {
  return (
    <AppLink
      href={href}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-linen shadow-glow transition duration-500 hover:scale-[1.01] hover:border-gold/45 hover:bg-gold/15 sm:px-5 sm:text-xs sm:tracking-[0.2em]"
    >
      {children}
      <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
    </AppLink>
  );
}

export function SecondaryLink({ href, children }) {
  return (
    <AppLink
      href={href}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-sand transition duration-500 hover:border-gold/35 hover:bg-white/10 hover:text-linen sm:px-5 sm:text-xs sm:tracking-[0.2em]"
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 text-gold/85" strokeWidth={1.5} />
    </AppLink>
  );
}

import { ArrowRight } from "lucide-react";
import AppLink from "./AppLink";

export function PrimaryLink({ href, children, icon: Icon = ArrowRight }) {
  return (
    <AppLink
      href={href}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-linen shadow-glow transition duration-500 hover:scale-[1.01] hover:border-gold/45 hover:bg-gold/15"
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
      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-sand transition duration-500 hover:border-gold/35 hover:bg-white/10 hover:text-linen"
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 text-gold/85" strokeWidth={1.5} />
    </AppLink>
  );
}

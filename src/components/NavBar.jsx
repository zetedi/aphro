import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppLink from "./AppLink";
import { navItems } from "../content";
import logoImage from "../../assets/images/logo.svg";

export default function NavBar({ activePath = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between gap-4 lg:flex-1">
        <AppLink href="/" className="flex min-w-0 max-w-sm items-center gap-2.5 sm:gap-3">
          <img
            src={logoImage}
            alt="House of Aphrodisia logo"
            className="-mb-4 h-[4.5rem] w-[4.5rem] shrink-0 object-contain sm:-mb-5 sm:h-24 sm:w-24"
          />
          <p className="font-sans font-light leading-none text-linen">
            <span className="block text-[10px] uppercase tracking-[0.24em] text-sand/80 sm:text-[11px] sm:tracking-[0.34em]">
              House of
            </span>
            <span className="mt-1.5 block text-xl font-light uppercase tracking-[0.06em] text-gold sm:text-[1.7rem] sm:tracking-[0.1em]">
              Aphrodisia
            </span>
          </p>
        </AppLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-obsidian/35 text-sand backdrop-blur-sm transition duration-300 hover:border-gold/25 hover:text-linen lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div className="hidden flex-wrap gap-2 sm:gap-2.5 lg:flex">
        {navItems.map(({ label, href }) => {
          const active = activePath === href;

          return (
            <AppLink
              key={label}
              href={href}
              className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] backdrop-blur-sm transition duration-300 ${
                active
                  ? "border-gold/25 bg-gold/10 text-linen"
                  : "border-white/10 bg-obsidian/30 text-sand hover:border-gold/25 hover:text-linen"
              }`}
            >
              {label}
            </AppLink>
          );
        })}
      </div>

      {menuOpen ? (
        <div className="grid gap-2 rounded-[1.25rem] border border-white/10 bg-obsidian/90 p-3 shadow-velvet backdrop-blur-md lg:hidden">
          {navItems.map(({ label, href }) => {
            const active = activePath === href;

            return (
              <AppLink
                key={label}
                href={href}
                className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.14em] transition duration-300 ${
                  active
                    ? "border-gold/25 bg-gold/10 text-linen"
                    : "border-white/10 bg-white/[0.03] text-sand hover:border-gold/25 hover:text-linen"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </AppLink>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}

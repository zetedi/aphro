import AppLink from "./AppLink";
import { navItems } from "../content";
import logoImage from "../../assets/images/logo.svg";

export default function NavBar({ activePath = "/" }) {
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
      <AppLink href="/" className="flex max-w-sm items-center gap-3">
        <img
          src={logoImage}
          alt="House of Aphrodisia logo"
          className="h-11 w-11 shrink-0 object-contain"
        />
        <p className="font-sans font-light leading-none text-linen">
          <span className="block text-[11px] uppercase tracking-[0.34em] text-sand/80">
            House of
          </span>
          <span className="mt-1.5 block text-2xl font-light uppercase tracking-[0.1em] text-gold sm:text-[1.7rem]">
            Aphrodisia
          </span>
        </p>
      </AppLink>

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
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
    </nav>
  );
}

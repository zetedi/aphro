import { motion } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { images, whatsappLink } from "../content";
import AppLink from "./AppLink";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <header className="relative isolate min-h-screen overflow-hidden bg-obsidian">
      <img
        src={images.greet}
        alt="Eliane greets you at House of Aphrodisia"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/78 to-obsidian/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

      <NavBar activePath="/" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-136px)] max-w-7xl items-center px-6 pb-16 pt-10 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs uppercase leading-6 tracking-[0.22em] text-gold/85 sm:tracking-[0.45em]">
            Ibiza intimacy, ritual, and relationship practice
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-linen sm:text-7xl lg:text-[6.4rem]">
            Where pleasure meets authenticity
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-sand/82 sm:text-lg">
            A private world for those ready to stop performing their lives and
            begin inhabiting them through therapy, embodied intimacy, curated
            experiences, and the Aphrodisia temple.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AppLink
              href={whatsappLink}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-5 py-4 text-center text-xs uppercase tracking-[0.14em] text-linen shadow-glow transition duration-500 hover:scale-[1.02] hover:border-gold/45 hover:bg-gold/15 sm:px-7 sm:text-sm sm:tracking-[0.22em]"
            >
              <MessageCircle className="h-4 w-4 text-gold" strokeWidth={1.5} />
              Book your 15min discovery call
            </AppLink>
            <AppLink
              href="/experiences"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-obsidian/45 px-5 py-4 text-center text-xs uppercase tracking-[0.14em] text-sand backdrop-blur-sm transition duration-500 hover:border-gold/35 hover:bg-white/10 hover:text-linen sm:px-7 sm:text-sm sm:tracking-[0.22em]"
            >
              Find out our Experiences
              <ArrowDownRight className="h-4 w-4 text-gold transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </AppLink>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

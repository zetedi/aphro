import { motion } from "framer-motion";
import NavBar from "./NavBar";

export default function PageShell({ activePath, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <header className="bg-obsidian/95">
        <NavBar activePath={activePath} />
      </header>
      <main className="relative z-10">{children}</main>
    </motion.div>
  );
}

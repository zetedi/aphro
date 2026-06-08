import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageShell from "./components/PageShell";
import MeetMePage from "./pages/MeetMePage";
import PracticePage from "./pages/PracticePage";
import ExperiencesPage from "./pages/ExperiencesPage";
import MembersClubPage from "./pages/MembersClubPage";

const routes = {
  "/meet-me": MeetMePage,
  "/practice": PracticePage,
  "/experiences": ExperiencesPage,
  "/members-club": MembersClubPage,
};

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const syncPath = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", syncPath);
    window.addEventListener("aphro:navigate", syncPath);

    return () => {
      window.removeEventListener("popstate", syncPath);
      window.removeEventListener("aphro:navigate", syncPath);
    };
  }, []);

  const Page = useMemo(() => routes[path], [path]);

  return (
    <div className="min-h-screen bg-obsidian text-linen">
      {path === "/" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <Footer />
        </motion.div>
      ) : (
        <PageShell activePath={Page ? path : "/"}>
          {Page ? <Page /> : <NotFoundPage />}
        </PageShell>
      )}
    </div>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-12 text-center sm:px-10 sm:py-24">
      <p className="text-xs uppercase tracking-[0.45em] text-gold/80">404</p>
      <h1 className="mt-5 font-display text-5xl leading-none text-linen">
        Page not found
      </h1>
      <p className="mt-5 text-sm leading-7 text-sand/76">
        The page you are looking for does not exist.
      </p>
    </section>
  );
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageShell from "./components/PageShell";
import ScrollHint from "./components/ScrollHint";
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

const pageMeta = {
  "/": {
    title: "House of Aphrodisia | Ibiza Intimacy and Temple Experiences",
    description:
      "House of Aphrodisia in Ibiza: psychotherapy, somatics, conscious intimacy work, Temple Nights, Aphrodisia Experiences, Aphrodisia on the Sea, and Aphrodisia Members Club.",
  },
  "/meet-me": {
    title: "Meet Eliane | House of Aphrodisia",
    description:
      "Meet Eliane, a psychotherapist specialising in intimacy and relationships, trained in transpersonal psychology, Gestalt, somatic sexuality, and ISTA.",
  },
  "/practice": {
    title: "The Practice | Psychotherapy and Conscious Intimacy",
    description:
      "Psychotherapy, somatics, and conscious intimacy work for individuals and couples, including Couples Therapy and One-to-One Retreats.",
  },
  "/experiences": {
    title: "Aphrodisia Experiences | Temple Nights and Aphrodisia on the Sea",
    description:
      "Aphrodisia Experiences in Ibiza: Temple Nights, private creations, U FEEL Tantra Ibiza, and Aphrodisia on the Sea.",
  },
  "/members-club": {
    title: "Aphrodisia Members Club — Memberships Opening Soon",
    description:
      "Aphrodisia Members Club is opening soon for a curated circle of guests entering conscious Temple Nights and intimate Aphrodisia Experiences.",
  },
};

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const meta = pageMeta[path] ?? pageMeta["/"];

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

  useEffect(() => {
    document.title = meta.title;
    upsertMeta("description", meta.description);
    upsertMeta("og:title", meta.title, "property");
    upsertMeta("og:description", meta.description, "property");
    upsertMeta("og:image", "/og-image.png", "property");
    upsertMeta("twitter:title", meta.title);
    upsertMeta("twitter:description", meta.description);
    upsertMeta("twitter:image", "/og-image.png");
  }, [meta]);

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
      <ScrollHint />
    </div>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center sm:px-10 sm:pb-24 sm:pt-10">
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

function upsertMeta(name, content, attribute = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

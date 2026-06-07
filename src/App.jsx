import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import Awakening from "./components/Awakening";
import Events from "./components/Events";
import Sanctuary from "./components/Sanctuary";
import Conduct from "./components/Conduct";
import ApplicationModal from "./components/ApplicationModal";

const events = [
  {
    title: "Love Temple Weekend",
    date: "July 18-20, 2026",
    location: "Secret Villa, San Jose",
    status: "Applications Open",
    description:
      "Three nights of embodied ritual, curated dining, moonlit sound journeys, and private temple ceremonies.",
  },
  {
    title: "Ibiza Sunset Ritual",
    date: "August 9, 2026",
    location: "Clifftop Sanctuary, Es Cubells",
    status: "Intimate Capacity",
    description:
      "A golden-hour gathering designed for slow connection, ocean breathwork, and exquisite sensual presence.",
  },
];

export default function App() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <div className="min-h-screen bg-obsidian text-linen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero onEnter={() => setActiveEvent(events[0])} />
        <main className="relative z-10">
          <Awakening />
          <Events events={events} onApply={setActiveEvent} />
          <Sanctuary />
          <Conduct onApply={() => setActiveEvent(events[0])} />
        </main>
      </motion.div>

      <AnimatePresence>
        {activeEvent ? (
          <ApplicationModal
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

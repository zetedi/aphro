import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  {
    title: "Moonlit courtyards",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Candlelit ritual tables",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "Mediterranean textures",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "Velvet dusk gatherings",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2",
  },
];

export default function Sanctuary() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="The Sanctuary"
        title="An editorial atmosphere shaped by sea air, softness, and selective mystery."
        description="The community lives between ritual and hedonism. The visual language is natural stone, flowing linen, amber flame, and the quiet confidence of people who do not need to perform."
      />

      <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-3xl text-linen">{item.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

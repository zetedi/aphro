import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const remaining =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

      setVisible(remaining > 48);
    };

    updateVisibility();
    const updateAfterNavigation = () => {
      window.setTimeout(updateVisibility, 0);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    window.addEventListener("aphro:navigate", updateAfterNavigation);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      window.removeEventListener("aphro:navigate", updateAfterNavigation);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex h-20 items-end justify-center bg-gradient-to-t from-obsidian/90 via-obsidian/45 to-transparent pb-4">
      <button
        type="button"
        aria-label="Scroll down"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" })}
        className="pointer-events-auto flex flex-col items-center text-gold/80 transition duration-300 hover:text-gold"
      >
        <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
        <ChevronDown className="-mt-3 h-5 w-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

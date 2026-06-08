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
    <button
      type="button"
      aria-label="Scroll down"
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" })}
      className="fixed bottom-5 left-1/2 z-40 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-gold/20 bg-obsidian/50 text-gold/75 shadow-glow backdrop-blur-md transition duration-300 hover:border-gold/35 hover:text-gold"
    >
      <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );
}

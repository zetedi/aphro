import { X } from "lucide-react";

export default function WhatsAppChoiceModal({ question, options, onClose }) {
  const openOption = (href) => {
    const newWindow = window.open(href, "_blank", "noopener,noreferrer");

    if (newWindow) {
      newWindow.opener = null;
    }

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-choice-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-[1.75rem] border border-white/10 bg-[#120d0f] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cancel"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-sand transition duration-300 hover:bg-white/10 hover:text-linen"
        >
          <X className="h-4 w-4" strokeWidth={1.5} />
        </button>

        <p
          id="whatsapp-choice-title"
          className="pr-10 font-display text-3xl leading-none text-linen"
        >
          {question}
        </p>

        <div className="mt-7 grid gap-3">
          {options.map(({ label, href }) => (
            <button
              key={label}
              type="button"
              onClick={() => openOption(href)}
              className="rounded-full border border-gold/20 bg-gold/10 px-5 py-3 text-left text-xs uppercase tracking-[0.18em] text-linen transition duration-300 hover:border-gold/45 hover:bg-gold/15"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.18em] text-sand transition duration-300 hover:bg-white/10 hover:text-linen"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

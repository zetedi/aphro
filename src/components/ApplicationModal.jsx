import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";

const stepLabels = ["Intention", "Contact"];

const initialForm = {
  intention: "",
  resonance: "",
  name: "",
  email: "",
  instagram: "",
};

export default function ApplicationModal({ event, onClose }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  const canContinue = useMemo(() => {
    if (step === 0) {
      return Boolean(form.intention.trim() && form.resonance.trim());
    }

    return Boolean(form.name.trim() && form.email.trim());
  }, [form, step]);

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (eventObject) => {
    eventObject.preventDefault();

    if (step < stepLabels.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-obsidian/80 p-3 backdrop-blur-md sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#120d0f] shadow-velvet"
        onClick={(eventObject) => eventObject.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,169,109,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(154,3,30,0.22),transparent_28%)]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-white/5 p-2 text-sand transition duration-300 hover:bg-white/10"
          aria-label="Close application form"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Apply for Invitation
          </p>
          <h3 className="mt-3 pr-10 font-display text-4xl leading-none text-linen">
            {event.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-sand/72">
            {event.date} · {event.location}
          </p>

          <div className="mt-8 flex items-center gap-3">
            {stepLabels.map((label, index) => (
              <div key={label} className="flex flex-1 items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${
                    index <= step
                      ? "border-gold/35 bg-gold/10 text-linen"
                      : "border-white/10 bg-white/5 text-sand/60"
                  }`}
                >
                  {submitted && index === stepLabels.length - 1 ? (
                    <Check className="h-4 w-4 text-gold" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < stepLabels.length - 1 ? (
                  <div className="h-px flex-1 bg-white/10" />
                ) : null}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className="mt-10 rounded-[1.75rem] border border-gold/20 bg-white/[0.04] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold/75">
                  Received
                </p>
                <h4 className="mt-3 font-display text-3xl text-linen">
                  Your intention is noted.
                </h4>
                <p className="mt-4 text-sm leading-7 text-sand/72">
                  Our hosts will review your application personally and reply
                  with the next steps if the resonance is mutual.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.24em] text-linen transition duration-500 hover:border-gold/35 hover:bg-white/10"
                >
                  Return to the Sanctuary
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="mt-10"
              >
                {step === 0 ? (
                  <div className="space-y-5">
                    <Field
                      label="What intention brings you to this gathering?"
                      value={form.intention}
                      onChange={(value) => updateField("intention", value)}
                      placeholder="Share the emotional, relational, or spiritual quality you wish to cultivate."
                      textarea
                    />
                    <Field
                      label="How do you align with consent, discretion, and collective care?"
                      value={form.resonance}
                      onChange={(value) => updateField("resonance", value)}
                      placeholder="Describe how you participate in intimate spaces with maturity and awareness."
                      textarea
                    />
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      value={form.name}
                      onChange={(value) => updateField("name", value)}
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="name@example.com"
                      type="email"
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Instagram or Telegram"
                        value={form.instagram}
                        onChange={(value) => updateField("instagram", value)}
                        placeholder="@handle"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.22em] text-sand transition duration-300 disabled:cursor-not-allowed disabled:opacity-35 hover:bg-white/10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={!canContinue}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.22em] text-linen transition duration-500 disabled:cursor-not-allowed disabled:opacity-45 hover:scale-[1.01] hover:border-gold/40 hover:bg-gold/15"
                  >
                    {step === stepLabels.length - 1 ? "Send Application" : "Continue"}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea = false,
  type = "text",
}) {
  const sharedClassName =
    "mt-2 w-full rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-linen outline-none transition duration-300 placeholder:text-sand/35 focus:border-gold/35 focus:bg-white/[0.06]";

  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-sand/70">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows="4"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`${sharedClassName} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={sharedClassName}
        />
      )}
    </label>
  );
}

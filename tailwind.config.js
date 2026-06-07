/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B090A",
        velvet: "#5E0B15",
        crimson: "#9A031E",
        sand: "#E3D5CA",
        linen: "#F5EBE0",
        gold: "#E0A96D",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
      boxShadow: {
        velvet: "0 24px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 1px rgba(224, 169, 109, 0.18), 0 18px 50px rgba(94, 11, 21, 0.22)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(154, 3, 30, 0.28), transparent 36%), radial-gradient(circle at 20% 20%, rgba(224, 169, 109, 0.12), transparent 30%), linear-gradient(180deg, #0b090a 0%, #150d10 52%, #0b090a 100%)",
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseSlow: "pulseSlow 8s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.05)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

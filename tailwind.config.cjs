/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff0f0",
          100: "#ffdbdb",
          200: "#ffb5b5",
          300: "#ff8f8f",
          400: "#ff6060",
          500: "#ef4444",
          600: "#d52e2e",
          700: "#b61f1f",
          800: "#921d1d",
          900: "#781d1d",
          950: "#460b0b",
        },
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },
        midnight: "#0f172a",
        charcoal: "#1f2937",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "Impact", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(239, 68, 68, 0.25)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

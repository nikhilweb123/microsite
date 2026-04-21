import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },

      colors: {
        obsidian: "var(--obsidian)",
        ivory: "var(--ivory)",
        ash: "var(--ash)",
        bone: "var(--bone)",
        background: "var(--bg-primary)",
        "background-secondary": "var(--bg-secondary)",
        "background-tertiary": "var(--bg-tertiary)",
        foreground: "var(--text-primary)",
        "foreground-secondary": "var(--text-secondary)",
        "foreground-muted": "var(--text-muted)",
        border: "var(--border-color)",
      },

      letterSpacing: {
        "ultra": "0.3em",
        "wide-xl": "0.2em",
      },
      transitionDuration: {
        "800": "800ms",
        "1200": "1200ms",
        "1500": "1500ms",
      },
    },
  },
  plugins: [],
};
export default config;

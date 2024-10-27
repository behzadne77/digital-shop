import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue": {
          100: "#EAF1F7",
          500: "#2C62B3",
          600: "#2358A7"
        },
        "dark": {
          600: "#727272",
          800: "#051324"
        }
      },
    },
  },
  plugins: [],
};
export default config;

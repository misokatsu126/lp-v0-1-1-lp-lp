import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  safelist: ["text-sumi"],
  theme: {
    extend: {
      colors: {
        shiro: "#fffdf8",
        kinari: "#f7f3ec",
        sumi: "#25231f",
        ai: "#456f7b",
        chakin: "#dfbf54",
        greige: "#eeece6",
        usunezu: "#f4f4f1",
        wakakusa: "#88aa82",
        food: "#dfbf54",
        move: "#d7796f",
        beauty: "#88aa82",
        mind: "#80a9c9"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(32, 32, 29, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

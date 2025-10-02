import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Runs Trial", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        'main-color': 'var(--main-color)',
        'second-color': 'var(--second-color)', 
        'btn-color': 'var(--btn-color)',
        'font-color': 'var(--font-color)',
      },
    },
  },
  plugins: [],
};

export default config;

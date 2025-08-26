import type { Config } from 'tailwindcss';
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  // tailwind.config.ts
  plugins: [typography]

};

export default config;

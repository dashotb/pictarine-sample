import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");



const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'mulish': ['"Mulish", sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screen: {
      'sm': { 'min': '100px', 'max': '1023px' },
      'mlg': { 'min': '1200px', 'max': '8000px' }
    }
  },
  plugins: [],
});
export default config;

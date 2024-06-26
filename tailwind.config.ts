import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },

      colors: {
        "main-white": "#F5F5F5",
        "contact-green": "#E7F874",
        "dark-blue": {
          DEFAULT: "#01303A",
          400: "#7F8C89",
          700: "#394649",
          800: "#3C4A47",
          900: "#083C2F",
        },
      },
    },
  },
  plugins: [],
};
export default config;

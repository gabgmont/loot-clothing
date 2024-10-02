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
      colors: {
        primary: "#FC007F",
        secondary: "#3A3935",
        accent: "#FC016E",
        neutral: "#6A6A6A",
        base: "#2C2C2C",
        info: "#b2ffff",
        success: "#36B37E",
        warning: "#FFAB00",
        error: "#FF5630"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        loot: {
          "primary": "#FC007F",
          "secondary": "#3A3935",
          "accent": "#50C878",
          "neutral": "#f9f9f9",
          "base-100": "#2C2C2C",
          "info": "#b2ffff",
          "success": "#36B37E",
          "warning": "#FFAB00",
          "error": "#FF5630"
        },
      },
    ],
  },
};
export default config;

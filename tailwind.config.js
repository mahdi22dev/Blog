/** @type {import('tailwindcss').Config} */
module.exports = {
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
        text: "#0b0408",
        background: "#f2dee8",
        primary: "#dca8a9",
        secondary: "#e3ceba",
        accent: "#94673d",
      },
      // screens: {
      //   lg: "1440px",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  darkMode: "class",
};

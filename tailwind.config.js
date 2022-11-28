/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff4db",
          100: "#ffe2ad",
          200: "#fece7e",
          300: "#fdbb4d",
          400: "#fca71c", // default
          500: "#e38e03",
          600: "#b06e00",
          700: "#7f4f00",
          800: "#4d2e00",
          900: "#1d0f00",
        },
        gray: {
          0: "#ffffff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

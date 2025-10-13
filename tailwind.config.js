/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        dark: "#0F0F0F",
        midnight: "#003049",
      },
      fontFamily: {
        sans: ["Montserrat", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

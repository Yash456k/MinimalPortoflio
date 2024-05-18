/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Courgette", "cursive"],
        customSerif: ["Playfair Display", "serif"],
        sketch: ["Londrina Sketch", "sans-serif"],
        smooth: ["Poetsen One", "sans-serif"],
        acme: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [],
};

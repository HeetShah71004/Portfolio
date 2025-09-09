/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', "sans-serif"],
      },
      colors: {
        "white-50": "#d9ecff",
        "white-600": "#a1a1aa",
        "white-700": "#71717a",
        "white-800": "#52525b",
        "black-50": "#1c1c21",
        "black-100": "#0e0e10",
        "black-200": "#282732",
        "black-300": "#1a1a1d",
        "blue-50": "#839cb5",
        "blue-100": "#2d2d38",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

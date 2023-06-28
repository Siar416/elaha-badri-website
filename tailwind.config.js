/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#588b8b",
        red: "#c8553d",
        peach: "#ffd5c2",
        orange: "#f28f3b",
        granite: "#665570",
        beige: "#F6F5D8",
        gray: "#4A4A4A",
      },
    },
  },
  plugins: [],
};

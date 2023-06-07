/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#99BD8E",
        pink: "#DF7272",
      },
    },
  },
  plugins: [],
};

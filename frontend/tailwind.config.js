/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "main-regular": ["Readex Pro", "sans-serif"],
      },
      colors: {
        "main": "#0096c7",
        "secondary": "#caf0f8",
        "third": "#03045e",
      },
    },
  },
  plugins: [],
};

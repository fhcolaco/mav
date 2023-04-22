/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "coming-soon": "url('/src/images/coming-soon.jpg')",
      },
      fontFamily: {
        Poltawski: ["Poltawski Nowy", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

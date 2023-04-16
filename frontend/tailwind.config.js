/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "coming-soon": "url('/src/images/coming-soon.jpg')",
      },
      animation: {
        leftToRight: "leftToRight 1s linear once",
        rightToLeft: "rightToLeft 1s linear once",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        testFont: "'Rubik Distressed', cursive",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};

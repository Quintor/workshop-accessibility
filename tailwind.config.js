/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        database: 'url("/assets/database.jpeg")',
      },
      animation: {
        spinner: "spinner 1s ease infinite",
      },
      keyframes: {
        spinner: {
          from: { transform: "rotate(0turn)" },
          to: { transform: "rotate(1turn);" },
        },
      },
    },
  },
  plugins: [],
};

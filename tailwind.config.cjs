/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        24: "6rem",
      },
      minHeight: {
        96: "24rem",
      },
    },
  },

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "'Raleway'",
        RobotoSlab: "'Roboto Slab'",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/daisyui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#F6F7F9",
      primary: "#3563E9",
      "secondary-300": "#90A3BF",
      "secondary-400": "#596780",
      "secondary-500": "#1A202C",
      information: "#54A6FF",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};

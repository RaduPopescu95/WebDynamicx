/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#021b39",
        secondary: "#fcfcfc",
        accent: "#62cdd1",
      },
    },
  },
  plugins: [],
};

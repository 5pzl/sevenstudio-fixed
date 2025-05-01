/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      colors: {
        yellowAccent: "#fddf4a",
        darkGreen: "#001a1a",
        tealGreen: "#0b2e2e",
        deepTeal: "#002b1f",
      },
    },
  },
  plugins: [],
};

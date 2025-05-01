/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowAccent: "#fddf4a",
        darkGreen: "#001a1a",
        tealGreen: "#0b2e2e",
        deepTeal: "#002b1f"
      },
      boxShadow: {
        glow: "0 0 35px rgba(0, 160, 127, 0.3), 0 0 80px rgba(253, 223, 74, 0.2)"
      },
      animation: {
        gradientFlow: "gradientFlow 20s ease infinite"
      },
      keyframes: {
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }
    }
  },
  plugins: []
};

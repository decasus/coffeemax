/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: "#7C4A31"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
      },
    }
  },
  plugins: []
};

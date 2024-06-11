/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "circle-scatter": "url(src/assets/circle-scatter-haikei.svg)",
      },
    },
  },
  plugins: [],
};

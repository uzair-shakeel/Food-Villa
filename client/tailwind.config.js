/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff0000", // You can replace this with your preferred red color code
        orange: "#FF9800", // You can replace this with your preferred orange color code
        gray: "#5F8670",
        redhover: "#820300",
        orangehover: "#E36414",
      },
      fontFamily: {
        cursiveFont: ["Island Moments", "cursive"],
        paraFont: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};

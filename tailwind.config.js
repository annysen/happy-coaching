/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        cream: "#FAF8F6",
      },
      textColor: {
        primary: "#333461",
        secondary: "#4A556C",
      },
    },
  },
  plugins: [require("daisyui")],
};

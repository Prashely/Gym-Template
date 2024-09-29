/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#e8e8e8",
        hoverEffect: "#b7b7b7",
        bgSecondary: "#8c8c8c",
        buttonIcons: "#525252",
        bgTertiary: "#000000",
      },
    },
  },
  plugins: [require("daisyui")],
};

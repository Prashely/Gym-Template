/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#14213d" /* Blue */,
        bgSecondary: "#fca311" /* Yellow */,
        bgTertiary: "#313638" /* Black */,
      },
    },
  },
  plugins: [require("daisyui")],
};

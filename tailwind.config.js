/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cs-gray": "#232323",
        "cs-light": "#f5f5f5",
      },
      keyframes: {
        "rotate-bg": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-bg": "rotate-bg 3s linear infinite",
      },
    },
    plugins: [],
  },
};

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
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "dark:cs-light, black",
          },
        },
      },
      animation: {
        "rotate-bg": "rotate-bg 3s linear infinite",
        typing: "typing 1s steps(15) alternate, blink .7s infinite",
      },
    },
    plugins: [],
  },
};

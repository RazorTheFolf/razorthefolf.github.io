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
        "slide-in-blurred-bottom": {
          "0%": {
            transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
            transfromOrigin: "50% 100%",
            filter: "blur(40px)",
            opacity: 0,
          },
          "100%": {
            transform: " translateY(0) scaleY(1) scaleX(1)",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "rotate-bg": "rotate-bg 3s linear infinite",
        typing: "typing 1s steps(15) alternate, blink .7s infinite",
        "slide-in-blurred-bottom":
          "slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      },
    },
    plugins: [],
  },
};

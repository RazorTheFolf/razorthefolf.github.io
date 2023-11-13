import { useState } from "react";
import ProfilePicture from "./assets/profile_picture.webp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";

export default function App() {
  const html = document.querySelector("html");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : localStorage.getItem("darkMode") === "true"
  );

  function toggleDarkMode() {
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  }

  if (localStorage.getItem("darkMode") === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  } else {
    localStorage.getItem("darkMode") === "true"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  }

  if (navigator.userAgent.includes("Safari")) {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", !darkMode ? "#f5f5f5" : "#232323");
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

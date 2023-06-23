import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const html = document.querySelector("html");
  const [darkMode, setDarkMode] = useState(html.className === "dark");

  function toggleDarkMode() {
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", darkMode ? "#f5f5f5" : "#191919");
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

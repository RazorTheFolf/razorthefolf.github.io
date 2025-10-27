import React from "react";

export default function ThemeSwitcher() {
  return (
    <>
      <select name="theme" id="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </>
  );
}

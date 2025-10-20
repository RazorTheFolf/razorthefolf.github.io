import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/*Ester Egg*/
console.log("Hewoo :3");
console.log("I'm glad you're here :D");
console.log("So you're a developer too ?");
console.log(
  "You can check the code here: https://github.com/RazorTheFolf/razorthefolf.github.io"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

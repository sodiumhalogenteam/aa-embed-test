import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("new-features") as HTMLElement
).render(
  <React.StrictMode>
    <App user={{ userId: "78978907890" }} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

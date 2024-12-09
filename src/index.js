import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter
      // Ajout des flags v7_relativeSplatPath et v7_startTransition pour enlever le message d'erreur dû a reatRouter v7
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
);

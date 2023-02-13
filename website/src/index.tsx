import React from "react";
import i18n from "i18next";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";

import App from "./App";
import english from "./translations/en.json";
import spanish from "./translations/es.json";
import reportWebVitals from "./reportWebVitals";

i18n.use(initReactI18next).init({
  resources: {
    en: english,
    es: spanish,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

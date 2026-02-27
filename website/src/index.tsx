import React from "react";
import i18n from "i18next";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";

import "./index.css";

import App from "./App";
import english from "./translations/en.json";
import spanish from "./translations/es.json";
import reportWebVitals from "./reportWebVitals";
import posthog from "posthog-js";

// Only initialize PostHog when the key is provided (in production)
if (import.meta.env.VITE_PUBLIC_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
    api_host:
      import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    autocapture: true, // Captures clicks, inputs, and other interactions automatically
    capture_pageview: true, // Captures the pageview automatically
  });
}

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
  document.getElementById("root") as HTMLElement,
);

window.onblur = function () {
  document.title = "Bye!, hope to see you soon";
};

window.onfocus = function () {
  document.title = "Hi again!";
  setTimeout(() => {
    document.title = "I'm nestordgs";
  }, 5000);
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

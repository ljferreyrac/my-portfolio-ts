import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import en from "./i18n/en.json";
import es from "./i18n/es.json";
import "./index.css";
import { Portfolio } from "./Portfolio";

i18next.use(initReactI18next).init({
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);

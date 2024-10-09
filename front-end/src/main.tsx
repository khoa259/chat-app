import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/css/custome.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/index.ts";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </I18nextProvider>
);

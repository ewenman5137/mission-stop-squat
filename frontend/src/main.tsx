import React from "react";
import { createRoot } from "react-dom/client";  // ← au lieu de "ReactDOM"
import App from "./App";
import { HelmetProvider } from "react-helmet-async";  // ou "react-helmet" si tu n’utilises pas la version async

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

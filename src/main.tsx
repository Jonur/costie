import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/bubblegum-sans/400.css";
import "./styles.css";

import AppTree from "./components/AppTree";
import { CostieProvider } from "./state";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CostieProvider>
      <AppTree />
    </CostieProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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

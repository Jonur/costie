import bubblegumWoff2 from "@fontsource/bubblegum-sans/files/bubblegum-sans-latin-400-normal.woff2?url";
import robotoWoff2 from "@fontsource/roboto/files/roboto-latin-400-normal.woff2?url";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import AppTree from "./components/AppTree";
import { CostieProvider } from "./state";

const preloadFont = (href: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "font";
  link.type = "font/woff2";
  link.href = href;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

preloadFont(robotoWoff2);
preloadFont(bubblegumWoff2);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CostieProvider>
      <AppTree />
    </CostieProvider>
  </StrictMode>
);

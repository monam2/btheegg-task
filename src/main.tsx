import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import Main from "@/pages/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);

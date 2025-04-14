import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CliReference from "./components/cli-reference/CliReference";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CliReference />
  </StrictMode>
);

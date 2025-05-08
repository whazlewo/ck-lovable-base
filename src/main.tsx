import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@workday/canvas-tokens-web/css/base/_variables.css";
import "@workday/canvas-tokens-web/css/brand/_variables.css";
import "@workday/canvas-tokens-web/css/system/_variables.css";

createRoot(document.getElementById("root")!).render(<App />);

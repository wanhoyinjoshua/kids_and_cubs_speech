import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import GlobalStyle from "./fonts/font";

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);

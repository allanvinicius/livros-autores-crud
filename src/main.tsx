import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "@radix-ui/themes/styles.css";
import { GlobalStyle } from "./styles/global";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Theme appearance="dark">
        <App />
      </Theme>
    </>

    <GlobalStyle />
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <>
    <Theme appearance="dark">
      <App />
    </Theme>

    <GlobalStyle />
  </>
);

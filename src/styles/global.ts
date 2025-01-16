import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
  
  button {
    cursor: pointer !important;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
`;

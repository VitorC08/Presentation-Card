import React from "react";
import ReactDOM from "react-dom/client";
import App from "./assets/pages/App.jsx";
import GlobalStyle from "./assets/components/styles/glotal.js";
import { ThemeProvider } from "styled-components";
import theme from "./assets/components/styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

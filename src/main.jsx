import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import useTheme from "./useTheme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const AppBase = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <AppBase />
  </React.StrictMode>
);

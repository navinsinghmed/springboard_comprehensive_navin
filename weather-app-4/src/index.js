import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom";
import "./styles.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

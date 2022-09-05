import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthModeContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthModeContextProvider>
        <App />
      </AuthModeContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "green",
          },
        },
        error: {
          style: {
            backgroundColor: "#f7665e",
            color: "white",
          },
        },
      }}
    />
  </React.StrictMode>
);

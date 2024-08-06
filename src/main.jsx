import React from "react";

import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "remixicon/fonts/remixicon.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

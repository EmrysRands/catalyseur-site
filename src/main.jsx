// main.jsx (version prête Catalyseur 3.0)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </Router>
  </React.StrictMode>
);

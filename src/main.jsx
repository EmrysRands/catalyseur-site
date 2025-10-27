// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import App from "./App.jsx";
import Layout from "./components/Layout";

// ✅ Active les pages Strate
import StrateReinvention from "./pages/StrateReinvention.jsx";
import StrateAutomatisation from "./pages/StrateAutomatisation.jsx";
import StrateApplication from "./pages/StrateApplication.jsx";
import StrateLiberte from "./pages/StrateLiberte.jsx";

import "./index.css";

/* 🌈 Fond dégradé dynamique selon la route */
function BackgroundGradient() {
  const location = useLocation();
  const gradients = {
    "/": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]",
    "/strate-reinvention": "from-blue-900 via-purple-700 to-indigo-900",
    "/strate-automatisation": "from-indigo-700 via-blue-500 to-sky-400",
    "/strate-application": "from-cyan-700 via-blue-600 to-indigo-800",
    "/strate-liberte": "from-[#1a1444] via-[#312e81] to-[#0f172a]",
    default: "from-[#0f0f0f] via-[#111] to-[#1a1a1a]",
  };

  const gradientClass = gradients[location.pathname] || gradients.default;

  return (
    <motion.div
      key={location.pathname}
      className={`fixed inset-0 bg-gradient-to-br ${gradientClass} transition-all duration-700 -z-10`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  );
}

/* 🎞️ Animation d’entrée/sortie de page */
function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/* 🧭 Routage principal de l’application */
function AnimatedRoutes() {
  return (
    <>
      <BackgroundGradient />
      <PageTransition>
        <Routes>
          {/* 🏠 Page d’accueil */}
          <Route
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />

          {/* ⚡️ Pages Strates */}
          <Route
            path="/strate-reinvention"
            element={
              <Layout>
                <StrateReinvention />
              </Layout>
            }
          />
          <Route
            path="/strate-automatisation"
            element={
              <Layout>
                <StrateAutomatisation />
              </Layout>
            }
          />
          <Route
            path="/strate-application"
            element={
              <Layout>
                <StrateApplication />
              </Layout>
            }
          />
          <Route
            path="/strate-liberte"
            element={
              <Layout>
                <StrateLiberte />
              </Layout>
            }
          />
        </Routes>
      </PageTransition>
    </>
  );
}

/* 🚀 Initialisation du rendu React */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);

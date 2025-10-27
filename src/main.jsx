// main.jsx — Catalyseur Digital 3.0 (structure modulaire complète)
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
import StrateReinvention from "./pages/StrateReinvention.jsx";
import StrateAutomatisation from "./pages/StrateAutomatisation.jsx";
import StrateApplication from "./pages/StrateApplication.jsx";
import StrateLiberte from "./pages/StrateLiberte.jsx";
import "./index.css";

function BackgroundGradient() {
  const location = useLocation();
  const gradients = {
    "/": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]",
    "/reinvention": "from-blue-900 via-purple-700 to-indigo-900",
    "/automatisation": "from-indigo-700 via-blue-500 to-sky-400",
    "/application": "from-cyan-700 via-blue-600 to-indigo-800",
    "/liberte": "from-[#1a1444] via-[#312e81] to-[#0f172a]",
    "/a-propos": "from-[#0f172a] via-[#312e81] to-[#581c87]",
    "/contact": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]",
    "/ressources": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]",
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

function AnimatedRoutes() {
  return (
    <>
      <BackgroundGradient />
      <PageTransition>
        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />

          {/* Parcours de transformation */}
          <Route
            path="/reinvention"
            element={
              <Layout>
                <StrateReinvention />
              </Layout>
            }
          />
          <Route
            path="/automatisation"
            element={
              <Layout>
                <StrateAutomatisation />
              </Layout>
            }
          />
          <Route
            path="/application"
            element={
              <Layout>
                <StrateApplication />
              </Layout>
            }
          />
          <Route
            path="/liberte"
            element={
              <Layout>
                <StrateLiberte />
              </Layout>
            }
          />

          {/* Pages structurelles */}
          <Route
            path="/a-propos"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/ressources"
            element={
              <Layout>
                <Resources />
              </Layout>
            }
          />
        </Routes>
      </PageTransition>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);

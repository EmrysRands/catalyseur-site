// main.jsx (Catalyseur Digital 3.0)
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
import Nova from "./pages/Nova.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./pages/Resources.jsx";
import Layout from "./components/Layout";
import StrateReinvention from "./pages/StrateReinvention.jsx";
import StrateAutomatisation from "./pages/StrateAutomatisation.jsx";
import StrateApplication from "./pages/StrateApplication.jsx";
import StrateLiberte from "./pages/StrateLiberte.jsx";
import NotFound from "./components/NotFound.jsx";
import "./index.css";

function BackgroundGradient() {
  const location = useLocation();
  const gradients = {
    "/": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]",
    "/nova": "from-indigo-800 via-blue-500 to-cyan-400",
    "/contact": "from-yellow-600 via-yellow-500 to-yellow-300",
    "/reinvention": "from-blue-900 via-purple-700 to-indigo-900",
    "/automatisation": "from-indigo-700 via-blue-500 to-sky-400",
    "/application": "from-cyan-700 via-blue-600 to-indigo-800",
    "/liberte": "from-amber-500 via-yellow-400 to-orange-500",
    default: "from-[#0f0f0f] via-[#111] to-[#1a1a1a]",
  };

  const gradientClass =
    gradients[location.pathname] || gradients.default;

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
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
          <Route
            path="/"
            element={
              <Layout>
                <App /> {/* Accueil complète */}
              </Layout>
            }
          />
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
          <Route
            path="/nova"
            element={
              <Layout>
                <Nova />
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
          <Route path="*" element={<NotFound />} />
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

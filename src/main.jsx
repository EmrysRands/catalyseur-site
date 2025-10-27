// main.jsx (Catalyseur Digital 3.0 - avec transition de fond animée)
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
import NotFound from "./components/NotFound.jsx";
import "./index.css";

/* 🎬 Définition de l’arrière-plan dynamique selon la route */
function BackgroundGradient() {
  const location = useLocation();

  const gradients = {
    "/": "from-[#0f172a] via-[#1e3a8a] to-[#581c87]", // bleu-violet Hero
    "/nova": "from-indigo-800 via-blue-500 to-cyan-400", // effet IA
    "/contact": "from-yellow-600 via-yellow-500 to-yellow-300", // gold chaleureux
    default: "from-[#0f0f0f] via-[#111] to-[#1a1a1a]",
  };

  const gradientClass =
    gradients[location.pathname] || gradients.default;

  return (
    <motion.div
      key={location.pathname}
      className={`fixed inset-0 bg-gradient-to-br ${gradientClass} transition-all duration-700`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  );
}

/* ⚡ Animation de transition entre les pages */
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

/* 🧭 Gestion des routes */
function AnimatedRoutes() {
  return (
    <>
      <BackgroundGradient /> {/* 🎨 Fond animé */}
      <PageTransition>
        <Routes>
          <Route path="/" element={<App />} /> {/* Accueil */}
          <Route path="/nova" element={<Nova />} /> {/* Guide IA */}
          <Route path="/contact" element={<Contact />} /> {/* Contact */}
          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Routes>
      </PageTransition>
    </>
  );
}

/* 🚀 Point d’entrée React */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);

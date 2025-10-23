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
import ThankYou from "./components/ThankYou.jsx";
import Access from "./components/Access.jsx";
import NotFound from "./components/NotFound.jsx";
import "./index.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AnimatedRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/merci" element={<ThankYou />} />
        <Route path="/access" element={<Access />} /> {/* ✅ corrigé ici */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);

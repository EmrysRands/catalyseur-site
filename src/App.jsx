// App.jsx (Catalyseur Digital 3.0)
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

// ✅ Import des 4 Strates + Pages globales
import Home from "./pages/Home";
import StrateReinvention from "./pages/StrateReinvention";
import StrateAutomatisation from "./pages/StrateAutomatisation";
import StrateApplication from "./pages/StrateApplication";
import StrateLiberte from "./pages/StrateLiberte";
import Nova from "./pages/Nova";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      <Routes>
        {/* 🏠 Page d’accueil */}
        <Route path="/" element={<Home />} />

        {/* 🌱 Les 4 Strates */}
        <Route path="/reinvention" element={<StrateReinvention />} />
        <Route path="/automatisation" element={<StrateAutomatisation />} />
        <Route path="/application" element={<StrateApplication />} />
        <Route path="/liberte" element={<StrateLiberte />} />

        {/* 🤖 Nova IA */}
        <Route path="/nova" element={<Nova />} />

        {/* 📘 Pages secondaires */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />

        {/* 🚫 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Chatbot />
    </motion.div>
  );
}

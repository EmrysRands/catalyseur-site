import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Books from "./components/Books";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Testimonials from "./components/Testimonials";
import Access from "./pages/Access"; // ✅ importe ta page membre

export default function App() {
  return (
    <Router>
      <Routes>
        {/* PAGE PRINCIPALE */}
        <Route
          path="/"
          element={
            <>
              <motion.div
                className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Header />

                <motion.div
                  className="flex flex-col items-center justify-center min-h-[70vh] text-center"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-4 text-gold"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    ⚡ Catalyseur Digital
                  </motion.h1>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    Ta renaissance professionnelle à l’ère de l’IA
                  </motion.p>
                </motion.div>

                {/* Sections */}
                <Hero />
                <Features />
                <Books />
                <CTA />
                <Testimonials />
                <FAQ />
                <Footer />
              </motion.div>
              <Chatbot />
            </>
          }
        />

        {/* PAGE MEMBRE */}
        <Route path="/access" element={<Access />} />
      </Routes>
    </Router>
  );
}

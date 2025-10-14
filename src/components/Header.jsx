import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Ferme le menu mobile automatiquement quand on scrolle
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // 🌈 Navigation fluide au clic
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const menuLinks = [
    { label: "Pourquoi Catalyseur ?", href: "#features" },
    { label: "Collection Renaissance IA", href: "#books" },
    { label: "FAQ", href: "#faq" },
    { label: "Commencer", href: "#cta" },
  ];

  return (
    <>
      {/* 🎁 Bandeau promo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-3 text-sm font-semibold shadow-md backdrop-blur-md z-[1001]"
      >
        ✨ <strong>Renaissance IA :</strong> Plus que{" "}
        <span className="text-yellow-400 font-bold">127 places</span> · 🎁 Bonus offert aux 50 premiers
      </motion.div>

      {/* 💎 Header principal */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed w-full top-[32px] flex justify-between items-center px-6 md:px-12 bg-gradient-to-r from-slate-900/90 to-indigo-900/90 backdrop-blur-md shadow-lg z-[1000] h-[70px]"
      >
        {/* 🔥 Logo + Titre */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => handleSmoothScroll(e, "body")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-2xl">⚡</span>
          </div>
          <span className="text-white font-semibold text-lg sm:text-xl tracking-wide font-[Inter]">
            Catalyseur Digital
          </span>
        </motion.div>

        {/* CTA Desktop */}
        <motion.a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
          className="hidden md:inline-block px-6 py-2 rounded-full text-white font-bold text-base bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:shadow-lg hover:scale-105 transition-all"
          whileTap={{ scale: 0.95 }}
        >
          ✨ Commencer
        </motion.a>


        {/* ☰ Burger Menu Mobile */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer"
        >
          <span
            className={`h-[3px] bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-[3px] bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[3px] bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </div>

        {/* 🌙 Menu Mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-[70px] left-0 w-full bg-gradient-to-br from-indigo-900/95 to-purple-900/95 flex flex-col items-center gap-4 py-6 text-white text-lg font-medium shadow-2xl border-t border-white/10 md:hidden"
            >
              {menuLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  whileHover={{ scale: 1.05 }}
                  className={`${
                    item.href === "#cta"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-lg shadow-md font-bold"
                      : "hover:text-purple-300"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

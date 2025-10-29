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

  // 🌈 Navigation fluide au clic (pour les ancres internes)
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // 🌐 Liens principaux visibles sur desktop
  const desktopLinks = [
    { label: "Les 4 Strates", href: "#features" },
    { label: "À propos", href: "#about" },
  ];

  // 📱 Liens supplémentaires visibles uniquement dans le menu mobile
  const mobileExtraLinks = [
    { label: "Diagnostic Nova", href: "#nova" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 🎁 Bandeau promo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black text-center py-2 px-3 text-sm font-semibold shadow-md backdrop-blur-md z-[1001]"
      >
        <span className="hidden sm:inline">🎁 </span>
        <strong>77 Fiches Nova disponibles</strong>
        <span className="hidden sm:inline"> • </span>
        <span className="text-white font-bold">100% Gratuit</span> jusqu'à la Strate 3
        <span className="hidden sm:inline"> 🚀</span>
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
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md">
            <span className="text-2xl">⚡</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg sm:text-xl tracking-wide font-[Inter]">
              Catalyseur Digital
            </span>
            <span className="text-xs text-gray-400 hidden sm:block">v3.0 • Parcours Progressif</span>
          </div>
        </motion.div>

        {/* 🔗 Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-slate-200 font-semibold">
          {desktopLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              whileHover={{ scale: 1.05, color: "#d4af37" }}
              className="hover:text-gold transition"
            >
              {item.label}
            </motion.a>
          ))}
          
          {/* CTA Desktop */}
          <motion.a
            href="/strate-reinvention"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-5 py-2.5 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition shadow-lg"
          >
            Commencer
          </motion.a>
        </div>

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
              {[...desktopLinks, ...mobileExtraLinks].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-purple-300 transition"
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* CTA Mobile */}
              <motion.a
                href="/strate-reinvention"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition shadow-lg mt-2"
              >
                🚀 Commencer
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
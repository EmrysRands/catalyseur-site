import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import products from "../data/products.json";

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const [seconds, setSeconds] = useState(5);

  // Fusionne ebooks + bundle
  const allProducts = [...products.ebooks, products.bundle];
  const ebook = allProducts.find((p) => p.type === type) || {
    title: "Votre Ebook Catalyseur Digital",
    file: "/ebooks/default.pdf",
  };

  // 🎉 Confettis + redirection automatique
  useEffect(() => {
    launchConfetti();

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (seconds === 0) navigate("/#books");

    return () => clearInterval(timer);
  }, [seconds, navigate]);

  // 🌈 Animation confettis bleu-violet
  const launchConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 75,
        origin: { x: 0 },
        colors: ["#3B82F6", "#8B5CF6", "#A78BFA", "#60A5FA", "#E0E7FF"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 75,
        origin: { x: 1 },
        colors: ["#3B82F6", "#8B5CF6", "#A78BFA", "#60A5FA", "#E0E7FF"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-center text-white p-8 relative overflow-hidden">
      {/* Halo bleu-violet */}
      <motion.div
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-blue-600 via-purple-600 to-transparent blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Cercle vert animé */}
      <motion.div
        className="flex items-center justify-center w-24 h-24 rounded-full bg-green-500 shadow-lg mb-6 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-4xl font-bold"
        >
          ✓
        </motion.span>
      </motion.div>

      {/* Message principal */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-blue-300 mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Réservation confirmée 🎉
      </motion.h1>

      <motion.p
        className="text-slate-200 max-w-xl leading-relaxed mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Merci d’avoir choisi <strong>Catalyseur Digital</strong> 💡  
        Ton exemplaire de <strong>{ebook.title}</strong> est prêt à être téléchargé.
        <br />
        <span className="text-purple-300 font-semibold">
          Redirection automatique dans {seconds} seconde{seconds > 1 ? "s" : ""}...
        </span>
      </motion.p>

      {/* Bouton téléchargement */}
      <motion.a
        href={ebook.file}
        download
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition mb-10 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📥 Télécharger {ebook.title}
      </motion.a>

      {/* Offre bundle */}
      {type !== "bundle" && (
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg max-w-lg z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-300 mb-3">
            🎁 Offre spéciale Renaissance IA
          </h3>
          <p className="text-slate-200 mb-4">
            Profite du <strong>{products.bundle.title}</strong> pour seulement{" "}
            <span className="text-purple-300">{products.bundle.price} €</span>.
          </p>
          <a
            href="/bundle"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition"
          >
            🚀 Découvrir le bundle complet
          </a>
        </motion.div>
      )}

      {/* Lien retour manuel */}
      <motion.a
        href="/#books"
        className="mt-10 text-purple-300 hover:underline text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ← Retour à la collection Renaissance IA
      </motion.a>
    </section>
  );
}

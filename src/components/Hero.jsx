import { motion } from "framer-motion";

export default function Hero() {
  // 🌈 Fonction de scroll fluide vers une section cible
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-hidden relative"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-purple-500/10 to-transparent blur-3xl opacity-60"></div>

      {/* Titre principal */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold font-[Inter] mb-6 leading-tight relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Passe du chaos digital{" "}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
          à la clarté
        </span>
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl leading-relaxed mb-8 text-slate-200 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Tu n'as pas besoin d'un autre outil.  
        Tu as besoin de <strong>comprendre le système</strong>.
        <br />
        <br />
        Nous t'accompagnons pour transformer l'IA en levier — pas en obstacle.
      </motion.p>

      {/* Bloc narratif inspirant */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-10 max-w-3xl 
        backdrop-blur-sm shadow-[0_0_25px_rgba(212,175,55,0.15)] relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
          <strong className="text-[#D4AF37]">Le monde change.</strong>
          <br />
          Ceux qui savent connecter humain, IA et automatisation deviennent les vrais leaders de demain.
          <br />
          <br />
          Ici, on t'apprend à <span className="text-[#D4AF37] font-semibold">piloter ton système</span>, 
          pas à subir la technologie.
        </p>
      </motion.div>

      {/* CTA principal */}
      <motion.a
        href="#parcours"
        onClick={(e) => handleSmoothScroll(e, "#parcours")}
        className="px-8 py-4 text-lg font-semibold rounded-full 
        bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black shadow-lg 
        hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        🚀 Découvre ton parcours de transformation
      </motion.a>

      {/* Texte complémentaire */}
      <motion.p
        className="mt-8 text-sm md:text-base text-slate-300 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        ✨ Du déclic à l'action, de l'action aux résultats
      </motion.p>
    </section>
  );
}

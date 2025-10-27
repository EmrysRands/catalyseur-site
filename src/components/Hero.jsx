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
        Le Pont entre{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Humain & IA
        </span>
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl leading-relaxed mb-8 text-slate-200 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Tu n’as pas besoin d’un autre outil.  
        Tu as besoin de comprendre le système.  
        <br />
        Catalyseur Digital t’aide à passer du chaos à la clarté - grâce à
        l’automatisation et à l’intelligence artificielle.
      </motion.p>

      {/* Phrase pivot */}
      <motion.p
        className="text-blue-400 text-xl md:text-2xl font-semibold mb-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Ton nouveau départ commence ici.
      </motion.p>

      {/* Bloc narratif inspirant */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-8 max-w-3xl 
        backdrop-blur-sm shadow-[0_0_25px_rgba(139,92,246,0.15)] relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
          <strong className="text-blue-400">Le monde change :</strong>  
           ceux qui savent connecter les bons leviers - humain, IA et
          automatisation - deviennent les vrais leaders de demain.
          <br />
          <br />
          Ici, on t’apprend à piloter ton système, pas à subir la technologie.
        </p>
      </motion.div>

      {/* CTA principal */}
      <motion.a
        href="#strates"
        onClick={(e) => handleSmoothScroll(e, "#strates")}
        className="px-8 py-4 mt-8 text-lg font-semibold rounded-full 
        bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-105 
        transition-all duration-300 relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        🚀 Découvrir les 4 Strates de Transformation
      </motion.a>

      {/* Texte complémentaire */}
      <motion.p
        className="mt-8 text-sm md:text-base text-purple-300 font-semibold relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        🌍 Un parcours pour passer du chaos digital à la liberté durable.
      </motion.p>
    </section>
  );
}

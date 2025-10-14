import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Reprendre le contrôle de ton avenir",
      description:
        "Tu n’attends plus qu’un employeur te sauve. Tu construis ton propre système de revenus avec les outils et les stratégies du nouveau monde digital.",
    },
    {
      icon: "⚡",
      title: "Apprendre vite, sans diplôme technique",
      description:
        "Pas besoin de retourner à l’école. Les métiers digitaux accessibles sont expliqués simplement, avec des exercices et outils concrets à appliquer dès aujourd’hui.",
    },
    {
      icon: "🤖",
      title: "L’IA comme alliée, pas comme menace",
      description:
        "Au lieu de subir la technologie, tu apprends à la dompter. Gagne du temps, automatise les tâches répétitives et multiplie tes opportunités.",
    },
    {
      icon: "🌟",
      title: "Liberté et sens retrouvés",
      description:
        "Travaille à ton rythme, choisis tes clients et retrouve du sens. Tu ne cherches plus un job : tu bâtis ta liberté digitale.",
    },
  ];

  // 🎬 Animation parent orchestrant les enfants (stagger)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.6,
      },
    },
  };

  // ✨ Animation individuelle
  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // 🌊 Wave reveal diagonal
  const waveControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      waveControls.start({
        x: "120%",
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }, 400);
    return () => clearTimeout(timer);
  }, [waveControls]);

  return (
    <section
      id="features"
      className="relative py-20 px-6 text-center bg-gradient-to-b from-slate-50 to-indigo-50 overflow-hidden"
    >
      {/* 🌊 Overlay diagonal (effet de vague reveal) */}
      <motion.div
        initial={{ x: "-120%" }}
        animate={waveControls}
        className="absolute top-0 left-0 w-[200%] h-full rotate-[-12deg] bg-gradient-to-br from-purple-500/30 via-violet-400/20 to-amber-300/20 pointer-events-none"
      />

      {/* 🎯 Titre principal */}
      <motion.h2
        className="relative text-4xl md:text-5xl font-bold font-[Inter] mb-16 text-slate-900"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Comment{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Catalyseur Digital
        </span>{" "}
        te transforme
      </motion.h2>

      {/* 🧩 Grille avec effet stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto z-[2]"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow:
                "0 0 25px rgba(139,92,246,0.3), 0 8px 20px rgba(0,0,0,0.1)",
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] p-8 flex flex-col justify-center items-center transition-all duration-300 backdrop-blur-sm"
          >
            <motion.div
              className="text-4xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.3,
              }}
            >
              {f.icon}
            </motion.div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
              {f.title}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

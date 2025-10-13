import { motion } from "framer-motion";

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

  return (
    <section
      id="features"
      className="py-20 px-6 text-center bg-gradient-to-b from-slate-50 to-indigo-50"
    >
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold font-[Inter] mb-12 text-slate-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Comment{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Catalyseur Digital
        </span>{" "}
        te transforme
      </motion.h2>

      {/* Grille des features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] p-8 flex flex-col justify-center items-center transition-all duration-300"
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow:
                "0 0 25px rgba(139,92,246,0.3), 0 8px 20px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
              {f.title}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

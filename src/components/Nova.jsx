import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nova() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState(null);

  const handleSelect = (answer) => {
    setChoice(answer);
    setStep(2);
  };

  const handleRedirect = (goal) => {
    let target = "/";
    if (goal === "clarté") target = "/reinvention";
    if (goal === "temps") target = "/automatisation";
    if (goal === "résultats") target = "/application";
    if (goal === "liberté") target = "/liberte";
    navigate(target);
  };

  return (
    <section
      id="nova"
      className="relative py-32 flex flex-col items-center text-center px-6 
                 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-hidden"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-blue-400/10 to-transparent blur-3xl opacity-60"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🤖 Nova, ton Guide IA personnel
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Réponds à deux questions simples et Nova t’indiquera la prochaine étape idéale de ton parcours.
      </motion.p>

      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-md relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {step === 1 && (
          <>
            <p className="text-slate-200 mb-4 text-left">
              1️⃣ Quel est ton principal défi aujourd’hui ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSelect("clarté")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Manque de clarté sur ma direction
              </button>
              <button
                onClick={() => handleSelect("temps")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Trop de tâches répétitives
              </button>
              <button
                onClick={() => handleSelect("résultats")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Pas assez de résultats concrets
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-slate-200 mb-4 text-left">
              2️⃣ Que veux-tu obtenir en priorité ?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleRedirect("clarté")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Plus de clarté
              </button>
              <button
                onClick={() => handleRedirect("temps")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Plus de temps
              </button>
              <button
                onClick={() => handleRedirect("résultats")}
                className="bg-gold text-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Plus de résultats
              </button>
              <button
                onClick={() => handleRedirect("liberté")}
                className="bg-white text-dark font-bold py-3 rounded-lg hover:bg-gray-200 transition mt-4"
              >
                🏆 Atteindre la Liberté Digitale
              </button>
            </div>
          </>
        )}
      </motion.div>

      <motion.p
        className="mt-8 text-sm md:text-base text-purple-300 font-semibold relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        🌟 Nova analyse ton besoin et t’oriente vers la phase adaptée à ton évolution.
      </motion.p>
    </section>
  );
}

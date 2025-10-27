// src/pages/Nova.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nova() {
  const navigate = useNavigate();

  // États internes
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Questions de diagnostic
  const questions = [
    {
      id: "situation",
      text: "Aujourd’hui, quel est ton plus grand blocage digital ?",
      options: [
        { label: "Je ne sais pas par où commencer", value: "reinvention" },
        { label: "Je veux automatiser mes tâches", value: "automatisation" },
        { label: "Je veux des résultats concrets", value: "application" },
        { label: "Je veux structurer et scaler", value: "liberte" },
      ],
    },
    {
      id: "objectif",
      text: "Quel résultat aimerais-tu atteindre dans les 30 prochains jours ?",
      options: [
        { label: "Clarté et vision", value: "reinvention" },
        { label: "Gagner du temps", value: "automatisation" },
        { label: "Des revenus stables", value: "application" },
        { label: "Plus de liberté et de sérénité", value: "liberte" },
      ],
    },
  ];

  const handleSelect = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // Fin du quiz : calcul du résultat dominant
      const values = Object.values({ ...answers, [questionId]: value });
      const counts = values.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      const max = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(max);
    }
  };

  const handleNavigate = () => {
    if (result === "reinvention") navigate("/reinvention");
    if (result === "automatisation") navigate("/automatisation");
    if (result === "application") navigate("/application");
    if (result === "liberte") navigate("/liberte");
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-dark text-gold overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="text-center mt-24 mb-10 max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          👋 Salut, je suis Nova.
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Je suis ton guide IA personnel. Réponds à quelques questions pour
          savoir quelle étape est la plus adaptée à ton évolution digitale.
        </motion.p>
      </section>

      {/* INTERACTION */}
      {!result ? (
        <section className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-16 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {questions[step].text}
          </h2>
          <div className="grid gap-4">
            {questions[step].options.map((opt) => (
              <motion.button
                key={opt.value}
                className="w-full bg-gray-800 text-gray-100 border border-gray-700 px-6 py-3 rounded-xl hover:bg-gold hover:text-dark transition"
                onClick={() => handleSelect(questions[step].id, opt.value)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                {opt.label}
              </motion.button>
            ))}
          </div>
        </section>
      ) : (
        <motion.section
          className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-16 max-w-xl w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">🎯 Diagnostic terminé</h2>
          <p className="text-gray-300 mb-6">
            Tu es actuellement dans la phase :
            <span className="text-gold font-semibold capitalize ml-2">
              {result}
            </span>
          </p>
          <p className="text-gray-400 mb-8">
            Je t’ai préparé une recommandation adaptée à ton profil pour avancer
            dès aujourd’hui.
          </p>
          <motion.button
            className="bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            onClick={handleNavigate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Découvrir ma prochaine étape
          </motion.button>
        </motion.section>
      )}

      {/* FOOTNOTE */}
      <footer className="text-gray-500 text-sm pb-10 text-center">
        Nova est ton compagnon IA conçu pour te guider à travers les 4 piliers
        du Catalyseur Digital. Aucune donnée personnelle n’est stockée sans ton
        accord.
      </footer>
    </motion.main>
  );
}

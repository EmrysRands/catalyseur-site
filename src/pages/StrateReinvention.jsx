import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function StrateReinvention() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questions = [
    { id: 1, text: "Comment décrirais-tu ton rapport actuel au digital ?", options: ["Curieux mais perdu", "Déjà actif", "Je veux en vivre"] },
    { id: 2, text: "Ton objectif principal aujourd’hui ?", options: ["Trouver ma voie", "Automatiser mes tâches", "Créer un revenu libre"] },
    { id: 3, text: "Combien de temps consacres-tu chaque semaine à ton développement personnel ou digital ?", options: ["Moins d’1h", "1-5h", "Plus de 5h"] },
    { id: 4, text: "Que t’inspire l’IA aujourd’hui ?", options: ["Curiosité", "Inquiétude", "Excitation"] },
    { id: 5, text: "Es-tu prêt à tester un outil IA dès aujourd’hui ?", options: ["Pas encore", "Oui, pourquoi pas", "Carrément oui"] },
  ];

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
    if (step < questions.length) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setEmail("");
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    if (!email) return alert("Merci de renseigner ton email 📩");
    setLoading(true);

    try {
      await fetch("https://automate.optimizeinsight.com/webhook/quiz_submitted", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phase: "Reinvention",
          answers,
          date: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Erreur d’envoi du quiz :", error);
      alert("Erreur réseau, réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white overflow-x-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* HEADER */}
      <section className="max-w-3xl text-center mt-24 mb-12">
        <h1 className="text-5xl font-bold mb-6">🧠 Strate 1 — Réinvention</h1>
        <p className="text-lg leading-relaxed text-slate-200 mb-8">
          Clarifie ta vision et reconnecte ton potentiel.  
          Cette première strate t’aide à redonner du sens à ton parcours digital
          et à découvrir comment l’IA peut devenir un levier d’évolution.
        </p>
      </section>

      {/* QUIZ */}
      {!submitted && (
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">
          {step < questions.length ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 text-gold">
                {questions[step].text}
              </h2>
              <div className="flex flex-col gap-4">
                {questions[step].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(questions[step].id, option)}
                    className="bg-gold text-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    step === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "bg-gray-300 text-black hover:bg-gray-200"
                  }`}
                >
                  ⬅️ Retour
                </button>

                <button
                  onClick={handleRestart}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-400"
                >
                  🔄 Recommencer
                </button>
              </div>

              <p className="text-sm mt-6 text-gray-300">
                Question {step + 1} / {questions.length}
              </p>
            </>
          ) : (
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                🎁 Reçois ton Pack Réinvention IA
              </h3>
              <p className="text-slate-300 mb-6">
                Entre ton email pour recevoir gratuitement les fiches PDF
                sélectionnées pour ta phase.
              </p>
              <input
                type="email"
                placeholder="ton.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg text-black mb-4"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gold text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
              >
                {loading ? "Envoi..." : "📩 Recevoir mon pack"}
              </button>

              <button
                onClick={handleRestart}
                className="block mx-auto mt-4 text-sm text-gray-300 underline hover:text-white"
              >
                🔁 Revenir au quiz
              </button>
            </div>
          )}
        </div>
      )}

      {/* MESSAGE FINAL */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 p-8 rounded-2xl shadow-xl max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gold mb-4">
            Bravo, Catalyseur 🚀
          </h2>
          <p className="text-slate-200 mb-6">
            Tes fiches sont en route vers ta boîte mail.  
            Tu peux maintenant passer à l’étape suivante et apprendre à **automatiser ton quotidien**.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="/strate-automatisation"
              className="inline-block bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
            >
              ⚙️ Passer à la Strate 2 — Automatisation
            </a>
            <button
              onClick={() => navigate("/")}
              className="text-gray-300 underline hover:text-white mt-2"
            >
              ⬅️ Retour à l’accueil
            </button>
          </div>
        </motion.div>
      )}
    </motion.main>
  );
}

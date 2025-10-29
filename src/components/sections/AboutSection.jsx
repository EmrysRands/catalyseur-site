import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-white px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
          Pourquoi Catalyseur Digital 3.0 ?
        </h2>

        {/* PROBLÈME */}
        <div className="space-y-6 text-lg text-slate-200 leading-relaxed mb-12">
          <p className="text-center text-xl">
            Tu te sens débordé par les outils, perdu dans le chaos digital, 
            et l'IA te semble être une énième complexité à gérer ?
          </p>

          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center gap-2">
              <span>⚠️</span>
              <span>Le Problème que Personne ne Dit</span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">❌</span>
                <span>Les <strong>"formations IA"</strong> te donnent des outils, mais pas de SYSTÈME pour les intégrer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">❌</span>
                <span>Les <strong>"coachs de productivité"</strong> te vendent des méthodes, mais sans l'AUTOMATISATION</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">❌</span>
                <span>Tu accumules les connaissances, mais tu ne PASSES PAS À L'ACTION</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 mb-12">
          <p className="text-2xl font-semibold text-[#D4AF37] mb-4 text-center">
            ✨ Nous pensons que tu mérites mieux.
          </p>
          <p className="text-gray-200 text-center mb-6">
            <strong className="text-yellow-400">Catalyseur Digital 3.0</strong> existe pour transformer 
            le chaos en système, la confusion en clarté, et la surcharge en liberté.
          </p>
          <p className="text-gray-300 text-center">
            Pas avec des promesses vides. Avec des <strong>méthodes concrètes</strong>, 
            testées, et adaptées à ton rythme à travers un <strong>parcours progressif en 4 Strates</strong>.
          </p>
        </div>

        {/* NOTRE APPROCHE UNIQUE */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            🎯 Notre Approche Unique
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* VISION d'abord */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-semibold text-blue-300 mb-2 text-lg">1. VISION d'abord</h4>
              <p className="text-sm text-slate-300">
                Avant les outils, tu dois comprendre <strong>POURQUOI</strong> tu veux la liberté digitale. 
                C'est la Strate 1 : <strong>36 Fiches Nova</strong> pour construire ta vision du Nouveau Riche.
              </p>
            </div>

            {/* SYSTÈME ensuite */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="font-semibold text-purple-300 mb-2 text-lg">2. SYSTÈME ensuite</h4>
              <p className="text-sm text-slate-300">
                Ensuite, tu installes les <strong>méthodes d'organisation</strong> (GTD + Atomic Habits). 
                C'est la Strate 2 : <strong>16 Fiches + Blueprint n8n</strong>.
              </p>
            </div>

            {/* PREUVE concrète */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🧩</div>
              <h4 className="font-semibold text-orange-300 mb-2 text-lg">3. PREUVE concrète</h4>
              <p className="text-sm text-slate-300">
                Tu testes en live avec <strong>2 démos interactives</strong> (Générateur IA + Calculateur). 
                C'est la Strate 3 : <strong>Micro-succès garanti</strong>.
              </p>
            </div>

            {/* ACCOMPAGNEMENT durable */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold text-yellow-300 mb-2 text-lg">4. ACCOMPAGNEMENT durable</h4>
              <p className="text-sm text-slate-300">
                Tu construis un <strong>système durable</strong> avec le Tunnel d'Exclusivité. 
                C'est la Strate 4 : <strong>De 0 à 1000€/mois stable</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* NOS 3 PRINCIPES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="text-4xl mb-3">🧭</div>
            <h3 className="font-semibold text-[#D4AF37] mb-2 text-lg">Clarté</h3>
            <p className="text-sm text-slate-300">
              Comprendre avant d'agir. Pas de jargon, que des solutions concrètes 
              expliquées dans les <strong>77 Fiches Nova</strong>.
            </p>
          </div>
          
          <div className="text-center bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-[#D4AF37] mb-2 text-lg">Action</h3>
            <p className="text-sm text-slate-300">
              Des résultats visibles en <strong>30 secondes</strong> (démos Strate 3), 
              pas en 5 mois. Tu TESTES avant d'investir.
            </p>
          </div>
          
          <div className="text-center bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-semibold text-[#D4AF37] mb-2 text-lg">Liberté</h3>
            <p className="text-sm text-slate-300">
              Reprends le contrôle de ton temps et de ton énergie avec des 
              <strong> systèmes automatisés durables</strong>.
            </p>
          </div>
        </div>

        {/* CE QUI NOUS DIFFÉRENCIE */}
        <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
            💎 Ce qui Nous Différencie
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-green-400 mb-3">❌ Les Autres</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Vendent des outils IA sans système d'intégration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Promettent des résultats sans parcours progressif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Te laissent seul(e) après l'achat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span>Pas de qualification = clients non-prêts qui échouent</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-3">✅ Catalyseur Digital 3.0</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span><strong>Parcours progressif</strong> : chaque strate prépare la suivante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span><strong>100% gratuit</strong> jusqu'à la Strate 3 (preuve de valeur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span><strong>Tunnel d'Exclusivité</strong> : accompagnement qualifié</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span><strong>77 Fiches Nova</strong> : curriculum complet inclus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CITATION INSPIRANTE */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
            <p className="text-center text-lg text-slate-200 mb-4">
              <span className="text-3xl text-purple-400">"</span>
              L'IA n'est pas ton ennemi. C'est un <strong className="text-yellow-400">levier</strong>. 
              Et nous sommes là pour te montrer comment t'en servir — 
              sans perdre ton humanité, sans sacrifier ta liberté.
              <span className="text-3xl text-purple-400">"</span>
            </p>
            <p className="text-center text-sm text-gray-400 italic">
              — La promesse Catalyseur Digital 3.0
            </p>
          </div>
        </div>

        {/* STATISTIQUES DE CONFIANCE */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">77</p>
            <p className="text-sm text-gray-300">Fiches Nova complètes</p>
            <p className="text-xs text-gray-500 mt-1">4 phases progressives</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">87%</p>
            <p className="text-sm text-gray-300">Atteignent la Strate 3</p>
            <p className="text-xs text-gray-500 mt-1">Taux de complétion élevé</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">4.8/5</p>
            <p className="text-sm text-gray-300">Satisfaction moyenne</p>
            <p className="text-xs text-gray-500 mt-1">2,547 avis vérifiés</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/strate-reinvention')}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all text-lg"
          >
            🚀 Commencer mon Parcours (Gratuit)
          </button>
          <p className="mt-4 text-sm text-gray-400">
            36 Fiches Nova offertes • Pas de carte bancaire
          </p>
        </div>
      </motion.div>
    </section>
  );
}

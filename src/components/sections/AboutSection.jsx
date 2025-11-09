import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0f172a] via-[#0A2540] to-[#1a1444] text-white px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
          Pourquoi Catalyseur Digital 3.0 ?
        </h2>

        {/* PROBLÈME */}
        <div className="space-y-6 text-lg text-slate-200 leading-relaxed mb-12">
          <p className="text-center text-xl">
            Tu te sens débordé par les outils, perdu dans le chaos digital, 
            et l'IA te semble être une énième complexité à gérer ?
          </p>

          <div className="bg-[#C4322A]/20 border border-[#C4322A]/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#C4322A' }}>
              <span>⚠️</span>
              <span>Le Problème que Personne ne Dit</span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span style={{ color: '#C4322A' }} className="mt-1">✗</span>
                <span>Les <strong>"formations IA"</strong> te donnent des outils, mais pas de <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> pour les intégrer</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#C4322A' }} className="mt-1">✗</span>
                <span>Les <strong>"coachs de productivité"</strong> te vendent des méthodes, mais sans l'<strong style={{ color: '#D4AF37' }}>AUTOMATISATION</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#C4322A' }} className="mt-1">✗</span>
                <span>Tu accumules les connaissances, mais tu ne <strong>PASSES PAS À L'ACTION</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-2xl p-8 backdrop-blur-sm mb-12">
          <p className="text-2xl font-semibold mb-4 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
            ✨ Nous pensons que tu mérites mieux.
          </p>
          <p className="text-gray-200 text-center mb-6 leading-relaxed">
            <strong style={{ color: '#D4AF37' }}>Catalyseur Digital 3.0</strong> existe pour transformer 
            le chaos en <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong>, la confusion en <strong style={{ color: '#D4AF37' }}>CLARTÉ</strong>, 
            et la surcharge en <strong style={{ color: '#D4AF37' }}>LIBÉRATION</strong>.
          </p>
          <p className="text-gray-300 text-center leading-relaxed">
            Pas avec des promesses vides. Avec des <strong>méthodes concrètes</strong>, 
            testées, et adaptées à ton rythme à travers un <strong>parcours progressif en 4 Strates</strong>.
          </p>
        </div>

        {/* NOTRE APPROCHE UNIQUE */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🎯 Notre Approche Unique
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CLARTÉ d'abord */}
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>1. CLARTÉ d'abord</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Avant les outils, tu dois comprendre <strong>POURQUOI</strong> tu veux la liberté digitale. 
                C'est la Strate 1 : <strong>36 Fiches Nova</strong> pour construire ta vision du Nouveau Riche.
              </p>
            </div>

            {/* SYSTÈME ensuite */}
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>2. SYSTÈME ensuite</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ensuite, tu installes les <strong>méthodes d'organisation</strong> (GTD + Atomic Habits). 
                C'est la Strate 2 : <strong>16 Fiches + Blueprint n8n</strong>.
              </p>
            </div>

            {/* TRANSFORMATION concrète */}
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🧩</div>
              <h4 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>3. TRANSFORMATION concrète</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tu testes en live avec <strong>2 démos interactives</strong> (Générateur IA + Calculateur). 
                C'est la Strate 3 : <strong>Micro-succès garanti</strong>.
              </p>
            </div>

            {/* LIBÉRATION durable */}
            <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>4. LIBÉRATION durable</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tu construis un <strong>système durable</strong> avec le Tunnel d'Exclusivité. 
                C'est la Strate 4 : <strong>De 0 à 1000€/mois stable</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* NOS 3 PRINCIPES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
            <div className="text-4xl mb-3">🧭</div>
            <h3 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>Clarté</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Comprendre avant d'agir. Pas de jargon, que des solutions concrètes 
              expliquées dans les <strong>77 Fiches Nova</strong>.
            </p>
          </div>
          
          <div className="text-center bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>Action</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Des résultats visibles en <strong>30 secondes</strong> (démos Strate 3), 
              pas en 5 mois. Tu TESTES avant d'investir.
            </p>
          </div>
          
          <div className="text-center bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-semibold mb-2 text-lg font-['Montserrat']" style={{ color: '#D4AF37' }}>Liberté</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Reprends le contrôle de ton temps et de ton énergie avec des 
              <strong> systèmes automatisés durables</strong>.
            </p>
          </div>
        </div>

        {/* CE QUI NOUS DIFFÉRENCIE */}
        <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center font-['Montserrat']" style={{ color: '#D4AF37' }}>
            💎 Ce qui Nous Différencie
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#C4322A' }}>✗ Les Autres</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#C4322A' }}>→</span>
                  <span>Vendent des outils IA sans système d'intégration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#C4322A' }}>→</span>
                  <span>Promettent des résultats sans parcours progressif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#C4322A' }}>→</span>
                  <span>Te laissent seul(e) après l'achat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#C4322A' }}>→</span>
                  <span>Pas de qualification = clients non-prêts qui échouent</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#D4AF37' }}>✓ Catalyseur Digital 3.0</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>→</span>
                  <span><strong>Parcours progressif</strong> : chaque strate prépare la suivante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>→</span>
                  <span><strong>100% gratuit</strong> jusqu'à la Strate 3 (preuve de valeur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>→</span>
                  <span><strong>Tunnel d'Exclusivité</strong> : accompagnement qualifié</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>→</span>
                  <span><strong>77 Fiches Nova</strong> : curriculum complet inclus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CITATION INSPIRANTE */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-[#0A2540]/40 border border-[#D4AF37]/30 p-6 rounded-xl">
            <p className="text-center text-lg text-slate-200 mb-4 leading-relaxed">
              <span className="text-3xl" style={{ color: '#D4AF37' }}>"</span>
              L'IA n'est pas ton ennemi. C'est un <strong style={{ color: '#D4AF37' }}>levier</strong>. 
              Et nous sommes là pour te montrer comment t'en servir — 
              sans perdre ton humanité, sans sacrifier ta liberté.
              <span className="text-3xl" style={{ color: '#D4AF37' }}>"</span>
            </p>
            <p className="text-center text-sm text-gray-400 italic">
              — La promesse Catalyseur Digital 3.0
            </p>
          </div>
        </div>

        {/* MESSAGE COMMUNAUTÉ BETA - REMPLACE LES STATS */}
        <div className="mt-12 bg-[#0A2540]/40 border border-[#D4AF37]/30 rounded-xl p-6 text-center">
          <p className="text-xl font-bold mb-3 font-['Montserrat']" style={{ color: '#D4AF37' }}>
            🌱 Rejoins la Communauté Beta
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Tu fais partie des premiers à tester ce système en vrai. 
            Chaque utilisateur aide à affiner le parcours pour construire 
            le meilleur <strong style={{ color: '#D4AF37' }}>SYSTÈME</strong> de transformation digitale.
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>77</p>
              <p className="text-gray-400">Fiches Nova complètes</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>4</p>
              <p className="text-gray-400">Strates progressives</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>100%</p>
              <p className="text-gray-400">Gratuit jusqu'à Strate 3</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/strate-reinvention')}
            className="text-black font-bold px-10 py-4 rounded-xl shadow-2xl transition-all text-lg font-['Montserrat']"
            style={{ backgroundColor: '#D4AF37' }}
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

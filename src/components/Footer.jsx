import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-[-4rem] bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#581c87] text-center text-white py-16 px-6 relative overflow-hidden">
      {/* Halo décoratif */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/20 to-transparent blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      {/* Logo et nom */}
      <motion.h3
        className="text-2xl font-semibold text-blue-300 mb-6 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ⚡ Catalyseur Digital
      </motion.h3>

      {/* Réseaux sociaux */}
      <motion.div
        className="flex justify-center gap-8 mb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {[
          { href: "https://www.linkedin.com/company/optimizeinsight", icon: "linkedin" },
          { href: "https://facebook.com/optimizeinsight", icon: "facebook" },
          { href: "https://twitter.com/optimizeinsight", icon: "twitter" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            whileHover={{
              scale: 1.15,
              filter: "drop-shadow(0 0 12px rgba(139,92,246,0.8))",
            }}
          >
            {social.icon === "linkedin" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                  2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                  5-5v-14c0-2.77-2.23-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.27c-.97 
                  0-1.75-.79-1.75-1.76s.78-1.75 
                  1.75-1.75 1.75.78 1.75 1.75-.78 
                  1.76-1.75 1.76zm13.5 11.27h-3v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 
                  0-2.07 1.4-2.07 2.85v5.5h-3v-10h2.9v1.37h.04c.4-.75 
                  1.38-1.54 2.84-1.54 3.04 0 
                  3.6 2 3.6 4.59v5.58z" />
              </svg>
            )}
            {social.icon === "facebook" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M22.675 0h-21.35c-.732 
                  0-1.325.593-1.325 1.325v21.351c0 
                  .731.593 1.324 1.325 
                  1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 
                  1.893-4.788 4.659-4.788 
                  1.325 0 2.464.099 
                  2.795.143v3.24l-1.918.001c-1.504 
                  0-1.795.715-1.795 
                  1.763v2.312h3.587l-.467 
                  3.622h-3.12v9.294h6.116c.73 
                  0 1.324-.593 
                  1.324-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z" />
              </svg>
            )}
            {social.icon === "twitter" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 
                  1.57-1.37 1.89-2.38-.83.49-1.74.85-2.71 
                  1.04a4.2 4.2 0 0 0-7.16 3.82 11.93 
                  11.93 0 0 1-8.66-4.39 4.19 4.19 
                  0 0 0 1.3 5.61c-.7-.02-1.36-.21-1.93-.53v.05c0 
                  2.1 1.49 3.86 3.46 4.26-.36.1-.74.15-1.13.15-.28 
                  0-.54-.03-.8-.08.54 1.68 2.1 2.91 
                  3.95 2.95a8.44 8.44 0 0 1-5.23 
                  1.8c-.34 0-.67-.02-1-.06a11.9 
                  11.9 0 0 0 6.45 1.89c7.74 
                  0 11.97-6.41 11.97-11.97 
                  0-.18-.01-.36-.02-.54a8.54 
                  8.54 0 0 0 2.1-2.17z" />
              </svg>
            )}
          </motion.a>
        ))}
      </motion.div>

      {/* Description & message */}
      <motion.p
        className="text-blue-200 font-semibold mb-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 Catalyseur Digital — Apprends à bâtir ta liberté avec l’IA
      </motion.p>

      <motion.p
        className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed mb-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Explore les nouvelles opportunités offertes par l’intelligence
        artificielle.  
        La collection <strong>Renaissance IA</strong> te guide pas à pas pour
        transformer tes compétences en liberté et en impact réel.
      </motion.p>

      {/* Bas de page */}
      <motion.p
        className="text-xs text-slate-400 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © {new Date().getFullYear()} Catalyseur Digital — Une marque Optimize
        Insight. Tous droits réservés.
      </motion.p>
    </footer>
  );
}

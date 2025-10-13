import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔥 Bande d’annonce édition limitée */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          color: "white",
          textAlign: "center",
          padding: "8px 20px",
          fontSize: "0.9rem",
          fontWeight: "600",
          zIndex: 1001,
          boxShadow: "0 2px 12px rgba(59,130,246,0.3)",
        }}
      >
        ✨ <strong>Renaissance IA :</strong> Plus que{" "}
        <span style={{ color: "#fbbf24", fontWeight: "bold" }}>127 places</span>{" "}
        · 🎁 Bonus offert aux 50 premiers
      </motion.div>

      {/* Header principal */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          background:
            "linear-gradient(90deg, rgba(15,23,42,0.9), rgba(30,58,138,0.9))",
          position: "fixed",
          width: "100%",
          top: "32px", // sous la bande promo
          zIndex: 1000,
          height: "90px",
          boxShadow: "0 2px 20px rgba(59,130,246,0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo + Titre */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
          whileHover={{ scale: 1.05 }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(139,92,246,0.5)",
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>⚡</span>
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            Catalyseur Digital
          </span>
        </motion.div>

        {/* CTA Desktop */}
        <motion.a
          href="#cta"
          style={{
            padding: "12px 28px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            borderRadius: "50px",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1rem",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(139,92,246,0.4)",
          }}
          whileHover={{
            scale: 1.08,
            boxShadow:
              "0 0 25px rgba(139,92,246,0.8), 0 0 45px rgba(59,130,246,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Commencer
        </motion.a>

        {/* Burger Menu (Mobile) */}
        <div
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "30px",
            height: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            marginLeft: "20px",
          }}
        >
          <span
            style={{
              height: "3px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "",
            }}
          ></span>
          <span
            style={{
              height: "3px",
              background: "white",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          ></span>
          <span
            style={{
              height: "3px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "",
            }}
          ></span>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "90px",
              right: 0,
              background:
                "linear-gradient(135deg, rgba(30,58,138,0.95), rgba(88,28,135,0.95))",
              width: "100%",
              padding: "25px 0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.5)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {[
              { label: "Pourquoi Catalyseur ?", href: "#features" },
              { label: "Collection Renaissance IA", href: "#books" },
              { label: "FAQ", href: "#faq" },
              { label: "Commencer", href: "#cta" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontWeight: item.href === "#cta" ? "bold" : "500",
                  background:
                    item.href === "#cta"
                      ? "linear-gradient(90deg, #3b82f6, #8b5cf6)"
                      : "transparent",
                  padding: item.href === "#cta" ? "12px 20px" : "0",
                  borderRadius: item.href === "#cta" ? "8px" : "0",
                  boxShadow:
                    item.href === "#cta"
                      ? "0 4px 12px rgba(139,92,246,0.5)"
                      : "none",
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </motion.header>
    </>
  );
}

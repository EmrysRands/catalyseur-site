import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden">
      {/* 🧭 Barre de navigation principale */}
      <Header />

      {/* 📄 Contenu de la page */}
      <main className="flex-1">{children}</main>

      {/* ⚓ Pied de page */}
      <Footer />
    </div>
  );
}

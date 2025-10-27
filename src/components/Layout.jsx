import ChatbotOptimized from "./Chatbot";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {/* 💬 Chatbot Nova affiché sur toutes les pages */}
      <ChatbotOptimized />
    </>
  );
}

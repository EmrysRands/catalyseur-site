import ChatbotOptimized from "./Chatbot";

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

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Nova from "./components/Nova";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ResourcesSection from "./components/sections/ResourcesSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Nova />
      <AboutSection />
      <ContactSection />
      <ResourcesSection />
    </div>
  );
}

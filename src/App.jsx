import Hero from "./components/Hero";
import WhyNotWorking from "./components/WhyNotWorking";
import ProfilsSection from "./components/ProfilsSection";
import Features from "./components/Features";
import Nova from "./components/Nova";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-gold font-sans overflow-x-hidden">
      <Hero />
      <WhyNotWorking />
      <ProfilsSection />
      <Features />
      <Nova />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

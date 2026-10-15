import { LanguageProvider } from "@/contexts/LanguageContext";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import DifferentialsSection from "@/components/portfolio/DifferentialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PortfolioHeader />
        <main>
          <PortfolioHero />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <DifferentialsSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;

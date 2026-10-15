import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              <span className="text-primary">&lt;</span>
              Dev
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • {t("footer.built")} <Heart className="w-3 h-3 text-primary" /> {t("footer.using")}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-silva-36b399230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;

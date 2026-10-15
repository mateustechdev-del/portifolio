import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="relative overflow-hidden text-center mb-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card px-6 py-14 md:px-12">
            <p className="text-primary font-mono text-sm mb-2">{t("contact.subtitle")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("contact.description")}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.email")}</h3>
              <p className="text-sm text-muted-foreground">your.email@example.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mateus-silva-36b399230/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.linkedin")}</h3>
              <p className="text-sm text-muted-foreground">{t("contact.linkedin.text")}</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.github")}</h3>
              <p className="text-sm text-muted-foreground">{t("contact.github.text")}</p>
            </a>
          </div>

          {/* Location & CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>{t("contact.location")}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:your.email@example.com">
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.cta")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/mateus-silva-36b399230/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  {t("contact.cta.linkedin")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

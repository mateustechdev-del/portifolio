import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(166 82% 52% / 0.22) 1px, transparent 1px), linear-gradient(90deg, hsl(166 82% 52% / 0.22) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">{t("hero.available")}</span>
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl tracking-[-0.06em] font-bold mb-5 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">{t("hero.greeting")} </span>
            <span className="text-gradient">Mateus Silva.</span>
          </h1>

          {/* Title */}
          <p 
            className="text-sm md:text-base font-mono text-primary mb-6 tracking-wide animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero.title")}
          </p>

          {/* Description */}
          <p 
            className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="default" size="lg" asChild>
              <a href="#projects">
                {t("hero.cta")}
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/mateus-silva-36b399230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Mateus Silva">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:email@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-sm p-1 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="rounded-xl bg-background/40 px-5 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></span>
                <div><p className="text-xs font-mono text-primary">CURRENTLY BUILDING</p><p className="text-sm text-muted-foreground">AI systems that create real operational impact.</p></div>
              </div>
              <a href="#contact" className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">Let&apos;s connect <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-3 md:gap-8 max-w-xl mx-auto mt-10 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="text-center border-r border-border last:border-0">
              <div className="text-2xl md:text-3xl font-bold text-foreground">4+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t("hero.years")}</div>
            </div>
            <div className="text-center border-r border-border last:border-0">
              <div className="text-2xl md:text-3xl font-bold text-foreground">20+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t("hero.projects")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t("hero.technologies")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;

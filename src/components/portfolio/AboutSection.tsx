import { Code2, Brain, Database, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t("about.highlight.years"),
      description: t("about.highlight.years.desc")
    },
    {
      icon: Brain,
      title: t("about.highlight.ai"),
      description: t("about.highlight.ai.desc")
    },
    {
      icon: Database,
      title: t("about.highlight.data"),
      description: t("about.highlight.data.desc")
    },
    {
      icon: Shield,
      title: t("about.highlight.prod"),
      description: t("about.highlight.prod.desc")
    }
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16 max-w-2xl">
            <p className="text-primary font-mono text-sm mb-2">{t("about.subtitle")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about.title")}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p1")} <span className="text-foreground font-medium">{t("about.p1.role")}</span> {t("about.p1.text")}
                <span className="text-primary"> {t("about.p1.skills")}</span>{t("about.p1.end")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p2")} <span className="text-foreground font-medium">{t("about.p2.ai")}</span> {t("about.p2.to")}
                <span className="text-foreground font-medium"> {t("about.p2.data")}</span> {t("about.p2.and")}
                <span className="text-foreground font-medium"> {t("about.p2.dashboards")}</span>{t("about.p2.end")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p3")}
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

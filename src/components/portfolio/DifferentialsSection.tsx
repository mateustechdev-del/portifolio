import { Target, Code, Rocket, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DifferentialsSection = () => {
  const { t } = useLanguage();

  const differentials = [
    {
      icon: Target,
      titleKey: "diff.focus.title",
      descKey: "diff.focus.desc"
    },
    {
      icon: Code,
      titleKey: "diff.code.title",
      descKey: "diff.code.desc"
    },
    {
      icon: Rocket,
      titleKey: "diff.prod.title",
      descKey: "diff.prod.desc"
    },
    {
      icon: Layers,
      titleKey: "diff.stack.title",
      descKey: "diff.stack.desc"
    }
  ];

  return (
    <section className="py-28 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{t("diff.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("diff.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Differentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentials.map((item) => (
            <div
              key={item.titleKey}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

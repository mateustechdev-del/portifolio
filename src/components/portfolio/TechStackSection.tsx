import { useLanguage } from "@/contexts/LanguageContext";

const TechStackSection = () => {
  const { t } = useLanguage();

  const techStack = [
    {
      category: t("stack.backend"),
      technologies: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "💾" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
      ]
    },
    {
      category: t("stack.ai"),
      technologies: [
        { name: "OpenCV", icon: "👁️" },
        { name: "Scikit-learn", icon: "🤖" },
        { name: "PyTorch", icon: "🔥" },
        { name: "TensorFlow", icon: "🧠" },
      ]
    },
    {
      category: t("stack.bi"),
      technologies: [
        { name: "Power BI", icon: "📊" },
        { name: "Tableau", icon: "📈" },
        { name: "Matplotlib", icon: "📉" },
        { name: "Plotly", icon: "📋" },
      ]
    },
    {
      category: t("stack.web"),
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
      ]
    },
    {
      category: t("stack.infra"),
      technologies: [
        { name: "Docker", icon: "🐳" },
        { name: "Linux", icon: "🐧" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Git", icon: "📁" },
      ]
    }
  ];

  return (
    <section id="stack" className="py-28 bg-card/30 border-y border-border/60">
      <div className="container mx-auto px-4">
        {/* Section header */}
          <div className="max-w-2xl mb-16">
          <p className="text-primary font-mono text-sm mb-2">{t("stack.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("stack.title")}
          </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {techStack.map((category) => (
            <div
              key={category.category}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

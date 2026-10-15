import { MapPin, Target, Zap, Users, TrendingDown, Headphones } from "lucide-react";

const differentials = [
  {
    icon: MapPin,
    title: "Adaptada ao Brasil",
    description: "Tecnologia desenvolvida e treinada para a realidade brasileira, com suporte em português e entendimento das normas locais.",
  },
  {
    icon: Target,
    title: "Alta Precisão",
    description: "Modelos de IA treinados com milhões de imagens para garantir detecção precisa em ambientes industriais desafiadores.",
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Do projeto à operação em dias, não meses. Utilizamos sua infraestrutura existente para acelerar a implantação.",
  },
  {
    icon: Users,
    title: "Soluções por Setor",
    description: "Configurações personalizadas para indústria, agronegócio, logística e segurança patrimonial.",
  },
  {
    icon: TrendingDown,
    title: "ROI Comprovado",
    description: "Redução mensurável de acidentes, perdas e custos operacionais com retorno sobre investimento em meses.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe técnica dedicada para garantir o sucesso da sua operação, com monitoramento e otimização contínuos.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossos Diferenciais</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
            POR QUE ESCOLHER A <span className="text-gradient">HARDLINE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos tecnologia de ponta com conhecimento profundo dos desafios operacionais brasileiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff) => (
            <div 
              key={diff.title}
              className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <diff.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-2xl mb-3">{diff.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

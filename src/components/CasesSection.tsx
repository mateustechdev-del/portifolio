import { TrendingDown, ShieldCheck, Gauge, Lock } from "lucide-react";

const cases = [
  {
    icon: TrendingDown,
    industry: "Indústria Metalúrgica",
    location: "São Paulo, SP",
    metric: "-67%",
    metricLabel: "Acidentes com EPI",
    description: "Planta industrial com 2.000 colaboradores implementou detecção de EPIs em áreas críticas. Redução significativa de acidentes relacionados à falta de equipamentos de proteção em 6 meses.",
    results: ["Detecção de capacete, colete e óculos", "Alertas em tempo real para supervisores", "Integração com sistema de ponto"],
  },
  {
    icon: ShieldCheck,
    industry: "Centro de Distribuição",
    location: "Campinas, SP",
    metric: "-82%",
    metricLabel: "Incidentes de Segurança",
    description: "Armazém logístico de 50.000m² reduziu drasticamente invasões e furtos com monitoramento inteligente de perímetro e detecção de comportamentos suspeitos.",
    results: ["Monitoramento 24/7 automatizado", "Redução de equipe de vigilância", "Integração com alarmes existentes"],
  },
  {
    icon: Gauge,
    industry: "Agroindústria",
    location: "Ribeirão Preto, SP",
    metric: "+23%",
    metricLabel: "Eficiência Operacional",
    description: "Cooperativa agrícola implementou monitoramento de silos e áreas de carga/descarga, otimizando processos e reduzindo tempo de espera de caminhões.",
    results: ["Controle de filas automático", "Detecção de irregularidades", "Dashboards em tempo real"],
  },
  {
    icon: Lock,
    industry: "Fazenda de Café",
    location: "Sul de Minas, MG",
    metric: "-91%",
    metricLabel: "Perdas por Furto",
    description: "Propriedade rural de 500 hectares eliminou praticamente todas as perdas por furto com sistema de detecção de intrusos e monitoramento de perímetro.",
    results: ["Cobertura de toda a propriedade", "Alertas via WhatsApp", "Integração com segurança local"],
  },
];

const CasesSection = () => {
  return (
    <section id="casos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Casos de Uso</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
            RESULTADOS <span className="text-gradient">REAIS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Exemplos de como nossa tecnologia está transformando operações em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.industry}
              className="p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <caseItem.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{caseItem.location}</span>
                  </div>
                  <h3 className="font-display text-2xl">{caseItem.industry}</h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-4xl text-primary">{caseItem.metric}</div>
                  <div className="text-sm text-muted-foreground">{caseItem.metricLabel}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{caseItem.description}</p>

              <div className="flex flex-wrap gap-2">
                {caseItem.results.map((result) => (
                  <span 
                    key={result}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

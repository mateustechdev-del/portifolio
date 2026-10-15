import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Shield, BarChart3, Tractor, CheckCircle2 } from "lucide-react";
import safetyImg from "@/assets/safety-detection.jpg";
import securityImg from "@/assets/security-monitoring.jpg";
import operationsImg from "@/assets/operations-monitoring.jpg";
import agroImg from "@/assets/agro-monitoring.jpg";

const solutions = [
  {
    icon: HardHat,
    title: "Segurança do Trabalho com IA",
    subtitle: "Proteção inteligente para seus colaboradores",
    image: safetyImg,
    problem: "Acidentes de trabalho custam bilhões anualmente e colocam vidas em risco por falta de uso de EPIs.",
    benefits: [
      "Detecção automática de pessoas sem EPI (capacete, colete, luvas, botas, óculos)",
      "Alertas em tempo real para supervisores e equipe de segurança",
      "Relatórios de conformidade para auditorias e compliance",
      "Redução comprovada de acidentes de trabalho",
    ],
    applications: "Indústrias, construção civil, mineração, siderurgia e plantas industriais.",
  },
  {
    icon: Shield,
    title: "Segurança Patrimonial Inteligente",
    subtitle: "Proteção 24/7 com inteligência artificial",
    image: securityImg,
    problem: "Sistemas tradicionais de segurança dependem de operadores humanos sujeitos a fadiga e distração.",
    benefits: [
      "Detecção automática de intrusos e acessos não autorizados",
      "Identificação de movimentações suspeitas e comportamentos anômalos",
      "Integração com sistemas de alarme e controle de acesso existentes",
      "Monitoramento 24/7 sem fadiga ou falhas humanas",
    ],
    applications: "Armazéns, centros logísticos, fazendas, condomínios industriais e áreas críticas.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento Operacional",
    subtitle: "Eficiência e controle em tempo real",
    image: operationsImg,
    problem: "Falhas operacionais passam despercebidas até causarem prejuízos significativos.",
    benefits: [
      "Análise visual de processos produtivos em tempo real",
      "Identificação automática de falhas e anomalias operacionais",
      "Controle de áreas críticas e zonas de risco",
      "Dashboards com métricas e indicadores de performance",
    ],
    applications: "Linhas de produção, armazéns, centros de distribuição e operações logísticas.",
  },
  {
    icon: Tractor,
    title: "Aplicações no Agronegócio",
    subtitle: "Tecnologia de ponta para o campo",
    image: agroImg,
    problem: "O agronegócio enfrenta perdas por furtos, pragas e falta de monitoramento em grandes áreas.",
    benefits: [
      "Monitoramento de lavouras, rebanhos e perímetros",
      "Detecção de invasões e furtos em propriedades rurais",
      "Acompanhamento de safras e identificação de pragas",
      "Redução de perdas e aumento da produtividade",
    ],
    applications: "Fazendas, cooperativas, agroindústrias e propriedades rurais de todos os portes.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossas Soluções</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
            INTELIGÊNCIA ARTIFICIAL APLICADA À <span className="text-gradient">SUA OPERAÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções personalizadas de visão computacional para cada desafio do seu negócio.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title} 
              className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto min-h-[400px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent lg:bg-gradient-to-t lg:from-card lg:via-transparent lg:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                        <solution.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.subtitle}</p>
                      </div>
                    </div>

                    <div className="mb-6 p-4 rounded-lg bg-secondary/50 border border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-semibold">Problema:</span> {solution.problem}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/90">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Aplicações:</span> {solution.applications}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

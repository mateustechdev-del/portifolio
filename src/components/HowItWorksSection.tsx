import { Camera, Cpu, Bell, LayoutDashboard, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Conecte suas Câmeras",
    description: "Utilizamos sua infraestrutura existente. Câmeras IP, DVRs ou sistemas CFTV já instalados podem ser integrados sem necessidade de novos equipamentos.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "IA Processa as Imagens",
    description: "Nossa inteligência artificial analisa o fluxo de vídeo em tempo real, identificando pessoas, objetos, EPIs, comportamentos e anomalias com alta precisão.",
  },
  {
    icon: Bell,
    number: "03",
    title: "Alertas Instantâneos",
    description: "Quando um risco é detectado, alertas são enviados imediatamente via SMS, e-mail, WhatsApp ou integração com seus sistemas internos.",
  },
  {
    icon: LayoutDashboard,
    number: "04",
    title: "Dashboards e Relatórios",
    description: "Acesse painéis completos com métricas, histórico de eventos, relatórios de conformidade e insights para tomada de decisão.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Como Funciona</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
            IMPLEMENTAÇÃO <span className="text-gradient">SIMPLES E RÁPIDA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Em poucos dias, suas câmeras se transformam em sensores inteligentes capazes de proteger sua operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-display text-lg shadow-glow">
                  {step.number}
                </div>

                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Integração com sistemas existentes: CFTV, ERPs, sistemas de ponto, controle de acesso e muito mais.
          </p>
          <a href="#contato" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all">
            Agende uma demonstração gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

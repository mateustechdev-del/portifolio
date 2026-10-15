import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Eye, Cpu, Activity } from "lucide-react";
import heroFloating from "@/assets/hero-floating.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-up" style={{
            animationDelay: "0.1s"
          }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Tecnologia 100% Nacional</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-none mb-4 animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
              <span className="text-foreground">VISÃO</span>
              <br />
              <span className="text-gradient">COMPUTACIONAL</span>
              <br />
              <span className="text-foreground">E SOLUÇÕES </span>
              <span className="text-gradient">EM INTELIGÊNCIA ARTIFICIAL</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-xl mb-6 animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
              Detectamos riscos, falhas e comportamentos inseguros em tempo real. 
              Transformamos suas câmeras em sensores inteligentes para proteger pessoas e otimizar operações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{
            animationDelay: "0.4s"
          }}>
              <Button variant="hero" size="xl" className="group">
                Solicitar Demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver em Ação
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{
            animationDelay: "0.5s"
          }}>
              {[{
              value: "99.2%",
              label: "Precisão"
            }, {
              value: "24/7",
              label: "Monitoramento"
            }, {
              value: "<1s",
              label: "Alertas"
            }, {
              value: "50+",
              label: "Empresas"
            }].map(stat => <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 relative animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative">
              {/* Main Floating Image */}
              <div className="relative">
                <img src={heroFloating} alt="Visão computacional e IA em ação" className="w-full h-auto max-h-[500px] object-contain animate-float drop-shadow-[0_20px_50px_rgba(0,194,255,0.3)]" style={{
                animationDuration: "6s"
              }} />
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 animate-float hidden md:block" style={{
              animationDelay: "0s"
            }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Detecção Visual</div>
                    <div className="text-xs text-muted-foreground">99.2% precisão</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 animate-float hidden md:block" style={{
              animationDelay: "1s"
            }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Status</div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-500">Online 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icon - Shield */}
              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-full glass flex items-center justify-center animate-float hidden lg:flex" style={{
              animationDelay: "1.5s"
            }}>
                <Shield className="w-6 h-6 text-primary" />
              </div>

              {/* Floating Icon - Cpu */}
              <div className="absolute bottom-1/4 -right-6 w-10 h-10 rounded-full glass flex items-center justify-center animate-float hidden lg:flex" style={{
              animationDelay: "2s"
            }}>
                <Cpu className="w-5 h-5 text-primary" />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;
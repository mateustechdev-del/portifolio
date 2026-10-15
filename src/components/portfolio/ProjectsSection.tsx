import { ExternalLink, Github, ChevronRight, ArrowUpRight, Layers3, CheckCircle2, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "project.orchestrator.title",
      descKey: "project.orchestrator.desc",
      technologies: ["Network Integration", "Video Streams", "REST APIs", "Python", "React", "Computer Vision"],
      problemKey: "project.orchestrator.problem",
      impactKey: "project.orchestrator.impact",
      featured: true,
      slug: "orquestrador",
      caseStudy: ["Arquitetura end-to-end para conectar a camada de rede, fontes de vídeo e serviços de processamento.", "Integração de streams e APIs REST para receber, normalizar e distribuir eventos operacionais.", "Backend responsável pela orquestração das regras, serviços de inferência e canais de alerta.", "Frontend responsivo para acompanhamento de eventos, status dos fluxos e visibilidade operacional."],
    },
    {
      titleKey: "project.ppe.title",
      descKey: "project.ppe.desc",
      technologies: ["Python", "OpenCV", "PyTorch", "YOLO"],
      problemKey: "project.ppe.problem",
      impactKey: "project.ppe.impact",
      featured: true,
      github: "#",
      demo: "#",
      slug: "epi",
      caseStudy: ["Pipeline de visão computacional para ingestão de vídeo e análise de imagens em tempo real.", "Detecção de itens de proteção a partir de modelos treinados, com regras de validação por área e evento.", "Camada de notificações para sinalizar ocorrências relevantes à operação.", "Estrutura preparada para consolidar histórico, evidências e indicadores de conformidade."],
    },
    {
      titleKey: "project.pipeline.title",
      descKey: "project.pipeline.desc",
      technologies: ["Python", "Pandas", "PostgreSQL", "Power BI"],
      problemKey: "project.pipeline.problem",
      impactKey: "project.pipeline.impact",
      featured: true,
      github: "#",
      slug: "pipeline",
      caseStudy: ["Coleta e padronização de dados provenientes de fontes operacionais distintas.", "Rotinas de tratamento, validação e consolidação para reduzir trabalho manual e inconsistências.", "Persistência em banco relacional e modelagem orientada a consultas analíticas.", "Camada de visualização com indicadores operacionais e relatórios recorrentes."],
    },
    {
      titleKey: "project.automation.title",
      descKey: "project.automation.desc",
      technologies: ["Python", "REST APIs", "Selenium", "Cron"],
      problemKey: "project.automation.problem",
      impactKey: "project.automation.impact",
      github: "#",
      slug: "automacao",
      caseStudy: ["Mapeamento de etapas repetitivas e definição de regras para execução automática.", "Integração com APIs e navegação automatizada quando não há interface programática disponível.", "Agendamento, registros de execução e tratamento de falhas para garantir rastreabilidade.", "Estrutura modular para evoluir fluxos sem reescrever a automação inteira."],
    },
    {
      titleKey: "project.monitoring.title",
      descKey: "project.monitoring.desc",
      technologies: ["Python", "TensorFlow", "Docker", "React"],
      problemKey: "project.monitoring.problem",
      impactKey: "project.monitoring.impact",
      github: "#",
      demo: "#",
      slug: "monitoramento",
      caseStudy: ["Monitoramento de sinais operacionais com modelos de IA para identificar desvios e anomalias.", "Serviços conteinerizados para padronizar o ambiente de execução e facilitar a implantação.", "APIs para disponibilizar eventos, estados e dados processados a outras aplicações.", "Interface web para consulta de ocorrências e acompanhamento em tempo real."],
    },
    {
      titleKey: "project.dashboard.title",
      descKey: "project.dashboard.desc",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      problemKey: "project.dashboard.problem",
      impactKey: "project.dashboard.impact",
      demo: "#",
      slug: "dashboard",
      caseStudy: ["Interface orientada a decisão, com hierarquia clara para KPIs e indicadores de negócio.", "Componentes de visualização interativos para explorar séries, comparativos e filtros.", "Camada de dados integrada por API para manter os painéis atualizados.", "Frontend em TypeScript estruturado para consistência visual e manutenção contínua."],
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{t("projects.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Dialog key={project.titleKey}>
            <article
              key={project.titleKey}
              className={`group relative rounded-2xl bg-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded mb-2">
                        {t("projects.featured")}
                      </span>
                    )}
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Layers3 className="h-5 w-5" /></div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t(project.titleKey)}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(project.descKey)}
                </p>

                {/* Problem & Impact */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">{t("projects.problem")}</p>
                    <p className="text-sm text-foreground">{t(project.problemKey)}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-xs text-primary mb-1">{t("projects.impact")}</p>
                    <p className="text-sm text-foreground font-medium">{t(project.impactKey)}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                  <a href={`/projetos/${project.slug}`} className="group/button flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10" aria-label={`Abrir case de ${t(project.titleKey)}`}>
                      Ver case <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
            <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-2xl border-border bg-card p-0">
              <div className="border-b border-border bg-gradient-to-br from-primary/10 to-transparent p-6 pr-12 md:p-8 md:pr-14">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Workflow className="h-5 w-5" /></div>
                <DialogHeader>
                  <p className="font-mono text-xs text-primary">CASE STUDY / PROJETO</p>
                  <DialogTitle className="text-2xl leading-tight md:text-3xl">{t(project.titleKey)}</DialogTitle>
                  <DialogDescription className="pt-2 text-base leading-relaxed">{t(project.descKey)}</DialogDescription>
                </DialogHeader>
              </div>
              <div className="space-y-6 p-6 md:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-secondary/40 p-4"><p className="mb-1 text-xs font-mono text-muted-foreground">DESAFIO</p><p className="text-sm leading-relaxed">{t(project.problemKey)}</p></div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4"><p className="mb-1 text-xs font-mono text-primary">DIRECIONAMENTO</p><p className="text-sm leading-relaxed">{t(project.impactKey)}</p></div>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Escopo técnico</h4>
                  <ul className="space-y-3">
                    {project.caseStudy.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                  </ul>
                </div>
                <div className="border-t border-border pt-5"><p className="mb-3 text-xs font-mono text-muted-foreground">TECNOLOGIAS E DOMÍNIOS</p><div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-foreground">{tech}</span>)}</div></div>
              </div>
            </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              {t("projects.viewAll")}
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

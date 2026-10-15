import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.stack": "Tech Stack",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.available": "Available for opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.title": "Software Engineer | AI & Computer Vision | Data Automation",
    "hero.description": "Building intelligent, scalable and production-ready solutions with Python, AI and Data. Transforming complex problems into elegant, efficient systems.",
    "hero.cta": "View Projects",
    "hero.years": "Years Exp.",
    "hero.projects": "Projects",
    "hero.technologies": "Technologies",
    
    // About
    "about.subtitle": "// About Me",
    "about.title": "Crafting Intelligent Solutions",
    "about.p1": "I'm a",
    "about.p1.role": "Software Engineer",
    "about.p1.text": "passionate about building intelligent systems that solve real-world problems. With a strong foundation in",
    "about.p1.skills": "Python, Machine Learning, and Computer Vision",
    "about.p1.end": ", I specialize in creating scalable, production-ready solutions.",
    "about.p2": "My expertise spans from developing",
    "about.p2.ai": "AI-powered detection systems",
    "about.p2.to": "to building",
    "about.p2.data": "data automation pipelines",
    "about.p2.and": "and",
    "about.p2.dashboards": "interactive dashboards",
    "about.p2.end": ". I thrive in environments where technology meets business impact.",
    "about.p3": "Currently focused on Computer Vision applications for industrial safety and operational efficiency, with experience in corporate environments and security-critical systems.",
    "about.highlight.years": "4+ Years",
    "about.highlight.years.desc": "Professional experience in software development",
    "about.highlight.ai": "AI & ML",
    "about.highlight.ai.desc": "Machine Learning and Computer Vision expertise",
    "about.highlight.data": "Data",
    "about.highlight.data.desc": "Data pipelines and analytics automation",
    "about.highlight.prod": "Production",
    "about.highlight.prod.desc": "Enterprise-grade systems in production",
    
    // Tech Stack
    "stack.subtitle": "// Tech Stack",
    "stack.title": "Technologies I Work With",
    "stack.backend": "Backend & Data",
    "stack.ai": "AI & Computer Vision",
    "stack.bi": "Data & BI",
    "stack.web": "Web & Frontend",
    "stack.infra": "Infra & DevOps",
    
    // Projects
    "projects.subtitle": "// Projects",
    "projects.title": "Featured Work",
    "projects.description": "A selection of projects showcasing my expertise in AI, data engineering, and software development.",
    "projects.featured": "Featured",
    "projects.problem": "Problem Solved",
    "projects.impact": "Impact",
    "projects.viewAll": "View All Projects on GitHub",
    
    "project.ppe.title": "PPE Detection System",
    "project.ppe.desc": "Real-time computer vision system for detecting Personal Protective Equipment in industrial environments.",
    "project.ppe.problem": "Workers not wearing proper safety equipment in hazardous areas",
    "project.ppe.impact": "95% detection accuracy, 60% reduction in safety incidents",
    "project.orchestrator.title": "AI Operations Orchestrator — POC",
    "project.orchestrator.desc": "End-to-end proof of concept for an intelligent operations orchestrator. I independently designed and implemented the solution across network connectivity, video-source integration, REST APIs, backend services, a responsive frontend, and computer-vision workflows for real-time event processing.",
    "project.orchestrator.problem": "Different operational sources and disconnected tools made it difficult to turn live events into a coordinated, traceable workflow",
    "project.orchestrator.impact": "A unified technical foundation connecting infrastructure, AI inference, alert delivery and operational visibility in one flow",
    
    "project.pipeline.title": "Data Analytics Pipeline",
    "project.pipeline.desc": "End-to-end data pipeline for processing, analyzing and visualizing operational metrics.",
    "project.pipeline.problem": "Scattered data sources and manual reporting processes",
    "project.pipeline.impact": "Automated 15+ reports, 80% time savings",
    
    "project.automation.title": "Process Automation System",
    "project.automation.desc": "Intelligent automation solution for repetitive business processes using Python and APIs.",
    "project.automation.problem": "Manual data entry and repetitive administrative tasks",
    "project.automation.impact": "Saved 200+ hours/month in manual work",
    
    "project.monitoring.title": "Smart Monitoring Platform",
    "project.monitoring.desc": "AI-powered monitoring system for real-time anomaly detection in industrial operations.",
    "project.monitoring.problem": "Delayed detection of equipment failures and anomalies",
    "project.monitoring.impact": "30% faster incident response time",
    
    "project.dashboard.title": "Data Visualization Dashboard",
    "project.dashboard.desc": "Interactive web dashboard for visualizing complex datasets and KPIs.",
    "project.dashboard.problem": "Stakeholders lacked real-time visibility into metrics",
    "project.dashboard.impact": "Improved decision-making speed by 40%",
    
    // Differentials
    "diff.subtitle": "// Why Work With Me",
    "diff.title": "What Sets Me Apart",
    "diff.focus.title": "Real-World Focus",
    "diff.focus.desc": "Every solution is designed to solve actual business problems with measurable impact.",
    "diff.code.title": "Clean & Scalable Code",
    "diff.code.desc": "Following best practices for maintainable, well-documented, and production-ready code.",
    "diff.prod.title": "Production Experience",
    "diff.prod.desc": "Hands-on experience deploying and maintaining systems in enterprise environments.",
    "diff.stack.title": "Full Stack Integration",
    "diff.stack.desc": "Bridging AI, data engineering, and software development into cohesive solutions.",
    
    // Contact
    "contact.subtitle": "// Get in Touch",
    "contact.title": "Let's Work Together",
    "contact.description": "I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.text": "Connect with me",
    "contact.github": "GitHub",
    "contact.github.text": "View my code",
    "contact.location": "Brazil | Remote / Global",
    "contact.cta": "Send me a message",
    "contact.cta.linkedin": "Connect on LinkedIn",
    
    // Footer
    "footer.built": "Built with",
    "footer.using": "using React & TypeScript",
  },
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.stack": "Tecnologias",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    
    // Hero
    "hero.available": "Disponível para oportunidades",
    "hero.greeting": "Olá, sou",
    "hero.title": "Engenheiro de Software | IA & Visão Computacional | Automação de Dados",
    "hero.description": "Construindo soluções inteligentes, escaláveis e prontas para produção com Python, IA e Dados. Transformando problemas complexos em sistemas elegantes e eficientes.",
    "hero.cta": "Ver Projetos",
    "hero.years": "Anos Exp.",
    "hero.projects": "Projetos",
    "hero.technologies": "Tecnologias",
    
    // About
    "about.subtitle": "// Sobre Mim",
    "about.title": "Criando Soluções Inteligentes",
    "about.p1": "Sou um",
    "about.p1.role": "Engenheiro de Software",
    "about.p1.text": "apaixonado por construir sistemas inteligentes que resolvem problemas reais. Com uma base sólida em",
    "about.p1.skills": "Python, Machine Learning e Visão Computacional",
    "about.p1.end": ", me especializo em criar soluções escaláveis e prontas para produção.",
    "about.p2": "Minha expertise vai desde o desenvolvimento de",
    "about.p2.ai": "sistemas de detecção com IA",
    "about.p2.to": "até a construção de",
    "about.p2.data": "pipelines de automação de dados",
    "about.p2.and": "e",
    "about.p2.dashboards": "dashboards interativos",
    "about.p2.end": ". Prospero em ambientes onde tecnologia encontra impacto nos negócios.",
    "about.p3": "Atualmente focado em aplicações de Visão Computacional para segurança industrial e eficiência operacional, com experiência em ambientes corporativos e sistemas críticos de segurança.",
    "about.highlight.years": "4+ Anos",
    "about.highlight.years.desc": "Experiência profissional em desenvolvimento de software",
    "about.highlight.ai": "IA & ML",
    "about.highlight.ai.desc": "Expertise em Machine Learning e Visão Computacional",
    "about.highlight.data": "Dados",
    "about.highlight.data.desc": "Pipelines de dados e automação de analytics",
    "about.highlight.prod": "Produção",
    "about.highlight.prod.desc": "Sistemas enterprise-grade em produção",
    
    // Tech Stack
    "stack.subtitle": "// Stack Tecnológica",
    "stack.title": "Tecnologias que Utilizo",
    "stack.backend": "Backend & Dados",
    "stack.ai": "IA & Visão Computacional",
    "stack.bi": "Dados & BI",
    "stack.web": "Web & Frontend",
    "stack.infra": "Infra & DevOps",
    
    // Projects
    "projects.subtitle": "// Projetos",
    "projects.title": "Trabalhos em Destaque",
    "projects.description": "Uma seleção de projetos demonstrando minha expertise em IA, engenharia de dados e desenvolvimento de software.",
    "projects.featured": "Destaque",
    "projects.problem": "Problema Resolvido",
    "projects.impact": "Impacto",
    "projects.viewAll": "Ver Todos os Projetos no GitHub",
    
    "project.ppe.title": "Sistema de Detecção de EPI",
    "project.ppe.desc": "Sistema de visão computacional em tempo real para detecção de Equipamentos de Proteção Individual em ambientes industriais.",
    "project.ppe.problem": "Trabalhadores sem equipamentos de segurança adequados em áreas de risco",
    "project.ppe.impact": "95% de precisão na detecção, redução de 60% em incidentes de segurança",
    "project.orchestrator.title": "Orquestrador de Operações com IA — POC",
    "project.orchestrator.desc": "Prova de conceito end-to-end de um orquestrador inteligente de operações. Concebi e implementei integralmente a solução: conectividade de rede, integração de fontes de vídeo, APIs REST, serviços de backend, frontend responsivo e fluxos de visão computacional para processamento de eventos em tempo real.",
    "project.orchestrator.problem": "Fontes operacionais distintas e ferramentas desconectadas dificultavam transformar eventos ao vivo em um fluxo coordenado e rastreável",
    "project.orchestrator.impact": "Base técnica unificada que conecta infraestrutura, inferência de IA, envio de alertas e visibilidade operacional em um único fluxo",
    
    "project.pipeline.title": "Pipeline de Analytics de Dados",
    "project.pipeline.desc": "Pipeline de dados end-to-end para processamento, análise e visualização de métricas operacionais.",
    "project.pipeline.problem": "Fontes de dados dispersas e processos manuais de relatórios",
    "project.pipeline.impact": "Automação de 15+ relatórios, economia de 80% do tempo",
    
    "project.automation.title": "Sistema de Automação de Processos",
    "project.automation.desc": "Solução de automação inteligente para processos repetitivos de negócios usando Python e APIs.",
    "project.automation.problem": "Entrada manual de dados e tarefas administrativas repetitivas",
    "project.automation.impact": "Economia de 200+ horas/mês em trabalho manual",
    
    "project.monitoring.title": "Plataforma de Monitoramento Inteligente",
    "project.monitoring.desc": "Sistema de monitoramento com IA para detecção de anomalias em tempo real em operações industriais.",
    "project.monitoring.problem": "Detecção tardia de falhas de equipamentos e anomalias",
    "project.monitoring.impact": "30% mais rápido no tempo de resposta a incidentes",
    
    "project.dashboard.title": "Dashboard de Visualização de Dados",
    "project.dashboard.desc": "Dashboard web interativo para visualização de datasets complexos e KPIs.",
    "project.dashboard.problem": "Stakeholders sem visibilidade em tempo real das métricas",
    "project.dashboard.impact": "Melhoria de 40% na velocidade de tomada de decisão",
    
    // Differentials
    "diff.subtitle": "// Por Que Trabalhar Comigo",
    "diff.title": "O Que Me Diferencia",
    "diff.focus.title": "Foco em Resultados Reais",
    "diff.focus.desc": "Cada solução é projetada para resolver problemas reais de negócio com impacto mensurável.",
    "diff.code.title": "Código Limpo & Escalável",
    "diff.code.desc": "Seguindo melhores práticas para código manutenível, bem documentado e pronto para produção.",
    "diff.prod.title": "Experiência em Produção",
    "diff.prod.desc": "Experiência prática em deploy e manutenção de sistemas em ambientes enterprise.",
    "diff.stack.title": "Integração Full Stack",
    "diff.stack.desc": "Conectando IA, engenharia de dados e desenvolvimento de software em soluções coesas.",
    
    // Contact
    "contact.subtitle": "// Entre em Contato",
    "contact.title": "Vamos Trabalhar Juntos",
    "contact.description": "Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou apenas conversar sobre tecnologia.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.text": "Conecte-se comigo",
    "contact.github": "GitHub",
    "contact.github.text": "Veja meu código",
    "contact.location": "Brasil | Remoto / Global",
    "contact.cta": "Envie uma mensagem",
    "contact.cta.linkedin": "Conectar no LinkedIn",
    
    // Footer
    "footer.built": "Feito com",
    "footer.using": "usando React & TypeScript",
  },
  es: {
    // Header
    "nav.about": "Sobre mí",
    "nav.stack": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.available": "Disponible para oportunidades",
    "hero.greeting": "Hola, soy",
    "hero.title": "Ingeniero de Software | IA y Visión por Computador | Automatización de Datos",
    "hero.description": "Construyo soluciones inteligentes, escalables y listas para producción con Python, IA y datos. Transformo problemas complejos en sistemas elegantes y eficientes.",
    "hero.cta": "Ver proyectos",
    "hero.years": "Años de exp.",
    "hero.projects": "Proyectos",
    "hero.technologies": "Tecnologías",

    // About
    "about.subtitle": "// Sobre mí",
    "about.title": "Creando soluciones inteligentes",
    "about.p1": "Soy",
    "about.p1.role": "ingeniero de software",
    "about.p1.text": "apasionado por crear sistemas inteligentes que resuelven problemas reales. Con una sólida base en",
    "about.p1.skills": "Python, Machine Learning y Visión por Computador",
    "about.p1.end": ", me especializo en crear soluciones escalables y listas para producción.",
    "about.p2": "Mi experiencia abarca desde el desarrollo de",
    "about.p2.ai": "sistemas de detección con IA",
    "about.p2.to": "hasta la creación de",
    "about.p2.data": "pipelines de automatización de datos",
    "about.p2.and": "y",
    "about.p2.dashboards": "dashboards interactivos",
    "about.p2.end": ". Me desenvuelvo en entornos donde la tecnología genera impacto en el negocio.",
    "about.p3": "Actualmente me enfoco en aplicaciones de Visión por Computador para la seguridad industrial y la eficiencia operativa, con experiencia en entornos corporativos y sistemas críticos de seguridad.",
    "about.highlight.years": "4+ años",
    "about.highlight.years.desc": "Experiencia profesional en desarrollo de software",
    "about.highlight.ai": "IA y ML",
    "about.highlight.ai.desc": "Experiencia en Machine Learning y Visión por Computador",
    "about.highlight.data": "Datos",
    "about.highlight.data.desc": "Pipelines de datos y automatización de análisis",
    "about.highlight.prod": "Producción",
    "about.highlight.prod.desc": "Sistemas empresariales en producción",

    // Tech Stack
    "stack.subtitle": "// Stack tecnológico",
    "stack.title": "Tecnologías con las que trabajo",
    "stack.backend": "Backend y datos",
    "stack.ai": "IA y Visión por Computador",
    "stack.bi": "Datos y BI",
    "stack.web": "Web y frontend",
    "stack.infra": "Infraestructura y DevOps",

    // Projects
    "projects.subtitle": "// Proyectos",
    "projects.title": "Trabajo destacado",
    "projects.description": "Una selección de proyectos que demuestra mi experiencia en IA, ingeniería de datos y desarrollo de software.",
    "projects.featured": "Destacado",
    "projects.problem": "Problema resuelto",
    "projects.impact": "Impacto",
    "projects.viewAll": "Ver todos los proyectos en GitHub",

    "project.ppe.title": "Sistema de detección de EPP",
    "project.ppe.desc": "Sistema de visión por computador en tiempo real para detectar Equipos de Protección Personal en entornos industriales.",
    "project.ppe.problem": "Trabajadores sin el equipo de seguridad adecuado en áreas peligrosas",
    "project.ppe.impact": "95% de precisión en la detección, 60% menos incidentes de seguridad",
    "project.orchestrator.title": "Orquestador de operaciones con IA — POC",
    "project.orchestrator.desc": "Prueba de concepto end-to-end de un orquestador inteligente de operaciones. Concebí e implementé de forma independiente conectividad de red, integración de fuentes de video, APIs REST, servicios de backend, frontend responsivo y flujos de visión por computador para procesar eventos en tiempo real.",
    "project.orchestrator.problem": "Las fuentes operativas distintas y las herramientas desconectadas dificultaban transformar los eventos en vivo en un flujo coordinado y rastreable",
    "project.orchestrator.impact": "Base técnica unificada que conecta infraestructura, inferencia de IA, entrega de alertas y visibilidad operativa en un único flujo",

    "project.pipeline.title": "Pipeline de analítica de datos",
    "project.pipeline.desc": "Pipeline de datos integral para procesar, analizar y visualizar métricas operativas.",
    "project.pipeline.problem": "Fuentes de datos dispersas y procesos manuales de elaboración de informes",
    "project.pipeline.impact": "15+ informes automatizados, 80% de ahorro de tiempo",

    "project.automation.title": "Sistema de automatización de procesos",
    "project.automation.desc": "Solución de automatización inteligente para procesos empresariales repetitivos usando Python y APIs.",
    "project.automation.problem": "Entrada manual de datos y tareas administrativas repetitivas",
    "project.automation.impact": "Más de 200 horas al mes ahorradas en trabajo manual",

    "project.monitoring.title": "Plataforma de monitorización inteligente",
    "project.monitoring.desc": "Sistema de monitorización con IA para detectar anomalías en tiempo real en operaciones industriales.",
    "project.monitoring.problem": "Detección tardía de fallos y anomalías en los equipos",
    "project.monitoring.impact": "30% menos de tiempo de respuesta ante incidentes",

    "project.dashboard.title": "Dashboard de visualización de datos",
    "project.dashboard.desc": "Dashboard web interactivo para visualizar conjuntos de datos complejos y KPIs.",
    "project.dashboard.problem": "Los responsables no tenían visibilidad en tiempo real de las métricas",
    "project.dashboard.impact": "40% más de rapidez en la toma de decisiones",

    // Differentials
    "diff.subtitle": "// Por qué trabajar conmigo",
    "diff.title": "Lo que me diferencia",
    "diff.focus.title": "Enfoque en el mundo real",
    "diff.focus.desc": "Cada solución está diseñada para resolver problemas empresariales reales con impacto medible.",
    "diff.code.title": "Código limpio y escalable",
    "diff.code.desc": "Sigo buenas prácticas para crear código mantenible, bien documentado y listo para producción.",
    "diff.prod.title": "Experiencia en producción",
    "diff.prod.desc": "Experiencia práctica desplegando y manteniendo sistemas en entornos empresariales.",
    "diff.stack.title": "Integración full stack",
    "diff.stack.desc": "Conecto IA, ingeniería de datos y desarrollo de software en soluciones cohesivas.",

    // Contact
    "contact.subtitle": "// Contacto",
    "contact.title": "Trabajemos juntos",
    "contact.description": "Siempre estoy abierto a conversar sobre nuevas oportunidades, proyectos interesantes o simplemente tecnología.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.text": "Conecta conmigo",
    "contact.github": "GitHub",
    "contact.github.text": "Mira mi código",
    "contact.location": "Brasil | Remoto / Global",
    "contact.cta": "Envíame un mensaje",
    "contact.cta.linkedin": "Conectar en LinkedIn",

    // Footer
    "footer.built": "Creado con",
    "footer.using": "usando React y TypeScript",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

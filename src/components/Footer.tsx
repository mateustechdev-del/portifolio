import { Linkedin, Instagram, Youtube } from "lucide-react";
import hardlineLogo from "@/assets/hardline-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={hardlineLogo} alt="Hardline Logo" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Transformando visão em inteligência. Protegemos pessoas, ativos e operações com tecnologia de ponta em visão computacional e inteligência artificial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Soluções</h4>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Segurança do Trabalho</a></li>
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Segurança Patrimonial</a></li>
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Monitoramento Operacional</a></li>
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Agronegócio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#casos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Casos de Sucesso</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Hardline. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Segurança, Tecnologia e Confiança.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

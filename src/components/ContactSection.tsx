import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    cargo: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });

    setFormData({
      nome: "",
      empresa: "",
      cargo: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contato</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
              PRONTO PARA <span className="text-gradient">TRANSFORMAR</span> SUA OPERAÇÃO?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Agende uma demonstração gratuita e descubra como a visão computacional pode aumentar a segurança e eficiência do seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefone</div>
                  <div className="font-medium">+55 (11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <div className="font-medium">contato@hardline.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Localização</div>
                  <div className="font-medium">São Paulo, SP - Brasil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="font-display text-2xl mb-6">Fale com um Especialista</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nome *</label>
                  <Input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Empresa *</label>
                  <Input
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Nome da empresa"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Cargo</label>
                  <Input
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    placeholder="Seu cargo"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Telefone *</label>
                  <Input
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">E-mail *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com.br"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                <Textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto ou desafio..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

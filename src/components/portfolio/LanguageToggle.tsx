import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary/50 border border-border">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`h-7 px-2 text-xs font-medium transition-all ${
          language === "en" 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("pt")}
        className={`h-7 px-2 text-xs font-medium transition-all ${
          language === "pt" 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
      >
        PT
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("es")}
        className={`h-7 px-2 text-xs font-medium transition-all ${
          language === "es"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        }`}
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageToggle;

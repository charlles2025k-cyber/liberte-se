import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">Sua liberdade custa menos que uma aposta perdida</h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Por um pagamento único, você terá acesso vitalício ao método que pode mudar sua vida para sempre. Sem mensalidades, sem pegadinhas.
        </p>

        <div className="mt-10 bg-card border border-primary/50 rounded-xl p-8 max-w-2xl mx-auto shadow-2xl shadow-primary/10">
          <p className="text-muted-foreground text-lg">De <span className="line-through">R$ 97,00</span> por apenas:</p>
          <p className="my-4 text-5xl md:text-7xl font-bold font-headline text-primary">
            12x de R$ 1,99
          </p>
          <p className="text-muted-foreground text-lg">ou <span className="font-bold text-foreground">R$ 19,90</span> à vista</p>
          
          <Button
            size="lg"
            className="mt-8 w-full h-16 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)] transition-all duration-300 animate-pulse-slow"
          >
            <Zap className="mr-2 h-6 w-6" />
            QUERO ME LIBERTAR AGORA
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">Compra 100% segura. Acesso imediato por e-mail.</p>
        </div>
      </div>
    </section>
  );
}

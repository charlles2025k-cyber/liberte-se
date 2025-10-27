import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";

const EssentialPlanFeatures = [
  "Guia 'Superando o Vício'",
  "Plano de Ação de 30 Dias",
  "Ferramentas de Autocontrole",
];

const CompletePlanFeatures = [
  "Tudo do Plano Essencial",
  "Acesso a Comunidade Exclusiva",
  "Sessões de Acompanhamento em Grupo",
  "Conteúdo sobre Prevenção de Recaídas",
  "Suporte prioritário por e-mail",
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">Escolha o plano ideal para sua libertação</h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Invista em você e dê o primeiro passo para uma vida livre do vício. A decisão é sua, o apoio é nosso.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Plano Essencial */}
          <Card className="bg-card/80 border-border/50 flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Plano Essencial</CardTitle>
              <CardDescription>Acesso vitalício ao método</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="text-center my-4">
                <p className="text-4xl font-bold font-headline">R$ 19,90</p>
                <p className="text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-3 flex-grow">
                {EssentialPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 w-full h-14 text-lg font-bold" variant="outline">
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Plano Completo */}
          <Card className="border-primary border-2 shadow-2xl shadow-primary/20 bg-card relative overflow-hidden flex flex-col h-full">
            <div className="bg-primary text-primary-foreground font-bold py-1 px-4 absolute top-4 right-[-45px] rotate-45 text-sm">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-3xl">Plano Completo</CardTitle>
              <CardDescription>A transformação completa com apoio contínuo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="text-center my-4">
                <p className="text-lg text-muted-foreground">de <span className="line-through">R$ 197,00</span> por</p>
                <p className="text-5xl md:text-6xl font-bold font-headline text-primary">
                  R$ 47,90
                </p>
                <p className="text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-3 my-6 flex-grow">
                {CompletePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 w-full h-16 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 animate-pulse-slow"
              >
                <Zap className="mr-2 h-6 w-6" />
                QUERO O PLANO COMPLETO
              </Button>
              <p className="mt-4 text-sm text-muted-foreground text-center">Acesso imediato e 100% seguro.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const FeatureList = ({ features, check }: { features: string[], check: 'yes' | 'no' }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center gap-3">
        {check === 'yes' ? (
          <CheckCircle className="h-5 w-5 text-primary" />
        ) : (
          <XCircle className="h-5 w-5 text-destructive" />
        )}
        <span className="text-muted-foreground">{feature}</span>
      </li>
    ))}
  </ul>
);

export default function ComparisonSection() {
  return (
    <section id="comparativo" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Uma decisão inteligente para uma mudança imediata</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja por que nosso método é a alternativa mais eficaz e acessível para quem busca resultados rápidos e duradouros.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Terapia Tradicional</CardTitle>
            </CardHeader>
            <CardContent>
              <FeatureList
                features={[
                  "Longo e demorado",
                  "Foco em teoria, pouca prática",
                  "Acesso limitado a sessões",
                  "Sem suporte diário",
                  "Vergonha e dificuldade de se abrir"
                ]}
                check="no"
              />
              <div className="mt-6 text-center">
                <p className="text-4xl font-bold font-headline text-destructive line-through">R$ 200 - R$ 500</p>
                <p className="text-muted-foreground">por sessão</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary border-2 shadow-lg shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Método Liberte-se</CardTitle>
            </CardHeader>
            <CardContent>
              <FeatureList
                features={[
                  "Resultados práticos em semanas",
                  "Foco em ação e ferramentas",
                  "Acesso vitalício ao material",
                  "Leve com você para onde for",
                  "Anônimo, discreto e no seu tempo"
                ]}
                check="yes"
              />
              <div className="mt-6 text-center">
                <p className="text-4xl font-bold font-headline text-primary">Apenas R$ 19,90</p>
                <p className="text-muted-foreground">pagamento único</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

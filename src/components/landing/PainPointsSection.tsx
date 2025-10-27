import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, BrainCircuit, HeartCrack, EyeOff } from "lucide-react";

const painPoints = [
  {
    icon: <EyeOff className="h-10 w-10 text-destructive" />,
    title: "Mentiras e Segredos",
    description: "Esconder o vício de quem você ama, vivendo uma vida dupla e solitária."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-destructive" />,
    title: "Ansiedade e Compulsão",
    description: "A necessidade incontrolável de apostar, mesmo sabendo das consequências devastadoras."
  },
  {
    icon: <HeartCrack className="h-10 w-10 text-destructive" />,
    title: "Culpa e Arrependimento",
    description: "O peso esmagador da culpa após cada perda, prometendo a si mesmo que será a última vez."
  },
  {
    icon: <CircleDollarSign className="h-10 w-10 text-destructive" />,
    title: "Dívidas Crescentes",
    description: "Ver o dinheiro que deveria sustentar sua família desaparecer, criando um buraco financeiro cada vez maior."
  }
];

export default function PainPointsSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Você não está sozinho nessa luta</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Milhões de pessoas enfrentam a mesma dor. Reconhecer esses sinais é o primeiro passo para a libertação.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point) => (
            <Card key={point.title} className="bg-card border-border/50 text-center hover:border-primary transition-colors duration-300">
              <CardHeader className="items-center">
                {point.icon}
                <CardTitle className="mt-4 font-headline text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

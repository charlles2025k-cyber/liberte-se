import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    quote: "Eu estava no fundo do poço, devendo dinheiro para agiotas. O guia foi minha luz. Em 2 meses, paguei minhas dívidas e hoje tenho nojo de site de aposta. Obrigado!",
    location: "São Paulo, SP"
  },
  {
    name: "Juliana F.",
    quote: "Meu casamento estava acabando. Eu mentia para meu marido todos os dias. Esse método não só me salvou do vício, mas salvou minha família. Hoje vivemos em paz.",
    location: "Belo Horizonte, MG"
  },
  {
    name: "Ricardo P.",
    quote: "Tentei de tudo, até terapia. Nada funcionou como esse guia. É direto, prático e sem enrolação. O preço é simbólico perto da liberdade que ele me deu. Recomendo demais!",
    location: "Porto Alegre, RS"
  }
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">A prova de que a mudança é real</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja o que pessoas como você, que tomaram a decisão de mudar, estão dizendo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/80 border-border/50 flex flex-col hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex-grow flex flex-col">
                <StarRating />
                <blockquote className="mt-4 text-muted-foreground flex-grow">
                  “{testimonial.quote}”
                </blockquote>
                <footer className="mt-6">
                  <p className="font-bold font-headline text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

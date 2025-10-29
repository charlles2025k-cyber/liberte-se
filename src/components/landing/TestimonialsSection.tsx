"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos M.",
    quote: "Eu estava no fundo do poço, devendo dinheiro para agiotas. O guia foi minha luz. Em 2 meses, paguei minhas dívidas e hoje tenho nojo de site de aposta. Obrigado!",
    location: "São Paulo, SP",
    avatar: "https://i.postimg.cc/htkX7Rzn/pessoa-1.jpg"
  },
  {
    name: "Juliana F.",
    quote: "Meu casamento estava acabando. Eu mentia para meu marido todos os dias. Esse método não só me salvou do vício, mas salvou minha família. Hoje vivemos em paz.",
    location: "Belo Horizonte, MG",
    avatar: "https://i.postimg.cc/fRGV0Qth/pessoa-4.jpg"
  },
  {
    name: "Ricardo P.",
    quote: "Tentei de tudo, até terapia. Nada funcionou como esse guia. É direto, prático e sem enrolação. O preço é simbólico perto da liberdade que ele me deu. Recomendo demais!",
    location: "Porto Alegre, RS",
    avatar: "https://picsum.photos/seed/3/100/100"
  },
  {
    name: "Fernando L.",
    quote: "Perdi a confiança de todos ao meu redor. Estava isolado. O método me deu um caminho claro para seguir e a comunidade me mostrou que eu não estava sozinho. Recuperei minha vida.",
    location: "Rio de Janeiro, RJ",
    avatar: "https://picsum.photos/seed/4/100/100"
  },
  {
    name: "Ana C.",
    quote: "Achei que era só uma 'fase ruim', mas estava perdendo o controle. O guia me ajudou a entender a psicologia por trás do vício e me deu as ferramentas para parar antes que fosse tarde demais.",
    location: "Salvador, BA",
    avatar: "https://picsum.photos/seed/5/100/100"
  },
  {
    name: "Marcos V.",
    quote: "O anonimato foi essencial para mim. Segui o passo a passo no meu tempo, sem julgamentos. Hoje, o dinheiro que eu gastava em apostas, eu invisto no futuro da minha filha. Sou outra pessoa.",
    location: "Curitiba, PR",
    avatar: "https://picsum.photos/seed/6/100/100"
  },
  {
    name: "Eduardo S.",
    quote: "Estava cético, mas a garantia de 7 dias me convenceu a tentar. Foi a melhor decisão que já tomei. O plano de ação é muito claro e o suporte no grupo fez toda a diferença.",
    location: "Fortaleza, CE",
    avatar: "https://picsum.photos/seed/7/100/100"
  },
  {
    name: "Lúcia R.",
    quote: "A parte de reorganização financeira foi crucial. Eu não só parei de apostar, como aprendi a cuidar do meu dinheiro. Hoje tenho uma reserva de emergência, algo que parecia impossível.",
    location: "Brasília, DF",
    avatar: "https://picsum.photos/seed/8/100/100"
  },
  {
    name: "Paulo G.",
    quote: "O contato com a especialista pelo WhatsApp é um diferencial enorme. Ter alguém pra conversar na hora da fraqueza, sem julgamento, foi o que me manteve firme no processo. Recomendo!",
    location: "Manaus, AM",
    avatar: "https://picsum.photos/seed/9/100/100"
  }
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const BackgroundIcon = ({ className, delay }: { className: string, delay: number }) => (
  <motion.div
    className={`absolute text-white blur-[2px] ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    <Quote className="h-full w-full" transform="scale(-1, -1)" />
  </motion.div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <BackgroundIcon className="h-32 w-32 top-[10%] left-[5%]" delay={0.2} />
        <BackgroundIcon className="h-40 w-40 top-[40%] right-[-5%]" delay={0.4} />
        <BackgroundIcon className="h-24 w-24 bottom-[15%] left-[20%]" delay={0.6} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A prova de que a mudança é real</h2>
          <p className="mt-4 text-lg text-foreground">
            Veja o que pessoas como você, que tomaram a decisão de mudar, estão dizendo.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="bg-card/80 border-border/50 flex flex-col hover:scale-105 transition-transform duration-300 h-full shadow-lg">
                      <CardContent className="p-6 flex-grow flex flex-col text-center items-center">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <StarRating />
                        <blockquote className="mt-4 text-muted-foreground flex-grow italic">
                          “{testimonial.quote}”
                        </blockquote>
                        <footer className="mt-6">
                          <p className="font-bold font-headline text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </footer>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:left-0 md:-left-4 top-1/2 -translate-y-1/2 text-foreground bg-background/50 hover:bg-background h-10 w-10 z-10" />
            <CarouselNext className="absolute -right-2 sm:right-0 md:-right-4 top-1/2 -translate-y-1/2 text-foreground bg-background/50 hover:bg-background h-10 w-10 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

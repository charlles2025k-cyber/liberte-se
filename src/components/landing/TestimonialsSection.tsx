"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos M.",
    quote: "Eu estava no fundo do poço, devendo dinheiro para agiotas. O guia foi minha luz. Em 2 meses, paguei minhas dívidas e hoje tenho nojo de site de aposta. Obrigado!",
    location: "São Paulo, SP",
    avatar: "https://picsum.photos/seed/1/100/100"
  },
  {
    name: "Juliana F.",
    quote: "Meu casamento estava acabando. Eu mentia para meu marido todos os dias. Esse método não só me salvou do vício, mas salvou minha família. Hoje vivemos em paz.",
    location: "Belo Horizonte, MG",
    avatar: "https://picsum.photos/seed/2/100/100"
  },
  {
    name: "Ricardo P.",
    quote: "Tentei de tudo, até terapia. Nada funcionou como esse guia. É direto, prático e sem enrolação. O preço é simbólico perto da liberdade que ele me deu. Recomendo demais!",
    location: "Porto Alegre, RS",
    avatar: "https://picsum.photos/seed/3/100/100"
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
    className={`absolute text-white ${className}`}
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
      <div className="absolute inset-0 z-0 opacity-[0.07] blur-md">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
          ))}
        </div>
      </div>
    </section>
  );
}

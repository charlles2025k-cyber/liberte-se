"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, BrainCircuit, HeartCrack, EyeOff, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: <EyeOff className="h-10 w-10 text-primary" />,
    title: "Mentiras e Segredos",
    description: "Esconder o vício de quem você ama, vivendo uma vida dupla e solitária."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Ansiedade e Compulsão",
    description: "A necessidade incontrolável de apostar, mesmo sabendo das consequências devastadoras."
  },
  {
    icon: <HeartCrack className="h-10 w-10 text-primary" />,
    title: "Culpa e Arrependimento",
    description: "O peso esmagador da culpa após cada perda, prometendo a si mesmo que será a última vez."
  },
  {
    icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
    title: "Dívidas Crescentes",
    description: "Ver o dinheiro que deveria sustentar sua família desaparecer, criando um buraco financeiro cada vez maior."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PainPointsSection() {
  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Você não está sozinho nessa luta</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Milhões de pessoas enfrentam a mesma dor. Reconhecer esses sinais é o primeiro passo para a libertação.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-bold text-lg rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
              <Card className="bg-card/80 border-border/50 text-center group-hover:border-primary transition-colors duration-300 group-hover:scale-105 h-full pt-8">
                <CardHeader className="items-center">
                  {point.icon}
                  <CardTitle className="mt-4 font-headline text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

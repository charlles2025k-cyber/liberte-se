"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, BrainCircuit, HeartCrack, EyeOff } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function PainPointsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);

  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Você não está sozinho nessa luta</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Milhões de pessoas enfrentam a mesma dor. Reconhecer esses sinais é o primeiro passo para a libertação.
          </p>
        </div>
        <div ref={targetRef} className="mt-16 max-w-lg mx-auto relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary origin-top" 
            aria-hidden="true"
          />
          
          <div className="space-y-12 relative">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="relative group">
                  <motion.div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-bold text-lg rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="flex-shrink-0 bg-card p-4 rounded-full border-2 border-primary/50 z-10 shadow-lg shadow-primary/10 group-hover:border-primary transition-colors duration-300">
                    {point.icon}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-headline font-bold">{point.title}</h3>
                  <p className="mt-1 text-muted-foreground">{point.description}</p>
                </div>
              </motion.div>
            ))}
            <motion.div 
              className="absolute bottom-0 left-[26px] w-4 h-4"
              style={{ opacity: arrowOpacity }}
              aria-hidden="true"
            >
              <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[8px] border-t-primary absolute bottom-[-8px] left-1/2 -translate-x-1/2"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, Target, Banknote, Smile } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Entender a Raiz da Compulsão",
    description: "Identifique os gatilhos emocionais e psicológicos que te levam a apostar e aprenda a neutralizá-los."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Construir Barreiras Mentais",
    description: "Desenvolva um 'sistema imunológico' mental contra a vontade de apostar, baseado em técnicas de PNL e psicologia comportamental."
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: "Reorganizar sua Vida Financeira",
    description: "Receba um plano prático para sair das dívidas e reconstruir sua segurança financeira passo a passo."
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Recuperar a Confiança e a Paz",
    description: "Restaure a confiança de sua família e, o mais importante, a sua própria autoconfiança e paz interior."
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

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">O que você vai conquistar?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Este método vai te equipar com as ferramentas necessárias para uma transformação completa e duradoura.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-border/50" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex-shrink-0 bg-card p-3 rounded-full border-2 border-primary/50 z-10 shadow-lg shadow-primary/10">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

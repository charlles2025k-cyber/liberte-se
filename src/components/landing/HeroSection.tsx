"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section 
      id="inicio" 
      className="py-20 md:py-32 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          As apostas não roubam só o seu dinheiro.
          <br />
          <span className="text-primary">Elas destroem sua paz e sua família.</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Chegou a hora de dar um basta. Recupere o controle da sua vida e encontre a paz que você tanto merece com um método comprovado e acessível.
        </motion.p>
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="h-16 px-8 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 animate-pulse-slow"
            asChild
          >
            <a href="#oferta">Quero me libertar agora</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Acesso imediato e 100% seguro.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CircleDollarSign,
  Banknote,
  ShieldCheck,
  LockOpen,
  CreditCard,
  TrendingDown,
} from "lucide-react";

const BackgroundIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className: string, delay: number }) => (
  <motion.div
    className={`absolute text-white/5 ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    <Icon className="h-full w-full" />
  </motion.div>
);

export default function HeroSection() {
  return (
    <motion.section
      id="inicio"
      className="relative py-12 md:py-20 bg-transparent overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0 opacity-50 blur-lg">
        <BackgroundIcon icon={CircleDollarSign} className="h-24 w-24 top-[10%] left-[5%]" delay={0.9} />
        <BackgroundIcon icon={TrendingDown} className="h-20 w-20 top-[15%] right-[10%]" delay={1.1} />
        <BackgroundIcon icon={Banknote} className="h-28 w-28 top-[50%] left-[15%]" delay={1.3} />
        <BackgroundIcon icon={CreditCard} className="h-16 w-16 top-[60%] right-[5%]" delay={1.0} />
        <BackgroundIcon icon={LockOpen} className="h-32 w-32 bottom-[10%] left-[10%] text-primary/10" delay={1.5} />
        <BackgroundIcon icon={ShieldCheck} className="h-24 w-24 bottom-[5%] right-[15%] text-primary/10" delay={1.7} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            As apostas não roubam só o seu dinheiro.
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-2" style={{ textShadow: '0 0 5px rgba(0,0,0,0.5)' }}>Elas destroem sua paz e sua família.</span>
              <span className="absolute inset-0 bg-primary/80 -skew-y-2 z-0"></span>
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Chegou a hora de dar um basta. Recupere o controle da sua vida e encontre a paz que você tanto merece com um método comprovado e acessível.
          </motion.p>
          <motion.div
            className="mt-6 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://i.postimg.cc/JzvQYcMF/Chat-GPT-Image-27-de-out-de-2025-22-54-02.png"
              alt="Homem se libertando do vício em apostas"
              width={500}
              height={500}
              priority
              className="max-w-md md:max-w-lg"
              data-ai-hint="man breaking free gambling addiction"
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="h-16 px-8 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 rounded-full hover:scale-105"
              asChild
            >
              <a href="#oferta">Quero me libertar agora</a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Acesso imediato e 100% seguro.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, Target, BrainCircuit, ShieldCheck } from 'lucide-react';

const BackgroundIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className: string, delay: number }) => (
  <motion.div
    className={`absolute text-primary/10 blur-[1px] ${className}`}
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    whileInView={{ opacity: 0.05, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    <Icon className="h-full w-full" />
  </motion.div>
);


export default function SolutionSection() {
  const guideImage = PlaceHolderImages.find(p => p.id === 'ebook-cover-3d');

  return (
    <section className="py-20 md:py-24 bg-card/50 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
        <BackgroundIcon icon={BookOpen} className="w-40 h-40 top-[-20%] left-[-5%]" delay={0.2} />
        <BackgroundIcon icon={Target} className="w-56 h-56 top-[50%] left-[25%] transform rotate-45" delay={0.4} />
        <BackgroundIcon icon={BrainCircuit} className="w-32 h-32 bottom-[-25%] right-[5%]" delay={0.6} />
        <BackgroundIcon icon={ShieldCheck} className="w-24 h-24 top-[10%] right-[15%] transform rotate-12" delay={0.8} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              A Solução Definitiva para
              <span className="text-primary block">Retomar o Controle</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              O <span className="font-bold text-foreground">Superando o vício em apostas online</span> não é apenas um livro, é um método passo a passo, prático e humano, desenhado para atacar a raiz do problema e te devolver o poder de escolha.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sem julgamentos, sem promessas milagrosas. Apenas ferramentas eficazes que já transformaram a vida de centenas de pessoas, e que agora estão ao seu alcance.
            </p>
            <Button size="lg" className="mt-8 h-12 px-8 text-lg font-bold rounded-full hover:scale-105 transition-transform" asChild>
              <a href="#oferta">Quero meu guia agora</a>
            </Button>
          </div>
          <div className="flex justify-center order-first md:order-last">
            {guideImage && (
              <Image
                src={guideImage.imageUrl}
                alt={guideImage.description}
                data-ai-hint={guideImage.imageHint}
                width={500}
                height={500}
                className="rounded-lg shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500 w-full max-w-[250px] md:max-w-sm"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

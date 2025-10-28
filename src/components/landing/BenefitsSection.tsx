"use client";

import { ShieldCheck, Target, Banknote, Smile, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.31.15.52s-.05.41-.15.54a.76.76 0 01-.52.34c-.14.05-.31.05-.52.05h-.14a4.35 4.35 0 01-2.29-.69 7.82 7.82 0 01-2.8-2.8A4.35 4.35 0 0110 9.39v-.14c0-.21.01-.38.05-.52a.76.76 0 01.34-.52c.13-.11.2-.15.34-.15.14 0 .28.01.41.05l.55.28c.13.08.23.18.29.31s.09.28.09.41a.86.86 0 01-.11.41c-.08.13-.18.23-.31.29l-.41.28c-.08.05-.14.12-.17.2a.9.9 0 00-.06.31c0 .07.01.14.05.21a2.8 2.8 0 00.52.79 2.8 2.8 0 00.79.52c.07.04.14.05.21.05a.9.9 0 00.31-.06c.08-.03.15-.09.2-.17l.28-.41a.86.86 0 01.29-.31c.13-.08.28-.11.41-.09l.28.55zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
    </svg>
  );

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
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Acesso a uma Comunidade de Apoio",
    description: "Junte-se a um grupo com milhares de pessoas que compartilham o mesmo objetivo, onde todos se ajudam mutuamente."
  },
  {
    icon: <WhatsAppIcon className="h-8 w-8 text-primary" />,
    title: "Contato com Especialistas",
    description: "Tenha um canal direto para tirar dúvidas, desabafar e receber dicas de especialistas dedicados a te ajudar."
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

const BackgroundIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className: string, delay: number }) => (
  <motion.div
    className={`absolute text-primary/10 ${className}`}
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    whileInView={{ opacity: 0.05, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    <Icon className="h-full w-full" />
  </motion.div>
);

export default function BenefitsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);

  return (
    <section className="py-20 md:py-24 bg-transparent relative overflow-hidden">
       <div className="absolute inset-0 z-0">
        <BackgroundIcon icon={Target} className="w-40 h-40 top-[-20%] left-[-5%]" delay={0.2} />
        <BackgroundIcon icon={ShieldCheck} className="w-56 h-56 top-[50%] right-[-10%] transform rotate-45" delay={0.4} />
        <BackgroundIcon icon={Banknote} className="w-32 h-32 bottom-[-25%] left-[5%]" delay={0.6} />
        <BackgroundIcon icon={Smile} className="w-24 h-24 top-[10%] right-[15%] transform rotate-12" delay={0.8} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">O que você vai conquistar?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Este método vai te equipar com as ferramentas necessárias para uma transformação completa e duradoura.
          </p>
        </div>
        <div ref={targetRef} className="mt-16 max-w-4xl mx-auto relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary origin-top" 
            aria-hidden="true"
          />
          
          <div className="space-y-12 relative">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex-shrink-0 bg-card p-3 rounded-full border-2 border-primary z-10 shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
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

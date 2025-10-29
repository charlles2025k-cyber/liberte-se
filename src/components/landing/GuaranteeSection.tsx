"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GuaranteeSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 1.05, 1]
  );

  return (
    <section ref={targetRef} className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">GARANTIA</h2>
            <p className="mt-4 text-lg text-muted-foreground">Sua tranquilidade é nossa prioridade.</p>
        </div>
        <motion.div 
          style={{ scale }}
          className="max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 bg-card border border-border/50 p-8 rounded-lg"
        >
          <div className="flex-shrink-0">
            <Image
              src="https://i.postimg.cc/FKww4GBs/441491488-7468228916590797-6212947232026406410-n.jpg"
              alt="Selo de Garantia de 7 dias"
              width={150}
              height={150}
              className="h-36 w-36"
              data-ai-hint="7 day guarantee seal"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold">Sua Mudança Sem Nenhum Risco</h2>
            <p className="mt-4 text-muted-foreground">
              Temos tanta confiança no poder de transformação do nosso método que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não sentir que este guia é para você, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <p className="mt-2 text-muted-foreground font-semibold">
              O risco é todo nosso. A oportunidade de mudar é toda sua.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

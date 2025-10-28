"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import UpgradeOfferDialog from "./UpgradeOfferDialog";


const EssentialPlanFeatures = [
  "Guia 'Superando o Vício'",
  "Plano de Ação de 30 Dias",
  "Ferramentas de Autocontrole",
];

const CompletePlanFeatures = [
  "Guia 'Superando o Vício'",
  "Guia de 30 dias para organizar sua vida financeira",
  "Plano de Ação de 30 Dias",
  "Grupo exclusivo de WhatsApp",
  "WhatsApp com a profissional 100% gratuito",
  "Acesso vitalício",
];

export default function OfferSection() {
  const [isOfferDialogOpen, setIsOfferDialogOpen] = useState(false);
  const [hasSeenOffer, setHasSeenOffer] = useState(false);

  const handleEssentialPlanClick = () => {
    if (!hasSeenOffer) {
      setIsOfferDialogOpen(true);
    } else {
      // Logic to proceed to checkout for the essential plan, for example:
      // window.location.href = "/checkout-essential";
      alert("Redirecionando para o checkout do Plano Essencial!");
    }
  };

  const handleCloseDialog = () => {
    setIsOfferDialogOpen(false);
    setHasSeenOffer(true);
  };

  return (
    <>
      <UpgradeOfferDialog
        isOpen={isOfferDialogOpen}
        onClose={handleCloseDialog}
      />
      <section className="py-20 md:py-24 bg-card/50" id="oferta">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              Escolha o plano ideal para sua
              <br />
              <span className="text-primary mt-2 inline-block">libertação</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Invista em você e dê o primeiro passo para uma vida livre do vício. A decisão é sua, o apoio é nosso.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/80 border-border/50 flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">Plano Essencial</CardTitle>
                  <CardDescription>Acesso vitalício ao método</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="text-center my-4">
                    <p className="text-4xl font-bold font-headline">R$ 19,90</p>
                    <p className="text-muted-foreground">Pagamento único</p>
                  </div>
                  <ul className="space-y-3 flex-grow my-6">
                    {EssentialPlanFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-auto w-full h-14 text-lg font-bold"
                    variant="outline"
                    onClick={handleEssentialPlanClick}
                  >
                    Começar agora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-primary text-primary-foreground font-bold py-1 px-4 rounded-full text-sm shadow-lg animate-bounce-slow">
                  MAIS POPULAR
                </div>
              </div>
              <Card className="border-primary border-2 shadow-2xl shadow-primary/40 bg-[hsl(220,81%,10%)] flex flex-col h-full">
                <CardHeader className="text-center pt-10">
                  <CardTitle className="font-headline text-3xl">Plano Completo</CardTitle>
                  <CardDescription>A transformação completa com apoio contínuo</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="text-center my-4">
                    <p className="text-lg text-muted-foreground">de <span className="line-through">R$ 197,00</span> por</p>
                    <p className="text-5xl md:text-6xl font-bold font-headline text-primary">
                      R$ 47,90
                    </p>
                    <p className="text-muted-foreground">Pagamento único</p>
                  </div>
                  <ul className="space-y-3 my-6 flex-grow">
                    {CompletePlanFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-auto w-full h-16 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 rounded-full transform hover:scale-105"
                  >
                    <Zap className="mr-2 h-6 w-6" />
                    QUERO O PLANO COMPLETO
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground text-center">Acesso imediato e 100% seguro.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

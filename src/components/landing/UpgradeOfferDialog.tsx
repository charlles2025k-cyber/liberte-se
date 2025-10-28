"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type UpgradeOfferDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UpgradeOfferDialog({ isOpen, onClose }: UpgradeOfferDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-[hsl(222,84%,7%)] to-[hsl(220,81%,5%)] border-primary/50 text-foreground">
        <DialogHeader className="text-center items-center">
          <div className="bg-primary/20 p-3 rounded-full mb-4 inline-block border border-primary/50">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-3xl font-headline text-white">Espere! Uma Oferta Única Para Você!</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground pt-2 max-w-sm mx-auto">
            Vimos que você está pronto para a mudança. Por isso, liberamos um upgrade para o Plano Completo com um desconto exclusivo.
          </DialogDescription>
        </DialogHeader>

        <div className="my-6 text-center">
          <p className="text-muted-foreground">De <span className="line-through">R$ 47,90</span> por apenas:</p>
          <p className="text-6xl font-bold font-headline text-primary my-2">R$ 27,90</p>
          <p className="text-muted-foreground">Pagamento Único</p>
        </div>

        <p className="text-center text-foreground font-semibold mb-6">
          Garanta o acesso à <span className="text-primary">comunidade de apoio</span>, <span className="text-primary">sessões em grupo</span> e todo o arsenal para uma libertação definitiva.
        </p>

        <DialogFooter className="flex flex-col sm:flex-col gap-3">
          <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] rounded-full transition-transform hover:scale-105">
            <ShieldCheck className="mr-2 h-6 w-6" />
            Sim, eu quero o Plano Completo!
          </Button>
          <Button variant="link" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            Não, obrigado. Prefiro o Plano Essencial.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
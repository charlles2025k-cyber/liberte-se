import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="inicio" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
              As apostas não roubam só o seu dinheiro.
              <br />
              <span className="text-primary">Elas destroem sua paz e sua família.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Chegou a hora de dar um basta. Recupere o controle da sua vida e encontre a paz que você tanto merece com um método comprovado e acessível.
            </p>
            <div className="mt-10 flex flex-col items-center md:items-start">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 animate-pulse-slow"
                asChild
              >
                <a href="#oferta">Quero me libertar agora</a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Acesso imediato e 100% seguro.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/Yqj2GzC6/mockup.png"
              alt="Capa 3D do e-book Superando o Vício em Apostas Online"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl shadow-primary/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
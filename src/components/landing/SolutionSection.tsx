import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function SolutionSection() {
  const guideImage = PlaceHolderImages.find(p => p.id === 'guide-mockup');

  return (
    <section className="py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              A Solução Definitiva para
              <span className="text-primary block">Retomar o Controle</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              O <span className="font-bold text-foreground">Guia Digital Liberte-se</span> não é apenas um livro, é um método passo a passo, prático e humano, desenhado para atacar a raiz do problema e te devolver o poder de escolha.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sem julgamentos, sem promessas milagrosas. Apenas ferramentas eficazes que já transformaram a vida de centenas de pessoas, e que agora estão ao seu alcance.
            </p>
            <Button size="lg" className="mt-8 h-12 px-8 text-lg font-bold" asChild>
              <a href="#oferta">Quero meu guia agora</a>
            </Button>
          </div>
          <div className="flex justify-center order-first md:order-last">
            {guideImage && (
              <Image
                src={guideImage.imageUrl}
                alt={guideImage.description}
                data-ai-hint={guideImage.imageHint}
                width={400}
                height={533}
                className="rounded-lg shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

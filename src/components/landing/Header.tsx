import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <h1 className="text-xl md:text-2xl font-headline font-bold text-foreground">Liberte-se</h1>
        </div>
        <Button asChild>
          <a href="#oferta">
            Quero minha liberdade
          </a>
        </Button>
      </div>
    </header>
  );
}

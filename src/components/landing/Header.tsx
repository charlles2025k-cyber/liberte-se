import { Button } from '@/components/ui/button';

const BreakingChainsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
    <path d="m11 15-2-2" />
    <path d="m15 9-2-2" />
    <path d="M9 22v-4" />
    <path d="M5 18H1" />
    <path d="M5 14H2" />
    <path d="M2 11h3" />
    <path d="M15 2v4" />
    <path d="M19 6h4" />
    <path d="M19 10h3" />
    <path d="M22 13h-3" />
  </svg>
);


export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BreakingChainsIcon className="h-8 w-8 text-primary" />
          <h1 className="text-xl md:text-2xl font-headline font-bold text-foreground">Superando o vício</h1>
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

import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 bg-card border border-border/50 p-8 rounded-lg">
          <div className="flex-shrink-0">
            <ShieldCheck className="h-24 w-24 text-primary" />
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
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="py-8 bg-transparent border-t border-border/50">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Liberte-se. Todos os direitos reservados.</p>
        <p className="mt-4 max-w-3xl mx-auto">
          <strong>Aviso de Responsabilidade:</strong> Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa a pessoa e dependem exclusivamente do comprometimento individual em aplicar o método.
        </p>
      </div>
    </footer>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Como vou receber o guia?",
        answer: "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o seu Guia Digital 'Liberte-se' em formato PDF. Você pode ler no celular, tablet ou computador."
    },
    {
        question: "Isso funciona para qualquer tipo de aposta?",
        answer: "Sim. O método foi desenvolvido para atacar a raiz psicológica do vício, independentemente de ser em apostas esportivas, cassino online, jogos de crash (como o 'joguinho do avião'), etc."
    },
    {
        question: "Preciso contar para alguém que estou usando o guia?",
        answer: "Não. Uma das grandes vantagens é a discrição. Você pode seguir o método no seu tempo, de forma 100% anônima e confidencial, sem precisar se expor."
    },
    {
        question: "E se eu tiver uma recaída?",
        answer: "O guia te prepara para isso. Recaídas podem acontecer, mas você terá as ferramentas para identificar o que aconteceu, aprender com o erro e voltar para o caminho certo rapidamente, sem se deixar abater pela culpa."
    },
    {
        question: "O pagamento é seguro?",
        answer: "Sim. Utilizamos uma das maiores e mais seguras plataformas de pagamento do Brasil. Seus dados estão 100% protegidos."
    }
]

export default function FaqSection() {
    return (
        <section id="faq" className="py-20 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Dúvidas Frequentes</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Esclareça os últimos pontos antes de tomar a decisão que vai mudar sua vida.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-12">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

import { FileText, Search, Handshake, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Descreva seu projeto",
    description:
      "Preencha o formulário com os detalhes da sua obra, incluindo tipo de serviço, metragem e localização.",
  },
  {
    icon: Search,
    step: "02",
    title: "Receba orçamentos",
    description:
      "Prestadores qualificados analisam seu projeto e enviam propostas detalhadas em até 24 horas.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Escolha e contrate",
    description:
      "Compare as propostas, converse com os profissionais e escolha a melhor opção para você.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Aprove e pague",
    description:
      "Acompanhe a execução da obra e libere o pagamento somente após aprovar o serviço finalizado.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Em apenas 4 passos simples, conectamos você aos melhores
            profissionais do mercado.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+32px)] top-8 hidden h-0.5 w-[calc(100%-64px)] bg-border lg:block" />
              )}
              
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-7 w-7" />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {step.step.replace("0", "")}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

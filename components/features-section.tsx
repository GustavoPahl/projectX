import {
  Shield,
  CheckCircle,
  Wallet,
  Headphones,
  FileCheck,
  Users,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Pagamento Protegido",
    description:
      "Compensação só liberada após aprovação. Seu dinheiro fica seguro até você aprovar o serviço realizado.",
  },
  {
    icon: CheckCircle,
    title: "Prestadores Verificados",
    description:
      "Todos os profissionais passam por verificação de documentos, referências e qualificações técnicas.",
  },
  {
    icon: Wallet,
    title: "Orçamentos Transparentes",
    description:
      "Receba múltiplos orçamentos detalhados para comparar preços e escolher a melhor opção.",
  },
  {
    icon: Headphones,
    title: "Suporte Durante Toda Obra",
    description:
      "Acompanhamento completo do projeto com equipe dedicada para resolver qualquer problema.",
  },
  {
    icon: FileCheck,
    title: "Contratos Seguros",
    description:
      "Documentação completa e contratos que protegem ambas as partes durante todo o processo.",
  },
  {
    icon: Users,
    title: "Rede Especializada",
    description:
      "Prestadores com experiência específica em obras de franquias e construções comerciais.",
  },
]

export function FeaturesSection() {
  return (
    <section id="beneficios" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Por que escolher a Zinz?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos uma plataforma completa para conectar você aos melhores
            profissionais do mercado, com total segurança e transparência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

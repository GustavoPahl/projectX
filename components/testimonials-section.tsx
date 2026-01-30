import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Fernanda Silva",
    role: "Franqueada O Boticário",
    location: "São Paulo, SP",
    content:
      "Não apenas pela obra realizada, mas saber que você tem o suporte da Zinz durante toda a reforma fez toda a diferença. A equipe foi muito profissional e o resultado superou nossas expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Santos",
    role: "Franqueado Cacau Show",
    location: "Campinas, SP",
    content:
      "Não apenas pela obra realizada, mas saber que você tem o suporte da Zinz durante toda a reforma trouxe tranquilidade para expandir minha rede. Já utilizei a plataforma em 3 lojas diferentes.",
    rating: 5,
  },
  {
    name: "Ana Paula Oliveira",
    role: "Franqueada Chilli Beans",
    location: "Rio de Janeiro, RJ",
    content:
      "Não apenas pela obra realizada, mas saber que você tem o suporte da Zinz durante toda a reforma me permitiu focar no que realmente importa: o meu negócio. Recomendo a todos os franqueados.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Milhares de franqueados já confiaram na Zinz para suas obras e
            reformas comerciais.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>
              
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} - {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

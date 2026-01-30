import { Shield, CheckCircle, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="text-xs font-medium text-primary">
                A maior plataforma de intermediação de obras de franquias do Brasil
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Facilite sua obra com a{" "}
              <span className="text-primary">Zinz</span>
            </h1>

            <p className="max-w-lg text-pretty text-lg text-muted-foreground">
              Conectamos franqueados a prestadores de serviços especializados em
              reformas e construções comerciais. Segurança, qualidade e suporte
              completo em todas as etapas do seu projeto.
            </p>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Pagamento Protegido
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Prestadores Verificados
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Suporte 24/7
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <p className="text-3xl font-bold text-foreground">2.500+</p>
                <p className="text-sm text-muted-foreground">Obras realizadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">850+</p>
                <p className="text-sm text-muted-foreground">Prestadores ativos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
    </section>
  )
}

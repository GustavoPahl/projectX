import Link from "next/link"
import { ArrowRight, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pronto para começar sua obra?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Junte-se a milhares de franqueados que já simplificaram suas reformas
            com a Zinz. Cadastre-se gratuitamente e receba orçamentos em minutos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base"
              asChild
            >
              <Link href="#contato">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Sou prestador de serviços
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Pagamento protegido</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Orçamentos em até 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

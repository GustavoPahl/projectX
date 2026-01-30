import Link from "next/link"

const footerLinks = {
  platform: {
    title: "Plataforma",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Para franqueados", href: "#" },
      { label: "Para prestadores", href: "#" },
      { label: "Preços", href: "#" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
  },
  support: {
    title: "Suporte",
    links: [
      { label: "Central de ajuda", href: "#" },
      { label: "Contato", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  Z
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">Zinz</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A maior plataforma de intermediação de obras de franquias do
              Brasil. Conectando franqueados e prestadores de serviços com
              segurança.
            </p>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Zinz. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Facebook"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

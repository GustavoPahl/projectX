"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">Zinz</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Como Funciona
            </Link>
          </li>
          <li>
            <Link
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefícios
            </Link>
          </li>
          <li>
            <Link
              href="#depoimentos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button size="sm">Cadastrar</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#como-funciona"
                className="block text-sm font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
            </li>
            <li>
              <Link
                href="#beneficios"
                className="block text-sm font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="block text-sm font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="block text-sm font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="ghost" size="sm" className="w-full justify-center">
              Entrar
            </Button>
            <Button size="sm" className="w-full justify-center">
              Cadastrar
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

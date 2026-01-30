"use client"

import { useState } from "react"
import { Upload, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div
      id="contato"
      className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-card-foreground">
          Preencha o formulário de contato
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Receba orçamentos de prestadores qualificados em até 24 horas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              required
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="h-11"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              required
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="franchise">Franquia</Label>
            <Input
              id="franchise"
              placeholder="Nome da franquia"
              required
              className="h-11"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Tipo de serviço</Label>
          <Select required>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione o tipo de serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reforma-completa">Reforma completa</SelectItem>
              <SelectItem value="construcao">Construção</SelectItem>
              <SelectItem value="instalacoes-eletricas">
                Instalações elétricas
              </SelectItem>
              <SelectItem value="hidraulica">Hidráulica</SelectItem>
              <SelectItem value="pintura">Pintura</SelectItem>
              <SelectItem value="gesso-forro">Gesso e forro</SelectItem>
              <SelectItem value="piso-revestimento">Piso e revestimento</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Descrição da obra</Label>
          <Textarea
            id="description"
            placeholder="Descreva o projeto, incluindo metragem, localização e requisitos específicos..."
            rows={4}
            required
            className="resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="photos">Fotos do local (opcional)</Label>
          <div className="relative">
            <input
              type="file"
              id="photos"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={handleFileChange}
            />
            <label
              htmlFor="photos"
              className="flex h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-input bg-muted/50 transition-colors hover:border-primary hover:bg-muted"
            >
              <Upload className="h-6 w-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {fileName || "Clique para enviar fotos"}
              </span>
            </label>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-2 h-12 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              Solicitar orçamento
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Ao enviar, você concorda com nossos{" "}
          <a href="#" className="text-primary underline hover:no-underline">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-primary underline hover:no-underline">
            Política de Privacidade
          </a>
          .
        </p>
      </form>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Shield, CheckCircle, Clock, Users, FileText, Lock, Phone, Mail, MapPin, Menu, X, Upload, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    franquia: "",
    tipoServico: "",
    descricao: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
              <span className="text-lg font-bold text-white">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zinz</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#como-funciona" className="text-sm font-medium text-gray-600 transition hover:text-emerald-600">Como Funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-gray-600 transition hover:text-emerald-600">Beneficios</a>
            <a href="#depoimentos" className="text-sm font-medium text-gray-600 transition hover:text-emerald-600">Depoimentos</a>
            <a href="#contato" className="text-sm font-medium text-gray-600 transition hover:text-emerald-600">Contato</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
              Entrar
            </button>
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
              Cadastre-se
            </button>
          </div>

          <button 
            className="rounded-lg p-2 text-gray-600 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              <a href="#como-funciona" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Como Funciona</a>
              <a href="#beneficios" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Beneficios</a>
              <a href="#depoimentos" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Depoimentos</a>
              <a href="#contato" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Contato</a>
              <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-4">
                <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Entrar</button>
                <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white">Cadastre-se</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                <Shield className="h-4 w-4" />
                Plataforma segura e confiavel
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Facilite sua obra com a <span className="text-emerald-600">Zinz</span>
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                A maior plataforma de intermediacao de obras de franquias do Brasil. Conectamos franqueados a prestadores de servicos especializados em reformas e construcoes comerciais.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Pagamento protegido
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Prestadores verificados
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Suporte 24/7
                </div>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-gray-200 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Obras realizadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-500">Prestadores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Satisfacao</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contato" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
              <h2 className="mb-2 text-xl font-bold text-gray-900">Preencha o formulario de contato</h2>
              <p className="mb-6 text-sm text-gray-500">Receba um orcamento personalizado para sua obra</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Nome completo</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Franquia</label>
                    <input
                      type="text"
                      value={formData.franquia}
                      onChange={(e) => setFormData({ ...formData, franquia: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="Nome da franquia"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Tipo de servico</label>
                  <select
                    value={formData.tipoServico}
                    onChange={(e) => setFormData({ ...formData, tipoServico: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    required
                  >
                    <option value="">Selecione o servico</option>
                    <option value="reforma">Reforma completa</option>
                    <option value="construcao">Construcao nova</option>
                    <option value="adequacao">Adequacao de layout</option>
                    <option value="manutencao">Manutencao preventiva</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Descreva sua obra</label>
                  <textarea
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    rows={3}
                    className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Detalhes sobre o projeto, metragem, ambientes..."
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Fotos do local (opcional)</label>
                  <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 px-4 py-6 transition hover:border-emerald-400">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Arraste arquivos ou clique para enviar</p>
                      <p className="text-xs text-gray-400">PNG, JPG ate 10MB</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Solicitar orcamento
                  <ChevronRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  Ao enviar, voce concorda com nossa politica de privacidade
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Como funciona</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Processo simples e transparente para conectar voce ao prestador ideal
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Cadastre seu projeto", desc: "Preencha o formulario com os detalhes da sua obra" },
              { step: "02", title: "Receba orcamentos", desc: "Prestadores verificados enviam propostas" },
              { step: "03", title: "Escolha o melhor", desc: "Compare precos, prazos e avaliacoes" },
              { step: "04", title: "Acompanhe a obra", desc: "Monitoramento e pagamento protegido" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl border border-gray-200 bg-white p-6 transition hover:border-emerald-200 hover:shadow-lg">
                <div className="mb-4 text-4xl font-bold text-emerald-600/20">{item.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section id="beneficios" className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">Por que escolher a Zinz?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Seguranca e transparencia em cada etapa do seu projeto
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Pagamento protegido", desc: "Compensacao so liberada apos aprovacao do servico pelo cliente" },
              { icon: Users, title: "Prestadores verificados", desc: "Todos os profissionais passam por rigorosa verificacao" },
              { icon: FileText, title: "Orcamentos transparentes", desc: "Compare propostas detalhadas de varios prestadores" },
              { icon: Clock, title: "Suporte completo", desc: "Acompanhamento durante toda a reforma" },
              { icon: Lock, title: "Contratos seguros", desc: "Documentacao juridica para proteger ambas as partes" },
              { icon: CheckCircle, title: "Rede especializada", desc: "Profissionais com experiencia em franquias comerciais" },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">O que nossos clientes dizem</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Depoimentos de franqueados que confiaram na Zinz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Carlos Silva", role: "Franqueado O Boticario", location: "Sao Paulo, SP" },
              { name: "Marina Santos", role: "Franqueada Cacau Show", location: "Rio de Janeiro, RJ" },
              { name: "Roberto Oliveira", role: "Franqueado Subway", location: "Belo Horizonte, MG" },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  &ldquo;Nao apenas pela obra realizada, mas saber que voce tem o suporte da Zinz durante toda a reforma foi essencial para o sucesso do projeto.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} - {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Pronto para comecar sua obra?
          </h2>
          <p className="mb-8 text-lg text-emerald-100">
            Cadastre-se agora e receba orcamentos de prestadores verificados
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contato"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              Solicitar orcamento
            </a>
            <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Sou prestador
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
                  <span className="text-lg font-bold text-white">Z</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Zinz</span>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                A maior plataforma de intermediacao de obras de franquias do Brasil.
              </p>
              <div className="flex gap-3">
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Plataforma</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="transition hover:text-emerald-600">Como funciona</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Para franqueados</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Para prestadores</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Precos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="transition hover:text-emerald-600">Sobre nos</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Blog</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Carreiras</a></li>
                <li><a href="#" className="transition hover:text-emerald-600">Imprensa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  contato@zinz.com.br
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />
                  Av. Paulista, 1000 - Sao Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
            <p className="text-sm text-gray-500">
              2024 Zinz. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="transition hover:text-emerald-600">Termos de uso</a>
              <a href="#" className="transition hover:text-emerald-600">Privacidade</a>
              <a href="#" className="transition hover:text-emerald-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Zinz - A maior plataforma de obras de franquias do Brasil",
  description: "Conectamos franqueados a prestadores de servicos especializados em reformas e construcoes comerciais. Seguranca, transparencia e suporte completo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}

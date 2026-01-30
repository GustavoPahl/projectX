import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Zinz - A maior plataforma de intermediação de obras de franquias do Brasil",
  description:
    "Conectamos franqueados a prestadores de serviços especializados em reformas e construções comerciais. Facilite sua obra com segurança e suporte completo.",
  keywords: [
    "franquias",
    "obras",
    "reformas comerciais",
    "construção",
    "prestadores de serviços",
    "Brasil",
  ],
}

export const viewport: Viewport = {
  themeColor: "#22a366",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

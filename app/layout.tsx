export const metadata = {
  title: 'Zinz | Facilite sua obra de franquia',
  description: 'Zinz - A maior plataforma de intermediação de obras de franquias do Brasil. Conectamos franqueados a prestadores de serviços especializados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

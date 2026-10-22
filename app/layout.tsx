import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pixel Quest Express',
  description: 'Quiz Multiplayer - Por trás de todo CNPJ existe um CPF'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

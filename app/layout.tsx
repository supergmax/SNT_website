import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SimonsNiobeTechnology',
  description: 'Created with SGX',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shaad Salon - AI Assistant',
  description: 'Your friendly salon booking assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

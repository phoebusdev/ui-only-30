import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Unleashed - Learn English with PDFs',
  description: 'UI design project for Onlook visual editing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-jakarta">{children}</body>
    </html>
  )
}
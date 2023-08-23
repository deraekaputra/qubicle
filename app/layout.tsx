import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'The coolest corner of the internet for Millennials.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  applicationName: 'Qubicle',
  keywords: ['Qubicle.id', 'interest media', 'lifestyle media'],
  authors: [{ name: 'Dera' }],
  colorScheme: 'light',
  creator: 'Qubicle.id',
  icons: {
    apple: [
      {
        rel: 'apple-touch-icon',
        url: 'apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#08080f',
      },
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: { title: 'Qubicle' },
  themeColor: '#08080f',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

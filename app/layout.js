import './globals.css'
import ClientLayout from './ClientLayout'

export const metadata = {
  title: 'Het witte bolletje',
  description: 'Ambachtelijke bakkerij met verse broden, gebak en meer',
  manifest: '/manifest.json',
  themeColor: '#B45309',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Het witte bolletje',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/icon-192x192.png' }
    ],
    shortcut: [
      { url: '/icons/icon-192x192.png' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://hetwittebollletje.nl',
    title: 'Het witte bolletje',
    description: 'Ambachtelijke bakkerij met verse broden, gebak en meer',
    siteName: 'Het witte bolletje'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B45309" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  )
}

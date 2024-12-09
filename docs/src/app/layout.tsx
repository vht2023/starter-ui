import 'react-toastify/dist/ReactToastify.css'
import '@starter-ui/core/index.css'
import './globals.scss'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {cn} from '@/libs/utils'
import {siteMetadata} from 'configs/siteMetadata'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.ogImage,
        alt: siteMetadata.title,
      },
    ],
    url: siteMetadata.siteUrl,
    locale: siteMetadata.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('w-full font-sans antialiased', inter.className, inter.variable)}>
        <div id='portals' />
        {children}
      </body>
    </html>
  )
}

import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {cn} from '@/libs/utils'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: './icon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('w-full font-sans text-foreground antialiased scrollbar-track-white/10 scrollbar-thumb-white/10', inter.className, inter.variable)}>{children}</body>
    </html>
  )
}

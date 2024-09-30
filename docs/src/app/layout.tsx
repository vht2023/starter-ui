import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {cn} from '@/libs/utils'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Starter UI',
  description: 'Starter UI Documents',
  icons: './icon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('w-full font-sans antialiased scrollbar-track-white/10 scrollbar-thumb-white/10', inter.className, inter.variable)}>{children}</body>
    </html>
  )
}

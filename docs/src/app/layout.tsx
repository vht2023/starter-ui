import 'react-toastify/dist/ReactToastify.css'
import '@starter-ui/core/index.css'
import './globals.scss'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {cn} from '@/libs/utils'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Starter UI',
  description: 'Starter UI Documents',
  icons: './icon.png',
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

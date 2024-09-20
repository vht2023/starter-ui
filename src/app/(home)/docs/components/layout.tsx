'use client'

import React from 'react'

import {ComponentDocumentsContextProvider} from '@/contexts/ComponentDocumentsContext'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <ComponentDocumentsContextProvider>
      <div className='flex w-full'>{children}</div>
    </ComponentDocumentsContextProvider>
  )
}

export default layout

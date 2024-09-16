'use client'

import React from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import Sidebar from '@/components/common/Sidebar'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='relative h-full w-full'>
      <aside className='fixed h-full w-72 overflow-y-auto pt-10 scrollbar-thin'>
        <Sidebar />
      </aside>
      <main className='ml-72 h-full pt-10'>
        <Breadcrumbs />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default layout

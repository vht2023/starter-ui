'use client'

import {Logs, X} from 'lucide-react'
import {usePathname} from 'next/navigation'
import React, {useEffect, useRef, useState} from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import Sidebar from '@/components/common/Sidebar'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!sidebarRef.current?.contains(event.target)) {
        setOpenSidebar(false)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [sidebarRef])

  useEffect(() => {
    setOpenSidebar(false)
  }, [pathname])

  return (
    <div className='relative h-full w-full pb-20'>
      {/* Desktop Sidebar */}
      <aside className='fixed z-10 h-full w-72 overflow-y-auto pt-10 scrollbar-thin tablet_max:hidden'>
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <div className='fixed z-10 hidden pl-1.5 pt-3 tablet_max:block' onClick={() => setOpenSidebar(true)}>
        <Logs />
      </div>
      {openSidebar && (
        <div ref={sidebarRef} className='fixed z-20 flex h-full w-72 justify-between border-r px-3 pt-3 backdrop-blur-lg'>
          <Sidebar />
          <X onClick={() => setOpenSidebar(false)} />
        </div>
      )}

      {/* Main */}
      <main className='ml-72 h-full pt-10 tablet_max:m-0 tablet_max:pt-4'>
        <Breadcrumbs />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default layout

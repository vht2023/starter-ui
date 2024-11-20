'use client'

import {ChevronRight, X} from 'lucide-react'
import {usePathname} from 'next/navigation'
import React, {useEffect, useRef, useState} from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import Sidebar from '@/components/common/Sidebar'
import {DocumentsContextProvider} from '@/contexts/DocumentsContext'

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
    <div className='relative mx-auto h-full w-full px-10 pb-20 tablet_max:px-0'>
      {/* Desktop Sidebar */}
      <aside className='fixed z-10 mt-10 max-h-[calc(100%-132px)] w-72 overflow-hidden bg-white pb-2 transition-all hover:overflow-auto tablet_max:hidden'>
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <div className='fixed z-10 hidden cursor-pointer pt-3 tablet_max:block' onClick={() => setOpenSidebar(true)}>
        <div className='rounded-r-md border-2 border-l-0 border-black'>
          <ChevronRight size={20} />
        </div>
      </div>
      {openSidebar && (
        <div
          ref={sidebarRef}
          className='no-scrollbar fixed z-20 flex h-[calc(100vh-60px)] w-72 justify-between overflow-y-auto border-r px-3 pb-20 pt-4 shadow-md backdrop-blur-3xl'
        >
          <Sidebar />
          <X onClick={() => setOpenSidebar(false)} />
        </div>
      )}

      {/* Main */}
      <main className='ml-72 h-full pt-10 tablet_max:m-0 tablet_max:pt-3'>
        <DocumentsContextProvider>
          <Breadcrumbs />
          <div className='w-full px-10 pl-14 tablet_max:px-8'>{children}</div>
        </DocumentsContextProvider>
      </main>
    </div>
  )
}

export default layout

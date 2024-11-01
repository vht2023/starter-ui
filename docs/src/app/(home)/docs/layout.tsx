'use client'

import {ChevronRight, X} from 'lucide-react'
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
    <div className='relative mx-auto h-full w-3/4 pb-20 tablet_max:w-full'>
      {/* Desktop Sidebar */}
      <aside className='fixed z-10 mt-10 max-h-[calc(100%-132px)] w-72 overflow-hidden pb-2 transition-all hover:overflow-auto tablet_max:hidden'>
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <div className='fixed z-10 hidden cursor-pointer pt-3 tablet_max:block' onClick={() => setOpenSidebar(true)}>
        <div className='rounded-r-md border-2 border-l-0 border-black'>
          <ChevronRight size={20} />
        </div>
      </div>
      {openSidebar && (
        <div ref={sidebarRef} className='no-scrollbar fixed z-20 flex h-[calc(100vh-60px)] w-72 justify-between overflow-y-auto border-r px-3 pb-3 pt-4 backdrop-blur-2xl'>
          <Sidebar />
          <X onClick={() => setOpenSidebar(false)} />
        </div>
      )}

      {/* Main */}
      <main className='ml-72 h-full pt-10 tablet_max:m-0 tablet_max:pt-3'>
        <Breadcrumbs />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default layout

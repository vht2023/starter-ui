'use client'

import {useSidebarNavigation} from 'hooks'
import {cn} from 'libs/utils'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const paths = useSidebarNavigation()

  return (
    <div className='space-y-8'>
      {paths.map((menu, index) => (
        <div key={index} className='space-y-4 text-xs'>
          <div className='text-sm font-semibold'>{menu.name}</div>
          <div className='flex flex-col gap-3'>
            {menu.sub.map((sub, subIndex) => (
              <Link key={subIndex} href={sub.href} className={cn(['text-xs font-light hover:underline', sub.active && 'font-semibold'])}>
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar

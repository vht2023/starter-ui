'use client'

import Link from 'next/link'
import React from 'react'

import {useSidebarNavigation} from '@/hooks'
import {cn} from '@/libs/utils'

const Sidebar = () => {
  const paths = useSidebarNavigation()

  return (
    <div className='space-y-8'>
      {paths.map((menu, index) => (
        <div key={index} className='space-y-4 text-base'>
          <div className='font-semibold'>{menu.name}</div>
          <div className='flex flex-col gap-3'>
            {menu.sub.map((sub, subIndex) => (
              <Link
                key={subIndex}
                href={sub.href}
                className={cn(['text-muted-foreground text-sm font-normal hover:underline', sub.active && 'text- font-semibold text-foreground'])}
              >
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

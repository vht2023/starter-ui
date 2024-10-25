'use client'

import Link from 'next/link'
import React from 'react'

import {useSidebarNavigation} from '@/hooks'
import {cn} from '@/libs/utils'

const Sidebar = () => {
  const paths = useSidebarNavigation()

  return (
    <div className='h-full space-y-8'>
      {paths.map((menu, index) => (
        <div key={index} className='space-y-4 text-base'>
          {menu?.href ? (
            <Link href={menu.href} className='w-fit font-semibold'>
              {menu.name}
            </Link>
          ) : (
            <div className='font-semibold'>{menu.name}</div>
          )}
          <div className='flex flex-col gap-3'>
            {menu.sub.map((sub, subIndex) =>
              sub?.href && !sub?.disabled ? (
                <Link key={subIndex} href={sub?.href} className={cn(['group relative w-fit text-sm font-normal text-muted/95', sub.active && 'font-medium text-default'])}>
                  {sub.name}
                  <span className='absolute bottom-0.5 left-0 h-[1px] w-0 bg-default transition-all group-hover:w-full' />
                </Link>
              ) : (
                <span key={subIndex} className={cn(['w-fit cursor-not-allowed text-sm font-normal text-muted/35', sub.active && 'font-medium text-default'])}>
                  {sub.name}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar

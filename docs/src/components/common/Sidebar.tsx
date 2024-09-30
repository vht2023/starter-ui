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
                <Link key={subIndex} href={sub?.href} className={cn(['w-fit text-sm font-normal text-muted hover:underline', sub.active && 'font-semibold text-default'])}>
                  {sub.name}
                </Link>
              ) : (
                <span key={subIndex} className={cn(['w-fit cursor-not-allowed text-sm font-normal text-muted/50', sub.active && 'font-semibold text-default'])}>
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

'use client'

import {useHeaderNavigation} from 'hooks'
import {cn} from 'libs/utils'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const paths = useHeaderNavigation()

  return (
    <div className='fixed left-0 top-0 z-50 h-[60px] w-full border-b backdrop-blur-lg'>
      <div className='mx-auto h-full w-2/3'>
        <div className='flex h-full items-center gap-16'>
          <Link href='/' className='text-xl font-bold tracking-tighter'>
            starter|ui
          </Link>
          <div className='flex items-center gap-6'>
            {paths.map((menu, index) => (
              <Link key={index} href={menu.href} className={cn(['text-sm font-light text-gray-600 hover:text-black', menu.active && 'font-medium text-black'])}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

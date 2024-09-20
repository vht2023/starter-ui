'use client'

import {motion} from 'framer-motion'
import {Martian_Mono} from 'next/font/google'
import Link from 'next/link'
import React from 'react'

import {ENUM_ROUTES} from '@/enums/routes'
import {useHeaderNavigation} from '@/hooks'
import {cn} from '@/libs/utils'

const martian = Martian_Mono({subsets: ['latin']})

const Header = () => {
  const paths = useHeaderNavigation()

  return (
    <div className='fixed left-0 top-0 z-50 h-[60px] w-full border-b backdrop-blur-lg'>
      <div className='mx-auto h-full w-3/4'>
        <div className='flex h-full items-center gap-16'>
          <Link href={ENUM_ROUTES.HOME} className={`${martian.className} text-2xl font-bold tracking-tighter`}>
            starter|ui
          </Link>
          <div className='flex h-full items-center gap-6'>
            {paths.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className={cn(['text-muted flex-center relative h-full text-sm font-normal hover:text-black', menu.active && 'text-default font-semibold'])}
              >
                {menu.name}
                {menu.active ? <motion.div className='header-underline' layoutId='header-underline' /> : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

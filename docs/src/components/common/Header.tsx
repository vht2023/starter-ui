'use client'

import {motion} from 'framer-motion'
import {Martian_Mono} from 'next/font/google'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {twMerge} from 'tailwind-merge'

import {ENUM_ROUTES} from '@/enums/routes'
import {useHeaderNavigation} from '@/hooks'
import {cn} from '@/libs/utils'

const martian = Martian_Mono({subsets: ['latin']})

const Header = () => {
  const pathname = usePathname()
  const paths = useHeaderNavigation()
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    setToggle(false)
  }, [pathname])

  return (
    <div className='fixed left-0 top-0 z-50 h-[60px] min-h-[60px] w-full border-b backdrop-blur-lg tablet_max:h-fit tablet_max:min-h-[60px] tablet_max:border-none'>
      <div className='mx-auto h-full min-h-[60px] w-3/4 tablet_max:w-full tablet_max:border-b'>
        <div className='flex h-full min-h-[60px] items-center gap-16 tablet_max:px-4'>
          <div>
            <Link href={ENUM_ROUTES.HOME} className={`${martian.className} w-fit flex-1 text-2xl font-bold tracking-tighter tablet_max:text-xl`}>
              starter|ui
            </Link>
          </div>
          <div className='flex h-full items-center gap-6 tablet_max:hidden'>
            {paths.map((menu, index) => (
              <Link
                key={index}
                href={menu.href || ''}
                className={cn(['flex-center relative h-full text-sm font-normal text-muted hover:text-black', menu.active && 'font-semibold text-default'])}
              >
                {menu.name}
                {menu.active ? <motion.div className='header-underline' layoutId='header-underline' /> : null}
              </Link>
            ))}
          </div>
          <div className='hidden h-full w-full tablet_max:flex tablet_max:items-center tablet_max:justify-end'>
            <div className='flex items-center justify-center' onClick={() => setToggle((prev) => !prev)}>
              <div className='group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-2'>
                <div className='space-y-2'>
                  <span
                    className={twMerge(cn(['block h-1 w-8 origin-center rounded-full bg-[#171717] transition-transform ease-in-out', toggle && 'translate-y-1.5 rotate-45']))}
                  />
                  <span
                    className={twMerge(cn(['block h-1 w-6 origin-center rounded-full bg-[#6366f1] transition-transform ease-in-out', toggle && 'w-8 -translate-y-1.5 -rotate-45']))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle && (
        <div className='flex h-[calc(100vh-60px)] w-full flex-col items-end justify-start gap-6 p-4'>
          {paths.map((menu, index) => (
            <Link key={index} href={menu.href || ''} className={cn(['flex-center relative font-normal text-muted hover:text-black', menu.active && 'font-semibold text-default'])}>
              {menu.name}
              {menu.active ? <motion.div className='header-underline' layoutId='header-underline' /> : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header

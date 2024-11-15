'use client'

import {SearchInput} from '@starter-ui/core'
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

const CURRENT_VERSION = '1.1.1'

const Header = () => {
  const pathname = usePathname()
  const paths = useHeaderNavigation()
  const [toggle, setToggle] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    setToggle(false)
  }, [pathname])

  return (
    <div className='fixed left-0 top-0 z-50 h-[60px] min-h-[60px] w-full border-b px-10 backdrop-blur-xl tablet_max:h-fit tablet_max:min-h-[60px] tablet_max:border-none tablet_max:px-0'>
      <div className='mx-auto h-full min-h-[60px] w-full tablet_max:w-full tablet_max:border-b'>
        <div className='flex h-full min-h-[60px] items-center gap-20 tablet_max:px-4'>
          {/* LOGO */}
          <div className='relative flex h-full flex-col justify-center'>
            <Link href={ENUM_ROUTES.HOME} className={`${martian.className} w-fit flex-none text-2xl font-bold tracking-tighter tablet_max:text-xl`}>
              starter|ui
            </Link>
            <div className='absolute -end-12 top-2 w-fit rounded-full border-b bg-grey-light/50 px-2 py-1.5 text-[11px] leading-none text-default/90 shadow-xl tablet_max:-end-14 tablet_max:top-0'>
              v{CURRENT_VERSION}
            </div>
          </div>
          {/* Desktop Header */}
          <div className='flex h-full w-full grow items-center gap-6 tablet_max:hidden'>
            {paths.map((menu, index) => (
              <Link
                key={index}
                href={menu.href || ''}
                className={cn(['group flex-center relative h-full text-sm font-normal text-muted transition-all hover:text-black', menu.active && 'font-semibold text-default'])}
              >
                {menu.name}
                {menu.active ? <motion.div className='header-underline' layoutId='header-underline' /> : null}
                <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-default transition-all group-hover:w-full' />
              </Link>
            ))}
          </div>
          {/* Social Links and Search Components */}
          <div className='flex-center h-full w-fit gap-6 tablet_max:hidden'>
            <div className='flex-center h-full gap-3'>
              <Link href='https://github.com/vht2023/starter-ui' target='_blank' className='opacity-70 transition-all hover:opacity-100'>
                <div className='rounded-md p-1'>
                  <svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z'
                        fill='#000000'
                      />
                    </g>
                  </svg>
                </div>
              </Link>
              <Link href='https://www.npmjs.com/package/@starter-ui/core' target='_blank' className='opacity-70 transition-all hover:opacity-100'>
                <div className='rounded-md p-1'>
                  <svg fill='#000000' width='24px' height='24px' viewBox='0 0 512 512' id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'>
                    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                    <g id='SVGRepo_iconCarrier'>
                      <rect x='227.6' y='213.1' width='28.4' height='57.1' />
                      <path d='M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z' />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
            <SearchInput
              inputClassName='placeholder:text-sm placeholder:text-muted/80 bg-white/50'
              className='w-[200px]'
              placeholder='Search components...'
              value={searchValue}
              onChange={(val) => setSearchValue(val)}
            />
          </div>
          {/* Mobile Menu Header */}
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
      {/* Toggle Mobile Menu Header */}
      {toggle && (
        <div className='flex h-[calc(100vh-60px)] w-full flex-col items-end justify-start gap-4 p-4'>
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

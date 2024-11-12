'use client'

import './home.scss'

import {Button} from '@starter-ui/core'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {ReactLoading} from '@/components/common'
import LinearBackground from '@/components/common/LinearBackground'

const page = () => {
  return (
    <div className='starter-home relative h-full w-full px-10 pt-10 tablet_max:px-1.5 tablet_max:pt-6'>
      <div className='tailwind-version mx-auto mb-6 w-fit text-xs'>
        Tailwind CSS Version v3.4.13 <span />
      </div>
      <div className='mx-auto w-3/4 space-y-6 px-20 text-center tablet_max:w-full tablet_max:px-6'>
        <div className='space-y-3'>
          <div className='font-[family-name:var(--font-geist-sans)] text-5xl font-semibold tablet_max:text-4xl'>
            Build websites even faster with components on top of Tailwind CSS.
          </div>
          <div className='font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tablet_max:text-2xl'>Build Faster, Launch Sooner!</div>
        </div>
        <div className='px-20 text-muted tablet_max:px-6'>Start developing with over 100+ Free-to-use UI components built with the utility classes from Tailwind CSS.</div>
        <div className='flex-center gap-6 tablet_max:w-full tablet_max:flex-col'>
          <div className='universe-button flex-shrink-0 tablet_max:w-full'>
            <Link href='docs'>
              <Button className='bg-black text-sm text-white hover:bg-black tablet_max:w-full [&_div]:text-white'>Get started</Button>
            </Link>
          </div>
          <Link href='docs/components' className='flex-shrink-0 tablet_max:w-full'>
            <Button outline className='text-sm transition-all tablet_max:w-full'>
              Explore components
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex-center mt-10 tablet_max:mb-4'>
        <ReactLoading />
      </div>
      <LinearBackground />
    </div>
  )
}

export default page

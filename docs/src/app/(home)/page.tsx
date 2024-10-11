'use client'

import {Button} from '@starter-ui/core'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='relative h-full w-full pt-20 tablet_max:pt-10'>
      <div className='w-full space-y-6 px-20 text-center tablet_max:px-6'>
        <div className='font-[family-name:var(--font-geist-sans)] text-5xl font-semibold tablet_max:text-4xl'>
          Build websites even faster with components on top of Tailwind CSS
        </div>
        <div className='px-20 text-muted tablet_max:px-6'>
          Start developing with an open-source library of over 100+ UI components, sections, and pages built with the utility classes from Tailwind CSS.
        </div>
        <div className='flex-center gap-6 tablet_max:w-full tablet_max:flex-col'>
          <Link href='docs' className='tablet_max:w-full'>
            <Button color='primary' className='tablet_max:w-full'>
              Get started
            </Button>
          </Link>
          <Link href='docs/components' className='tablet_max:w-full'>
            <Button outline className='tablet_max:w-full'>
              Explore components
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page

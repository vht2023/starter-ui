'use client'

import {Button} from '@starter-ui/core'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='relative h-full w-full pt-20'>
      <div className='w-full space-y-6 px-20 text-center'>
        <div className='font-[family-name:var(--font-geist-sans)] text-5xl font-semibold'>Build websites even faster with components on top of Tailwind CSS</div>
        <div className='px-20 text-muted'>
          Start developing with an open-source library of over 100+ UI components, sections, and pages built with the utility classes from Tailwind CSS.
        </div>
        <div className='flex-center gap-6'>
          <Link href='docs'>
            <Button color='primary'>Get started</Button>
          </Link>
          <Link href='docs/components'>
            <Button outline>Explore components</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page

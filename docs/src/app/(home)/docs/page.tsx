'use client'

import {Breadcrumb} from '@starter-ui/core'
import React from 'react'

import OnThisPage from '@/components/common/OnThisPage'

const dataBreadcrumbs = [
  {
    title: 'Docs',
    url: '/docs',
  },
  {
    title: 'Introduction',
    url: '',
  },
]

const listHashesData = [
  {
    value: '#what-is-starter-ui',
    name: 'What is Starter UI?',
  },
  {
    value: '#faq',
    name: 'FAQ',
  },
]

const page = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-auto pr-6'>
        <div className='mb-4'>
          <Breadcrumb data={dataBreadcrumbs} size='sm' />
        </div>
        <div className='w-full space-y-6'>
          <div className='w-fit text-4xl font-bold tablet_max:leading-none'>Introduction</div>
          <div>
            Welcome to the <span className='font-bold text-default'>Starter UI</span> documentations!
          </div>
          <div className='relative space-y-3'>
            <div id='what-is-starter-ui' className='absolute -top-16' />
            <a href='#what-is-starter-ui' className='group flex w-fit items-center gap-3 text-2xl font-semibold text-default'>
              <span>What is Starter UI?</span>
              <span className='hidden group-hover:inline-block'>#</span>
            </a>
            <div>
              Starter UI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of{' '}
              <a href='https://tailwindcss.com' className='text-link' target='_blank' rel='noreferrer'>
                Tailwind CSS
              </a>
            </div>
            <div>Starter UI&apos;s primary goal is to streamline the development process, offering a beautiful and adaptable system design for an enhanced user experience.</div>
          </div>
          <div className='w-full border-b' />
          <div className='relative space-y-6'>
            <div id='faq' className='absolute -top-16' />
            <a href='#faq' className='group flex w-fit items-center gap-3 text-2xl font-semibold text-default'>
              <span>FAQ</span>
              <span className='hidden group-hover:inline-block'>#</span>
            </a>
            <div className='space-y-3'>
              <div className='text-xl font-semibold text-default'>How is Starter UI different from TailwindCSS?</div>
              <ul className='list-inside list-disc space-y-3'>
                <li>
                  <span className='font-semibold'>TailwindCSS:</span>
                  <div className='ml-6 mt-1'>
                    Tailwind CSS is a CSS Framework that provides atomic CSS classes to help you style components, leaving you to handle lots of other things like accessibility,
                    component composition, keyboard navigation, style overrides, etc.
                  </div>
                </li>
                <li>
                  <span className='font-semibold'>Starter UI:</span>
                  <div className='ml-6 mt-1'>
                    Starter UI is a UI library for React that combines the power of TailwindCSS to provide complete components (logic and styles) for building accessible and
                    customizable user interfaces. Since Starter UI uses TailwindCSS as its style engine, you can use all TailwindCSS classes within your Starter UI components,
                    ensuring optimal compiled CSS size.
                  </div>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <div className='text-xl font-semibold text-default'>Does Starter UI support TypeScript?</div>
              <div>Yes, Starter UI is written in TypeScript and has full support for it.</div>
            </div>
            <div className='space-y-3'>
              <div className='text-xl font-semibold text-default'>Can I use Starter UI with other front-end frameworks or libraries, such as Vue or Angular?</div>
              <div>No, Starter UI is specifically designed for React.</div>
            </div>
          </div>
        </div>
      </div>
      <OnThisPage data={listHashesData} />
    </div>
  )
}

export default page

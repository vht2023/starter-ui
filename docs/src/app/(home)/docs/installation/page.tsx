'use client'

import {themes} from 'prism-react-renderer'
import React from 'react'

import OnThisPage from '@/components/common/OnThisPage'
import ViewCode from '@/components/common/ViewCode'

const tailwindCssCode = `
// tailwind.config.ts
import {colors} from '@starter-ui/theme'

const config: Config = {
  content: [
    // ...
     // make sure it's pointing to the ROOT node_module
    './node_modules/'@starter-ui/core'/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ...
      colors: {
        ...colors,
        // ...
      }
    },
  },
}
`

const starteruiCssCode = `
// src/main.tsx <-- ReactJS -->
// app/layout.tsx <-- NextJS app directory -->

import '@starter-ui/core'/index.css'
...
`

const listHashesData = [
  {
    value: '#requirements',
    name: 'Requirements',
  },
  {
    value: '#create-project',
    name: 'Create project',
  },
  {
    value: '#install-starterui',
    name: 'Install Starter UI package',
  },
  {
    value: '#setup-tailwindcss',
    name: 'Tailwind CSS setup',
  },
  {
    value: '#add-starterui-css',
    name: 'Add the Starter UI CSS',
  },
]

const page = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-auto space-y-6 pr-6'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Installation</div>
          <div className='text-muted'>How to install dependencies and structure your app.</div>
        </div>
        <div className='relative space-y-3'>
          <div id='requirements' className='absolute -top-16' />
          <a href='#requirements' className='group flex items-center gap-3 font-semibold'>
            <span>Requirements:</span>
            <span className='hidden group-hover:inline-block'>#</span>
          </a>
          <ul className='list-inside list-disc'>
            <li>
              <a href='https://react.dev' className='text-link' target='_blank' rel='noreferrer'>
                React 18
              </a>{' '}
              or later
            </li>
            <li>
              <a href='https://tailwindcss.com' className='text-link' target='_blank' rel='noreferrer'>
                Tailwind CSS 3.4
              </a>{' '}
              or later
            </li>
          </ul>
        </div>
        <div className='w-full border-b' />
        <div className='space-y-3'>
          <div>This project and the components are written in TypeScript. We recommend using TypeScript for your project as well.</div>
          <ul className='list-none space-y-6'>
            <li className='relative'>
              <div id='create-project' className='absolute -top-16' />
              <a href='#create-project' className='group flex w-fit items-center gap-3 font-semibold'>
                <span>1. Create project</span>
                <span className='hidden group-hover:inline-block'>#</span>
              </a>
              <div className='ml-5 space-y-1.5'>
                <div>
                  Start by creating a new React project using{' '}
                  <a href='https://vitejs.dev' className='text-link' target='_blank' rel='noreferrer'>
                    Vite
                  </a>
                  :
                </div>
                <div>
                  <ViewCode id='installVite' code='npm create vite@latest' language='bash' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li className='relative'>
              <div id='install-starterui' className='absolute -top-16' />
              <a href='#install-starterui' className='group flex w-fit items-center gap-3 font-semibold'>
                <span>2. Install Starter UI package</span>
                <span className='hidden group-hover:inline-block'>#</span>
              </a>
              <div className='ml-5 space-y-1.5'>
                <div>
                  To install <span className='font-semibold'>Starter UI</span>, run one of the following commands in your terminal:
                </div>
                <div>
                  <ViewCode id='installStarterUI' code='npm install @starter-ui/core @starter-ui/theme' language='bash' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li className='relative'>
              <div id='setup-tailwindcss' className='absolute -top-16' />
              <a href='#setup-tailwindcss' className='group flex w-fit items-center gap-3 font-semibold'>
                <span>3. Tailwind CSS setup</span>
                <span className='hidden group-hover:inline-block'>#</span>
              </a>
              <div className='ml-5 space-y-1.5'>
                <div>
                  NextUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official{' '}
                  <a href='https://tailwindcss.com/docs/installation' className='text-link' target='_blank' rel='noreferrer'>
                    installation guide
                  </a>{' '}
                  to install Tailwind CSS. Then you need to add the following code to your `tailwind.config.js` file:
                </div>
                <div>
                  <ViewCode id='tailwindCssCode' code={tailwindCssCode} language='typescript' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li className='relative'>
              <div id='add-starterui-css' className='absolute -top-16' />
              <a href='#add-starterui-css' className='group flex w-fit items-center gap-3 font-semibold'>
                <span>4. Add the Starter UI CSS to your CSS</span>
                <span className='hidden group-hover:inline-block'>#</span>
              </a>
              <div className='ml-5 space-y-1.5'>
                <div className='mt-1.5'>
                  <ViewCode id='starteruiCssCode' code={starteruiCssCode} language='typescript' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <OnThisPage data={listHashesData} />
    </div>
  )
}

export default page

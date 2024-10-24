'use client'

import {themes} from 'prism-react-renderer'
import React from 'react'

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

import ''@starter-ui/core'/index.css'
...
`

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-6 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Installation</div>
          <div className='text-muted'>How to install dependencies and structure your app.</div>
        </div>
        <div className='space-y-3'>
          <div className='font-semibold'>Requirements:</div>
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
            {/* <li>
              <a href='https://www.framer.com' className='text-link' target='_blank' rel='noreferrer'>
                Framer Motion 11
              </a>{' '}
              or later
            </li> */}
          </ul>
        </div>
        <div className='w-full border-b' />
        <div className='space-y-3'>
          <div>This project and the components are written in TypeScript. We recommend using TypeScript for your project as well.</div>
          <ul className='list-inside list-decimal space-y-3'>
            <li>
              <span className='font-semibold'>Create React project</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  Start by creating a new React project using{' '}
                  <a href='https://vitejs.dev' className='text-link' target='_blank' rel='noreferrer'>
                    Vite
                  </a>
                  :
                </div>
                <div>
                  <ViewCode id='vite' code='npm create vite@latest' language='bash' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li>
              <span className='font-semibold'>Install Starter UI package</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  To install <span className='font-semibold'>Starter UI</span>, run one of the following commands in your terminal:
                </div>
                <div>
                  <ViewCode id='starter-ui/core' code='npm install @starter-ui/core @starter-ui/theme' language='bash' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li>
              <span className='font-semibold'>Tailwind CSS setup</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  NextUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official{' '}
                  <a href='https://tailwindcss.com/docs/installation' className='text-link' target='_blank' rel='noreferrer'>
                    installation guide
                  </a>{' '}
                  to install Tailwind CSS. Then you need to add the following code to your `tailwind.config.js` file:
                </div>
                <div>
                  <ViewCode id='tailwindCssCode' code={tailwindCssCode} language='ts' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
            <li>
              <span className='font-semibold'>Add the Starter UI CSS to your CSS</span>
              <div className='ml-5 space-y-1.5'>
                <div className='mt-1.5'>
                  <ViewCode id='starteruiCss' code={starteruiCssCode} language='typescript' theme={themes.synthwave84} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default page

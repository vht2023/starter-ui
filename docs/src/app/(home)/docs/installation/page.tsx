'use client'

import React from 'react'

import ViewCode from '@/components/common/ViewCode'

const tailwindCssCode = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`

const starteruiCssCode = `
// src/main.tsx <-- ReactJS -->
// app/layout.tsx <-- NextJS app directory -->

import '@starter-ui/core/index.css'
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
              <span className='font-semibold'>Create project</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  Start by creating a new React project using{' '}
                  <a href='https://vitejs.dev' className='text-link' target='_blank' rel='noreferrer'>
                    Vite
                  </a>
                  :
                </div>
                <div>
                  <ViewCode id='vite' code='npm create vite@latest' />
                </div>
              </div>
            </li>
            <li>
              <span className='font-semibold'>Add Tailwind and its configuration</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  Install <span className='font-semibold'>tailwindcss</span> and its peer dependencies, then generate your <span className='font-semibold'>tailwind.config.js</span>{' '}
                  and <span className='font-semibold'>postcss.config.js</span> files:
                </div>
                <div>
                  <ViewCode id='tailwindcss' code={tailwindCssCode} />
                </div>
              </div>
            </li>
            {/* <li>
              <span className='font-semibold'>Install Framer Motion</span>
              <div className='ml-5'>
                <div>
                  Install <span className='font-semibold'>framer-motion</span> from npm:
                </div>
                <div>`npm install framer-motion`</div>
              </div>
            </li> */}
            <li>
              <span className='font-semibold'>Install Starter UI package</span>
              <div className='ml-5 space-y-1.5'>
                <div>
                  To install <span className='font-semibold'>Starter UI</span>, run one of the following commands in your terminal:
                </div>
                <div>
                  <ViewCode id='starter-ui/core' code='npm install @starter-ui/core' />
                </div>
              </div>
            </li>
            <li>
              <span className='font-semibold'>Add the Starter UI CSS to your CSS</span>
              <div className='ml-5 space-y-1.5'>
                <div className='mt-1.5'>
                  <ViewCode id='starteruiCss' code={starteruiCssCode} />
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

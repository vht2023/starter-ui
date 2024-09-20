import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <div className='grow space-y-6 px-10'>
        <div className='text-4xl font-bold'>Introduction</div>
        <div>
          Welcome to the <span className='text-default font-bold'>Starter UI</span> documentation!
        </div>
        <div className='space-y-3'>
          <div className='text-default text-2xl font-semibold'>What is Starter UI?</div>
          <div>
            Starter UI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of{' '}
            <a href='https://tailwindcss.com' className='text-link' target='_blank' rel='noreferrer'>
              Tailwind CSS
            </a>
          </div>
          <div>Starter UI&apos;s primary goal is to streamline the development process, offering a beautiful and adaptable system design for an enhanced user experience.</div>
        </div>
        <div className='w-full border-b' />
        <div className='space-y-6'>
          <div className='text-default text-2xl font-semibold'>FAQ</div>
          <div className='space-y-3'>
            <div className='text-default text-xl font-semibold'>How is Starter UI different from TailwindCSS?</div>
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
            <div className='text-default text-xl font-semibold'>Does Starter UI support TypeScript?</div>
            <div>Yes, Starter UI is written in TypeScript and has full support for it.</div>
          </div>
          <div className='space-y-3'>
            <div className='text-default text-xl font-semibold'>Can I use Starter UI with other front-end frameworks or libraries, such as Vue or Angular?</div>
            <div>No, Starter UI is specifically designed for React.</div>
          </div>
          <div className='space-y-3'>
            <div className='text-default text-xl font-semibold'>Why does Starter UI use Framer Motion?</div>
            <div>
              We use Framer Motion to animate some components due to the complexity of the animations and their physics-based nature. Framer Motion allows us to handle these
              animations in a more straightforward and performant way. In addition, it is well tested and production ready.
            </div>
          </div>
        </div>
      </div>
      <div className='w-72 flex-none'>On This Page</div>
    </div>
  )
}

export default page

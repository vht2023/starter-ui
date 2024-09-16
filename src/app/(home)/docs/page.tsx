import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <div className='grow space-y-6 px-10'>
        <div className='text-4xl font-bold'>Introduction</div>
        <div>
          Welcome to the <span className='font-bold text-foreground'>StarterUI</span> documentation!
        </div>
        <div className='space-y-3'>
          <div className='text-2xl font-semibold text-foreground'>What is StarterUI?</div>
          <div>
            StarterUI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of{' '}
            <a href='https://tailwindcss.com' className='text-link' target='_blank' rel='noreferrer'>
              Tailwind CSS
            </a>
          </div>
          <div>StarterUI&apos;s primary goal is to streamline the development process, offering a beautiful and adaptable system design for an enhanced user experience.</div>
        </div>
      </div>
      <div className='w-72 flex-none'>Timeline</div>
    </div>
  )
}

export default page

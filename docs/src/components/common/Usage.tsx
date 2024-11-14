import React, {PropsWithChildren} from 'react'

const Usage = ({children}: PropsWithChildren) => {
  return (
    <div className='space-y-6'>
      <div className='relative'>
        <div id='usage' className='absolute -top-16' />
        <a href='#usage' className='text-2xl font-bold'>
          Usage
        </a>
        <div className='mt-1.5 w-full border-b' />
      </div>
      {children}
    </div>
  )
}

export default Usage

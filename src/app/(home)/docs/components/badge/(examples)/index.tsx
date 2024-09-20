'use client'

import React from 'react'

import Colors from './Colors'
import Default from './Default'

const Examples = () => {
  return (
    <div className='space-y-3'>
      <div className='text-2xl font-bold'>Examples</div>
      <div className='w-full border-b' />
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Colors</div>
        <Colors />
      </div>
    </div>
  )
}

export default Examples

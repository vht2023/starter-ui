'use client'

import React from 'react'

import Colors from './Colors'
import Default from './Default'
import Orthers from './Orthers'
import Sizes from './Sizes'

const Examples = () => {
  return (
    <div className='space-y-3'>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Colors</div>
        <Colors />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Sizes</div>
        <Sizes />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Orthers</div>
        <Orthers />
      </div>
    </div>
  )
}

export default Examples

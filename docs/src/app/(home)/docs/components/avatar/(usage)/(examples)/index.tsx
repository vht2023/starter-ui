'use client'

import React from 'react'

import Bordered from './Bordered'
import Colors from './Colors'
import Default from './Default'
import Radius from './Radius'
import Sizes from './Sizes'

const Examples = () => {
  return (
    <React.Fragment>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Sizes</div>
        <Sizes />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Bordered</div>
        <Bordered />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Radius</div>
        <Radius />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Colors</div>
        <Colors />
      </div>
    </React.Fragment>
  )
}

export default Examples

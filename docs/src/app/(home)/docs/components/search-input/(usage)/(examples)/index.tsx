'use client'

import React from 'react'

import Default from './Default'
import Orthers from './Orthers'
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
        <div className='text-xl font-bold'>Orthers</div>
        <Orthers />
      </div>
    </React.Fragment>
  )
}

export default Examples

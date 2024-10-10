'use client'

import React from 'react'

import Controlled from './Controlled'
import Default from './Default'
import Multiple from './Multiple'

const Examples = () => {
  return (
    <React.Fragment>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Expand multiple items</div>
        <Multiple />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Controlled</div>
        <Controlled />
      </div>
    </React.Fragment>
  )
}

export default Examples

'use client'

import React from 'react'

import Colors from './Colors'
import Controlled from './Controlled'
import Default from './Default'

const Examples = () => {
  return (
    <React.Fragment>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Colors</div>
        <Colors />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Controlled</div>
        <Controlled />
      </div>
    </React.Fragment>
  )
}

export default Examples

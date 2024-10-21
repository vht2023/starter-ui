'use client'

import React from 'react'

import Default from './Default'
import Outlines from './Outlines'
import Types from './Types'

const Examples = () => {
  return (
    <React.Fragment>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Types</div>
        <Types />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Outlines</div>
        <Outlines />
      </div>
    </React.Fragment>
  )
}

export default Examples

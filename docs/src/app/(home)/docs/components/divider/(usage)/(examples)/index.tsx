'use client'

import React from 'react'

import Colors from './Colors'
import Default from './Default'
import Types from './Types'
import WithLabel from './WithLabel'

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
        <div className='text-xl font-bold'>Types</div>
        <Types />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>With Label</div>
        <WithLabel />
      </div>
    </React.Fragment>
  )
}

export default Examples

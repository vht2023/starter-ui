'use client'

import React from 'react'

import Custom from './Custom'
import Default from './Default'

const Examples = () => {
  return (
    <React.Fragment>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Default</div>
        <Default />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Custom</div>
        <Custom />
      </div>
    </React.Fragment>
  )
}

export default Examples

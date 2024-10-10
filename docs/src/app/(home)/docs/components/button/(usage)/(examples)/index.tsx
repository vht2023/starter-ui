'use client'

import React from 'react'

import Colors from './Colors'
import Default from './Default'
import Disabled from './Disabled'
import Loading from './Loading'
import Outline from './Outline'
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
        <div className='text-xl font-bold'>Colors</div>
        <Colors />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Sizes</div>
        <Sizes />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Radius</div>
        <Radius />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Outline</div>
        <Outline />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Loading</div>
        <Loading />
      </div>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>Disabled</div>
        <Disabled />
      </div>
    </React.Fragment>
  )
}

export default Examples

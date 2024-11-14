'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/radio'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Radio</div>
          <div>
            Get started with the radio component by letting the user choose a single option from multiple options in the form of a circle based on custom styles and colors.
          </div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Colors</div>
            <Colors />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Card

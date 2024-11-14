'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/search-input'

import Default from './(usage)/Default'
import Orthers from './(usage)/Orthers'
import Sizes from './(usage)/Sizes'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Search Input</div>
          <div>Use the Search Input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes</div>
        </div>
        <Import code={importCode} />
        <Usage>
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
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Spinner

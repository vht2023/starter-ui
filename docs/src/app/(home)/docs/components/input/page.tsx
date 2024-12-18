'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/input'

import Default from './(usage)/Default'
import Orthers from './(usage)/Orthers'
import Sizes from './(usage)/Sizes'

const Input = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-6'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Input</div>
          <div>
            The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types,
            such as text, email, number, password, URL, phone number, and more.
          </div>
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

export default Input

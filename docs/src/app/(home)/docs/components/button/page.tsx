'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/button'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'
import Disabled from './(usage)/Disabled'
import Loading from './(usage)/Loading'
import Outline from './(usage)/Outline'
import Radius from './(usage)/Radius'
import Sizes from './(usage)/Sizes'

const Button = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Button</div>
          <div>Buttons allow users to perform actions and choose with a single tap.</div>
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
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Button

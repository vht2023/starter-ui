'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/avatar'

import Bordered from './(usage)/Bordered'
import Colors from './(usage)/Colors'
import Default from './(usage)/Default'
import Radius from './(usage)/Radius'
import Sizes from './(usage)/Sizes'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Avatar</div>
          <div>The Avatar component is used to represent a user, and displays the profile picture or name.</div>
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
            <div className='text-xl font-bold'>Bordered</div>
            <Bordered />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Radius</div>
            <Radius />
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

export default page

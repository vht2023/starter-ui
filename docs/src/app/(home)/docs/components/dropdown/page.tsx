'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/dropdown'

import Default from './(usage)/Default'
import Placement from './(usage)/Placement'
import Trigger from './(usage)/Trigger'

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Dropdown</div>
          <div>Displays a list of menu items or options that a user can choose.</div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Placement</div>
            <Placement />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Trigger</div>
            <Trigger />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Divider

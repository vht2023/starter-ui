'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/select'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Select</div>
          <div>Displays a collapsible list of options and allows a user to select one or more of them.</div>
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

export default Divider
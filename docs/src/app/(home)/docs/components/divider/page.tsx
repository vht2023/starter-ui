'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/divider'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'
import Types from './(usage)/Types'
import WithLabel from './(usage)/WithLabel'

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Divider</div>
          <div>A divider line separates different content.</div>
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
            <div className='text-xl font-bold'>Types</div>
            <Types />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>With Label</div>
            <WithLabel />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Divider

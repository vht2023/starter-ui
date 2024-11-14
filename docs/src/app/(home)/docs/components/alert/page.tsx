'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/alert'

import Default from './(usage)/Default'
import Outlines from './(usage)/Outlines'
import Types from './(usage)/Types'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Alert</div>
          <div>Alerts display brief messages for the user without interrupting their use of the app.</div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Types</div>
            <Types />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Outlines</div>
            <Outlines />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default page

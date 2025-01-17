'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/badge'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'
import Orthers from './(usage)/Orthers'
import Sizes from './(usage)/Sizes'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Badge</div>
          <div>Badges are used as a small numerical value or status descriptor for UI elements.</div>
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
            <div className='text-xl font-bold'>Orthers</div>
            <Orthers />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default page

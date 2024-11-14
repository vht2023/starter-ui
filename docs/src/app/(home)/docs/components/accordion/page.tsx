'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/accordion'

import Controlled from './(usage)/Controlled'
import Default from './(usage)/Default'
import Multiple from './(usage)/Multiple'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Accordion</div>
          <div>Accordion display a list of high-level options that can expand/collapse to reveal more information.</div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Expand multiple items</div>
            <Multiple />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Controlled</div>
            <Controlled />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default page

'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/modal'

const Default = dynamic(() => import('./(usage)/Default'), {ssr: false})

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Modal</div>
          <div>Displays a dialog with a custom content that requires attention or provides additional information.</div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Divider

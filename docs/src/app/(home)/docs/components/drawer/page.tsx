'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/drawer'

const Default = dynamic(() => import('./(usage)/Default'), {ssr: false})
const Placement = dynamic(() => import('./(usage)/Placement'), {ssr: false})

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Drawer</div>
          <div>The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and placements.</div>
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
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Divider

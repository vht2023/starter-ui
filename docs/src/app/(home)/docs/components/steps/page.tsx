'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/steps'

import Custom from './(usage)/Custom'
import Default from './(usage)/Default'

const Skeleton = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Steps</div>
          <div>Use the Steps component to show the number of steps required to complete a form inside your application.</div>
        </div>
        <Import code={importCode} />
        <Usage>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Default</div>
            <Default />
          </div>
          <div className='space-y-3'>
            <div className='text-xl font-bold'>Custom</div>
            <Custom />
          </div>
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Skeleton

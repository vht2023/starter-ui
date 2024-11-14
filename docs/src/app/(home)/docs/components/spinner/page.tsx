'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/spinner'

import Colors from './(usage)/Colors'
import Default from './(usage)/Default'
import Sizes from './(usage)/Sizes'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Spinner</div>
          <div>
            The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the
            user experience whenever data is being fetched from your server.
          </div>
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
        </Usage>
      </div>
    </React.Fragment>
  )
}

export default Spinner

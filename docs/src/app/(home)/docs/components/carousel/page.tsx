'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/carousel'

import Custom from './(usage)/Custom'
import Default from './(usage)/Default'

const Carousel = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Carousel</div>
          <div>
            Carousel Component is useful to navigate through a collection of images in a sequential fashion, moving to the previous/next one through the arrows on the sides.
          </div>
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

export default Carousel

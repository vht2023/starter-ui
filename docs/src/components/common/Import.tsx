'use client'

import {themes} from 'prism-react-renderer'
import React from 'react'

import ViewCode from './ViewCode'

const Import = ({code}: {code: string}) => {
  return (
    <div className='space-y-3'>
      <div className='relative'>
        <div id='import' className='absolute -top-16' />
        <a href='#import' className='text-2xl font-bold'>
          Import
        </a>
        <div className='mt-1.5 w-full border-b' />
      </div>
      <ViewCode id='import' code={code} theme={themes.gruvboxMaterialDark} />
    </div>
  )
}

export default Import

'use client'

import {themes} from 'prism-react-renderer'
import React from 'react'

import ViewCode from '@/components/common/ViewCode'
import {importCode} from '@/constants/documents/components/alert'

const Import = () => {
  return (
    <div className='space-y-3'>
      <div>
        <div className='text-2xl font-bold'>Import</div>
        <div className='mt-1.5 w-full border-b' />
      </div>
      <ViewCode id='import' code={importCode} theme={themes.gruvboxMaterialDark} />
    </div>
  )
}

export default Import

'use client'

import React from 'react'

import Import from '@/components/common/Import'
import Usage from '@/components/common/Usage'
import {importCode} from '@/constants/documents/components/card'

import Custom from './(usage)/Custom'
import Default from './(usage)/Default'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Card</div>
          <div>
            Displays a card with header, content, and footer. Use these responsive card components to show data entries and information to your users in multiple forms and contexts
            such as for your blog, application, user profiles, and more.
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

export default Card

'use client'

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Badge</div>
          <div>Badges are used as a small numerical value or status descriptor for UI elements.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default page

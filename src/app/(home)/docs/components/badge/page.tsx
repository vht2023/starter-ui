'use client'

import React from 'react'

import Examples from './(examples)'
import Usage from './(usage)'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-8 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Badge</div>
          <div>Badges are used as a small numerical value or status descriptor for UI elements.</div>
          <div className='w-full border-b' />
        </div>
        <Usage />
        <Examples />
      </div>
    </React.Fragment>
  )
}

export default page

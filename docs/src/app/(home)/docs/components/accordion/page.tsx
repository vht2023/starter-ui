'use client'

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Accordion</div>
          <div>Accordion display a list of high-level options that can expand/collapse to reveal more information.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default page

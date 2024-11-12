'use client'

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Alert</div>
          <div>Alerts display brief messages for the user without interrupting their use of the app.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default page

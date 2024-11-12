'use client'

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Button = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Button</div>
          <div>Buttons allow users to perform actions and choose with a single tap.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Button

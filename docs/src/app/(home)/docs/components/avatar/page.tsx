'use client'

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const page = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Avatar</div>
          <div>The Avatar component is used to represent a user, and displays the profile picture or name.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default page

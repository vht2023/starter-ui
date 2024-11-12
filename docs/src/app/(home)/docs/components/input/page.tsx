import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Input = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-6'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Input</div>
          <div>
            The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types,
            such as text, email, number, password, URL, phone number, and more.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Input

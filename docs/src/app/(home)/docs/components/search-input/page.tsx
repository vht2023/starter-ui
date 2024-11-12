import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Search Input</div>
          <div>Use the Search Input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Spinner

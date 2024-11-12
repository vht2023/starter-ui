import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Breadcrumb = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Breadcrumb</div>
          <div>Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Breadcrumb

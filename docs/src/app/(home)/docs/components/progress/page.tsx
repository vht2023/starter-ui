import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Progress</div>
          <div>Use the Progress component to show the completion rate of a data indicator or use it as a loader element.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Spinner

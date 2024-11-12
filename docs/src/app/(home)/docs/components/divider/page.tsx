import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Divider = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Divider</div>
          <div>A divider line separates different content.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Divider

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Spinner = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Spinner</div>
          <div>
            The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the
            user experience whenever data is being fetched from your server.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Spinner

import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Skeleton = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Skeleton</div>
          <div>
            The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Skeleton

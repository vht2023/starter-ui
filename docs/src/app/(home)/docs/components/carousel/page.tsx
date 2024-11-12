import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Carousel = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Carousel</div>
          <div>
            Carousel Component is useful to navigate through a collection of images in a sequential fashion, moving to the previous/next one through the arrows on the sides.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Carousel

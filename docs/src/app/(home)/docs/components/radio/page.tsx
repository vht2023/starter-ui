import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Radio</div>
          <div>
            Get started with the radio component by letting the user choose a single option from multiple options in the form of a circle based on custom styles and colors.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Card

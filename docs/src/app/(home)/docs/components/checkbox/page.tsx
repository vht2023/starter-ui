import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Checkbox</div>
          <div>A control that allows the user to toggle between checked and not checked.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Card

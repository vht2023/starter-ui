import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Switch</div>
          <div>The Switch component is used as an alternative between checked and not checked states.</div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Card

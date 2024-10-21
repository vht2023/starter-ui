import React from 'react'

import Import from './(import)'
import Usage from './(usage)'

const Card = () => {
  return (
    <React.Fragment>
      <div className='w-full space-y-10 px-10'>
        <div className='space-y-3'>
          <div className='text-4xl font-bold'>Card</div>
          <div>
            Displays a card with header, content, and footer. Use these responsive card components to show data entries and information to your users in multiple forms and contexts
            such as for your blog, application, user profiles, and more.
          </div>
        </div>
        <Import />
        <Usage />
      </div>
    </React.Fragment>
  )
}

export default Card

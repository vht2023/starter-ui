import Sidebar from 'components/common/Sidebar'
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='relative h-full w-full'>
      <div className='scrollbar-thin fixed h-full w-80 overflow-y-auto pt-10'>
        <Sidebar />
      </div>
      <div className='ml-80 pt-10'>{children}</div>
    </div>
  )
}

export default layout

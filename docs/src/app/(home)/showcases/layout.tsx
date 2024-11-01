import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='relative mx-auto h-full w-3/4 pb-20 tablet_max:w-full'>
      {/* Main */}
      <main className='h-full pt-10 tablet_max:m-0 tablet_max:pt-3'>{children}</main>
    </div>
  )
}

export default layout

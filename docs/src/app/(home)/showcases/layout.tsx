import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='relative mx-auto h-full w-full px-10 pb-20 tablet_max:px-4'>
      {/* Main */}
      <main className='h-full pt-10 tablet_max:m-0 tablet_max:pt-6'>{children}</main>
    </div>
  )
}

export default layout

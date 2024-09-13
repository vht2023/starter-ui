'use client'

import Header from 'components/common/Header'
import React from 'react'
import {ToastContainer} from 'react-toastify'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='min-h-[calc(100vh-60px)] w-full'>
      <Header />
      <div className='mx-auto mt-[60px] h-full w-2/3'>{children}</div>
      <ToastContainer />
    </div>
  )
}

export default layout

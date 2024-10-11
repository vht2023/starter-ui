'use client'

import {AppProgressBar} from 'next-nprogress-bar'
import React from 'react'
import {ToastContainer} from 'react-toastify'

import Header from '@/components/common/Header'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='min-h-[calc(100vh-60px)] w-full'>
      <Header />
      <div className='mx-auto mt-[60px] h-full w-3/4 tablet_max:w-full'>{children}</div>
      <AppProgressBar height='4px' color='#27272a' startPosition={0.5} options={{showSpinner: false}} shallowRouting />
      <ToastContainer />
    </div>
  )
}

export default layout

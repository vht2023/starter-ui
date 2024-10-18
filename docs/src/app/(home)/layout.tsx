'use client'

import {AppProgressBar} from 'next-nprogress-bar'
import React from 'react'
import {ToastContainer} from 'react-toastify'

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='relative min-h-[calc(100vh-60px)] w-full'>
      <Header />
      <div className='mt-[60px] h-full min-h-screen w-full'>{children}</div>
      <Footer />
      <AppProgressBar height='4px' color='#27272a' startPosition={0.5} options={{showSpinner: false}} shallowRouting />
      <ToastContainer />
    </div>
  )
}

export default layout

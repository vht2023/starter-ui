'use client'

import React from 'react'

import OnThisPage from '@/components/common/OnThisPage'

const listHashesData = [
  {
    value: '#import',
    name: 'Import',
  },
  {
    value: '#usage',
    name: 'Usage',
  },
]

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex w-full'>
      <div className='w-full max-w-[calc(100%-240px)] flex-auto pr-6 tablet_max:max-w-full tablet_max:p-0'>{children}</div>
      <OnThisPage data={listHashesData} />
    </div>
  )
}

export default layout

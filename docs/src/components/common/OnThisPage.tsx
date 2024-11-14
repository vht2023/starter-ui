'use client'

import React from 'react'

import useDocumentsContext from '@/hooks/useDocumentsContext'
import {cn} from '@/libs/utils'

interface Props {
  data: {
    value: string
    name: string
  }[]
}

const OnThisPage: React.FC<Props> = ({data}) => {
  const {currentHash} = useDocumentsContext()
  return (
    <div className='w-60 flex-none tablet_max:hidden'>
      <div className='fixed top-[100px] h-[calc(100vh-100px)] w-60 overflow-y-auto pb-10'>
        <div className='mb-4 pl-3 text-base font-semibold'>On This Page</div>
        <nav className='pl-3'>
          <ul className='flex flex-col gap-3'>
            {data.map((item, index) => (
              <li
                key={index}
                className={cn([
                  'text-sm transition-all hover:text-default',
                  currentHash === item.value ? 'border-l border-default font-medium text-default' : 'border-none font-normal text-default/70',
                ])}
              >
                <a href={item.value} className='pl-3'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default OnThisPage

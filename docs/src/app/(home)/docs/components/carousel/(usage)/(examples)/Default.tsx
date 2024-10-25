import {Carousel} from '@starter-ui/core'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/carousel'
import {cn} from '@/libs/utils'

const data = [
  {
    id: '1',
    content: <Image src='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg' layout='fill' objectFit='contain' alt='1' />,
  },
  {
    id: '2',
    content: (
      <Image src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' layout='fill' objectFit='contain' alt='2' />
    ),
  },
  {
    id: '3',
    content: (
      <Image src='https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' layout='fill' objectFit='contain' alt='3' />
    ),
  },
  {
    id: '4',
    content: (
      <Image src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' layout='fill' objectFit='contain' alt='4' />
    ),
  },
  {
    id: '5',
    content: (
      <Image src='https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' layout='fill' objectFit='contain' alt='5' />
    ),
  },
]

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [active, setActive] = useState<string>(data[0].id)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-96 w-full overflow-auto rounded-md border p-3 scrollbar-thin tablet_max:h-72'>
        <Carousel
          active={active}
          data={data}
          onChange={(id) => {
            setActive(id)
          }}
        />
      </div>
    ),
    [active]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='carousel-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='carousel-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

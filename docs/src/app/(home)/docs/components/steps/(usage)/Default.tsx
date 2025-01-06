import {Steps} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/steps'
import {cn} from '@/libs/utils'

const data = [
  {
    title: 'Step 1',
    description: 'This is a description',
  },
  {
    title: 'Step 2',
    description: 'This is a description',
  },
  {
    title: 'Step 3',
    description: 'This is a description',
  },
]

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(1)

  const viewPreview = useMemo(
    () => (
      <div className='h-40 w-full overflow-auto rounded-md border px-3 py-10'>
        <div className='flex-center w-full px-6'>
          <Steps current={current} items={data} onChange={(value) => setCurrent(value)} />
        </div>
      </div>
    ),
    [current]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='steps-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='steps-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

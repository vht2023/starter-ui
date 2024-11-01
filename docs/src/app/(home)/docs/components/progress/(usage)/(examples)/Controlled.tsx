import {Button, Progress} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeControlled} from '@/constants/documents/components/progress'
import {cn} from '@/libs/utils'

const Controlled = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [percent, setPercent] = useState<number>(0)

  const handleDecreasePercent = () => {
    setPercent((prev) => {
      if (prev - 10 < 0) return 0
      else return prev - 10
    })
  }

  const handleIncreasePercent = () => {
    setPercent((prev) => {
      if (prev + 10 > 100) return 100
      else return prev + 10
    })
  }

  const viewPreview = useMemo(
    () => (
      <div className='flex-center relative min-h-40 w-full gap-3 overflow-auto rounded-md border p-3'>
        <div className='absolute right-2 top-2 flex items-center gap-3'>
          <Button isIconOnly outline size='sm' radius='full' className='h-8 w-8' onClick={handleDecreasePercent}>
            -
          </Button>
          <Button isIconOnly outline size='sm' radius='full' className='h-8 w-8' onClick={handleIncreasePercent}>
            +
          </Button>
        </div>
        <div className='grid w-full grid-cols-2 gap-6'>
          <div className='flex-center'>
            <Progress id='line-progress' percent={percent} color='primary' type='line' showStatus />
          </div>
          <div className='flex-center'>
            <Progress id='circle-progress' percent={percent} color='primary' type='circle' insideLabel={percent} />
          </div>
        </div>
      </div>
    ),
    [percent]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='progress-controlled-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='progress-controlled-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeControlled' code={demoCodeControlled} /> : viewPreview}</div>
    </div>
  )
}

export default Controlled

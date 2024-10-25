import {Skeleton} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/skeleton'
import {cn} from '@/libs/utils'

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='h-fit max-h-40 w-full overflow-auto rounded-md border px-3 py-10 scrollbar-thin'>
        <div className='space-y-1.5'>
          <Skeleton />
          <Skeleton className='w-60' />
          <Skeleton className='w-80' />
          <Skeleton />
        </div>
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='skeleton-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='skeleton-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

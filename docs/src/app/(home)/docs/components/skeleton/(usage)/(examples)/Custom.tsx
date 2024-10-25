import {Card, Skeleton} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeCustom} from '@/constants/documents/components/skeleton'
import {cn} from '@/libs/utils'

const Custom = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex h-fit max-h-60 w-full flex-wrap gap-6 overflow-auto rounded-md border p-3 scrollbar-thin tablet_max:flex-col'>
        <div className='space-y-1.5'>
          <div className='text-sm'>Card Skeleton</div>
          <div>
            <Card className='w-fit'>
              <Card.Header>
                <Skeleton />
              </Card.Header>
              <Card.Body className='space-y-1.5'>
                <Skeleton className='w-60' />
                <Skeleton className='w-80' />
                <Skeleton className='w-80' />
              </Card.Body>
              <Card.Footer>
                <Skeleton />
              </Card.Footer>
            </Card>
          </div>
        </div>
        <div className='space-y-1.5'>
          <div className='text-sm'>User Skeleton</div>
          <div className='flex items-center gap-3'>
            <Skeleton className='h-8 w-8' />
            <div className='space-y-1.5'>
              <Skeleton className='w-20' />
              <Skeleton className='w-32' />
            </div>
          </div>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='skeleton-colors-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='skeleton-colors-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeCustom' code={demoCodeCustom} /> : viewPreview}</div>
    </div>
  )
}

export default Custom

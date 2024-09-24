import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {Badge} from '@/components/ui'
import {demoCodeColors} from '@/constants/documents/components/badge'
import {cn} from '@/libs/utils'

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-40 w-full flex-wrap gap-3 rounded-md border'>
        <div className='flex flex-col justify-center'>
          <Badge>Default</Badge>
        </div>
        <div className='flex flex-col justify-center'>
          <Badge color='primary'>Primary</Badge>
        </div>
        <div className='flex flex-col justify-center'>
          <Badge color='secondary'>Secondary</Badge>
        </div>
        <div className='flex flex-col justify-center'>
          <Badge color='success'>Success</Badge>
        </div>
        <div className='flex flex-col justify-center'>
          <Badge color='warning'>Warning</Badge>
        </div>
        <div className='flex flex-col justify-center'>
          <Badge color='error'>Error</Badge>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='badge-colors-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='badge-colors-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeColors' code={demoCodeColors} /> : viewPreview}</div>
    </div>
  )
}

export default Colors

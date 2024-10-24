import {Input} from '@core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeSizes} from '@/constants/documents/components/input'
import {cn} from '@/libs/utils'

const Sizes = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex h-80 w-full flex-col justify-center gap-3 overflow-auto rounded-md border px-10 py-3 tablet_max:px-3'>
        <div className='w-2/3 space-y-6 tablet_max:w-full'>
          <Input id='small' label='Small input' size='sm' />
          <Input id='default' label='Default input' size='md' />
          <Input id='large' label='Large input' size='lg' />
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='input-sizes-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='input-sizes-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeSizes' code={demoCodeSizes} /> : viewPreview}</div>
    </div>
  )
}

export default Sizes

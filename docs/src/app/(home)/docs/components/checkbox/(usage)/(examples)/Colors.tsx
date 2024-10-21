import {Checkbox} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeColor} from '@/constants/documents/components/checkbox'
import {cn} from '@/libs/utils'

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-40 w-full flex-wrap gap-6 gap-y-0 overflow-auto rounded-md border p-3 py-8 tablet_max:block tablet_max:space-y-3 tablet_max:px-10 tablet_max:py-3'>
        <Checkbox id='checkbox-default-color' label='Default' />
        <Checkbox id='checkbox-primary-color' color='primary' label='Primary' />
        <Checkbox id='checkbox-secondary-color' color='secondary' label='Secondary' />
        <Checkbox id='checkbox-success-color' color='success' label='Success' />
        <Checkbox id='checkbox-warning-color' color='warning' label='Warning' />
        <Checkbox id='checkbox-error-color' color='error' label='Error' />
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='checkbox-colors-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='checkbox-colors-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeColor' code={demoCodeColor} /> : viewPreview}</div>
    </div>
  )
}

export default Colors

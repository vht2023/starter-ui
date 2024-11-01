import {Checkbox} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeControlled} from '@/constants/documents/components/checkbox'
import {cn} from '@/libs/utils'

const Controlled = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex h-40 w-full flex-col flex-wrap justify-center gap-3 overflow-auto rounded-md border p-3 py-8 tablet_max:block tablet_max:space-y-3 tablet_max:px-10 tablet_max:py-3'>
        <Checkbox id='checkbox-primary-controlled' color='primary' label='Controlled' checked={checked} onChange={setChecked} />
        <Checkbox id='checkbox-primary-disabled' color='primary' label='Disabled' disabled />
      </div>
    ),
    [checked]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='checkbox-controlled-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='checkbox-controlled-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeControlled' code={demoCodeControlled} /> : viewPreview}</div>
    </div>
  )
}

export default Controlled

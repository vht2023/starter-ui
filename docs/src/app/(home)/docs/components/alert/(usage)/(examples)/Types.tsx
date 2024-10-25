import {Alert} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeTypes} from '@/constants/documents/components/alert'
import {cn} from '@/libs/utils'

const Types = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='h-96 w-full space-y-3 overflow-auto rounded-md border p-3 scrollbar-thin tablet_max:h-60'>
        <Alert>Default alert! Change a few things up and try submitting again.</Alert>
        <Alert type='info'>Info alert! Change a few things up and try submitting again.</Alert>
        <Alert type='success'>Success alert! Change a few things up and try submitting again.</Alert>
        <Alert type='warning'>Warning alert! Change a few things up and try submitting again.</Alert>
        <Alert type='error'>Error alert! Change a few things up and try submitting again.</Alert>
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='alert-types-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='alert-types-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeTypes' code={demoCodeTypes} /> : viewPreview}</div>
    </div>
  )
}

export default Types

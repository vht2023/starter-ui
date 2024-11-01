import {Divider} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeTypes} from '@/constants/documents/components/divider'
import {cn} from '@/libs/utils'

const Types = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-fit w-full gap-3 overflow-auto rounded-md border p-3'>
        <div className='h-full w-full px-10 tablet_max:px-0'>
          <div>Divider with solid type.</div>
          <Divider type='solid' />
          <div>Divider with dashed type.</div>
          <Divider type='dashed' />
          <div>Divider with dotted type.</div>
          <Divider type='dotted' />
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='divider-types-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='divider-types-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeTypes' code={demoCodeTypes} /> : viewPreview}</div>
    </div>
  )
}

export default Types

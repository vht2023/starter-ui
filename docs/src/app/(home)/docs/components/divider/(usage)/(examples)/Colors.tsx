import {Divider} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeColors} from '@/constants/documents/components/divider'
import {cn} from '@/libs/utils'

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-60 w-full gap-3 overflow-auto rounded-md border p-3'>
        <div className='h-full w-full px-10 tablet_max:px-0'>
          <div>Divider with default color.</div>
          <Divider />
          <div>Divider with primary color.</div>
          <Divider color='primary' />
          <div>Divider with secondary color.</div>
          <Divider color='secondary' />
          <div>Divider with success color.</div>
          <Divider color='success' />
          <div>Divider with warning color.</div>
          <Divider color='warning' />
          <div>Divider with error color.</div>
          <Divider color='error' />
          <div>Divider with gray color.</div>
          <Divider color='gray' />
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='divider-colors-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='divider-colors-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeColors' code={demoCodeColors} /> : viewPreview}</div>
    </div>
  )
}

export default Colors

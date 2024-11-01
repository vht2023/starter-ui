import {Radio} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/radio'
import {cn} from '@/libs/utils'

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>()

  const viewPreview = useMemo(
    () => (
      <div className='scrollbar-thin flex-center h-40 w-full overflow-auto rounded-md border p-3'>
        <Radio id='default-radio' selectedKey={selected} onChange={(value) => setSelected(value)}>
          <Radio.Item id='default-radio-1'>Radio 1</Radio.Item>
          <Radio.Item id='default-radio-2'>Radio 2</Radio.Item>
          <Radio.Item id='default-radio-3'>Radio 3</Radio.Item>
        </Radio>
      </div>
    ),
    [selected]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='radio-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='radio-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

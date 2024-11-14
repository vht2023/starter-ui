import {Radio} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeColor} from '@/constants/documents/components/radio'
import {cn} from '@/libs/utils'

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>()

  const viewPreview = useMemo(
    () => (
      <div className='flex-center min-h-40 w-full flex-wrap gap-10 overflow-auto rounded-md border p-3 tablet_max:grid tablet_max:grid-cols-2'>
        <div>
          <div className='mb-3 text-primary'>Primary</div>
          <Radio id='primary-radio' color='primary' selectedKey={selected} onChange={(value) => setSelected(value)}>
            <Radio.Item id='primary-radio-1'>Radio 1</Radio.Item>
            <Radio.Item id='primary-radio-2'>Radio 2</Radio.Item>
            <Radio.Item id='primary-radio-3'>Radio 3</Radio.Item>
          </Radio>
        </div>
        <div>
          <div className='mb-3 text-secondary'>Secondary</div>
          <Radio id='secondary-radio' color='secondary' selectedKey={selected} onChange={(value) => setSelected(value)}>
            <Radio.Item id='seccondary-radio-1'>Radio 1</Radio.Item>
            <Radio.Item id='seccondary-radio-2'>Radio 2</Radio.Item>
            <Radio.Item id='seccondary-radio-3'>Radio 3</Radio.Item>
          </Radio>
        </div>
        <div>
          <div className='mb-3 text-success'>Success</div>
          <Radio id='success-radio' color='success' selectedKey={selected} onChange={(value) => setSelected(value)}>
            <Radio.Item id='success-radio-1'>Radio 1</Radio.Item>
            <Radio.Item id='success-radio-2'>Radio 2</Radio.Item>
            <Radio.Item id='success-radio-3'>Radio 3</Radio.Item>
          </Radio>
        </div>
        <div>
          <div className='mb-3 text-warning'>Warning</div>
          <Radio id='warning-radio' color='warning' selectedKey={selected} onChange={(value) => setSelected(value)}>
            <Radio.Item id='warning-radio-1'>Radio 1</Radio.Item>
            <Radio.Item id='warning-radio-2'>Radio 2</Radio.Item>
            <Radio.Item id='warning-radio-3'>Radio 3</Radio.Item>
          </Radio>
        </div>
        <div>
          <div className='mb-3 text-error'>Error</div>
          <Radio id='error-radio' color='error' selectedKey={selected} onChange={(value) => setSelected(value)}>
            <Radio.Item id='error-radio-1'>Radio 1</Radio.Item>
            <Radio.Item id='error-radio-2'>Radio 2</Radio.Item>
            <Radio.Item id='error-radio-3'>Radio 3</Radio.Item>
          </Radio>
        </div>
      </div>
    ),
    [selected]
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

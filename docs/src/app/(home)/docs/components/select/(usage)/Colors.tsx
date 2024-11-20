import {Radio, Select} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeColors} from '@/constants/documents/components/select'
import {cn} from '@/libs/utils'

const options = [
  {
    value: 'value-1',
    name: 'Value 1',
  },
  {
    value: 'value-2',
    name: 'Value 2',
  },
  {
    value: 'value-3',
    name: 'Value 3',
  },
]

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [value, setValue] = useState<string>()
  const [color, setColor] = useState<string>('default')

  const viewPreview = useMemo(
    () => (
      <div className='relative h-96 w-full overflow-auto rounded-md border p-3 pt-10'>
        <div className='mx-6 w-fit space-y-6'>
          <Radio
            id='primary-radio'
            color={color}
            selectedKey={color}
            onChange={(selected) => setColor(selected || 'default')}
            className='flex flex-wrap items-center gap-3 space-y-0'
          >
            <Radio.Item id='default'>Default</Radio.Item>
            <Radio.Item id='primary'>Primary</Radio.Item>
            <Radio.Item id='secondary'>Secondary</Radio.Item>
            <Radio.Item id='success'>Success</Radio.Item>
            <Radio.Item id='warning'>Warning</Radio.Item>
            <Radio.Item id='error'>Error</Radio.Item>
          </Radio>
          <div className='w-fit'>
            <Select id='starterui-default-select' color={color} options={options} value={value} onChange={(selected) => setValue(selected)} label='Select one' />
          </div>
        </div>
      </div>
    ),
    [color, value]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='select-colors-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='select-colors-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeColors' code={demoCodeColors} /> : viewPreview}</div>
    </div>
  )
}

export default Colors

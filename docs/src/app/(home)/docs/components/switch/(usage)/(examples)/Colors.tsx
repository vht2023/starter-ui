import {Switch} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeColor} from '@/constants/documents/components/switch'
import {cn} from '@/libs/utils'

const Colors = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [checked, setChecked] = useState<string[]>([])

  const onChangeChecked = (id: string, value: boolean) => {
    if (value) {
      setChecked((prev) => [...prev, id])
    } else {
      setChecked((prev) => prev.filter((item) => item !== id))
    }
  }

  const viewPreview = useMemo(
    () => (
      <div className='flex-center min-h-40 w-full flex-wrap gap-6 overflow-auto rounded-md border p-3 tablet_max:grid tablet_max:grid-cols-2'>
        <div className=''>
          <Switch id='primary-switch' label='Primary' color='primary' checked={checked.includes('primary-switch')} onChange={(value) => onChangeChecked('primary-switch', value)} />
        </div>
        <div className=''>
          <Switch
            id='secondary-switch'
            label='Secondary'
            color='secondary'
            checked={checked.includes('secondary-switch')}
            onChange={(value) => onChangeChecked('secondary-switch', value)}
          />
        </div>
        <div className=''>
          <Switch id='success-switch' label='Success' color='success' checked={checked.includes('success-switch')} onChange={(value) => onChangeChecked('success-switch', value)} />
        </div>
        <div className=''>
          <Switch id='warning-switch' label='Warning' color='warning' checked={checked.includes('warning-switch')} onChange={(value) => onChangeChecked('warning-switch', value)} />
        </div>
        <div className=''>
          <Switch id='error-switch' label='Error' color='error' checked={checked.includes('error-switch')} onChange={(value) => onChangeChecked('error-switch', value)} />
        </div>
      </div>
    ),
    [checked]
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

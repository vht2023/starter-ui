import {Button, Popover} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeTrigger} from '@/constants/documents/components/popover'
import {cn} from '@/libs/utils'

const Trigger = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center relative h-96 w-full gap-3 overflow-auto rounded-md border p-3 tablet_max:h-72 tablet_max:flex-col'>
        <Popover renderButton={<Button size='sm'>Click Popover</Button>} trigger='click'>
          This is Popover content!
        </Popover>
        <Popover renderButton={<Button size='sm'>Hover Popover</Button>} trigger='hover'>
          This is Popover content!
        </Popover>
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='popover-trigger-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='popover-trigger-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeTrigger' code={demoCodeTrigger} /> : viewPreview}</div>
    </div>
  )
}

export default Trigger

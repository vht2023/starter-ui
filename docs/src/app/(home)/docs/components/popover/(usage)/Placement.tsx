import {Button, Popover} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodePlacement} from '@/constants/documents/components/popover'
import {cn} from '@/libs/utils'

const Placement = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center relative h-96 w-full overflow-auto rounded-md border p-3 tablet_max:h-72'>
        <div className='flex-center absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 tablet_max:left-48 tablet_max:translate-x-0'>
          <div className='flex items-center gap-3'>
            <Popover id='starterui-top-start-popover' placement='top-start' renderButton={<Button size='sm'>Top Start</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-top-popover' placement='top' renderButton={<Button size='sm'>Top</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-top-end-popover' placement='top-end' renderButton={<Button size='sm'>Top End</Button>}>
              This is Popover content!
            </Popover>
          </div>
          <div className='flex items-center gap-3'>
            <Popover id='starterui-bottom-start-popover' placement='bottom-start' renderButton={<Button size='sm'>Bottom Start</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-bottom-popover' placement='bottom' renderButton={<Button size='sm'>Bottom</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-bottom-end-popover' placement='bottom-end' renderButton={<Button size='sm'>Bottom End</Button>}>
              This is Popover content!
            </Popover>
          </div>
          <div className='flex items-center gap-3'>
            <Popover id='starterui-left-start-popover' placement='left-start' renderButton={<Button size='sm'>Left Start</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-left-popover' placement='left' renderButton={<Button size='sm'>Left</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-left-end-popover' placement='left-end' renderButton={<Button size='sm'>Left End</Button>}>
              This is Popover content!
            </Popover>
          </div>
          <div className='flex items-center gap-3'>
            <Popover id='starterui-right-start-popover' placement='right-start' renderButton={<Button size='sm'>Right Start</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-right-popover' placement='right' renderButton={<Button size='sm'>Right</Button>}>
              This is Popover content!
            </Popover>
            <Popover id='starterui-right-end-popover' placement='right-end' renderButton={<Button size='sm'>Right End</Button>}>
              This is Popover content!
            </Popover>
          </div>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='dropdown-placement-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='dropdown-placement-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodePlacement' code={demoCodePlacement} /> : viewPreview}</div>
    </div>
  )
}

export default Placement

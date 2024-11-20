import {Button, Dropdown} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodePlacement} from '@/constants/documents/components/dropdown'
import {cn} from '@/libs/utils'

const Placement = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-96 min-h-40 w-full flex-col flex-wrap gap-3 overflow-auto rounded-md border p-3 tablet_max:h-72'>
        <div className='flex-center gap-3'>
          <Dropdown id='starterui-bottom-start-dropdow' align='start' position='bottom' renderButton={<Button size='sm'>Bottom Start</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
          <Dropdown id='starterui-bottom-center-dropdow' align='center' position='bottom' renderButton={<Button size='sm'>Bottom Center</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
          <Dropdown id='starterui-bottom-end-dropdow' align='end' position='bottom' renderButton={<Button size='sm'>Bottom End</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='flex-center gap-3'>
          <Dropdown id='starterui-top-start-dropdow' align='start' position='top' renderButton={<Button size='sm'>Top Start</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
          <Dropdown id='starterui-top-center-dropdow' align='center' position='top' renderButton={<Button size='sm'>Top Center</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
          <Dropdown id='starterui-top-end-dropdow' align='end' position='top' renderButton={<Button size='sm'>Top End</Button>}>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown>
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

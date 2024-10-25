import {Accordion} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeControlled} from '@/constants/documents/components/accordion'
import {cn} from '@/libs/utils'

const Controlled = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const viewPreview = useMemo(
    () => (
      <div className='h-80 w-full overflow-auto rounded-md border p-6 pt-10 scrollbar-thin'>
        <div>
          <Accordion mode='multiple' disabledKeys={['3']} selectedKeys={selectedKeys} onChange={(keys) => setSelectedKeys(keys)}>
            <Accordion.Item id='1'>
              <Accordion.Header>Accordion 1</Accordion.Header>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id='2'>
              <Accordion.Header>Accordion 2</Accordion.Header>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id='3'>
              <Accordion.Header>Disabled Accordion 3</Accordion.Header>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='badge-orthers-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='badge-orthers-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeControlled' code={demoCodeControlled} /> : viewPreview}</div>
    </div>
  )
}

export default Controlled

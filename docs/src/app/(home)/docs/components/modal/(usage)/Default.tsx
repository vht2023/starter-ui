import {Button, Modal} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/modal'
import {cn} from '@/libs/utils'

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-96 w-full overflow-auto rounded-md border p-3 tablet_max:h-72'>
        <Button size='sm' color='black' onClick={() => setShowModal(true)}>
          Show Modal
        </Button>
        <Modal id='starterui-default-modal' show={showModal} onHide={() => setShowModal(false)} className='tablet_max:w-[300px] tablet_max:min-w-[300px]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque veniam dicta labore veritatis temporibus voluptates cum, voluptatum quas reiciendis, praesentium,
          commodi architecto laborum nulla. Nobis ab quo laborum! Laborum, tempora!
        </Modal>
      </div>
    ),
    [showModal]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='modal-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='modal-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

import {Card} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDefault} from '@/constants/documents/components/card'
import {cn} from '@/libs/utils'

const Default = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-60 w-full overflow-auto rounded-md border p-3'>
        <Card id='card-default'>
          <Card.Header>Card Header</Card.Header>
          <Card.Body>
            <p>Card Body 1</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, veniam soluta impedit, nostrum ea molestias sapiente accusantium eius quaerat totam reprehenderit
              aliquid? Assumenda soluta optio ea magnam hic. Sed, sit.
            </p>
          </Card.Body>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='card-default-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='card-default-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeDefault} /> : viewPreview}</div>
    </div>
  )
}

export default Default

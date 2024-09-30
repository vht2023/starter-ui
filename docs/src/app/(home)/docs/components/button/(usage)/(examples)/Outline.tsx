import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {Button} from '@/components/ui'
import {demoCodeOutline} from '@/constants/documents/components/button'
import {cn} from '@/libs/utils'

const Outline = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-40 w-full flex-wrap gap-3 rounded-md border py-3'>
        <div className='flex flex-col justify-center'>
          <Button outline>Default</Button>
        </div>
        <div className='flex flex-col justify-center'>
          <Button outline color='primary'>
            Primary
          </Button>
        </div>
        <div className='flex flex-col justify-center'>
          <Button outline color='secondary'>
            Secondary
          </Button>
        </div>
        <div className='flex flex-col justify-center'>
          <Button outline color='success'>
            Success
          </Button>
        </div>
        <div className='flex flex-col justify-center'>
          <Button outline color='warning'>
            Warning
          </Button>
        </div>
        <div className='flex flex-col justify-center'>
          <Button outline color='error'>
            Error
          </Button>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='button-outline-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='button-outline-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeOutline' code={demoCodeOutline} /> : viewPreview}</div>
    </div>
  )
}

export default Outline

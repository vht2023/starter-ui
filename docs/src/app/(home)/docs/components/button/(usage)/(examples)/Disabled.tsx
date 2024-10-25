import {Button} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeDisabled} from '@/constants/documents/components/button'
import {cn} from '@/libs/utils'

const Disabled = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-40 w-full flex-col flex-wrap gap-3 overflow-auto rounded-md border p-3 scrollbar-thin tablet_max:h-60'>
        <div className='flex-center w-full flex-wrap gap-3'>
          <Button disabled>Default</Button>
          <Button disabled color='primary'>
            Primary
          </Button>
          <Button disabled color='secondary'>
            Secondary
          </Button>
          <Button disabled color='success'>
            Success
          </Button>
          <Button disabled color='warning'>
            Warning
          </Button>
          <Button disabled color='error'>
            Error
          </Button>
        </div>
        <div className='flex-center w-full flex-wrap gap-3'>
          <Button outline disabled>
            Default
          </Button>
          <Button outline disabled color='primary'>
            Primary
          </Button>
          <Button outline disabled color='secondary'>
            Secondary
          </Button>
          <Button outline disabled color='success'>
            Success
          </Button>
          <Button outline disabled color='warning'>
            Warning
          </Button>
          <Button outline disabled color='error'>
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='button-disabled-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='button-disabled-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDisabled' code={demoCodeDisabled} /> : viewPreview}</div>
    </div>
  )
}

export default Disabled

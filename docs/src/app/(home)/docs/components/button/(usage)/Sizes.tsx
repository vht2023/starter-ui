import {Button} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeSizes} from '@/constants/documents/components/button'
import {cn} from '@/libs/utils'

const Sizes = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center max-h-96 min-h-60 w-full flex-wrap gap-3 overflow-auto rounded-md border p-3'>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='black'>
            Small
          </Button>
          <Button size='md' color='black'>
            Medium
          </Button>
          <Button size='lg' color='black'>
            Large
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='primary'>
            Small
          </Button>
          <Button size='md' color='primary'>
            Medium
          </Button>
          <Button size='lg' color='primary'>
            Large
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='secondary'>
            Small
          </Button>
          <Button size='md' color='secondary'>
            Medium
          </Button>
          <Button size='lg' color='secondary'>
            Large
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='success'>
            Small
          </Button>
          <Button size='md' color='success'>
            Medium
          </Button>
          <Button size='lg' color='success'>
            Large
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='warning'>
            Small
          </Button>
          <Button size='md' color='warning'>
            Medium
          </Button>
          <Button size='lg' color='warning'>
            Large
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button size='sm' color='error'>
            Small
          </Button>
          <Button size='md' color='error'>
            Medium
          </Button>
          <Button size='lg' color='error'>
            Large
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
          {!showCode ? <motion.div className='preview-code-underline' layoutId='button-sizes-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='button-sizes-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeSizes' code={demoCodeSizes} /> : viewPreview}</div>
    </div>
  )
}

export default Sizes

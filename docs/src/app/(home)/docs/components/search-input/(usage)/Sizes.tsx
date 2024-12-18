import {SearchInput} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeSizes} from '@/constants/documents/components/search-input'
import {cn} from '@/libs/utils'

const Sizes = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')
  const [value3, setValue3] = useState<string>('')

  const viewPreview = (
    <div className='flex h-80 w-full flex-col justify-center gap-3 overflow-auto rounded-md border px-10 py-3 tablet_max:px-3'>
      <div className='w-2/3 space-y-6 tablet_max:w-full'>
        <SearchInput id='sm-input' size='sm' value={value1} onChange={(value) => setValue1(value)} />
        <SearchInput id='md-input' size='md' value={value2} onChange={(value) => setValue2(value)} />
        <SearchInput id='lg-input' size='lg' value={value3} onChange={(value) => setValue3(value)} />
      </div>
    </div>
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='search-input-sizes-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='search-input-sizes-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeSizes' code={demoCodeSizes} /> : viewPreview}</div>
    </div>
  )
}

export default Sizes

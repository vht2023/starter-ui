import {SearchInput} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeOrthers} from '@/constants/documents/components/search-input'
import {cn} from '@/libs/utils'

const Orthers = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')

  const viewPreview = (
    <div className='flex h-96 w-full flex-col justify-center gap-3 overflow-auto rounded-md border px-10 py-3 tablet_max:px-3'>
      <div className='w-2/3 space-y-6 tablet_max:w-full'>
        <SearchInput id='disabled-input' disabled />
        <SearchInput id='loading-input' isLoading />
        <SearchInput id='bordered-input' variant='bordered' value={value1} onChange={(value) => setValue1(value)} />
        <SearchInput id='underlined-input' variant='underlined' value={value2} onChange={(value) => setValue2(value)} />
      </div>
    </div>
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='search-input-orthers-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='search-input-orthers-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeOrthers' code={demoCodeOrthers} /> : viewPreview}</div>
    </div>
  )
}

export default Orthers

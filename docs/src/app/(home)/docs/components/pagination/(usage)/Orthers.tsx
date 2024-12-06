import {Pagination} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeOrthers} from '@/constants/documents/components/pagination'
import {cn} from '@/libs/utils'

const Orthers = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const viewPreview = useMemo(
    () => (
      <div className='grid h-48 w-full grid-cols-1 overflow-auto rounded-md border p-3'>
        <Pagination outline current={currentPage} pageSize={10} total={100} onChange={(page) => setCurrentPage(page)} />
        <Pagination disabled current={1} pageSize={10} total={100} />
      </div>
    ),
    [currentPage]
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='pagination-orthers-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='pagination-orthers-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeDefault' code={demoCodeOrthers} /> : viewPreview}</div>
    </div>
  )
}

export default Orthers

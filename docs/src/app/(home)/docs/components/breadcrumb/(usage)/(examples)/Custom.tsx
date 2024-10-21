import {Breadcrumb} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {House} from 'lucide-react'
import {useMemo, useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeCustom} from '@/constants/documents/components/breadcrumb'
import {cn} from '@/libs/utils'

const breadcrumbs = [
  {
    title: (
      <div className='flex items-center gap-1'>
        <House size={16} />
        Home
      </div>
    ),
    url: '',
  },
  {
    title: 'Orther',
    url: '/orther',
    isDisabled: true,
  },
  {
    title: 'Documents',
    url: '/docs',
  },
  {
    title: 'Components',
    url: '/docs/components',
  },
]

const Custom = () => {
  const [showCode, setShowCode] = useState<boolean>(false)

  const viewPreview = useMemo(
    () => (
      <div className='flex-center h-40 w-full rounded-md border'>
        <Breadcrumb size='sm' data={breadcrumbs} underline='all' />
      </div>
    ),
    []
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='breadcrumb-custom-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='breadcrumb-custom-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeCustom' code={demoCodeCustom} /> : viewPreview}</div>
    </div>
  )
}

export default Custom

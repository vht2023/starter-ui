import {Input} from '@starter-ui/core'
import {motion} from 'framer-motion'
import {CheckCheck, UserRoundSearch} from 'lucide-react'
import {useState} from 'react'

import ViewCode from '@/components/common/ViewCode'
import {demoCodeOrthers} from '@/constants/documents/components/input'
import {cn} from '@/libs/utils'

const Orthers = () => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')

  const viewPreview = (
    <div className='flex h-96 w-full flex-col justify-center gap-3 overflow-auto rounded-md border px-10 py-3 tablet_max:px-3'>
      <div className='w-2/3 space-y-6 tablet_max:w-full'>
        <Input id='disabled-input' label='Disabled input' disabled />
        <Input id='loading-input' label='Loading input' isLoading />
        <Input id='required-input' label='Required and Error input' required helperText='Some error message!' value={value1} onChange={(e) => setValue1(e.target.value)} />
        <Input
          id='prefix-suffix-input'
          label='Prefix and Suffix'
          prefix={<UserRoundSearch size={16} />}
          suffix={<CheckCheck size={16} />}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  )

  return (
    <div className='w-full space-y-3'>
      <div className='flex w-full items-center gap-6 border-b'>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', !showCode && 'font-semibold'])} onClick={() => setShowCode(false)}>
          <div className='mb-1'>Preview</div>
          {!showCode ? <motion.div className='preview-code-underline' layoutId='input-orthers-preview-code-underline' /> : null}
        </div>
        <div className={cn(['flex-center relative h-full cursor-pointer px-3', showCode && 'font-semibold'])} onClick={() => setShowCode(true)}>
          <div className='mb-1'>Code</div>
          {showCode ? <motion.div className='preview-code-underline' layoutId='input-orthers-preview-code-underline' /> : null}
        </div>
      </div>
      <div className='w-full'>{showCode ? <ViewCode id='demoCodeOrthers' code={demoCodeOrthers} /> : viewPreview}</div>
    </div>
  )
}

export default Orthers

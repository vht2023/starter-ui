'use client'

import {ClipboardCheck, Copy} from 'lucide-react'
import {PrismTheme, themes} from 'prism-react-renderer'
import React, {useContext} from 'react'
import {CodeBlock} from 'react-code-block'

import ComponentDocumentsContext from '@/contexts/ComponentDocumentsContext'

interface Props {
  id: string
  code: string
  language?: string
  theme?: PrismTheme
}

const ViewCode: React.FC<Props> = ({id, code, language = 'tsx', theme = themes.palenight}) => {
  const {idCoppied, copyCode} = useContext(ComponentDocumentsContext)
  return (
    <CodeBlock code={code} language={language} theme={theme}>
      <div className='flex w-full gap-1 rounded-lg bg-black p-3 pr-1.5'>
        <CodeBlock.Code className='no-scrollbar h-full max-h-[500px] min-h-7 w-full overflow-auto tablet_max:text-sm'>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
        <div className='h-fit flex-1 cursor-pointer rounded-md p-1 hover:bg-[#52525b]' onClick={() => copyCode(code, id)}>
          {idCoppied === id ? <ClipboardCheck size={18} color='white' /> : <Copy size={18} color='white' />}
        </div>
      </div>
    </CodeBlock>
  )
}

export default ViewCode

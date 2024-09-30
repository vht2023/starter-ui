import Image from 'next/image'
import {themes} from 'prism-react-renderer'
import React, {useContext} from 'react'
import {CodeBlock} from 'react-code-block'

import ClipboardIcon from '@/assets/icons/clipboard.svg'
import ClipboardCheckedIcon from '@/assets/icons/clipboard-checked.svg'
import ComponentDocumentsContext from '@/contexts/ComponentDocumentsContext'

interface Props {
  id: string
  code: string
}

const ViewCode: React.FC<Props> = ({id, code}) => {
  const {idCoppied, copyCode} = useContext(ComponentDocumentsContext)
  return (
    <CodeBlock code={code} language='ts' theme={themes.synthwave84}>
      <div className='relative'>
        <CodeBlock.Code className='h-full max-h-[500px] w-full overflow-auto rounded-lg bg-black p-3'>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
        <div className='absolute right-3 top-2 cursor-pointer rounded-md p-1 hover:bg-[#52525b]' onClick={() => copyCode(code, id)}>
          {idCoppied === id ? (
            <Image alt='Clipboard Icon' src={ClipboardCheckedIcon} width={20} height={20} />
          ) : (
            <Image alt='Clipboard-Checked Icon' src={ClipboardIcon} width={20} height={20} />
          )}
        </div>
      </div>
    </CodeBlock>
  )
}

export default ViewCode

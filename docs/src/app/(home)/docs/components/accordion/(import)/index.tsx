'use client'

import Image from 'next/image'
import {themes} from 'prism-react-renderer'
import React, {useContext} from 'react'
import {CodeBlock} from 'react-code-block'

import ClipboardIcon from '@/assets/icons/clipboard.svg'
import ClipboardCheckedIcon from '@/assets/icons/clipboard-checked.svg'
import {importCode} from '@/constants/documents/components/accordion'
import ComponentDocumentsContext from '@/contexts/ComponentDocumentsContext'

const Import = () => {
  const {idCoppied, copyCode} = useContext(ComponentDocumentsContext)
  return (
    <div className='space-y-3'>
      <div>
        <div className='text-2xl font-bold'>Import</div>
        <div className='mt-1.5 w-full border-b' />
      </div>
      <CodeBlock code={importCode} language='ts' theme={themes.synthwave84}>
        <div className='relative'>
          <CodeBlock.Code className='rounded-lg bg-black p-3'>
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </CodeBlock.Code>
          <div className='absolute right-3 top-2 cursor-pointer rounded-md p-1 hover:bg-[#52525b]' onClick={() => copyCode(importCode, 'import')}>
            {idCoppied === 'import' ? (
              <Image alt='Clipboard Icon' src={ClipboardCheckedIcon} width={20} height={20} />
            ) : (
              <Image alt='Clipboard-Checked Icon' src={ClipboardIcon} width={20} height={20} />
            )}
          </div>
        </div>
      </CodeBlock>
    </div>
  )
}

export default Import

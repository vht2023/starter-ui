import React, {useEffect, useState} from 'react'
import {useCopyToClipboard} from 'react-use'

export interface ComponentDocumentsContextType {
  idCoppied?: string
  copyCode: (value: string, id: string) => void
}

const DEFAULT_CONTEXT_VALUE: ComponentDocumentsContextType = {
  idCoppied: undefined,
  copyCode: () => {},
}

const ComponentDocumentsContext = React.createContext<ComponentDocumentsContextType>(DEFAULT_CONTEXT_VALUE)

export const ComponentDocumentsContextProvider: React.FC<{children: any}> = ({children}) => {
  const [, copyToClipboard] = useCopyToClipboard()
  const [idCoppied, setIdCoppied] = useState<string>()

  const copyCode = (code: string, id: string) => {
    copyToClipboard(code)
    setIdCoppied(id)
  }

  const values: ComponentDocumentsContextType = React.useMemo(
    () => ({
      idCoppied,
      copyCode,
    }),
    [idCoppied, copyCode]
  )

  useEffect(() => {
    if (idCoppied) {
      const timeout = setTimeout(() => setIdCoppied(undefined), 2000)
      return () => clearTimeout(timeout)
    }
  }, [idCoppied])

  return <ComponentDocumentsContext.Provider value={values}>{children}</ComponentDocumentsContext.Provider>
}

export default ComponentDocumentsContext

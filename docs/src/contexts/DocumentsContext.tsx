import React, {useEffect, useState} from 'react'
import {useCopyToClipboard} from 'react-use'

export interface DocumentsContextType {
  currentHash: string
  idCoppied?: string
  copyCode: (value: string, id: string) => void
}

const DEFAULT_CONTEXT_VALUE: DocumentsContextType = {
  currentHash: '',
  idCoppied: undefined,
  copyCode: () => {},
}

const DocumentsContext = React.createContext<DocumentsContextType>(DEFAULT_CONTEXT_VALUE)

export const DocumentsContextProvider: React.FC<{children: any}> = ({children}) => {
  const [, copyToClipboard] = useCopyToClipboard()
  const [idCoppied, setIdCoppied] = useState<string>()

  const [currentHash, setCurrentHash] = useState<string>('')

  useEffect(() => {
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const copyCode = (code: string, id: string) => {
    copyToClipboard(code)
    setIdCoppied(id)
  }

  const values: DocumentsContextType = React.useMemo(
    () => ({
      currentHash,
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

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({behavior: 'smooth'})
        }
      }
    }

    scrollToHash()

    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [currentHash])

  return <DocumentsContext.Provider value={values}>{children}</DocumentsContext.Provider>
}

export default DocumentsContext

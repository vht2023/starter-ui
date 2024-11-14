import {useContext} from 'react'

import DocumentsContext, {DocumentsContextType} from '@/contexts/DocumentsContext'

const useDocumentsContext = () => {
  return useContext(DocumentsContext) as DocumentsContextType
}

export default useDocumentsContext

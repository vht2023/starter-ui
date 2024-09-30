'use client'

import {usePathname} from 'next/navigation'
import {useMemo} from 'react'

const useBreadcrumbs = () => {
  const pathname = usePathname()

  const breadcrumbs: string[] = useMemo(() => pathname.split('/').filter((item) => item.length > 0), [pathname])

  return breadcrumbs
}

export default useBreadcrumbs

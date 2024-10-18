import {Breadcrumb} from '@starter-ui/core'
import React, {useMemo} from 'react'

import {useBreadcrumbs} from '@/hooks'

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  const total = useMemo(() => breadcrumbs.length, [breadcrumbs])

  const getHref = (index: number) => {
    return '/' + breadcrumbs.slice(0, index).join('/')
  }

  const data = breadcrumbs.map((item, index) => ({
    title: item.charAt(0).toUpperCase() + item.slice(1),
    url: getHref(index + 1),
  }))

  if (total === 1) return null

  return (
    <div className='mb-4 pl-10'>
      <Breadcrumb data={data} size='sm' />
    </div>
  )
}

export default Breadcrumbs

import {Breadcrumb} from '@starter-ui/core'
import React, {useMemo} from 'react'

import {useBreadcrumbs} from '@/hooks'

const formatTitleBreadcrumb = (title: string) => {
  return title
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  const total = useMemo(() => breadcrumbs.length, [breadcrumbs])

  const getHref = (index: number) => {
    return '/' + breadcrumbs.slice(0, index).join('/')
  }

  const data = breadcrumbs.map((item, index) => ({
    title: formatTitleBreadcrumb(item),
    url: getHref(index + 1),
  }))

  if (total === 1) return null

  return (
    <div className='mb-4 pl-14 tablet_max:pl-8'>
      <Breadcrumb data={data} size='sm' />
    </div>
  )
}

export default Breadcrumbs

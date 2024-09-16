import Image from 'next/image'
import Link from 'next/link'
import React, {useMemo} from 'react'

import RightBreadcrumbIcon from '@/assets/icons/right-breadcrumb.svg'
import {useBreadcrumbs} from '@/hooks'
import {cn} from '@/libs/utils'

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  const total = useMemo(() => breadcrumbs.length, [breadcrumbs])

  const isLink = (index: number) => index < total && index > 1

  const getHref = (index: number) => {
    return '/' + breadcrumbs.slice(0, index).join('/')
  }

  if (total === 1) return undefined

  return (
    <div className='text-muted-foreground mb-4 flex items-center space-x-1 pl-10 text-sm leading-none'>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {isLink(index + 1) ? (
            <Link href={getHref(index + 1)} className='first-letter:uppercase'>
              {item}
            </Link>
          ) : (
            <span className={cn('first-letter:uppercase', index === breadcrumbs.length - 1 && 'font-medium text-foreground')}>{item}</span>
          )}

          {index < breadcrumbs.length - 1 && <Image alt='Breadcrumb Icon' src={RightBreadcrumbIcon} className='text-muted-foreground' width={16} height={16} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs

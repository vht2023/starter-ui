'use client'

import {DOCS_ROUTES} from 'enums/routes'
import {usePathname} from 'next/navigation'
import {useMemo} from 'react'

const useHeaderNavigation = () => {
  const pathname = usePathname()

  const paths = useMemo(
    () => [
      {
        name: 'Docs',
        href: '/docs',
        active: DOCS_ROUTES.includes(pathname),
      },
      {
        name: 'Components',
        href: '/docs/components',
        active: pathname.startsWith('/docs/components'),
      },
    ],
    [pathname]
  )

  return paths
}

const useSidebarNavigation = () => {
  const pathname = usePathname()

  const paths = useMemo(
    () => [
      {
        name: 'Getting Started',
        sub: [
          {
            name: 'Introduction',
            href: '/docs',
            active: pathname === '/docs',
          },
          {
            name: 'Installation',
            href: '/docs/installation',
            active: pathname === '/docs/installation',
          },
        ],
      },
      {
        name: 'Components',
        sub: [],
      },
    ],
    [pathname]
  )

  return paths
}

export {useHeaderNavigation, useSidebarNavigation}

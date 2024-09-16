'use client'

import {usePathname} from 'next/navigation'
import {useMemo} from 'react'

import {DOCS_ROUTES} from '@/constants/routes'
import {ENUM_ROUTES} from '@/enums/routes'

const useHeaderNavigation = () => {
  const pathname = usePathname()

  const docsRoutes = useMemo(() => DOCS_ROUTES.map((item) => item.toString()), [])

  const paths = useMemo(
    () => [
      {
        name: 'Docs',
        href: ENUM_ROUTES.DOCS,
        active: docsRoutes.includes(pathname),
      },
      {
        name: 'Components',
        href: ENUM_ROUTES.COMPONENTS,
        active: pathname.startsWith(ENUM_ROUTES.COMPONENTS),
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
            href: ENUM_ROUTES.DOCS,
            active: pathname === ENUM_ROUTES.DOCS,
          },
          {
            name: 'Installation',
            href: ENUM_ROUTES.DOCS_INSTALLATION,
            active: pathname === ENUM_ROUTES.DOCS_INSTALLATION,
          },
        ],
      },
      {
        name: 'Components',
        sub: [
          {
            name: 'Button',
            href: ENUM_ROUTES.COMPONENTS_BUTTON,
            active: pathname === ENUM_ROUTES.COMPONENTS_BUTTON,
          },
          {
            name: 'Input',
            href: ENUM_ROUTES.COMPONENTS_INPUT,
            active: pathname === ENUM_ROUTES.COMPONENTS_INPUT,
          },
        ],
      },
    ],
    [pathname]
  )

  return paths
}

export {useHeaderNavigation, useSidebarNavigation}

'use client'

import {usePathname} from 'next/navigation'
import {useMemo} from 'react'

import {DOCS_ROUTES} from '@/constants/routes'
import {ENUM_ROUTES} from '@/enums/routes'
import {IPath} from '@/types/common'

const useHeaderNavigation = () => {
  const pathname = usePathname()

  const docsRoutes = useMemo(() => DOCS_ROUTES.map((item) => item.toString()), [])

  const paths: IPath[] = useMemo(
    () => [
      {
        name: 'Docs',
        href: ENUM_ROUTES.DOCS,
        active: docsRoutes.includes(pathname),
        sub: [],
      },
      {
        name: 'Components',
        href: ENUM_ROUTES.COMPONENTS,
        active: pathname.startsWith(ENUM_ROUTES.COMPONENTS),
        sub: [],
      },
    ],
    [pathname]
  )

  return paths
}

const useSidebarNavigation = () => {
  const pathname = usePathname()

  const paths: IPath[] = useMemo(
    () => [
      {
        name: 'Getting Started',
        sub: [
          {
            name: 'Introduction',
            href: ENUM_ROUTES.DOCS,
            active: pathname === ENUM_ROUTES.DOCS,
            sub: [],
          },
          {
            name: 'Installation',
            href: ENUM_ROUTES.DOCS_INSTALLATION,
            active: pathname === ENUM_ROUTES.DOCS_INSTALLATION,
            sub: [],
          },
        ],
      },
      {
        name: 'Components',
        href: ENUM_ROUTES.COMPONENTS,
        sub: [
          {
            name: 'Badge',
            href: ENUM_ROUTES.COMPONENTS_BADGE,
            active: pathname === ENUM_ROUTES.COMPONENTS_BADGE,
            sub: [],
          },
          {
            name: 'Button',
            href: ENUM_ROUTES.COMPONENTS_BUTTON,
            active: pathname === ENUM_ROUTES.COMPONENTS_BUTTON,
            sub: [],
          },
          {
            name: 'Input',
            href: ENUM_ROUTES.COMPONENTS_INPUT,
            active: pathname === ENUM_ROUTES.COMPONENTS_INPUT,
            disabled: true,
            sub: [],
          },
        ],
      },
    ],
    [pathname]
  )

  return paths
}

export {useHeaderNavigation, useSidebarNavigation}

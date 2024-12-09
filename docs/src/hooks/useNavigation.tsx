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
        href: ENUM_ROUTES.COMPONENTS_ACCORDION,
        active: pathname.startsWith(ENUM_ROUTES.COMPONENTS),
        sub: [],
      },
      {
        name: 'Showcases',
        href: ENUM_ROUTES.SHOWCASES,
        active: pathname.startsWith(ENUM_ROUTES.SHOWCASES),
        sub: [],
      },
    ],
    [docsRoutes, pathname]
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
        sub: [
          {
            name: 'Accordion',
            href: ENUM_ROUTES.COMPONENTS_ACCORDION,
            active: pathname === ENUM_ROUTES.COMPONENTS_ACCORDION,
            sub: [],
          },
          {
            name: 'Alert',
            href: ENUM_ROUTES.COMPONENTS_ALERT,
            active: pathname === ENUM_ROUTES.COMPONENTS_ALERT,
            sub: [],
          },
          {
            name: 'Avatar',
            href: ENUM_ROUTES.COMPONENTS_AVATAR,
            active: pathname === ENUM_ROUTES.COMPONENTS_AVATAR,
            sub: [],
          },
          {
            name: 'Badge',
            href: ENUM_ROUTES.COMPONENTS_BADGE,
            active: pathname === ENUM_ROUTES.COMPONENTS_BADGE,
            sub: [],
          },
          {
            name: 'Breadcrumb',
            href: ENUM_ROUTES.COMPONENTS_BREADCRUMB,
            active: pathname === ENUM_ROUTES.COMPONENTS_BREADCRUMB,
            sub: [],
          },
          {
            name: 'Button',
            href: ENUM_ROUTES.COMPONENTS_BUTTON,
            active: pathname === ENUM_ROUTES.COMPONENTS_BUTTON,
            sub: [],
          },
          {
            name: 'Card',
            href: ENUM_ROUTES.COMPONENTS_CARD,
            active: pathname === ENUM_ROUTES.COMPONENTS_CARD,
            sub: [],
          },
          {
            name: 'Carousel',
            href: ENUM_ROUTES.COMPONENTS_CAROUSEL,
            active: pathname === ENUM_ROUTES.COMPONENTS_CAROUSEL,
            sub: [],
          },
          {
            name: 'Checkbox',
            href: ENUM_ROUTES.COMPONENTS_CHECKBOX,
            active: pathname === ENUM_ROUTES.COMPONENTS_CHECKBOX,
            sub: [],
          },
          {
            name: 'Divider',
            href: ENUM_ROUTES.COMPONENTS_DIVIDER,
            active: pathname === ENUM_ROUTES.COMPONENTS_DIVIDER,
            sub: [],
          },
          {
            name: 'Drawer',
            href: ENUM_ROUTES.COMPONENTS_DRAWER,
            active: pathname === ENUM_ROUTES.COMPONENTS_DRAWER,
            sub: [],
          },
          {
            name: 'Dropdown',
            href: ENUM_ROUTES.COMPONENTS_DROPDOWN,
            active: pathname === ENUM_ROUTES.COMPONENTS_DROPDOWN,
            sub: [],
          },
          {
            name: 'Input',
            href: ENUM_ROUTES.COMPONENTS_INPUT,
            active: pathname === ENUM_ROUTES.COMPONENTS_INPUT,
            sub: [],
          },
          {
            name: 'Modal',
            href: ENUM_ROUTES.COMPONENTS_MODAL,
            active: pathname === ENUM_ROUTES.COMPONENTS_MODAL,
            sub: [],
          },
          {
            name: 'Pagination',
            href: ENUM_ROUTES.COMPONENTS_PAGINATION,
            active: pathname === ENUM_ROUTES.COMPONENTS_PAGINATION,
            sub: [],
          },
          {
            name: 'Popover',
            href: ENUM_ROUTES.COMPONENTS_POPOVER,
            active: pathname === ENUM_ROUTES.COMPONENTS_POPOVER,
            sub: [],
          },
          {
            name: 'Progress',
            href: ENUM_ROUTES.COMPONENTS_PROGRESS,
            active: pathname === ENUM_ROUTES.COMPONENTS_PROGRESS,
            sub: [],
          },
          {
            name: 'Radio',
            href: ENUM_ROUTES.COMPONENTS_RADIO,
            active: pathname === ENUM_ROUTES.COMPONENTS_RADIO,
            sub: [],
          },
          {
            name: 'Search Input',
            href: ENUM_ROUTES.COMPONENTS_SEARCH_INPUT,
            active: pathname === ENUM_ROUTES.COMPONENTS_SEARCH_INPUT,
            sub: [],
          },
          {
            name: 'Select',
            href: ENUM_ROUTES.COMPONENTS_SELECT,
            active: pathname === ENUM_ROUTES.COMPONENTS_SELECT,
            sub: [],
          },
          {
            name: 'Skeleton',
            href: ENUM_ROUTES.COMPONENTS_SKELETON,
            active: pathname === ENUM_ROUTES.COMPONENTS_SKELETON,
            sub: [],
          },
          {
            name: 'Spinner',
            href: ENUM_ROUTES.COMPONENTS_SPINNER,
            active: pathname === ENUM_ROUTES.COMPONENTS_SPINNER,
            sub: [],
          },
          {
            name: 'Switch',
            href: ENUM_ROUTES.COMPONENTS_SWITCH,
            active: pathname === ENUM_ROUTES.COMPONENTS_SWITCH,
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

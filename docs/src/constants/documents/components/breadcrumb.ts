export const importCode = 'import { Breadcrumb } from "@starter-ui/core"'

export const demoCodeDefault = `
const breadcrumbs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Documents',
    url: '/docs',
  },
  {
    title: 'Components',
    url: '/docs/components',
  },
]

return <Breadcrumb data={breadcrumbs} />
`

export const demoCodeCustom = `
const breadcrumbs = [
  {
    title: (
      <div className='flex items-center gap-1'>
        <House size={16} />
        Home
      </div>
    ),
    url: '/',
  },
  {
    title: 'Orther',
    url: '/orther',
    isDisabled: true,
  },
  {
    title: 'Documents',
    url: '/docs',
  },
  {
    title: 'Components',
    url: '/docs/components',
  },
]

return <Breadcrumb size='sm' data={breadcrumbs} underline='all' />
`

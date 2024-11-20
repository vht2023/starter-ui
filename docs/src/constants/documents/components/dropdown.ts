export const importCode = 'import { Dropdown } from "@starter-ui/core"'

export const demoCodeDefault = `
<Dropdown renderButton={<Button size='sm'>Dropdown</Button>}>
  <Dropdown.Item>Item 1</Dropdown.Item>
  <Dropdown.Item>Item 2</Dropdown.Item>
  <Dropdown.Item>Item 3</Dropdown.Item>
</Dropdown>
`

export const demoCodePlacement = `
// align = 'start' | 'center' | 'end'
// position = 'bottom' | 'top'

<Dropdown
  align={align}
  position={position}
  renderButton={<Button size='sm'>Dropdown</Button>}
>
  <Dropdown.Item>Item 1</Dropdown.Item>
  <Dropdown.Item>Item 2</Dropdown.Item>
  <Dropdown.Item>Item 3</Dropdown.Item>
</Dropdown>
`

export const demoCodeTrigger = `
// trigger = 'click' | 'hover'

<Dropdown
  trigger={trigger}
  renderButton={<Button size='sm'>Dropdown</Button>}
>
  <Dropdown.Item>Item 1</Dropdown.Item>
  <Dropdown.Item>Item 2</Dropdown.Item>
  <Dropdown.Item>Item 3</Dropdown.Item>
</Dropdown>
`

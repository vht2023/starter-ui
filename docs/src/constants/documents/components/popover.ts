export const importCode = 'import { Popover } from "@starter-ui/core"'

export const demoCodeDefault = `
<Popover renderButton={<Button size='sm'>Popover</Button>}>
  This is Popover content!
</Popover>
`

export const demoCodePlacement = `
/* placement = 
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end'
*/


<Popover placement={placement} renderButton={<Button size='sm'>Popover</Button>}>
  This is Popover content!
</Popover>
`

export const demoCodeTrigger = `
// trigger = 'click' | 'hover'

<Popover
  trigger={trigger}
  renderButton={<Button size='sm'>Popover</Button>}
>
  This is Popover content!
</Popover>
`

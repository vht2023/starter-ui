export const importCode = 'import { Checkbox } from "@starter-ui/core"'

export const demoCodeDefault = `
<Checkbox id='checkbox-default' label='Default' />
`

export const demoCodeColor = `
<Checkbox id='checkbox-default-color' label='Default' />
<Checkbox id='checkbox-primary-color' color='primary' label='Primary' />
<Checkbox id='checkbox-secondary-color' color='secondary' label='Secondary' />
<Checkbox id='checkbox-success-color' color='success' label='Success' />
<Checkbox id='checkbox-warning-color' color='warning' label='Warning' />
<Checkbox id='checkbox-error-color' color='error' label='Error' />
`

export const demoCodeControlled = `
const [checked, setChecked] = useState<boolean>(false)

return (
  <Checkbox 
    id='checkbox-primary-controlled' 
    color='primary' 
    label='Controlled' 
    checked={checked} 
    onChange={setChecked}
  />

  <Checkbox 
    id='checkbox-primary-disabled' 
    color='primary' 
    label='Disabled' 
    disabled 
  />
)
`

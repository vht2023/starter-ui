export const importCode = 'import { Switch } from "@starter-ui/core"'

export const demoCodeDefault = `
const [checked, setChecked] = useState<boolean>(false)

return (
  <Switch 
    id='default-switch'
    label='Default Switch'
    checked={checked}
    onChange={(value) => setChecked(value)}
  />
)
`

export const demoCodeColor = `
// color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

const [checked, setChecked] = useState<boolean>(false)

return (
  <Switch 
    id='default-switch'
    label='Switch Colors'
    color='primary'
    checked={checked}
    onChange={(value) => setChecked(value)}
  />
)
`

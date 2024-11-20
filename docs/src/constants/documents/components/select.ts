export const importCode = 'import { Select } from "@starter-ui/core"'

export const demoCodeDefault = `
const [value, setValue] = useState<string>()
 
return (
  <Select
    id='starterui-default-select' 
    options={options}
    value={value}
    onChange={(selected) => setValue(selected)}
    label='Select one'
  />
)
`

export const demoCodeColors = `
// color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

const [value, setValue] = useState<string>()

return (
  <Select
    id='starterui-default-select' 
    options={options}
    value={value}
    onChange={(selected) => setValue(selected)}
    label='Select one'
    color={color}
  />
)
`

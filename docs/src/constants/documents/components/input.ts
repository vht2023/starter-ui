export const importCode = 'import { Input } from "@starter-ui/core"'

export const demoCodeDefault = `
const [value, setValue] = useState<string>('')

<Input label='Label' value={value} onChange={(e) => setValue(e.target.value)} />
`

export const demoCodeSizes = `
<Input id='small' label='Small input' size='sm' />
<Input id='default' label='Default input' size='md' />
<Input id='large' label='Large input' size='lg' />
`

export const demoCodeOrthers = `
<Input label='Disabled input' disabled />
<Input label='Loading input' isLoading />
<Input label='Required input' required helperText='Some error message!' />
<Input label='Prefix and Suffix' prefix={<UserRoundSearch size={16} />} suffix={<CheckCheck size={16} />} />
`

export const importCode = 'import { SearchInput } from "@starter-ui/core"'

export const demoCodeDefault = `
const [value, setValue] = useState<string>('')

return (
  <SearchInput value={value} onChange={setValue} />
)
`

export const demoCodeSizes = `
<SearchInput id='sm-input' size='sm' />
<SearchInput id='md-input' size='md' />
<SearchInput id='lg-input' size='lg' />
`

export const demoCodeOrthers = `
<SearchInput id='disabled-input' disabled />
<SearchInput id='loading-input' isLoading />
<SearchInput id='bordered-input' variant='bordered' />
<SearchInput id='underlined-input' variant='underlined' />
`

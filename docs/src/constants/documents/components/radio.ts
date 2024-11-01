export const importCode = 'import { Radio } from "@starter-ui/core"'

export const demoCodeDefault = `
const [selected, setSelected] = useState<string>()

<Radio
  selectedKey={selected} 
  onChange={(value) => setSelected(value)}
>
  <Radio.Item id='radio-1'>Radio 1</Radio.Item>
  <Radio.Item id='radio-2'>Radio 2</Radio.Item>
  <Radio.Item id='radio-3'>Radio 3</Radio.Item>
</Radio>
`

export const demoCodeColor = `
// color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

const [selected, setSelected] = useState<string>()

<Radio
  color='primary'
  selectedKey={selected}
  onChange={(value) => setSelected(value)}
>
  <Radio.Item id='radio-1'>Radio 1</Radio.Item>
  <Radio.Item id='radio-2'>Radio 2</Radio.Item>
  <Radio.Item id='radio-3'>Radio 3</Radio.Item>
</Radio>
`

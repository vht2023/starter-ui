export const importCode = 'import { Accordion } from "@starter-ui/core"'

export const demoCodeDefault = `
<Accordion>
  <Accordion.Item id='1'>
    <Accordion.Header>Accordion 1</Accordion.Header>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='2'>
    <Accordion.Header>Accordion 2</Accordion.Header>
    <Accordion.Content>Content 2</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='3'>
    <Accordion.Header>Accordion 3</Accordion.Header>
    <Accordion.Content>Content 3</Accordion.Content>
  </Accordion.Item>
</Accordion>
`

export const demoCodeMultiple = `
<Accordion mode='multiple'>
  <Accordion.Item id='1'>
    <Accordion.Header>Accordion 1</Accordion.Header>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='2'>
    <Accordion.Header>Accordion 2</Accordion.Header>
    <Accordion.Content>Content 2</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='3'>
    <Accordion.Header>Accordion 3</Accordion.Header>
    <Accordion.Content>Content 3</Accordion.Content>
  </Accordion.Item>
</Accordion>
`

export const demoCodeControlled = `
const [selectedKeys, setSelectedKeys] = useState<string[]>([])

<Accordion
  mode='multiple'
  disabledKeys={['3']}
  selectedKeys={selectedKeys}
  onChange={(keys) => setSelectedKeys(keys)}
>
  <Accordion.Item id='1'>
    <Accordion.Header>Accordion 1</Accordion.Header>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='2'>
    <Accordion.Header>Accordion 2</Accordion.Header>
    <Accordion.Content>Content 2</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id='3'>
    <Accordion.Header>Disabled Accordion 3</Accordion.Header>
    <Accordion.Content>Content 3</Accordion.Content>
  </Accordion.Item>
</Accordion>
`

export const importCode = 'import { Progress } from "@starter-ui/core"'

export const demoCodeDefault = `
<Progress id='default-progress' percent={50} />
`

export const demoCodeColors = `
<Progress id='primary-progress' percent={50} color='primary' />
<Progress id='secondary-progress' percent={50} color='secondary' />
<Progress id='success-progress' percent={50} color='success' />
<Progress id='warning-progress' percent={50} color='warning' />
<Progress id='error-progress' percent={50} color='error' />
`

export const demoCodeSizes = `
<Progress id='sm-progress' percent={50} color='primary' size='sm' />
<Progress id='md-progress' percent={50} color='primary' size='md' />
<Progress id='lg-progress' percent={50} color='primary' size='lg' />
`

export const demoCodeControlled = `
const [percent, setPercent] = useState<number>(0)

const handleDecreasePercent = () => {
  setPercent((prev) => {
    if (prev - 10 < 0) return 0
    else return prev - 10
  })
}

const handleIncreasePercent = () => {
  setPercent((prev) => {
    if (prev - 10 < 0) return 0
    else return prev - 10
  })
}

return (
  <div>
    <Progress 
      id='line-progress' 
      percent={percent} 
      color='primary' 
      type='line' 
      showStatus 
    />
    <Progress 
      id='circle-progress' 
      percent={percent} 
      color='primary' 
      type='circle' 
      insideLabel={percent} 
    />
    <Button onClick={handleDecreasePercent}>Decrease</Button>
    <Button onClick={handleIncreasePercent}>Increase</Button>
  </div>
)
`

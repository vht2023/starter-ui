export const importCode = 'import { Carousel } from "@starter-ui/core"'

export const demoCodeDefault = `
const data = [
  {
    id: '1',
    content: <img src='...' alt='...' />,
    className: '...'
  },
  {
    id: '2',
    content: <img src='...' alt='...' />,
    className: '...'
  },
  {
    id: '3',
    content: <img src='...' alt='...' />,
    className: '...'
  },
]

const [active, setActive] = useState<string>(data[0].id)

return (
  <Carousel
    active={active}
    data={data}
    onChange={(id) => {
      setActive(id)
    }}
  />
)
`

export const demoCodeCustom = `
<Carousel
  autoplay
  autoplaySpeed={2000}
  active={active}
  data={data}
  onChange={(id) => {
    setActive(id)
  }}
  showIndicators={false}
/>
`

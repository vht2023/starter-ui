export const importCode = 'import { Pagination } from "@starter-ui/core"'

export const demoCodeDefault = `
const [currentPage, setCurrentPage] = useState<number>(1)

return (
  <Pagination
    current={currentPage}
    pageSize={10}
    total={100}
    onChange={(page) => setCurrentPage(page)}
  />
)
`

export const demoCodeColors = `
// color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

const [currentPage, setCurrentPage] = useState<number>(1)

return (
  <Pagination
    color={color}
    current={currentPage}
    pageSize={10}
    total={100}
    onChange={(page) => setCurrentPage(page)}
  />
)
`

export const demoCodeSizes = `
// size = 'sm' | 'md' | 'lg'

const [currentPage, setCurrentPage] = useState<number>(1)

return (
  <Pagination
    size={size}
    current={currentPage}
    pageSize={10}
    total={100}
    onChange={(page) => setCurrentPage(page)}
  />
)
`

export const demoCodeOrthers = '<Pagination outline disabled current={1} pageSize={10} total={100} />'

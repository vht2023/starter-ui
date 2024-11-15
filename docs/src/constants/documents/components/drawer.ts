export const importCode = 'import { Drawer } from "@starter-ui/core"'

export const demoCodeDefault = `
const [showDrawer, setShowDrawer] = useState<boolean>(false)

return (
  <Drawer id='starterui-default-drawer' show={showDrawer} onHide={() => setShowDrawer(false)}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque veniam dicta labore veritatis temporibus voluptates cum, voluptatum quas reiciendis, praesentium,
    commodi architecto laborum nulla. Nobis ab quo laborum! Laborum, tempora!
  </Drawer>
)
`

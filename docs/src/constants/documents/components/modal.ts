export const importCode = 'import { Modal } from "@starter-ui/core"'

export const demoCodeDefault = `
const [showModal, setShowModal] = useState<boolean>(false)

return (
  <Modal
    id='starterui-default-modal'
    show={showModal}
    onHide={() => setShowModal(false)}
  >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Doloremque veniam dicta labore veritatis temporibus voluptates cum,
    voluptatum quas reiciendis, praesentium, commodi architecto laborum 
    nulla. Nobis ab quo laborum! Laborum, tempora!
  </Modal>
)
`

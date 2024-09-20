export const importCode = 'import { Badge } from "@starter-ui/components"'
export const usageCode = '<Badge>Badge</Badge>'

export const demoCodeDefault = `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`

export const demoCodeColors = `import { Badge } from "@/components/ui/badge"

export function BadgeColorsDemo() {
  return (
    <div className='flex-center h-40 w-full flex-wrap gap-3 rounded-md border'>
      <div className='flex flex-col justify-center'>
        <Badge>Defaut</Badge>
      </div>
      <div className='flex flex-col justify-center'>
        <Badge color='primary'>Primary</Badge>
      </div>
      <div className='flex flex-col justify-center'>
        <Badge className='secondary'>Secondary</Badge>
      </div>
      <div className='flex flex-col justify-center'>
        <Badge color='success'>Success</Badge>
      </div>
      <div className='flex flex-col justify-center'>
        <Badge color='warning'>Warning</Badge>
      </div>
      <div className='flex flex-col justify-center'>
        <Badge color='error'>Error</Badge>
      </div>  
    </div>
  )
}`

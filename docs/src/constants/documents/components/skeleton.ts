export const importCode = 'import { Skeleton } from "@starter-ui/core"'

export const demoCodeDefault = `
<div className='space-y-1.5'>
  <Skeleton />
  <Skeleton className='w-60' />
  <Skeleton className='w-80' />
  <Skeleton />
</div>
`

export const demoCodeCustom = `
<div className='space-y-1.5'>
  <div className='text-sm'>Card Skeleton</div>
  <div>
    <Card className='w-fit'>
      <Card.Header><Skeleton /></Card.Header>
      <Card.Body className='space-y-1.5'>
        <Skeleton className='w-60' />
        <Skeleton className='w-80' />
        <Skeleton className='w-80' />
      </Card.Body>
      <Card.Footer><Skeleton /></Card.Footer>
    </Card>
  </div>
</div>

<div className='space-y-1.5'>
  <div className='text-sm'>User Skeleton</div>
  <div className='flex items-center gap-3'>
    <Skeleton className='h-8 w-8' />
    <div className='space-y-1.5'>
      <Skeleton className='w-20' />
      <Skeleton className='w-32' />
    </div>
  </div>
</div>
`

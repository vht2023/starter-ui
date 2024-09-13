import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='relative font-[family-name:var(--font-geist-sans)]'>
      <Image src='https://nextjs.org/icons/next.svg' alt='Next.js logo' width={180} height={38} priority />
    </div>
  )
}

export default page

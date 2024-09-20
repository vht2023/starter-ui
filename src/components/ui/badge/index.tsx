import React, {CSSProperties} from 'react'
import {twMerge} from 'tailwind-merge'

import {cn} from '@/libs/utils'

interface Props {
  className?: string
  color?: string
  size?: string
  disabled?: boolean
  outline?: boolean
  style?: CSSProperties
  children: React.ReactNode
}

const badgeVariants = (color: string, outline: boolean) => {
  switch (color) {
    case 'default':
      return `text-default bg-[#F1F5F9] ${outline && 'border-default'}`
    case 'primary':
      return `text-white bg-primary ${outline && 'border-primary'}`
    case 'secondary':
      return `text-white bg-secondary ${outline && 'border-secondary'}`
    case 'success':
      return `text-default bg-success ${outline && 'border-success'}`
    case 'warning':
      return `text-default bg-warning ${outline && 'border-warning'}`
    case 'error':
      return `text-white bg-error ${outline && 'border-error'}`
    default:
      return ''
  }
}

const badgeSizes = (size: string, outline: boolean) => {
  switch (size) {
    case 'sm':
      return 'text-sm px-2 py-1 rounded-md'
    case 'md':
      return `text-md px-3 py-2 rounded-lg ${outline && 'border-[1.5px]'}`
    case 'lg':
      return `text-lg px-4 py-3 rounded-x ${outline && 'border-[2px]'}`
    default:
      return ''
  }
}

const Badge: React.FC<Props> = ({color = 'default', size = 'sm', className, style, disabled = false, outline = false, children}) => {
  return (
    <div
      className={twMerge(
        cn(['inline-flex items-center justify-start whitespace-nowrap']),
        badgeVariants(color, outline),
        badgeSizes(size, outline),
        outline && 'border',
        disabled && 'cursor-default',
        className
      )}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Badge

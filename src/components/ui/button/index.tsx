import React, {CSSProperties, ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

import {cn} from '@/libs/utils'
import {IButtonTypes, IColors, ISizes} from '@/types/common'

import Spinner from '../spinner'

interface Props {
  id?: string
  color?: IColors
  size?: ISizes
  type?: IButtonTypes
  disabled?: boolean
  outline?: boolean
  isIconOnly?: boolean // ONLY ICON
  isLoading?: boolean
  startIcon?: ReactNode | null
  endIcon?: ReactNode | null
  className?: string
  style?: CSSProperties
  children: React.ReactNode
  onClick?: () => void
}

const buttonColors = (color: IColors, shouldHover: boolean, outline: boolean) => {
  switch (color) {
    case 'default':
      return `[&>span]:text-default bg-grey focus:ring-grey/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`
    case 'primary':
      return `[&>span]:text-white bg-primary focus:ring-primary/70 ${shouldHover && 'hover:bg-primary-dark'} ${outline && 'outline-primary [&>span]:text-primary'}`
    case 'secondary':
      return `[&>span]:text-white bg-secondary focus:ring-secondary/70 ${shouldHover && 'hover:bg-secondary-dark'} ${outline && 'outline-secondary [&>span]:text-primary'}`
    case 'success':
      return `[&>span]:text-default bg-success focus:ring-success/70 ${shouldHover && 'hover:bg-success-dark'} ${outline && 'outline-success [&>span]:text-success'}`
    case 'warning':
      return `[&>span]:text-default bg-warning focus:ring-warning/70 ${shouldHover && 'hover:bg-warning-dark'} ${outline && 'outline-warning [&>span]:text-warning'}`
    case 'error':
      return `[&>span]:text-white bg-error focus:ring-error/70 ${shouldHover && 'hover:bg-error-dark'} ${outline && 'outline-error [&>span]:text-error'}`
    default:
      return `[&>span]:text-default bg-grey focus:ring-default/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`
  }
}

const buttonOutline = (color: IColors) => {
  switch (color) {
    case 'default':
      return 'outline-default hover:bg-white'
    case 'primary':
      return 'outline-primary text-primary'
    case 'secondary':
      return 'outline-secondary text-primary'
    case 'success':
      return 'outline-success text-success'
    case 'warning':
      return 'outline-warning text-warning'
    case 'error':
      return 'outline-error text-error'
    default:
      return 'outline-default'
  }
}

const buttonSizes = (size: ISizes) => {
  switch (size) {
    case 'sm':
      return 'text-sm px-3 py-2 rounded-md'
    case 'md':
      return 'text-md px-5 py-2.5 rounded-lg'
    case 'lg':
      return 'text-lg px-6 py-3 rounded-xl'
    default:
      return 'text-md px-5 py-2.5 rounded-lg'
  }
}

const Button: React.FC<Props> = ({
  id = 'buttonId',
  color = 'default',
  size = 'md',
  type = 'button',
  className,
  style,
  disabled = false,
  outline = false,
  isLoading = false,
  isIconOnly = false,
  startIcon = null,
  endIcon = null,
  children,
  onClick,
}) => {
  /* ======== ONLY ICON ======== */
  const renderOnlyIcon = () => (
    <React.Fragment>
      {isLoading ? (
        <span className='flex-center'>
          <Spinner />
        </span>
      ) : (
        children
      )}
    </React.Fragment>
  )

  /* ======== ICON + CHILDREN ======== */
  const renderChildren = () => (
    <span className='flex-center gap-2'>
      {isLoading ? (
        <React.Fragment>
          <Spinner />
          {children}
          {endIcon && endIcon}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </React.Fragment>
      )}
    </span>
  )

  return (
    <button
      id={id}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={twMerge(
        cn([
          'inline-flex items-center justify-start whitespace-nowrap text-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring',
          buttonColors(color, !disabled && !isLoading, outline),
          buttonSizes(size),
          outline && `bg-transparent outline outline-offset-0 ${buttonOutline(color)}`,
          disabled && 'cursor-not-allowed opacity-60',
          isLoading && 'cursor-wait',
        ]),
        className
      )}
      style={{
        ...style,
      }}
    >
      {isIconOnly ? renderOnlyIcon() : renderChildren()}
    </button>
  )
}

export default Button

import {motion} from 'framer-motion'
import React, {CSSProperties, ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

import {cn} from '@/libs/utils'
import {IButtonTypes, IColors, IRadius, ISizes} from '@/types/common'

import Spinner from '../spinner'

interface Props {
  id?: string
  color?: IColors
  size?: ISizes
  type?: IButtonTypes
  radius?: IRadius
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
      return `[&_div]:text-default bg-grey focus:ring-grey/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`
    case 'primary':
      return `[&_div]:text-white bg-primary focus:ring-primary/70 ${shouldHover && 'hover:bg-primary-dark'} ${outline && 'outline-primary [&_div]:text-primary'}`
    case 'secondary':
      return `[&_div]:text-white bg-secondary focus:ring-secondary/70 ${shouldHover && 'hover:bg-secondary-dark'} ${outline && 'outline-secondary [&_div]:text-primary'}`
    case 'success':
      return `[&_div]:text-default bg-success focus:ring-success/70 ${shouldHover && 'hover:bg-success-dark'} ${outline && 'outline-success [&_div]:text-success'}`
    case 'warning':
      return `[&_div]:text-default bg-warning focus:ring-warning/70 ${shouldHover && 'hover:bg-warning-dark'} ${outline && 'outline-warning [&_div]:text-warning'}`
    case 'error':
      return `[&_div]:text-white bg-error focus:ring-error/70 ${shouldHover && 'hover:bg-error-dark'} ${outline && 'outline-error [&_div]:text-error'}`
    default:
      return `[&_div]:text-default bg-grey focus:ring-default/70 ${shouldHover && 'hover:bg-grey-dark'} ${outline && 'outline-default'}`
  }
}

const buttonOutline = (color: IColors) => {
  switch (color) {
    case 'default':
      return 'outline-default [&_div]:text-default'
    case 'primary':
      return 'outline-primary [&_div]:text-primary'
    case 'secondary':
      return 'outline-secondary [&_div]:text-secondary'
    case 'success':
      return 'outline-success [&_div]:text-success'
    case 'warning':
      return 'outline-warning [&_div]:text-warning'
    case 'error':
      return 'outline-error [&_div]:text-error'
    default:
      return 'outline-default [&_div]:text-default'
  }
}

const buttonSizes = (size: ISizes) => {
  switch (size) {
    case 'sm':
      return 'text-sm px-4 py-2 rounded-md'
    case 'md':
      return 'text-md px-6 py-2.5 rounded-lg'
    case 'lg':
      return 'text-lg px-8 py-3 rounded-xl'
    default:
      return 'text-md px-6 py-2.5 rounded-lg'
  }
}

const buttonRadius = (radius: IRadius) => {
  switch (radius) {
    case 'sm':
      return 'rounded-md'
    case 'md':
      return 'rounded-lg'
    case 'lg':
      return 'rounded-xl'
    case 'full':
      return 'rounded-full'
    case 'none':
      return 'rounded-none'
    default:
      return ''
  }
}

const loadingColors = (color: IColors, outline: boolean) => {
  if (outline) {
    switch (color) {
      case 'default':
        return 'border-t-transparent border-black'
      case 'primary':
        return 'border-primary'
      case 'secondary':
        return 'border-secondary'
      case 'success':
        return 'border-success'
      case 'warning':
        return 'border-warning'
      case 'error':
        return 'border-error'
      default:
        return 'border-black'
    }
  } else return 'border-t-transparent border-white'
}

const Button: React.FC<Props> = ({
  id = 'buttonId',
  color = 'default',
  size = 'md',
  type = 'button',
  radius = 'md',
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
    <motion.div layout className={twMerge(cn(['flex-center w-full', isLoading && 'gap-2']))}>
      <motion.div
        animate={{opacity: 1}}
        transition={{
          opacity: {ease: 'backInOut'},
        }}
        className={twMerge(cn(['h-4 w-4 animate-spin rounded-full border-2 border-solid', loadingColors(color, outline), isLoading ? 'block border-t-transparent' : 'hidden']))}
      />

      <motion.div className='flex-center gap-2'>
        {!isLoading && startIcon && startIcon}
        <motion.div layout>{children}</motion.div>
        {endIcon && endIcon}
      </motion.div>
    </motion.div>
  )

  return (
    <motion.button
      id={id}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={twMerge(
        cn([
          'flex-center inline-flex min-w-20 whitespace-nowrap text-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring',
          buttonColors(color, !disabled && !isLoading && !outline, outline),
          buttonSizes(size),
          buttonRadius(radius),
          outline && `bg-transparent outline outline-offset-0 hover:opacity-70 ${buttonOutline(color)}`,
          disabled && 'cursor-not-allowed opacity-60',
          isLoading && 'cursor-wait opacity-70',
        ]),
        className
      )}
      style={{
        ...style,
      }}
      whileTap={{scale: 0.9}}
    >
      {isIconOnly ? renderOnlyIcon() : renderChildren()}
    </motion.button>
  )
}

export default Button

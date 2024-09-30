import {ENUM_ROUTES} from '@/enums/routes'

export type IColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
export type ISizes = 'sm' | 'md' | 'lg'
export type IButtonTypes = 'button' | 'submit' | 'reset'
export type IRadius = 'sm' | 'md' | 'lg' | 'none' | 'full'

export type IPath = {
  name: string
  href?: ENUM_ROUTES
  disabled?: boolean
  active?: boolean
  sub: IPath[]
}

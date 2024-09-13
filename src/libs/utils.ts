import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDataLocalStr = (name: string) => {
  return JSON.parse(localStorage.getItem(name) as string)
}

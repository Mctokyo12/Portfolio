import type { IconType } from 'react-icons'

export interface ButtonInterface{
    name: string,
    icon?: IconType,
    outline: boolean
    ismobile?: boolean
}

export interface CardInterface{
    title: string
    content: string
}

import { type UtilityPaletteNames, type BrandPaletteNames } from '@/enums/themeEnums'

export interface themeProps {
  name: string
  size: string
  colorRole: string
}

export interface BadgeInteractableProps {
  icon?: string
  label?: string
  pill?: string[4]
}

export interface BasicInteractableProps {
  leadingIcon?: string
  leadingSeparator?: Boolean
  trailingIcon?: string
  trailingSeparator?: Boolean
  label: string
}

export interface SingleInteractableProps {
  label: BasicInteractableProps
  theme?: themeProps
  type?: 'button' | 'chip'
}

export interface TabsInteractableProps {
  labels: Array<BadgeInteractableProps>
  theme?: themeProps
  type?: 'primary' | 'secondary'
  selectedTab?: number
}

export interface ToggableInteractableProps {
  label: BasicInteractableProps[]
  type?: string
  interactableType?: string
  hasUnsetLabel?: Boolean
  hasMultipleOption?: Boolean
}

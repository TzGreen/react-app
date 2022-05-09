// @flow

import type { ReactNode } from 'react'

export type Props = {
  auth: boolean,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'auto',
  type: 'button' | 'submit' | 'reset',
  height?: 'lg',
  shape?: 'outline' | 'social' | 'text',
  children?: ReactNode,
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  icon?: ReactNode,
}

// @flow

import type { ReactNode } from 'react'

export type Props = {
  title?: string,
  children: ReactNode,
  id?: string,
  active: boolean,
  closeBtn?: boolean,
  size: 'md' | 'lg' | 'auto',
  className?: string,
  onClose: () => void,
}

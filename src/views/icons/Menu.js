// @flow

import React from 'react'
import classNames from 'classnames'

export const Menu = ({ hovered = false, className }: Props) => {
  const iconClassName = classNames(className, 'icon', {
    icon_hovered: hovered,
  })

  return (
    <svg
      viewBox="0 0 24 24"
      height="20"
      width="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />{' '}
    </svg>
  )
}

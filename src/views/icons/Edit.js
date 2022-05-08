// @flow

import React from 'react'
import classNames from 'classnames'

export const Edit = ({
  intent = '',
  size = 'md',
  hovered = false,
  className,
}: Props) => {
  const iconClassName = classNames(className, 'icon', {
    icon_primary: intent === '',
    icon_white: intent === 'white',
    icon_hovered: hovered,
  })

  const iconSize = (size === 'sm' && '11') || '20'

  return (
    <svg
      viewBox="0 0 24 24"
      height={iconSize}
      width={iconSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

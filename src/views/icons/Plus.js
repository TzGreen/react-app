// @flow

import React from 'react'
import classNames from 'classnames'

export const Plus = ({ intent = '', hovered = false, className }: Props) => {
  const iconClassName = classNames(className, 'icon', {
    icon_white: intent === 'white',
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
      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  )
}

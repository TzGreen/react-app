// @flow

import React from 'react'
import classNames from 'classnames'
import { Props } from './types'

export const Close = ({ intent = '', hovered = false, className }: Props) => {
  const iconClassName = classNames(className, 'icon', {
    icon_primary: intent === '',
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
      <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
    </svg>
  )
}

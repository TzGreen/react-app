// @flow

import React from 'react'
import classNames from 'classnames'
import { Props } from './types'

const TextArea = ({
  value,
  defaultValue,
  id,
  placeholder = 'Type something...',
  label,
  labelClassName,
  required,
  disabled,
  height = 'xl',
  wrapClassName,
  className,
  error,
  registerProps,
}: Props) => {
  const wrapClass = classNames(wrapClassName, 'direction-column textarea-wrap')
  const textareaClass = classNames(className, 'textarea', {
    textarea_error: error,
    textarea_height_xl: height === 'xl',
  })
  const labelClass = classNames(
    labelClassName,
    'c1 text-medium textarea__label',
    {
      textarea__label_required: required,
      textarea__label_disabled: disabled,
    }
  )

  return (
    <label className={wrapClass}>
      {label && <span className={labelClass}>{label}</span>}
      <textarea
        {...registerProps}
        id={`textarea-${id}`}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        className={textareaClass}
      />
      {error && <span className="textarea__error-message c3">{error}</span>}
    </label>
  )
}

export default TextArea

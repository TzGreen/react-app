// @flow

import React from 'react'
import classNames from 'classnames'
import { Props } from './types'

const Input = ({
  value,
  defaultValue,
  id,
  placeholder = 'Type something...',
  label,
  labelClassName,
  required,
  disabled,
  wrapClassName,
  className,
  error,
  // onChange = () => {},
  registerProps,
}: Props) => {
  const wrapClass = classNames(wrapClassName, 'direction-column input-wrap')
  const inputClass = classNames(className, 'input', {
    input_error: error,
  })
  const labelClass = classNames(labelClassName, 'c1 text-medium input__label', {
    input__label_required: required,
    input__label_disabled: disabled,
  })

  return (
    <label className={wrapClass}>
      {label && <span className={labelClass}>{label}</span>}
      <input
        {...registerProps}
        type="text"
        id={`input-${id}`}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        // onChange={onChange}
        className={inputClass}
      />
      {error && <span className="input__error-message c3">{error}</span>}
    </label>
  )
}

export default Input

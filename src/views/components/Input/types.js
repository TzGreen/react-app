// @flow

import type { UseFormRegisterReturn } from 'react-hook-form'

export type Props = {
  value?: string,
  defaultValue?: string,
  id?: string,
  placeholder?: string,
  label?: string,
  labelClassName?: string,
  required?: boolean,
  disabled?: boolean,
  wrapClassName?: string,
  className?: string,
  error?: string,
  registerProps: UseFormRegisterReturn,
}

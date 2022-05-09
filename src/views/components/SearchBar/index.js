// @flow

import React, { useCallback } from 'react'
import classNames from 'classnames'
import { Search } from 'views/icons/Search'
import { Props } from './types'

const SearchBar = ({
  id,
  placeholder = 'Type something...',
  className,
  onChange = () => {},
}: Props) => {
  const changeHandler = useCallback(
    (event) => {
      onChange(event.target?.value)
    },
    [onChange]
  )
  const inputClass = classNames(className, 'search-bar')

  return (
    <label className="df aic search-bar__wrap">
      <Search className="search-bar__icon" />
      <input
        type="search"
        id={`search-bar-${id}`}
        placeholder={placeholder}
        onChange={changeHandler}
        className={inputClass}
      />
    </label>
  )
}

export default SearchBar

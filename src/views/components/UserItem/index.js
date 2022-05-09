// @flow

import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
// import { Menu } from 'views/icons/Menu'
import { Props } from './types'

const UserItem = ({ user }: Props) => {
  const history = useHistory()

  const handleRouteClick = useCallback(() => {
    history.push(`/users/${user.id}`)
  }, [history, user])

  return (
    <div className="jcsb aic c1 users-table__item" onClick={handleRouteClick}>
      <div className="users-table__name">{user.name}</div>
      <div className="users-table__email">{user.email}</div>
      <div className="users-table__company">{user.company.name}</div>
      <div className="users-table__options centered">
        {/* <Menu hovered /> */}
      </div>
    </div>
  )
}

export default UserItem

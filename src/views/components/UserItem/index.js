// @flow

import React from 'react'
import { Props } from './types'

const UserItem = ({ user }: Props) => {
  return (
    <div className="jcsb">
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.company?.name}</div>
    </div>
  )
}

export default UserItem

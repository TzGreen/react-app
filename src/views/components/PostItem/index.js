// @flow

import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Props } from './types'

const PostItem = ({ user }: Props) => {
  const history = useHistory()

  const handleRouteClick = useCallback(() => {
    history.push(`/users/${user.id}`)
  }, [history, user])

  return (
    <div
      className="jcsb aic c1 post-item direction-column"
      onClick={handleRouteClick}
    >
      <div className="post-item__title c1 text-medium text-center">
        {user.title}
      </div>
      <div className="post-item__body c2">{user.body}</div>
    </div>
  )
}

export default PostItem

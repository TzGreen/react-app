// @flow

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTrigger } from 'ducks/getUsers/actions'
import { getUsersStateSelector } from 'ducks/getUsers/selectors'
import UserItem from 'views/components/UserItem'

const Home = () => {
  const dispatch = useDispatch()
  const getUsersState = useSelector(getUsersStateSelector)

  useEffect(() => {
    dispatch(getUsersTrigger())
  }, [dispatch])

  if (getUsersState.loading) return <div>Loading...</div>
  if (getUsersState.error || !getUsersState.data) return <div>error</div>

  return (
    <section className="direction-column">
      <div className="jcsb">
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
      </div>
      <div>
        {getUsersState.data.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    </section>
  )
}

export default Home

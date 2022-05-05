// @flow

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTrigger } from 'ducks/getUsers/actions'
import { getUsersStateSelector } from 'ducks/getUsers/selectors'
import UserItem from 'views/components/UserItem'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'

const Home = () => {
  const dispatch = useDispatch()
  const getUsersState = useSelector(getUsersStateSelector)

  useEffect(() => {
    dispatch(getUsersTrigger())
  }, [dispatch])

  if (getUsersState.loading) return <SectionLoader />
  if (getUsersState.error || !getUsersState.data) return <NotFoundSection />

  return (
    <section className="direction-column users-table">
      <div className="jcsb aic users-table__header c1 text-medium">
        <div className="users-table__name">Name</div>
        <div className="users-table__email text-center">Email</div>
        <div className="users-table__company text-center">Company</div>
        <div className="users-table__options" />
      </div>
      <div>
        {getUsersState.data.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </section>
  )
}

export default Home

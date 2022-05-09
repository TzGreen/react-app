// @flow

import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTrigger } from 'ducks/getUsers/actions'
import { getUsersStateSelector } from 'ducks/getUsers/selectors'
import UserItem from 'views/components/UserItem'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'
import SearchBar from 'views/components/SearchBar'
import Button from 'views/components/Button'
import { Plus } from 'views/icons/Plus'
import AddUserModal from 'views/components/AddUserModal'
import { addUserStateSelector } from 'ducks/addUser/selectors'
import { addUserModalTrigger, addUserTrigger } from 'ducks/addUser/actions'

const Home = () => {
  const dispatch = useDispatch()
  const getUsersState = useSelector(getUsersStateSelector)
  const addUserState = useSelector(addUserStateSelector)
  const [filteredUsers, setFilteredUsers] = useState(null)

  const onSearch = useCallback(
    (value) => {
      const valueToSearch = value.toLowerCase()
      if (getUsersState.data) {
        const filteredData = getUsersState.data.filter(
          (user) =>
            user.name.toLowerCase().includes(valueToSearch) ||
            user.email.toLowerCase().includes(valueToSearch)
        )
        setFilteredUsers(filteredData)
      }
    },
    [getUsersState.data]
  )

  const openAddUserModalTrigger = useCallback(() => {
    dispatch(addUserModalTrigger())
  }, [dispatch])

  const closeAddUserModalTrigger = useCallback(() => {
    dispatch(addUserModalTrigger())
  }, [dispatch])

  const addUserSubmitHandler = useCallback(
    (data) => {
      dispatch(addUserTrigger(data))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(getUsersTrigger())
  }, [dispatch])

  if (getUsersState.loading) return <SectionLoader />
  if (getUsersState.error || !getUsersState.data) return <NotFoundSection />

  return (
    <>
      <AddUserModal
        active={addUserState.isModalOpen}
        onSubmit={addUserSubmitHandler}
        onClose={closeAddUserModalTrigger}
      />
      <div className="df">
        <SearchBar onChange={onSearch} placeholder="Search name or email..." />
        <Button
          icon={<Plus intent="white" />}
          size="md"
          className="home__add-user-btn"
          onClick={openAddUserModalTrigger}
        >
          Add user
        </Button>
      </div>
      <section className="direction-column users-table">
        <div className="jcsb aic users-table__header c1 text-medium">
          <div className="users-table__name">Name</div>
          <div className="users-table__email text-center">Email</div>
          <div className="users-table__company text-center">Company</div>
          <div className="users-table__options" />
        </div>
        <div>
          {(filteredUsers &&
            filteredUsers.map((user) => (
              <UserItem user={user} key={user.id} />
            ))) ||
            getUsersState.data.map((user) => (
              <UserItem user={user} key={user.id} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Home

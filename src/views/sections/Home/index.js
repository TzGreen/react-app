// @flow

import React, { useCallback, useEffect, useState } from 'react'
import UserItem from 'views/components/UserItem'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'
import SearchBar from 'views/components/SearchBar'
import Button from 'views/components/Button'
import { Plus } from 'views/icons/Plus'
import AddUserModal from 'views/components/AddUserModal'
import { apiURL } from 'config'

const Home = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [addUserModalOpen, setAddUserModalOpen] = useState(false)

  const onSearch = useCallback(
    (value) => {
      const valueToSearch = value.toLowerCase()
      if (users && users.length) {
        const filteredData = users.filter(
          (user) =>
            user.name.toLowerCase().includes(valueToSearch) ||
            user.email.toLowerCase().includes(valueToSearch)
        )
        setFilteredUsers(filteredData)
      }
    },
    [users]
  )

  const openAddUserModalTrigger = useCallback(() => {
    setAddUserModalOpen(true)
  }, [])

  const closeAddUserModalTrigger = useCallback(() => {
    setAddUserModalOpen(false)
  }, [])

  const addUserSubmitHandler = useCallback((data) => {
    setUsers((users) => [...users, data])
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(`${apiURL}/users`)
      .then((response) => response.json())
      .then((usersList) => {
        setUsers(usersList)
        setLoading(false)
      })
      .catch(() => setError(true))
  }, [])

  if (loading) return <SectionLoader />
  if (error || (users && !users.length)) return <NotFoundSection />

  return (
    <>
      <AddUserModal
        active={addUserModalOpen}
        usersList={users}
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
            filteredUsers.length &&
            filteredUsers.map((user) => (
              <UserItem user={user} key={user.id} />
            ))) ||
            (users &&
              users.length &&
              users.map((user) => <UserItem user={user} key={user.id} />))}
        </div>
      </section>
    </>
  )
}

export default Home

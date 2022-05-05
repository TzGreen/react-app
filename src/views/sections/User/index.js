// @flow

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTrigger } from 'ducks/getUsers/actions'
import { getUsersStateSelector } from 'ducks/getUsers/selectors'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'
import { getPostsStateSelector } from 'ducks/getPosts/selectors'
import { getPostsTrigger } from 'ducks/getPosts/actions'
import { useParams } from 'react-router-dom'
import PostItem from 'views/components/PostItem'

const User = () => {
  const dispatch = useDispatch()
  const getUsersState = useSelector(getUsersStateSelector)
  const getPostsState = useSelector(getPostsStateSelector)
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUsersTrigger())
    dispatch(getPostsTrigger(userId))
  }, [dispatch, userId])

  if (getUsersState.loading || getPostsState.loading) return <SectionLoader />
  if (
    getUsersState.error ||
    !getUsersState.data ||
    getPostsState.error ||
    !getPostsState.data
  )
    return <NotFoundSection />

  return (
    <section className="fww">
      {getPostsState.data.map((user) => (
        <PostItem user={user} key={user.id} />
      ))}
    </section>
  )
}

export default User

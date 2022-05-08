// @flow

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTrigger } from 'ducks/getUsers/actions'
import { getUsersStateSelector } from 'ducks/getUsers/selectors'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'
import { getPostsStateSelector } from 'ducks/getPosts/selectors'
import { getPostsTrigger } from 'ducks/getPosts/actions'
import { useParams } from 'react-router-dom'
import PostItem from 'views/components/PostItem'
import Button from 'views/components/Button'
import { Plus } from 'views/icons/Plus'
import { addPostModalTrigger, addPostTrigger } from 'ducks/addPost/actions'
import { addPostStateSelector } from 'ducks/addPost/selectors'
import AddPostModal from 'views/components/AddPostModal'

const User = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const getUsersState = useSelector(getUsersStateSelector)
  const getPostsState = useSelector(getPostsStateSelector)
  const addPostState = useSelector(addPostStateSelector)

  const openAddPostModalTrigger = useCallback(() => {
    dispatch(addPostModalTrigger(Number(userId)))
  }, [dispatch, userId])

  const closeAddPostModalTrigger = useCallback(() => {
    dispatch(addPostModalTrigger(null))
  }, [dispatch])

  const addPostSubmitHandler = useCallback(
    (data) => {
      dispatch(addPostTrigger(data))
    },
    [dispatch]
  )

  const isAddPostModalOpen =
    addPostState.isModalOpen && addPostState.userId === Number(userId)

  useEffect(() => {
    dispatch(getUsersTrigger())
    dispatch(getPostsTrigger(Number(userId)))
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
    <>
      <AddPostModal
        active={isAddPostModalOpen}
        userId={Number(userId)}
        onSubmit={addPostSubmitHandler}
        onClose={closeAddPostModalTrigger}
      />
      <section className="fww">
        <div className="c1 aic jcsb full-width bottom-16">
          <span className="text-medium">
            User&nbsp;
            {
              getUsersState.data.find((user) => user.id === Number(userId))
                ?.name
            }
          </span>
          <Button
            icon={<Plus intent="white" />}
            onClick={openAddPostModalTrigger}
          >
            Add new post
          </Button>
        </div>
        {getPostsState.data.map((post) => (
          <PostItem userId={Number(userId)} post={post} key={post.id} />
        ))}
      </section>
    </>
  )
}

export default User

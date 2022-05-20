// @flow

import React, { useCallback, useEffect, useState } from 'react'
import SectionLoader from 'views/sections/SectionLoader'
import NotFoundSection from 'views/sections/NotFoundSection'
import { useParams } from 'react-router-dom'
import PostItem from 'views/components/PostItem'
import Button from 'views/components/Button'
import { Plus } from 'views/icons/Plus'
import AddPostModal from 'views/components/AddPostModal'
import { EmptyData } from 'views/icons/EmptyData'
import { apiURL } from 'config'

const User = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [addPostModalOpen, setAddPostModalOpen] = useState(false)

  const openAddPostModalTrigger = useCallback(() => {
    setAddPostModalOpen(true)
  }, [])

  const closeAddPostModalTrigger = useCallback(() => {
    setAddPostModalOpen(false)
  }, [])

  const addPostSubmitHandler = useCallback((newPost) => {
    setPosts((posts) => [...posts, newPost])
  }, [])

  const editPostSubmitHandler = useCallback((updatedPost) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if (updatedPost.id === post.id) {
          return {
            ...post,
            ...updatedPost,
          }
        }
        return post
      })
    })
  }, [])

  const deletePostSubmitHandler = useCallback((postId) => {
    setPosts((posts) => {
      return posts.filter((post) => post.id !== postId)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(`${apiURL}/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user)
      })
      .catch(() => setError(true))
    fetch(`${apiURL}/posts/?userId=${userId}`)
      .then((response) => response.json())
      .then((postList) => {
        setPosts(postList)
        setLoading(false)
      })
      .catch(() => setError(true))
  }, [userId])

  if (loading) return <SectionLoader />
  if (error) return <NotFoundSection />

  const userName =
    (user && user.name && (user.name.split(' ')[0] || user.name)) || null

  const renderedEmptyData = (
    <div className="direction-column aic jcc full-width user__empty-data">
      <EmptyData />
      <span className="h4 user__empty-data_text">
        No posts added yet. Create your first post here.
      </span>
      <Button icon={<Plus intent="white" />} onClick={openAddPostModalTrigger}>
        Add new post
      </Button>
    </div>
  )

  return (
    <>
      <AddPostModal
        active={addPostModalOpen}
        userId={Number(userId)}
        onSubmit={addPostSubmitHandler}
        onClose={closeAddPostModalTrigger}
      />
      <section className="fww">
        <div className="h3 aic jcsb full-width bottom-16">
          <span className="text-medium">
            {userName && <>{userName}&apos;s&nbsp;</>}posts
          </span>
          <Button
            icon={<Plus intent="white" />}
            onClick={openAddPostModalTrigger}
          >
            Add new post
          </Button>
        </div>
        {(posts &&
          posts.length &&
          posts.map((post) => (
            <PostItem
              userId={Number(userId)}
              post={post}
              key={post.id}
              onPostEdit={editPostSubmitHandler}
              onPostDelete={deletePostSubmitHandler}
            />
          ))) ||
          renderedEmptyData}
      </section>
    </>
  )
}

export default User

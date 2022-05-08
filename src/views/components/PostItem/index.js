// @flow

import React, { useCallback } from 'react'
import { editPostStateSelector } from 'ducks/editPost/selectors'
import { editPostModalTrigger, editPostTrigger } from 'ducks/editPost/actions'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'views/components/Button'
import { Close } from 'views/icons/Close'
import { Edit } from 'views/icons/Edit'
import {
  deletePostModalTrigger,
  deletePostTrigger,
} from 'ducks/deletePost/actions'
import { deletePostStateSelector } from 'ducks/deletePost/selectors'
import { Props } from './types'
import EditPostModal from '../EditPostModal'
import DeletePostModal from '../DeletePostModal'

const PostItem = ({ userId, post }: Props) => {
  const dispatch = useDispatch()
  const editPostState = useSelector(editPostStateSelector)
  const deletePostState = useSelector(deletePostStateSelector)

  const openEditPostModalTrigger = useCallback(() => {
    dispatch(editPostModalTrigger({ userId, postId: post.id }))
  }, [dispatch, userId, post])

  const closeEditPostModalTrigger = useCallback(() => {
    dispatch(editPostModalTrigger({ userId: null, postId: null }))
  }, [dispatch])

  const editPostSubmitHandler = useCallback(
    (data) => {
      dispatch(editPostTrigger(data))
    },
    [dispatch]
  )

  const openDeletePostModalTrigger = useCallback(() => {
    dispatch(deletePostModalTrigger({ userId, postId: post.id }))
  }, [dispatch, userId, post])

  const closeDeletePostModalTrigger = useCallback(() => {
    dispatch(deletePostModalTrigger({ userId: null, postId: null }))
  }, [dispatch])

  const deletePostSubmitHandler = useCallback(
    (data) => {
      dispatch(deletePostTrigger(data))
    },
    [dispatch]
  )

  const isEditPostModalOpen =
    editPostState.isModalOpen &&
    editPostState.userId === userId &&
    editPostState.postId === post.id

  const isDeletePostModalOpen =
    deletePostState.isModalOpen &&
    deletePostState.userId === userId &&
    deletePostState.postId === post.id

  return (
    <>
      <EditPostModal
        active={isEditPostModalOpen}
        post={post}
        userId={userId}
        onClose={closeEditPostModalTrigger}
        onSubmit={editPostSubmitHandler}
      />
      <DeletePostModal
        active={isDeletePostModalOpen}
        post={post}
        userId={userId}
        onClose={closeDeletePostModalTrigger}
        onSubmit={deletePostSubmitHandler}
      />
      <div className="jcsb aic c1 post-item direction-column">
        <div className="direction-column post-item__title c1 text-medium text-center">
          <div className="aic jcfe full-width">
            <Button
              icon={<Edit size="sm" intent="white" />}
              className="aic jcc post-item__btn"
              onClick={openEditPostModalTrigger}
            />
            <Button
              icon={<Close intent="white" />}
              className="aic jcc post-item__btn"
              onClick={openDeletePostModalTrigger}
            />
          </div>
          {post.title}
        </div>
        <div className="post-item__body c2">{post.body}</div>
      </div>
    </>
  )
}

export default PostItem

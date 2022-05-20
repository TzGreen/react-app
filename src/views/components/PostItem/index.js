// @flow

import React, { useCallback, useState } from 'react'
import Button from 'views/components/Button'
import { Close } from 'views/icons/Close'
import { Edit } from 'views/icons/Edit'
import EditPostModal from 'views/components/EditPostModal'
import DeletePostModal from 'views/components/DeletePostModal'
import { Props } from './types'

const PostItem = ({
  userId,
  post,
  onPostEdit = () => {},
  onPostDelete = () => {},
}: Props) => {
  const [editPostModalOpen, setEditPostModalOpen] = useState(false)
  const [deletePostModalOpen, setDeletePostModalOpen] = useState(false)

  const openEditPostModalTrigger = useCallback(() => {
    setEditPostModalOpen(true)
  }, [])

  const closeEditPostModalTrigger = useCallback(() => {
    setEditPostModalOpen(false)
  }, [])

  const openDeletePostModalTrigger = useCallback(() => {
    setDeletePostModalOpen(true)
  }, [])

  const closeDeletePostModalTrigger = useCallback(() => {
    setDeletePostModalOpen(false)
  }, [])

  return (
    <>
      <EditPostModal
        active={editPostModalOpen}
        post={post}
        userId={userId}
        onClose={closeEditPostModalTrigger}
        onSubmit={onPostEdit}
      />
      <DeletePostModal
        active={deletePostModalOpen}
        post={post}
        userId={userId}
        onClose={closeDeletePostModalTrigger}
        onSubmit={onPostDelete}
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

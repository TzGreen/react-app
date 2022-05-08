// @flow

import React, { useCallback } from 'react'
import classNames from 'classnames'
import Modal from 'views/components/Modal'
import { useSelector } from 'react-redux'
import { deletePostStateSelector } from 'ducks/deletePost/selectors'
import { Props } from './types'
import Button from '../Button'

const DeletePostModal = ({
  active,
  post,
  userId,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const deletePostState = useSelector(deletePostStateSelector)

  const submitHandler = useCallback(() => {
    const data = {
      ...post,
      userId,
    }
    onSubmit(data)
  }, [onSubmit, userId, post])

  const editPosrClassName = classNames(className, 'post-modal')
  return (
    <Modal active={active} onClose={onClose} className={editPosrClassName}>
      <div className="h3 text-medium text-center bottom-16">
        Are you sure you want to delete post&nbsp;
        <sapn className="h4">&quot;{post.title}&quot;</sapn>
        &nbsp;?
      </div>
      <span className="c1 text-center bottom-30">
        After deleting this post, the post recoreds will not be available.
      </span>
      <div className="aic jcfe">
        <Button shape="outline" size="xs" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={submitHandler}
          disabled={deletePostState.loading}
          className="post-modal__submit-btn"
        >
          Delete post
        </Button>
      </div>
    </Modal>
  )
}

export default DeletePostModal

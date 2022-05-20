// @flow

import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { apiURL } from 'config'
import Modal from 'views/components/Modal'
import Button from 'views/components/Button'
import { Props } from './types'

const DeletePostModal = ({
  active,
  post,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const [loading, setLoading] = useState(false)

  const submitHandler = useCallback(() => {
    setLoading(true)
    fetch(`${apiURL}/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      setLoading(false)
      onClose()
      onSubmit(post.id)
    })
  }, [onSubmit, onClose, post.id])

  const editPosrClassName = classNames(className, 'post-modal')
  return (
    <Modal active={active} onClose={onClose} className={editPosrClassName}>
      <div className="h3 text-medium text-center bottom-16">
        Are you sure you want to delete post&nbsp;
        <span className="h4">&quot;{post.title}&quot;</span>
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
          disabled={loading}
          className="post-modal__submit-btn"
        >
          Delete post
        </Button>
      </div>
    </Modal>
  )
}

export default DeletePostModal

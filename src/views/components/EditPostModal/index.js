// @flow

import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { apiURL } from 'config'
import Input from 'views/components/Input'
import Modal from 'views/components/Modal'
import TextArea from 'views/components/TextArea'
import Button from 'views/components/Button'
import { Props } from './types'

const EditPostModal = ({
  active,
  post,
  userId,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    shouldUnregister: true,
  })

  const submitHandler = useCallback(
    (formData) => {
      setLoading(true)
      fetch(`${apiURL}/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          title: formData.title || post.title,
          body: formData.body || post.body,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((post) => {
          onSubmit({
            ...formData,
            ...post,
          })
          setLoading(false)
          onClose()
        })
    },
    [onSubmit, onClose, post, userId]
  )

  const isSubmitButtonDisabled =
    !formState.isValid ||
    (formState.dirtyFields && !Object.keys(formState.dirtyFields).length) ||
    loading

  const editPosrClassName = classNames(className, 'post-modal')
  return (
    <Modal
      active={active}
      title="Edit post"
      onClose={onClose}
      className={editPosrClassName}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          registerProps={register('title', {
            required: 'Post title is required',
          })}
          placeholder="Post title"
          id="title"
          defaultValue={post.title}
          label="Title"
          required
          error={formState.errors?.title?.message}
        />
        <TextArea
          placeholder="Post content"
          registerProps={register('body', {
            required: 'Post content is required',
          })}
          id="body"
          defaultValue={post.body}
          label="Content"
          height="xl"
          required
          error={formState.errors?.body?.message}
        />
        <div className="aic jcfe">
          <Button shape="outline" size="xs" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="post-modal__submit-btn"
          >
            Save changes
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default EditPostModal

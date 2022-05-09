// @flow

import React, { useCallback } from 'react'
import classNames from 'classnames'

import Input from 'views/components/Input'
import Modal from 'views/components/Modal'
import { useSelector } from 'react-redux'
import { editPostStateSelector } from 'ducks/editPost/selectors'
import { useForm } from 'react-hook-form'
import { Props } from './types'
import TextArea from '../TextArea'
import Button from '../Button'

const EditPostModal = ({
  active,
  post,
  userId,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const editPostState = useSelector(editPostStateSelector)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const submitHandler = useCallback(
    (formData) => {
      const data = {
        ...post,
        ...formData,
        userId,
      }
      onSubmit(data)
    },
    [onSubmit, userId, post]
  )

  const isSubmitButtonDisabled =
    !formState.isValid || !formState.isDirty || editPostState.loading

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

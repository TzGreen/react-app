// @flow

import React, { useCallback } from 'react'
import classNames from 'classnames'

import Input from 'views/components/Input'
import Modal from 'views/components/Modal'
import { useSelector } from 'react-redux'
import { addPostStateSelector } from 'ducks/addPost/selectors'
import { useForm } from 'react-hook-form'
import { Props } from './types'
import TextArea from '../TextArea'
import Button from '../Button'

const AddPostModal = ({
  active,
  userId,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const addPostState = useSelector(addPostStateSelector)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const submitHandler = useCallback(
    (formData) => {
      const data = {
        ...formData,
        userId,
      }
      onSubmit(data)
    },
    [onSubmit, userId]
  )

  const isSubmitButtonDisabled =
    !formState.isValid || !formState.isDirty || addPostState.loading

  const addPosrClassName = classNames(className, 'post-modal')
  return (
    <Modal
      active={active}
      title="Add post"
      onClose={onClose}
      className={addPosrClassName}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          registerProps={register('title', {
            required: 'Post title is required',
          })}
          placeholder="Post title"
          id="title"
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
            Add post
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddPostModal

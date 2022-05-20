// @flow

import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { apiURL } from 'config'
import Input from 'views/components/Input'
import Modal from 'views/components/Modal'
import Button from 'views/components/Button'
import { Props } from './types'

const AddUserModal = ({
  active,
  usersList,
  className,
  onSubmit = () => {},
  onClose = () => {},
}: Props) => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })

  const submitHandler = useCallback(
    (formData) => {
      setLoading(true)
      fetch(`${apiURL}/users`, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: {
            name: formData.company,
          },
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((user) => {
          onSubmit({
            ...formData,
            ...user,
            company: {
              name: formData.company,
            },
          })
          setLoading(false)
          onClose()
        })
    },
    [onSubmit, onClose]
  )

  const isSubmitButtonDisabled =
    (!formState.isValid && formState.isSubmitted) || loading

  const validateUserName = (name) => {
    if (
      usersList &&
      usersList.length &&
      usersList.some((user) => user.name === name)
    ) {
      return 'User name must be unique'
    }
    return undefined
  }

  const addPosrClassName = classNames(className, 'user-modal')
  return (
    <Modal
      active={active}
      title="Add user"
      onClose={onClose}
      className={addPosrClassName}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          registerProps={register('name', {
            required: 'User name is required',
            validate: validateUserName,
            minLength: {
              value: 2,
              message: 'User name must be a least 2 characters',
            },
          })}
          placeholder="User name"
          id="name"
          label="Name"
          required
          error={formState.errors?.name?.message}
        />
        <Input
          registerProps={register('email', {
            required: 'User email address is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: 'Provide a valid email address',
            },
          })}
          placeholder="example@company.domain"
          id="email"
          label="Email Address"
          required
          error={formState.errors?.email?.message}
        />
        <Input
          registerProps={register('company', {
            required: 'User company is required',
            minLength: {
              value: 2,
              message: 'Company must be a least 2 characters',
            },
          })}
          placeholder="User company"
          id="company"
          label="Company"
          required
          error={formState.errors?.company?.message}
        />
        <div className="aic jcfe">
          <Button shape="outline" size="xs" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="user-modal__submit-btn"
          >
            Add user
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddUserModal

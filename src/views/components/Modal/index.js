// @flow

import React from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { Close } from 'views/icons/Close'
import { Props } from './types'

const Modal = ({
  title,
  children,
  id,
  active = false,
  closeBtn = true,
  size = 'md',
  className,
  onClose = () => {},
}: Props) => {
  const modalClassName = classNames(
    className,
    'direction-column modal__container',
    `modal__container_${size}`
  )

  const content = active && (
    <div className="aic jcc modal" id={id}>
      <div className={modalClassName}>
        <div className="aic jcsb">
          {title && <div className="h2 text-medium modal__title">{title}</div>}
          {closeBtn && (
            <div className="modal__close-btn" onClick={onClose}>
              <Close hovered />
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  )

  if (typeof window !== 'undefined' && document.body) {
    return createPortal(content, document.body)
  }
}

export default Modal

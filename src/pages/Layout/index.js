// @flow

import React from 'react'
import Sidebar from 'views/components/Sidebar'
import type { Props } from './types'

const Layout = ({ children }: Props) => {
  return (
    <div className="df main">
      <Sidebar />
      <div className="main__container">{children}</div>
    </div>
  )
}

export default Layout

// @flow

import Routes from 'app/Route'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Logo } from 'views/icons/Logo'
import { User } from 'views/icons/User'

const Sidebar = () => {
  const history = useHistory()

  const handleRouteClick = () => {
    history.push(Routes.HOME)
  }

  return (
    <div className="direction-column aic direction-column sidebar">
      <Logo />
      <div className="df aic sidebar__link" onClick={handleRouteClick}>
        <User className="sidebar__link_icon" />
        <span className="h4 text-on-dark sidebar__link_text"> Users</span>
      </div>
    </div>
  )
}

export default Sidebar

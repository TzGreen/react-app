// @flow

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import User from 'pages/User'
import Routes from './Route'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} component={Home} exact />
        <Route path={Routes.USER} component={User} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Root

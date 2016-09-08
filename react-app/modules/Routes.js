import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'

import Login from './common/Login'
import Auth from './common/Auth'
import Index from './home/Index'
import My from './account/My'
import Org from './account/Org'

function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/index" component={Index}/>
    <Route path="/org" component={Org} onEnter={requireAuth}/>
    <Route path="/my" component={My} onEnter={requireAuth}/>
    <Route path="/search" component={Index}/>
    <Route path="/login" component={Login}/>
  </Route>
)
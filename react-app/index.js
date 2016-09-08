import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, useRouterHistory } from 'react-router'

import { createHashHistory } from 'react-router/node_modules/history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Routes from './modules/Routes'

render(
  <Router routes={Routes} history={hashHistory}/>,
  document.getElementById('lecaiApp')
)
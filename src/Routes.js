import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Login, Home } from './components'
import { Product } from './components/Home/pages'

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/product' component={Product} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default Routes

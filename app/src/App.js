import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from  'react-router-dom'

import AccountPage from './components/AccountPage'
import Login   from './components/Login'
import {URL}   from './data'

import './App.css'
import Subscription from './components/Subscription'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact
              path='/'
              component={ Login }/>
          <Route exact
              path={ URL.subscriber }
              component={ AccountPage }/>
          <Route
              path={ `${URL.subscription}/:id` }
              component={ Subscription }/>
        </Switch>
      </div>
    )
  }

}

export default hot(module)(App)
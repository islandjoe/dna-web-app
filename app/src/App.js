import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from  'react-router-dom'

import Account from './components/Account'
import Login   from './components/Login'
import {URL}   from './data'

import './App.css'
import Subscription from './components/Subscription'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>TODO: User auth using data from  `data.js`</h1>
        <Switch>
          <Route exact
              path='/'
              component={ Login }/>
          <Route exact
              path={ URL.subscriber }
              component={ Account }/>
          <Route
              path={ `${URL.subscription}/:id` }
              component={ Subscription }/>
        </Switch>
      </div>
    )
  }

}

export default hot(module)(App)
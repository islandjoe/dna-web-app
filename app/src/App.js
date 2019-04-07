import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from  'react-router-dom'

import Account from './components/Account'
import Login   from './components/Login'

import './App.css'
import Subscription from './components/Subscription'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Login }/>
          <Route exact path='/your-account' component={ Account }/>
          <Route path='/subscription/:id' component={ Subscription }/>
        </Switch>
      </div>
    )
  }

}

export default hot(module)(App)
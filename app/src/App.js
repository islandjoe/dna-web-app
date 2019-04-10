import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from  'react-router-dom'

import AccountPage from './components/AccountPage'
import Login   from './components/Login'
import {URL}   from './data'

import './App.css'
import Subscription from './components/Subscription'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid: ''
    }

    this.userId = this.userId.bind(this)
  }

  userId(id) {
    this.setState({ userid: id })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact
              path='/'
              render={(props)=>
                <Login { ...props } userId={ this.userId } />
              }
          />
          <Route exact
              path={ URL.subscriber }
              render={(props)=>
                <AccountPage {...props}
                  userid={ this.state.userid }/>
              }
          />
          <Route
              path={ `${URL.subscription}/:id` }
              component={ Subscription }/>
        </Switch>
      </div>
    )
  }

}

export default hot(module)(App)
import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from  'react-router-dom'

import AccountPage from './components/AccountPage'
import Login   from './components/Login'
import {URL}   from './data'

import Subscription from './components/Subscription'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid: ''
    }

    this.setUserId = this.setUserId.bind(this)
  }

  setUserId(id) {
    this.setState({ userid: id })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact
              path='/'
              render={(props)=>
                <Login { ...props } userId={ this.setUserId } />
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
              render={(props)=>
                  <Subscription { ...props }
                      userid={ this.state.userid } /> }
          />
        </Switch>
      </div>
    )
  }

}

export default hot(module)(App)
import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import Login from './components/Login.js'
import Subscriber from './components/Subscriber.js'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Subscriber/>
      </div>
    )
  }

}

export default hot(module)(App)
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from  'react-router-dom'
import App from './App.js'

import 'semantic-ui-css/semantic.min.css'

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render( app, document.getElementById( 'root' ) )
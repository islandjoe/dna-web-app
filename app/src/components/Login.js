import React, {Component}  from 'react'
import authenticate from '../Auth'
import {URL}  from '../data'
import {Form, Button} from 'semantic-ui-react'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = { userid:'', password:'' }

    this.handleSubmit   = this.handleSubmit.bind(this)
    this.handleUserId   = this.handleUserId.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const {userid, password} = this.state

    const {userId: getUserId, history} = this.props

    if (authenticate( userid, password )) {
      getUserId( userid )
      history.push( URL.subscriber )
    }
  }

  handleUserId(event) { console.log( event )
    const _fromInput = event.target

    this.setState({ userid: _fromInput.value })
  }

  handlePassword(event) {
    const _fromInput = event.target

    this.setState({ password: _fromInput.value })
  }

  render() {
    return (
      <Form className='Login' onSubmit={ this.handleSubmit }>
        <Form.Field className='UserIdField'>
          <label>User ID:</label>
          <input placeholder='email' value={ this.state.userid }
              onChange={ this.handleUserId }/>
          </Form.Field>

          <Form.Field className='PasswordField'>
            <label>Password:</label>
            <input type='password' onChange={ this.handlePassword }/>
          </Form.Field>

        <Button type='submit' className='LoginButton'>Log In</Button>
      </Form>
    )
  }

}

export default Login
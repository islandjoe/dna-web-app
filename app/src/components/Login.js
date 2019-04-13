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

  handleUserId(event) {
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
        <UserIdField
            value={ this.state.userid }
              onChange={ this.handleUserId }/>
        <PasswordField onChange={ this.handlePassword }/>

        <Button type='submit' className='LoginButton'>Log In</Button>
      </Form>
    )
  }

}

const USER_ID = 'userid', PASSWORD = 'password'

export const UserIdField =(props)=> (
  <Form.Field>
  <label htmlFor={ USER_ID }>User ID:</label>
  <input placeholder='email'/>
  </Form.Field>
)


export const PasswordField =(props)=> (
  <Form.Field>
  <label htmlFor={ PASSWORD }>Password:</label>
  <input type='password'/>
  </Form.Field>
)

export default Login
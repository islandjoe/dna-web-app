import React, {Component}  from 'react'
import authenticate from '../Auth'
import {URL}  from '../data'
import {Form, Button, Input} from 'semantic-ui-react'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid:'',
      password:'',
      isValid: {
        email: !true,
        isValidPassword: !true
      }
    }

    this.handleSubmit   = this.handleSubmit.bind(this)
    this.handleUserId   = this.handleUserId.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.validate       = this.validate.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const {userid, password} = this.state
    const {userId: userIdIs, history: path} = this.props
    const authd = authenticate( userid, password )

    if ( authd.subscriber && authd.password ) {
      userIdIs( userid )
      path.push( URL.subscriber )
    }
    else if (!authd.password) {
      this.setState({ isValid: {password: !false} })
    }
  }

  handleUserId(event) {
    const _fromInput = event.target

    this.setState({ userid: _fromInput.value })
  }

  validate(event) {
    // RFC 5322 Official Standard
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const input = event.target

    //1. userid is email format
    if ( input.value.length > 0 && validEmail.test( input.value )) {
      this.setState({ isValid: { email: !true }})
    }
    else {
      this.setState({ isValid: { email: !false }})
      input.focus()
    }
  }

  handlePassword(event) {
    const _fromInput = event.target

    this.setState({ password: _fromInput.value })
  }

  render() {
    return (
      <Form className='Login' onSubmit={ this.handleSubmit }>
        <Form.Field className='UserIdField' error={ this.state.isValid.email }>
          <label>User ID:</label>
          <Input placeholder='Email'
              value={ this.state.userid }
              onChange={ this.handleUserId }
              onBlur={ this.validate }
              />
          </Form.Field>

          <Form.Field className='PasswordField'
              disabled={ this.state.isValid.email }
              error={ this.state.isValid.password }>
            <label>Password:</label>
            <Input type='password' onChange={ this.handlePassword }/>
          </Form.Field>

        <Button type='submit'
              className='LoginButton'
              disabled={ this.state.isValid.email }>
          Log In
        </Button>
      </Form>
    )
  }

}

export default Login
import React, {Component}  from 'react'
import authenticate from '../Auth'
import {URL}  from '../data'
import {Form, Button, Input} from 'semantic-ui-react'
import './Login.css'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid:'',
      password:'',
      isValid: {
        email: false,
        password: false
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
    const {userId:  userIdIs,
           history: path
          } = this.props
    const authd = authenticate( userid, password )

    if (authd.user && authd.password) {
      userIdIs( userid )
      path.push( URL.subscriber )
    }
    else {
      // Is password valid?
      if (authd.password === false) {
        this.setState({
          isValid: {
            // Display error on password field:
            password: true
          }
        })
      }

      // Is user valid?
      if (authd.user === false) {
        this.setState({
          isValid: {
            // Display error on email/password fields:
            email: true,
            password: false
          }
        })
      }


    }

  }

  handleUserId(event) {
    const _fromInput = event.target

    this.setState({ userid: _fromInput.value })
  }

  validate(event) {
    // RFC 5322 Official Standard
    const validFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const input = event.target

    // Userid has a valid format?
    if (input.value.length > 0 && validFormat.test( input.value )) {
      this.setState({
        isValid: { email: !true }
      })
    }
    else {
      this.setState({
        isValid: { email: !false }
      })
      input.focus()
    }
  }

  handlePassword(event) {
    const _fromInput = event.target

    this.setState({ password: _fromInput.value })
  }

  render() {
    const _ifEmailIsInvalid = this.state.isValid.email,
          _ifPasswordIsRejected = this.state.isValid.password

    return (
      <Form className='Login' onSubmit={ this.handleSubmit }>

        <Form.Field className='UserIdField' error={ _ifEmailIsInvalid }>
          <label>User ID:</label>

          <Input placeholder='Email'
              value={ this.state.userid }
              onChange={ this.handleUserId }
              onBlur={ this.validate }
              />
        </Form.Field>

        <Form.Field className='PasswordField'
            error={ _ifPasswordIsRejected }
            disabled={ _ifEmailIsInvalid }
            >
          <label>Password:</label>

          <Input type='password' onChange={ this.handlePassword }/>
        </Form.Field>

        <Button type='submit'
              className='LoginButton'
              disabled={ _ifEmailIsInvalid }>
          Log In
        </Button>
      </Form>
    )
  }

}

export default Login
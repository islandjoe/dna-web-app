import React, {Component}  from 'react'
import styled from 'styled-components'
import authenticated from '../Auth'
import {URL}  from '../data'

const USER_ID = 'userid',
      PASSWORD = 'password'

const UserId = styled.input.attrs({ type: 'text', name: USER_ID })`
`
const Password = styled.input.attrs({ type: 'password', name: PASSWORD })`
`
export const LoginButton = styled.input.attrs({
  type: 'submit',
  value: 'Log in'
 })`
`
LoginButton.displayName = 'LoginButton'


const Label = styled.label`
  display: block;
`

export const UserIdField =(props)=>
  <Label htmlFor={ USER_ID }>
    User ID: <UserId { ...props  }/>
  </Label>

export const PasswordField =(props)=>
  <Label htmlFor={ PASSWORD }>
    Password: <Password { ...props }/>
  </Label>

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserId = this.handleUserId.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log( this.state )

    const {userid, password}  = this.state

    if (authenticated( userid, password )) {
      this.props.history.push( URL.subscriber )
    }

    //TODO: Maybe return/throw something here
  }

  handleUserId(event) {
    this.setState({
      userid: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form className='Login'
          onSubmit={ this.handleSubmit }>
        <UserIdField
            value={ this.state.userid }
            onChange={ this.handleUserId }/>
        <PasswordField
           onChange={ this.handlePassword }/>

        <LoginButton/>
      </form>
    )
  }

}

export default Login
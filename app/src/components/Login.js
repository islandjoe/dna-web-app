import React from 'react'
import styled from 'styled-components'
import {Link, Redirect} from 'react-router-dom'

const USER_ID = 'userid',
      PASSWORD = 'password'

const UserId = styled.input.attrs({ type: 'text', name: USER_ID })`
`
const Password = styled.input.attrs({ type: 'password', name: PASSWORD })`
`
const LoginButton = styled.input.attrs({ type: 'submit', value: 'Log in' })`
`
const Label = styled.label`
  display: block;
`

const UserIdField =()=>
  <Label htmlFor={ USER_ID }>
    User ID: <UserId/>
  </Label>

const PasswordField =()=>
  <Label htmlFor={ PASSWORD }>
    Password: <Password/>
  </Label>

const submitHandler =(props, event)=> {
  event.preventDefault()

  const user = event.target.children[0].children[0]
  const pass = event.target.children[1].children[0]

  if (user.value === 'ark' &&
      pass.value === '123') {
    console.log( 'Authenticated!' )
    props.history.push('/your-account')
  }
}

const Login =(props)=>
  <form className='Login' onSubmit={()=> submitHandler(props, event) }>
    <UserIdField/>
    <PasswordField/>
    <LoginButton/>
    <Link to='/your-account'>Your account</Link>
  </form>

export default Login
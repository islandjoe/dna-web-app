import React from 'react'
import styled from 'styled-components'

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

const UserIdField =()=> (
  <Label htmlFor={ USER_ID }>
    User ID: <UserId/>
  </Label>
)

const PasswordField =()=> (
  <Label htmlFor={ PASSWORD }>
    Password: <Password/>
  </Label>
)

const Login =()=> (
  <form className='Login'>
    <UserIdField/>
    <PasswordField/>
    <LoginButton/>
  </form>
)

export default Login
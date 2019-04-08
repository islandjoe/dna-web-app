import React  from 'react'
import styled from 'styled-components'
import {URL} from '../data'

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

const submitHandler =(props, e)=> {
  e.preventDefault()

  const field = (name)=> e.target.elements[name]
  const user = field( USER_ID )
  const pass = field( PASSWORD )

  if (user.value === 'ark' &&
      pass.value === '123') {
    console.log( 'Authenticated!' )
    props.history.push( URL.subscriber )
  }

}

const Login =(props)=>
  <form className='Login'
      onSubmit={()=> submitHandler(props,event) }>
    <UserIdField/>
    <PasswordField/>

    <LoginButton/>
  </form>

export default Login

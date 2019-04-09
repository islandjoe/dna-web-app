import React  from 'react'
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

export const UserIdField =()=>
  <Label htmlFor={ USER_ID }>
    User ID: <UserId/>
  </Label>

export const PasswordField =()=>
  <Label htmlFor={ PASSWORD }>
    Password: <Password/>
  </Label>

const submitHandler =(props,event)=> {
  event.preventDefault()

  const field = (name)=> event.target.elements[name]
  const user = field( USER_ID ).value
  const pass = field( PASSWORD ).value

  if (authenticated( user, pass )) {
    console.log( 'Authenticated!' )
    props.history.push( URL.subscriber )
  }

}

export default Login =(props)=>
  <form className='Login'
      onSubmit={()=> submitHandler(props, event)}>
    <UserIdField/>
    <PasswordField/>

    <LoginButton/>
  </form>

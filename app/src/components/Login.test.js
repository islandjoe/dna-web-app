import React from 'react'
import {shallow, mount} from  'enzyme'
import {
  Login,
  UserIdField,
  PasswordField,
  LoginButton
} from './Login.js'

const loginForm = shallow( <Login/> )

it('should render', ()=> {
  const form = loginForm.find('form.Login')

  expect(form.children().length).toBe(3)
})

it('should contain <UserIdField/>', ()=> {
  const child = loginForm.childAt(0)
  const field = <UserIdField/>

  expect( child.equals(field) ).toBe(true)
})

it('should contain <PasswordField/>', ()=> {
  const child = loginForm.childAt(1)
  const field = <PasswordField/>

  expect( child.equals(field) ).toBe(true)
})

it('should contain <LoginButton/>', ()=> {
  const child = loginForm.childAt(2)
  const button = child.find('LoginButton')

  expect( button.equals(<LoginButton/>) ).toBe(true)
})

it('submits the form when <LoginButton/> is clicked', ()=> {
})
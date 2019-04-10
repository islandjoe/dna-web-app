import React from 'react'
import {shallow, mount} from  'enzyme'
import Login, {LoginButton} from './Login.js'

const loginForm = shallow( <Login/> )

it('should contain 3 children components', ()=> {
  const form = loginForm.find('form.Login')
  expect(form.children().length).toBe(3)
})

it('should contain a <UserIdField/>', ()=> {
  const field = loginForm.find('UserIdField')
  expect( field.exists() ).toBe(true)
})

it('should contain a <PasswordField/>', ()=> {
  const field = loginForm.find('PasswordField')
  expect( field.exists() ).toBe(true)
})

it('should contain a <LoginButton/>', ()=> {
  const child = loginForm.childAt(2)
  const button = child.find('LoginButton')

  expect( button.equals(<LoginButton/>) ).toBe(true)
})

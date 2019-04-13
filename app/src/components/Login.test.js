import React from 'react'
import {shallow, mount} from  'enzyme'
import Login, {LoginButton} from './Login.js'

const loginForm = shallow( <Login/> )

it('should contain 3 children components', ()=> {
  const form = loginForm.find('Form.Login')
  expect(form.children().length).toBe(3)
})

it('should contain UserIdField', ()=> {
  const field = loginForm.find('.UserIdField')
  expect( field.exists() ).toBe(true)
})

it('should contain PasswordField', ()=> {
  const field = loginForm.find('.PasswordField')
  expect( field.exists() ).toBe(true)
})

it('should contain a login button', ()=> {
  const button = loginForm.find('Button.LoginButton')

  expect( button.exists() ).toBe(true)
})

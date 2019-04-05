import React from 'react'
import {shallow} from  'enzyme'
import Login from './Login.js'

it('should render correctly', ()=> {
  const login = shallow(<Login/>)
  expect(login).toMatchSnapshot()
})
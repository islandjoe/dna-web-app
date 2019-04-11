import React from 'react'
import {shallow} from  'enzyme'
import Subscriber from './Subscriber.js'

const component = shallow(<Subscriber/>)

it('should render', ()=> {
  expect( component ).toBeTruthy()
})

it('should display the subscriber\'s name', ()=> {
  const name = ''
  expect( component.text() ).toBe( name )
})

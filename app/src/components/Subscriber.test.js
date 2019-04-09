import React from 'react'
import {shallow} from  'enzyme'
import Subscriber from './Subscriber.js'

const component = shallow(<Subscriber/>)

it('should render', ()=> {
  expect( component ).toBeTruthy()
})

it('should display the subscriber\'s name', ()=> {
  expect( component.childAt(0).text() ).toBe('John Snow')
  // console.log( component.childAt(0) )
})

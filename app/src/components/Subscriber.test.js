import React from 'react'
import {shallow} from  'enzyme'
import Subscriber from './Subscriber.js'

it('should render correctly', ()=> {
  const component = shallow(<Subscriber/>)
  expect(component).toMatchSnapshot()
})
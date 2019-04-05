import React from 'react'
import {shallow} from  'enzyme'
import Subscription from './Subscription.js'

it('should render correctly', ()=> {
  const component = shallow(<Subscription/>)
  expect(component).toMatchSnapshot()
})
import React from 'react'
import {shallow} from  'enzyme'
import Subscriber from './Subscriber.js'
import {subscribers} from '../data'

const _johnSnow = subscribers[2]
const component = shallow( <Subscriber userid={ _johnSnow.userid} /> )

it('should render', ()=> {
  expect( component.exists() ).toBe(true)
})

it('should display the subscriber\'s name', ()=> {
  const name = _johnSnow.name

  expect( component.text() ).toBe( name )
})

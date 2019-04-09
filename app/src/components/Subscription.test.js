import React from 'react'
import {shallow} from  'enzyme'
import Subscription from './Subscription.js'

const component = shallow(<Subscription/>)
const subscription = new Subscription()
const subscriptionPackage = subscription.state.package
const subscriber = subscription.state.subscriber

it('should render', ()=> {
  expect( component.exists() ).toBe(true)
})


it('should display the subscription package name', ()=> {
    expect( component.find('header').text() )
    .toBe(  subscriptionPackage.name )
})

it('should display the subscription type', ()=> {
  const subscriptionType = component.find('td.SubscriptionType')
  expect( subscriptionType.text() )
    .toBe( subscriptionPackage.type )
})

it('should display the monthly price', ()=> {
  const monthlyPrice = component.find('td.MonthlyPrice').text()

  expect( Number.parseInt( monthlyPrice ) )
    .toBe( subscriptionPackage.price )
})

it('should display the user id', ()=> {
  const userid = component.find('td.UserId').text()

  expect( userid ).toBe( subscriber.userid )
})
import React from 'react'
import {shallow} from  'enzyme'
import Subscription from './Subscription'

const subscriptionId = {
  params: {
    id: 'kho'
  }
}

const co = shallow( <Subscription match={ subscriptionId }/> )

const subscription = new Subscription()
const subscriptionPackage = subscription.state.package

it('should not crash', ()=> {
  expect( co.exists() ).toBe(true)
})

it('should render the subscription package name', ()=> {
    expect( co.find('header').text() )
    .toBe(  subscriptionPackage.name )
})

it('should render the subscription type', ()=> {
  const subscriptionType = co.find('td.SubscriptionType')
  expect( subscriptionType.text() )
    .toBe( subscriptionPackage.type )
})

it('should render the monthly price', ()=> {
  const monthlyPrice = co.find('td.MonthlyPrice').text()

  expect( Number.parseInt( monthlyPrice ) )
    .toBe( subscriptionPackage.price )
})

it('should render the user id', ()=> {
  const userid = co.find('td.UserId').text()

  expect( userid ).toBe( '' )
})
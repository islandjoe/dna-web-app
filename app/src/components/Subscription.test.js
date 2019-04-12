import React from 'react'
import {shallow} from  'enzyme'
import Subscription from './Subscription'
import {packages, subscribers} from  '../data'

const _johnSnow = subscribers[2]
const _4g_rajaton = packages[1]
const subscriptionId = { params: { id: _4g_rajaton.id } }
const subscription = shallow( <Subscription match={ subscriptionId } userid={ _johnSnow.userid }/> )

describe('Subscription details:', ()=> {

  it('should not crash', ()=> {
    expect( subscription.exists() ).toBe( true )
  })

  it('should render the subscription package name', ()=> {
    expect( subscription.find('header').text() )
      .toBe( _4g_rajaton.name  )
  })

  it('should render the subscription type', ()=> {
    const subscriptionType = subscription.find('td.SubscriptionType').text()

    expect( subscriptionType ).toBe( _4g_rajaton.type )
  })

  it('should render the monthly price', ()=> {
    const monthlyPrice = subscription.find('td.MonthlyPrice').text()

    expect( Number.parseInt( monthlyPrice ) )
      .toBe( _4g_rajaton.price )
  })

})

describe('Subscriber\'s details:', ()=> {

  it('should render the user id', ()=> {
    const userid = subscription.find('td.UserId').text()

    expect( userid ).toBe( _johnSnow.userid )
  })

  it('The contact detail is the subcriber\'s mobile number', ()=> {
    const number = subscription.find('td.Mobile').text()
    const address = subscription.find('td.Address')

    expect( number ).toBe( _johnSnow.mobile )
    expect( address.exists() ).not.toBe( true  )
  })

})
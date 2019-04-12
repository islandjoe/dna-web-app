import React from 'react'
import {shallow} from  'enzyme'
import Subscription from './Subscription'
import {packages, subscribers} from  '../data'

const _4g_rajaton = packages[1]
const subscriptionId = {
  params: {
    id: _4g_rajaton.id
  }
}
const _johnSnow = subscribers[2]

const co = shallow( <Subscription match={ subscriptionId } userid={ _johnSnow.userid }/> )

describe('Subscription details:', ()=> {

  it('should not crash', ()=> {
    expect( co.exists() ).toBe(true)
  })

  it('should render the subscription package name', ()=> {
    expect( co.find('header').text() )
      .toBe( _4g_rajaton.name  )
  })

  it('should render the subscription type', ()=> {
    const subscriptionType = co.find('td.SubscriptionType').text()

    expect( subscriptionType )
      .toBe( _4g_rajaton.type )
  })

  it('should render the monthly price', ()=> {
    const monthlyPrice = co.find('td.MonthlyPrice').text()

    expect( Number.parseInt( monthlyPrice ) )
      .toBe( _4g_rajaton.price )
  })

})

describe('Subscriber\'s details:', ()=> {

  it('should render the user id', ()=> {
    const userid = co.find('td.UserId').text()

    expect( userid ).toBe( _johnSnow.userid )
  })

  it('The contact detail is the subcriber\'s mobile number', ()=> {
    const number = co.find('td.Mobile').text()
    const address = co.find('td.Address')

    expect( number ).toBe( _johnSnow.mobile )
    expect( address.exists() ).not.toBe( true  )
  })

})
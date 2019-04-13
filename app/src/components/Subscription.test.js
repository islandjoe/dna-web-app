import React from 'react'
import {shallow, mount} from  'enzyme'
import Subscription from './Subscription'
import {packages, subscribers} from  '../data'

const _johnSnow = subscribers[2]
const _4g_rajaton = packages[1]
const subscriptionId = { params: { id: _4g_rajaton.id } }

const subscription =(depth = shallow)=>
    depth( <Subscription
              match={ subscriptionId }
              userid={ _johnSnow.userid }/>
          )


describe('Subscription details:', ()=> {

  it('should not crash', ()=> {
    expect( subscription().exists() ).toBe( true )
  })

  it('should render the subscription package name', ()=> {
    const name = subscription(mount).find('Header').text(),
          same = _4g_rajaton.name

    expect( name  ).toBe( same  )
  })

  it('should render the subscription type', ()=> {
    const type =  subscription().find( '.SubscriptionType' ).text(),
          same = _4g_rajaton.type

    expect( type ).toBe( same )
  })

  it('should render the monthly price', ()=> {
    const price = subscription(mount).find('.MonthlyPrice').text(),
          same  = _4g_rajaton.price

    expect(Number.parseInt( price )).toBe( same )
  })

})

describe('Subscriber\'s details:', ()=> {

  it('should render the user id', ()=> {
    const userid = subscription().find('.UserId').text(),
          same   = _johnSnow.userid

    expect( userid ).toBe( same )
  })

  it('The contact detail is the subcriber\'s mobile number', ()=> {
    const [number, same] = [subscription(mount).find('.Mobile').text(), _johnSnow.mobile]
    const address = subscription().find('.Address')

    expect( number ).toBe( same )
    expect( address.exists() ).not.toBe( true  )
  })

})
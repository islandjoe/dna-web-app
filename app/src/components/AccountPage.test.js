import React from 'react'
import {mount} from  'enzyme'
import {MemoryRouter} from 'react-router-dom'
import AccountPage from './AccountPage'
import {subscribers} from  '../data'

const _johnSnow = subscribers[2]
const account = mount(
  <MemoryRouter>
    <AccountPage userid={ _johnSnow.userid } />
  </MemoryRouter>
)

it('should render the subscriber\'s name', ()=> {
  expect( account.find('h2.SubscriberName').text() )
      .toBe( _johnSnow.name )
})


it('should render a list of user\'s subscription packages', ()=> {
  const packagesAreListed = account.find('ListItem').every('.PackageDetail')

  expect( packagesAreListed )
      .toBe( true )
  })
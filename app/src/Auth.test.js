import authenticate from './Auth'
import {subscribers} from './data'

const {userid, password} = subscribers[0]

it('should authenticate legit users', ()=> {

  expect( authenticate( userid, password ) )
    .toEqual( {password: true, user: true} )
})

it('should reject non-subscribers', ()=> {

  expect( authenticate( 'whitewalker', 'www'))
    .toEqual( {password: false, user: false} )
})

it('should reject wrong userid or password', ()=> {

  expect( authenticate( userid, 'immahaxoryuuu' ) )
    .toEqual( {password: false, user: true} )

  expect( authenticate( 'no@such.user', password ) )
    .toEqual( {password: false, user: false} )
})

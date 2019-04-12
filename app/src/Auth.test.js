import authenticate from './Auth'
import {subscribers} from './data'

it('should authenticate legit users', ()=> {
  expect( authenticate( userid, password ) )
  .toBe( true )
})

it('should reject non-subscribers', ()=> {
  expect( authenticate( 'whitewalker', 'www'))
  .toBe( rejected )
})

it('should reject wrong userid or password', ()=> {
  expect( authenticate( userid, 'immahaxoryuuu' ) )
  .toBe( rejected )

  expect( authenticate( 'no@such.user', password ) )
  .toBe( rejected )
})

const rejected = !true
const {userid, password} = subscribers[0]
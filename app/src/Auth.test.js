import authenticate from './Auth'
import {subscribers} from './data'

const {userid, password} = subscribers[0]

it('should authenticate legit users', ()=> {

    expect( authenticate( userid, password ) )
        .toBeTruthy()
})

it('should reject non-subscribers', ()=> {
    expect( authenticate( 'whitewalker', 'www'))
        .toBeFalsy()
})

it('should reject wrong userid or password', ()=> {
    expect( authenticate( userid, 'immahaxoryuuu' ) )
      .toBeFalsy()

    expect( authenticate( 'no@such.user', password ) )
      .toBeFalsy()
})

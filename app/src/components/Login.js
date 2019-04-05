import React from 'react'
import './Login.css'

const Login =()=> (
  <form className='Login'>
    <label htmlFor='userid'>User ID: <input type='text' name='userid'/></label>
    <label htmlFor='password'>Password: <input type='password' name='password'/></label>
    <input type='submit' value='Log in'/>
  </form>
)

export default Login
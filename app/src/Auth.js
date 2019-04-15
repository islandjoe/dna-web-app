import {subscribers} from './data'

const authenticate =(id, password)=> {
  const user = subscribers.find(s=> s.userid === id)
  const check = (id=false, pwd=false)=> ({ user: id, password: pwd })

  // If user is not on file, don't bother checking the password
  return (user) ?
    check( (user.userid === id), (user.password === password) )
    :
    check()
}

export default authenticate
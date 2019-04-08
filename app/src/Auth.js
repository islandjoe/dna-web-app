import {subscribers} from './data'

const authenticate =(userid, password)=> {
  const subscriber = subscribers.find(s=> s.userid === userid)

  if (subscriber) {
    return (subscriber.password === password)
  }

  return false
}

export default authenticate
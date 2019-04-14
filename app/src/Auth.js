import {subscribers} from './data'

const authenticate =(userid, password)=> {
  const subscriber = subscribers.find(s=> s.userid === userid)

  if (subscriber) {
    return (subscriber.password === password) ? ({subscriber: true, password: true}) : ({subscriber: true, password: false})
  }

  return {subscriber: false, password: false}
}

export default authenticate
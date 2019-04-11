import React, {Component} from 'react'
import {subscribers} from '../data'

class Subscriber extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid: props.userid,
      name: '',
      address: '',
      mobileNumber: '',
      subscriptions: []
    }
  }

  componentDidMount() {
    const subscriber = subscribers.find((s)=> s.userid === this.state.userid)

    if (subscriber) {
      this.setState({ ...subscriber })
    }
  }

  render() {
    return (
      <h2>{ this.state.name }</h2>
    )
  }
}

export default Subscriber

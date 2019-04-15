import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {subscribers} from '../data'

class Subscriber extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid:'', name:'', address:'', mobileNumber:'', subscriptions: []
    }

  }

  componentDidMount() {
    const subscriber = subscribers.find((s)=> s.userid === this.props.userid)

    if (subscriber) {
      this.setState({ ...subscriber })
    }

  }

  render() {
    return <h2 className='SubscriberName'>{ this.state.name }</h2>
  }
}

Subscriber.propTypes = {
  userid: PropTypes.string
}

export default Subscriber

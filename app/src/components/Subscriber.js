import React, {Component} from 'react'

class Subscriber extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userid: '',
      name: '',
      address: '',
      mobileNumber: '',
      subscriptions: []
    }
  }

  componentDidMount() {
    this.setState({
      userid: this.props.userid
    })
  }
  render() {
    return (
      <h2>{ this.state.name }</h2>
    )
  }
}

export default Subscriber

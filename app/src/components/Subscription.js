import React, {Component} from 'react'
import styled from 'styled-components'
import {packages, subscribers} from '../data'

class Subscription extends Component {

  constructor(props) {
    super(props)

    this.state = {
      package: {
        id:    '',
        name:  '',
        type:  '',
        price: 0
      },
      subscriber: {
        userid: ''
      }
    }
  }

  componentDidMount() {
    const packageId = this.props.match.params.id
    const subscription = packages.find((p)=>
      p.id === packageId)

    if (subscription) {
      this.setState({
        package: { ...subscription }
      })
      this.setState({ package: {...subscription} })
    }

    const subscriber = subscribers.find((s)=> s.userid ===  this.props.userid)

    if (subscriber) {
      this.setState({
        subscriber: { ...subscriber }
      })
      this.setState({ subscriber: {...subscriber} })
    }

  } //componentDidMount

   render() {
    const {
      package: bundle,
      subscriber: user
    } = this.state

    return (
      <>
      <header>
        { bundle.name }
      </header>

      <table>
        <Details>
        <tr>
          <th>User Id</th>
          <td className='UserId'>
            { user.userid }
          </td>
        </tr>
        {// Hard-code this comparison for now:
          bundle.type == 'Mobile'
        ?
          <tr>
            <th>Mobile</th>
            <td className='Mobile'>{ user.mobile }</td>
          </tr>
          :
          <tr>
            <th>Address</th>
            <td className='Address'>{ user.address }</td>
          </tr>
        }
        <tr>
          <th>Subscription Type</th>
          <td className='SubscriptionType'>
            { bundle.type }
          </td>
        </tr>
        <tr>
          <th>Monthly price</th>
          <td className='MonthlyPrice'>
            { `${ bundle.price }€` }
          </td>
        </tr>
        </Details>
      </table>
      </>
    )
  } //render
} //Subscription

const Details = styled.tbody` `

export default Subscription

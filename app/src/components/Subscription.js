import React, {Component} from 'react'
import styled from 'styled-components'
import packages from '../data'

const Details = styled.tbody` `

class Subscription extends Component {

  constructor(props) {
    super(props)

    this.state =
    { package: {
        name: 'Package Name',
        type: 'Type',
        price: 0
      },
      subscriber: {
        userid: 'Email'
      }
    }
  }

  render() {
    return (
      <>
      <header>
        {this.state.package.name}
      </header>

      <table>
        <Details>
        <tr>
          <th>User Id</th>
          <td className='UserId'>
            { this.state.subscriber.userid }
          </td>
        </tr>
        <tr>
          <th>{/* header*/ }</th>
          <td>{/* value */}</td>
        </tr>
        <tr>
          <th>Subscription Type</th>
          <td className='SubscriptionType'>
            { this.state.package.type }
          </td>
        </tr>
        <tr>
          <th>Monthly price</th>
          <td className='MonthlyPrice'>
            { `${this.state.package.price}€` }
          </td>
        </tr>
        </Details>
      </table>
      </>
    )
  }
}

export default Subscription

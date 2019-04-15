import React, {Component} from 'react'
import {Table, Header} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import {packages, subscribers} from '../data'

class Subscription extends Component {

  constructor(props) {
    super(props)

    this.state = {
      package:    { id:'', name:'', type:'', price:0 },
      subscriber: { userid:'' }
    }
  }

  componentDidMount() {
    const packageId    = this.props.match.params.id
    const subscription = packages.find((p)=> p.id === packageId)

    if (subscription) {
      this.setState({ package: { ...subscription } })
    }

    const subscriber = subscribers.find((s)=> s.userid ===  this.props.userid)

    if (subscriber) {
      this.setState({ subscriber })
    }

  } //componentDidMount

   render() {
    const { package: bundle, subscriber: user } = this.state
    // Hard-code the compared value for now:
    const { label, value } = (bundle.type === 'Mobile')
              ? {label: 'Mobile',  value: user.mobile}
              : {label: 'Address', value: user.address}

    return (
      <>
      <Header as='h2'>
        { bundle.name }
      </Header>

      <Table definition >
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>
              User Id
            </Table.Cell>
            <Table.Cell width={4}>
              <span className='UserId'>{ user.userid }</span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              { label }
            </Table.Cell>
            <Table.Cell>
              <span className={ label }>{ value }</span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Subscription Type
            </Table.Cell>
            <Table.Cell>
              <span className='SubscriptionType'>{ bundle.type }</span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Monthly price
            </Table.Cell>
            <Table.Cell>
              <span className='MonthlyPrice'>{ `${ bundle.price }€` }</span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </>
    )
  } //render
} //Subscription

Subscription.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf( PropTypes.string )
  }),
  userid: PropTypes.string
}

export default Subscription

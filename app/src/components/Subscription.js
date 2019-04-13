import React, {Component} from 'react'
import {Table, Header} from 'semantic-ui-react'
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
      this.setState({ subscriber: {...subscriber} })
    }

  } //componentDidMount

   render() {
    const { package: bundle, subscriber: user } = this.state

    return (
      <>
      <Header>
        { bundle.name }
      </Header>

      <Table>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell scope='row'>User Id</Table.HeaderCell>
            <Table.Cell>
              <span className='UserId'>{ user.userid }</span>
            </Table.Cell>
          </Table.Row>
          {// Hard-code this comparison for now:
            bundle.type == 'Mobile'
            ?
            <Table.Row>
              <Table.HeaderCell scope='row'>Mobile</Table.HeaderCell>
              <Table.Cell>
                <span className='Mobile'>{ user.mobile }</span>
              </Table.Cell>
            </Table.Row>
            :
            <Table.Row>
              <Table.HeaderCell scope='row'>Address</Table.HeaderCell>
              <Table.Cell>
                <span className='Address'>{ user.address }</span>
              </Table.Cell>
            </Table.Row>
          }
          <Table.Row>
            <Table.HeaderCell scope='row'>Subscription Type</Table.HeaderCell>
            <Table.Cell>
              <span className='SubscriptionType'>{ bundle.type }</span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope='row'>Monthly price</Table.HeaderCell>
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

export default Subscription

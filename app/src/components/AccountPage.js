import React from 'react'
import Subscriber from './Subscriber'
import {Link} from  'react-router-dom'
import {Image, List} from 'semantic-ui-react'
import {URL, subscribers} from '../data'

const AccountPage =(props)=> {
  const details = subscribers.find(s=> s.userid === props.userid)
  const bundle = details.subscriptions.map(pkg=>
    <List.Item key={ pkg.id }>
      <Image size='tiny'
            {/*TODO: Handle if there's no avatar */}
            src={ `/images/avatar-${pkg.id}.jpeg`}
            verticalAlign='top' />
      <List.Content>
        <Link to={ `${URL.subscription}/${pkg.id}` }>
          <List.Header>{ pkg.name }</List.Header>
        </Link>
      </List.Content>
    </List.Item>
  )

  return (
    <div>
      <Subscriber userid={ props.userid }/>
      <div>
        <h3>Your subscriptions</h3>
        <List>
          { bundle }
        </List>
      </div>

    </div>
  )
}

export default AccountPage

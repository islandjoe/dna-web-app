import React from 'react'
import Subscriber from './Subscriber'
import {Link} from  'react-router-dom'
import {Image, List} from 'semantic-ui-react'
import {URL, subscribers} from '../data'

const AccountPage =(props)=> {
  const details = subscribers.find(s=> s.userid === props.userid)
  const packages = details.subscriptions.map(pkg=> (
      <List.Item key={pkg.id}>
      {/* TODO: Handle if there's no avatar */}
      <Image size='tiny' rounded
             src={`/images/avatar-${pkg.id}.jpeg`}
             verticalAlign='top' />
      <List.Content>
        <List.Header>
        <Link to={`${URL.subscription}/${pkg.id}`}>
          {pkg.name}
        </Link>
        </List.Header>
        <List.Description>
          { pkg.desc }
        </List.Description>

      </List.Content>
    </List.Item>
  ))

  return (
    <div>
      <Subscriber userid={ props.userid }/>
      <div>
        <h2>Your subscriptions</h2>
        <List celled relaxed='very' selection size='large'>
        { packages }
        </List>
      </div>

    </div>
  )
}

export default AccountPage

import React from 'react'
import {Link} from  'react-router-dom'
import {Image, List} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Subscriber from './Subscriber'
import {URL, subscribers} from '../data'

const _packageList =(pkg)=> (
  <List.Item key={pkg.id} className='PackageDetail'>

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
)

const AccountPage =(props)=> {
  const _details = subscribers.find(s=> s.userid === props.userid)
  const packages = _details.subscriptions.map( _packageList )

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

AccountPage.propTypes = {
  userid: PropTypes.string
}

export default AccountPage
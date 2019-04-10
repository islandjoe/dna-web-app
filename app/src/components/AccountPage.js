import React, {Component} from 'react'
import Subscriber from './Subscriber'
import {Link} from  'react-router-dom'
import {URL, subscribers} from '../data'

const AccountPage =(props)=> {


  const details = subscribers.find(s=> s.userid === props.userid)

  const packages = details.subscriptions.map(pkg=>
    <li key={pkg.id}>
      <Link to={ `${URL.subscription}/${pkg.id}` }>
        {pkg.name}
      </Link>
    </li>
  )

  return (
    <div>
      <Subscriber userid={ props.userid }/>
      <div>
        <h3>Your subscriptions</h3>
        <ul>
          { packages }
        </ul>
      </div>

    </div>
  )
}

export default AccountPage

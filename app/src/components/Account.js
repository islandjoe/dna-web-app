import React from 'react'
import Subscriber from './Subscriber'
import {Link} from  'react-router-dom'
import packages from '../data'

const Account =()=> {

  const pkgs = packages.map(pkg=>
    <li key={pkg.id}>
      <Link to={ `/subscription/${pkg.id}` }>
        {pkg.name}
      </Link>
    </li>
  )

  return (
    <div>
      <Subscriber/>
      <div>
        <h3>Your subscriptions</h3>
        <ul>
          {pkgs}
        </ul>
      </div>

    </div>
  )
}

export default Account

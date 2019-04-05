import React from 'react'
import styled from 'styled-components'

const Label   = styled.th` text-align: left; `
const Value   = styled.td` `
const Details = styled.tbody` `

const Subscription =()=> {
  return (
    <>
    <h3>Home Broadband</h3>
    <table>
      <Details>
      <tr>
        <Label>User name</Label>
        <Value>i.am@island.joe</Value>
      </tr>
      <tr>
        <Label>Address</Label>
        <Value>727 Bristol Street, Trexlertown, Arizona, 7038</Value>
      </tr>
      <tr>
        <Label>Subscription type</Label>
        <Value>1 year</Value>
      </tr>
      <tr>
        <Label>Monthly price</Label>
        <Value>26€</Value>
      </tr>
      </Details>
    </table>
    </>
  )
}

export default Subscription

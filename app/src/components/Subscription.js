import React from 'react'
import styled from 'styled-components'
import packages from '../data'

const Label   = styled.th` text-align: left; `
const Value   = styled.td` `
const Details = styled.tbody` `

const Subscription =(props)=> {

  const pkg = packages.find(pkg=> pkg.id === props.match.params.id)

  const {header, value} =(c=> {
    if (c.type === 'Mobile') {
      return {header: 'Mobile Number', value: '1234-5678'}
    }
    return {header: 'Address', value: 'Munkinpolku X Y Z, Helsinki'}
  })(pkg)

  return (
    <>
    <h3>{ pkg.name }</h3>

    <table>
      <Details>
      <tr>
        <Label>User name</Label>
        <Value>i.am@island.joe</Value>
      </tr>
      <tr>
        <Label>{ header }</Label>
        <Value>{ value }</Value>
      </tr>
      <tr>
        <Label>Subscription type</Label>
        <Value>{ pkg.type }</Value>
      </tr>
      <tr>
        <Label>Monthly price</Label>
        <Value>{ `${pkg.price}€` }</Value>
      </tr>
      </Details>
    </table>
    </>
  )
}

export default Subscription

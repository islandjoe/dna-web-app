export const packages = [
  {id: 'home-broadband',
   name: 'Home Broadband',
   type: 'Broadband Internet',
   price: 28
  },
  {id: '4g-rajaton',
   name: '4G Mobile Rajaton',
   type: 'Mobile',
   price: 26
  },
  {id: 'cable-hd',
   name: 'Cable HD Premium',
   type: 'Cable',
   price: 35
  },
]

export const subscribers = [
  {
    userid:'lord.of.winterfell@geocities.com',
    password: 'wheremyhead?',
    name:'Ned Stark',
    address:'Castle Winterfell',
    mobile:'123-4567',
    subscriptions: [ ...packages ]
  },{
    userid:'k.slayer67@aol.com',
    password: 'wheremyhand?',
    name:'Jaime Lannister',
    address:'The Westerlands',
    mobile:'111-1666',
    subscriptions: [ packages[0], packages[2] ]
  },{
    userid:'jsnow38@hotmail.com',
    password: 'huh?',
    name:'John Snow',
    address:'Castle Black',
    mobile:'100-000',
    subscriptions: [ packages[1] ]
  },
]

export const URL = {
  subscriber: '/your-account',
  subscription: '/subscription'
}

export default packages
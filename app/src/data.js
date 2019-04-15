export const packages = [
  {id: 'home-broadband',
   name: 'Home Broadband',
   type: 'Broadband Internet',
   desc: 'Streaming up to 4K videos, surf the net at the same time',
   price: 28
  },
  {id: '4g-rajaton',
   name: '4G Mobile Rajaton',
   desc: '100Mbit/s, 20Gt/kk EU/ETA, Rajaton',
   type: 'Mobile',
   price: 26
  },
  {id: 'cable-hd',
   name: 'Cable HD Premium',
   desc: 'Upt to 4K video, TV Hub, Net TV',
   type: 'Cable',
   price: 35
  },
]

export const subscribers = [
  {
    userid:'lord.of.winterfell@geocities.com',
    password: 'wheremyhead?',
    name:'Ned Stark',
    address:'North Stead, Castle Winterfell',
    mobile:'0123-4567',
    subscriptions: [ packages[1] ]
  },{
    userid:'k.slayer67@aol.com',
    password: 'wheremyhand?',
    name:'Jaime Lannister',
    address:'Main St., The Westerlands',
    mobile:'0111-1666',
    subscriptions: [ packages[0], packages[2] ]
  },{
    userid:'jsnow38@hotmail.com',
    password: 'huh?',
    name:'John Snow',
    address:'Lord Commander 1 A, Castle Black',
    mobile:'04435-8888',
    subscriptions: [ ...packages ]
  },
]

export const URL = {
  subscriber: '/your-account',
  subscription: '/subscription'
}

export default packages
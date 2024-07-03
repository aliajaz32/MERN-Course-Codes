//state === store which is initially undefined
//action ==> same object that is returned from action.js


function reducer(state = { ads: [] }, action) {
  console.log('reducer --->' , action)
  switch(action.type) {
    case 'ADD_ADS': return { ...state, ads: action.payload }
    case 'ADD_USER': return { ...state, user: action.payload }
    case 'REMOVE_USER': return { ...state, user: null }
    default: return state
  }
}

/*
{
  user: { name: 'Kashif', ... }
  ads: [{title, price}, {title, price}, {title, price}]
  themeColor: 'green'
}

{
  user: null
  ads: [{title, price}, {title, price}, {title, price}]
  themeColor: 'green'
}

*/

export default reducer
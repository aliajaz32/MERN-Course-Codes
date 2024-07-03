function reducer(state = { ads: [] }, action) {
  switch(action.type) {
    case 'ADD_ADS': return { ...state, ads: action.payload }
    default: return state
  }
}

export default reducer
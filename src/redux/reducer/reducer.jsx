let initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload.num}
    default :
      return {...state}
  }
}

export default reducer
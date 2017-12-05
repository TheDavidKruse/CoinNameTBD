let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COIN_PENDING':
            return state
        case 'FETCH_COIN_FULFILLED':
            return Object.assign([], action.payload.data);
        
        case 'CHANGE_COIN':
        var x = state.findIndex(function(e,i,a){
            return e.short === action.payload.short
          })
          Object.assign(state[x],action.payload)
          return [...state]
        default:
            return state
    }
}


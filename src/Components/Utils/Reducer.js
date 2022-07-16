export const reducer = (state,action) => {
    switch(action.type){
        case 'UPDATE_INPUT':
            return {...state, [action.key]:action.payload.value}
        default:
        return state
    }
    }
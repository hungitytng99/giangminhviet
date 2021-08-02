import * as types from '../types'
const initialState = {
    description: "",
}
interface action {
    type?: string,
    payload?: string,
}
interface error {
    description?: string,
}
export const errorReducer = (state: error = initialState, action: action) => {
    switch (action.type) {
        case types.NETWORK_ERROR: {
            return {
                ...state,
                description: action.payload
            }

        }
        default:
            return state
    }
}

import { GET_QUOTE } from './types'

const INITIAL_SATE = {
    quote: {},
}

export default (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case GET_QUOTE:
            return {
                ...state,
                quote: action.payload.value,
            }
        default:
            return state
    }
}

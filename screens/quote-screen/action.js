import { GET_QUOTE } from './types'
import quotes from '../../quotes'

const sortQuote = arr => arr[Math.floor(Math.random() * arr.length)]

export const getQuote = dispatch =>
    dispatch({
        type: GET_QUOTE,
        payload: {
            value: sortQuote(quotes),
        },
    })

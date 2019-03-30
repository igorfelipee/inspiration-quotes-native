import { combineReducers } from 'redux'
import quoteScreen from './screens/quote-screen/reducer'

const rootReducer = combineReducers({
    quoteScreen,
})

export default rootReducer

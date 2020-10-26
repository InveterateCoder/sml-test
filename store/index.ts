import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import storeReducer from './storeReducer'

const store = createStore(storeReducer, applyMiddleware(thunk))

export default store
import { Reducer } from 'redux'
import { Store, Action } from './types'
import initialState from './initialState'
import { SET_ERROR } from './actions'



const storeReducer: Reducer<Store, Action> = (state: Store = initialState, action: Action): Store => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default storeReducer

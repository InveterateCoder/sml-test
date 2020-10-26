import { Store } from './types'

const initialState: Store = {
  students: [],
  error: {
    message: '',
    open: false
  }
}

export default initialState

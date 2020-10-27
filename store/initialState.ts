import { Store } from './types'

const initialState: Store = {
  school: [],
  error: {
    message: '',
    open: false
  },
  edit: {
    open: false,
    student: null
  }
}

export default initialState

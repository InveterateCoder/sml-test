import { Reducer } from 'redux'
import { Store, Action, GradeEntity, Student } from './types'
import initialState from './initialState'
import { SET_ERROR, LOAD_STUDENTS } from './actions'



const storeReducer: Reducer<Store, Action> = (state: Store = initialState, action: Action): Store => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    case LOAD_STUDENTS: {
      action.payload.forEach((gradeEntity: GradeEntity) => {
        const students = gradeEntity.students.map((student: Student) => ({ ...student, dob: new Date(student.dob) }))
        gradeEntity.students = students
      })
      return { ...state, school: action.payload }
    }
    default:
      return state
  }
}

export default storeReducer

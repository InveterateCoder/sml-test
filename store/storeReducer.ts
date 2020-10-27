import { Reducer } from 'redux'
import { Store, Action, GradeEntity, Student } from './types'
import initialState from './initialState'
import { SET_ERROR, LOAD_STUDENTS, DELETE_STUDENT, OPEN_EDIT, CLOSE_EDIT } from './actions'



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
    case DELETE_STUDENT: {
      const school = state.school.map(gradeEntity => {
        const students = gradeEntity.students.filter(student => student.id !== action.payload)
        return {
          grade: gradeEntity.grade,
          students
        }
      })
      return {
        ...state,
        school: school.filter(gradeEntity =>
          Array.isArray(gradeEntity.students) && gradeEntity.students.length)
      }
    }
    case OPEN_EDIT:
      return { ...state, edit: { open: true, student: action.payload } }
    case CLOSE_EDIT:
      return { ...state, edit: { ...state.edit, open: false } }
    default:
      return state
  }
}

export default storeReducer

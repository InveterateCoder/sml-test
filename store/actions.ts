import { Dispatch } from 'redux'
import { Action, Student, Grade, Performance } from './types'

export const SET_ERROR = 'set_error'
export const setError = (err: { message: string, open: boolean }): Action => ({
  type: SET_ERROR,
  payload: err
})

export const LOAD_STUDENTS = 'load_studens'
const loadStudentsStoreAction = (students: Array<Student>): Action => ({
  type: LOAD_STUDENTS,
  payload: students
})
export const loadStudents = () => async (dispatch: Dispatch) => {
  try {
  } catch (err) {

  }
  const students: Array<Student> = [
    {
      id: '',
      avatar: '',
      firstName: '',
      lastName: '',
      middleName: '',
      grade: Grade.First,
      dob: new Date(),
      performance: Performance.Отл
    }
  ]
  dispatch(loadStudentsStoreAction(students))
}

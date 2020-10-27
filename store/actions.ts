import { Dispatch } from 'redux'
import { Action, Student } from './types'
import routes from '../shared/routes'

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
    const res = await fetch(routes.students, {
      method: 'GET',
    })
    if (!res.ok) {
      throw new Error(`Server responded with "${res.statusText}"`)
    }
    dispatch(loadStudentsStoreAction(await res.json()))
  } catch (err) {
    dispatch(setError({message: err.message, open: true}))
  }
}

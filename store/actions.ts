import { Dispatch } from 'redux'
import { Action, Student } from './types'
import routes from '../shared/routes'

export const SET_ERROR = 'set_error'
export const setError = (err: { message: string, open: boolean }): Action => ({
  type: SET_ERROR,
  payload: err
})

export const LOAD_STUDENTS = 'load_studens'
export const loadStudentsStoreAction = (students: Array<Student>): Action => ({
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
    dispatch(setError({ message: err.message, open: true }))
  }
}

export const DELETE_STUDENT = 'delte_student'
const deleteStudentStoreAction = (id: string): Action => ({
  type: DELETE_STUDENT,
  payload: id
})
export const deleteStudent = (id: string) => async (dispatch: Dispatch) => {
  try {
    if (window.confirm('Are you sure you want to delete the student?')) {
      const res = await fetch(routes.delete.replace(':id', id), {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error(`Server responded with "${res.statusText}"`)
      }
      dispatch(deleteStudentStoreAction(id))
    }
  } catch (err) {
    dispatch(setError({ message: err.message, open: true }))
  }
}

export const OPEN_EDIT = 'open_edit'
export const openEdit = (student: Student): Action => ({
  type: OPEN_EDIT,
  payload: student
})

export const CLOSE_EDIT = 'close_edit'
export const closeEdit = (): Action => ({
  type: CLOSE_EDIT,
  payload: null
})

export const CREATE_STUDENT = 'create_student'
const createStudentStoreAction = (student: Student): Action => ({
  type: CREATE_STUDENT,
  payload: student
})
export const createStudent = (student: Student) => async (dispatch: Dispatch) => {
  
}

export const EDIT_STUDENT = 'edit_student'
const editStudentStoreAction = (student: Student): Action => ({
  type: EDIT_STUDENT,
  payload: student
})
export const editStudent = (student: Student) => async (dispatch: Dispatch) => {

}
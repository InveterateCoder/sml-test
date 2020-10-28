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
export const deleteStudent = (id: string | null | undefined) => async (dispatch: Dispatch) => {
  try {
    if (!id) throw Error('Something went wrong. Please contact the developer.')
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
  try {
    const res = await fetch(routes.students, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(student)
    })
    if (!res.ok) {
      throw new Error(`Server responded with "${res.statusText}"`)
    }
    dispatch(createStudentStoreAction(await res.json()))
  } catch (err) {
    dispatch(setError({ message: err.message, open: true }))
  }
}

export const UPDATE_STUDENT = 'update_student'
const updateStudentStoreAction = (data: any): Action => ({
  type: UPDATE_STUDENT,
  payload: data
})
export const updateStudent = (data: any) => async (dispatch: Dispatch) => {
  try {
    const res = await fetch(routes.students, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      throw new Error(`Server responded with "${res.statusText}"`)
    }
    dispatch(updateStudentStoreAction(data))
  } catch (err) {
    dispatch(setError({ message: err.message, open: true }))
  }
}
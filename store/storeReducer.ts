import { Reducer } from 'redux'
import { Store, Action, GradeEntity, Student } from './types'
import initialState from './initialState'
import {
  SET_ERROR, LOAD_STUDENTS, DELETE_STUDENT,
  OPEN_EDIT, CLOSE_EDIT, CREATE_STUDENT, UPDATE_STUDENT
} from './actions'

function accomodateStudent(school: GradeEntity[], student: Student) {
  let schoolGrade = school.find(gradeEntity => gradeEntity.grade === student.grade)
  let newGrade = false
  if (!schoolGrade) {
    schoolGrade = {
      grade: student.grade,
      students: [student]
    }
    newGrade = true
  } else {
    schoolGrade = {
      ...schoolGrade,
      students: [
        ...schoolGrade.students,
        student
      ]
    }
    schoolGrade.students.sort((a, b) => {
      if (a.name < b.name)
        return -1
      if (a.name > b.name)
        return 1
      return 0
    })
  }
  let newschool
  if (newGrade) {
    if (school.length === 0) {
      newschool = [schoolGrade]
    } else {
      newschool = [...school]
      let i = 0
      for (; i < newschool.length; i++) {
        if (newschool[i].grade < schoolGrade.grade) {
          continue
        } else {
          break
        }
      }
      newschool.splice(i, 0, schoolGrade)
    }
  } else {
    newschool = school.map(gradeEntity => {
      if (gradeEntity.grade === schoolGrade?.grade)
        return schoolGrade
      return gradeEntity
    })
  }
  return newschool
}

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
    case CREATE_STUDENT: {
      const student: Student = action.payload
      student.dob = new Date(student.dob)
      return {
        ...state,
        school: accomodateStudent(state.school, student)
      }
    }
    case UPDATE_STUDENT: {
      const data = action.payload
      let school
      if (data.grade) {
        school = [...state.school]
        let student: any
        const schoolGrade = school.find(gradeEntity => {
          student = gradeEntity.students.find(s => s.id === data.id)
          if (student) return true
        })
        if (!student || !schoolGrade) throw new Error('Wrong student ID.')
        schoolGrade.students = schoolGrade.students.filter(s => s.id !== student.id)
        if (schoolGrade.students.length === 0) {
          school = school.filter(gradeEntity => gradeEntity.grade !== schoolGrade.grade)
        }
        Object.assign(student, data)
        school = accomodateStudent(school, student)
      } else {
        school = state.school.map(gradeEntity => {
          const student = gradeEntity.students.find(s => s.id === data.id)
          if (student) {
            Object.assign(student, data)
          }
          return gradeEntity
        })
      }
      return {
        ...state,
        school,
        edit: { ...state.edit, open: false }
      }
    }
    default:
      return state
  }
}

export default storeReducer

export enum Grade {
  First = 1,
  Second,
  Third,
  Fourth,
  Fifth
}

export enum Performance {
  Неуд = 2, Уд, Хор, Отл
}

interface Object {
  [key: string]: any
}

export interface Student extends Object {
  id: string | null | undefined,
  avatar: string | null | undefined,
  name: string,
  dob: Date,
  grade: Grade,
  performance: Performance
}

export interface GradeEntity {
  students: Array<Student>,
  grade: Grade
}

export interface Edit {
  open: boolean,
  student: Student | null
}

export interface Store {
  school: Array<GradeEntity>,
  error: {
    message: string,
    open: boolean
  },
  edit: Edit
}

export interface Action {
  type: string,
  payload: any
}

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

export interface Student {
  id: string,
  avatar: string,
  name: string,
  dob: Date,
  performance: Performance
}

export interface GradeEntity {
  students: Array<Student>,
  grade: Grade
}

export interface Store {
  school: Array<GradeEntity>,
  error: {
    message: string,
    open: boolean
  }
}

export interface Action {
  type: string,
  payload: any
}

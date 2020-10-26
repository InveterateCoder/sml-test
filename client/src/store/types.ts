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
  firstName: string,
  lastName: string,
  middleName: string,
  dob: Date,
  grade: Grade,
  performance: Performance
}

export interface Store {
  students: Array<Student>,
  error: {
    message: string,
    open: boolean
  }
}

export interface Action {
  type: string,
  payload: any
}

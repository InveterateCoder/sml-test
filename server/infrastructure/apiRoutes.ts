import { Router } from 'express'
import routes from '../../shared/routes'
import getStudents from '../controllers/getStudentsController'
import createStudent from '../controllers/createStudentController'
import updateStudent from '../controllers/updateStudentController'
import deleteStudent from '../controllers/deleteStudentController'

const api = Router()

api.get(routes.students, getStudents)
api.post(routes.students, createStudent)
api.put(routes.students, updateStudent)
api.delete(routes.delete, deleteStudent)

export default api

import { Router } from 'express'
import routes from '../../shared/routes'
import getStudents from '../controllers/getStudentsController'
import deleteStudent from '../controllers/deleteStudentController'

const api = Router()

api.get(routes.students, getStudents)
api.delete(routes.delete, deleteStudent)

export default api

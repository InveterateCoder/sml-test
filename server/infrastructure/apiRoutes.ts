import { Router } from 'express'
import routes from '../../shared/routes'
import getStudents from '../controllers/getStudentsController'

const api = Router()

api.get(routes.students, getStudents)

export default api

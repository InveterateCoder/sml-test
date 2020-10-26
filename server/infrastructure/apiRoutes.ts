import { Router } from 'express'
import getStudents from '../controllers/getStudentsController'

const api = Router()

api.get('/students', getStudents)

export default api

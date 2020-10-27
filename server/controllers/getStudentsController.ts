import { Request, Response } from 'express'
import getStudents from '../infrastructure/getStudents'

async function getStudentsController(req: Request, res: Response): Promise<void> {
  try {
    const students = await getStudents()
    res.json(students)
  } catch (err) {
    res.status(500).end()
  }
}

export default getStudentsController

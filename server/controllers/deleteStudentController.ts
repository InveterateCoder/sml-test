import { Request, Response } from 'express'
import Student from '../models/StudentModel'

async function deleteStudentController(req: Request, res: Response) {
  try {
    const { id } = req.params
    await Student.deleteOne({ _id: id })
    res.end()
  } catch (err) {
    res.status(500).end()
  }
}

export default deleteStudentController

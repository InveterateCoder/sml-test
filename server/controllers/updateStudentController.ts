import { Request, Response } from 'express'
import Student from '../models/StudentModel'

async function updateStudentController(req: Request, res: Response) {
  try {
    const { id, name, avatar, dob, grade, performance } = req.body

    if (!id) throw new Error('Student ID is required.')
    const update: {
      [key: string]: any
    } = { name, avatar, dob, grade, performance }
    for (let key in update) {
      if (!update[key])
        delete update[key]
    }
    if (Object.keys(update).length === 0)
      throw new Error('No update field is specified.')

    await Student.findByIdAndUpdate(id, update).exec()
    res.end()
  } catch (err) {
    res.status(418).end()
  }
}
export default updateStudentController

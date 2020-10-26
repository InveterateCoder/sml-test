import { Request, Response } from 'express'
import Student from '../models/StudentModel'

async function getStudentsController(req: Request, res: Response): Promise<void> {
  try {
    const students = (await Student.find({}).exec()).map(doc => {
      const obj = doc.toObject()
      return { id: obj._id, ...obj, _id: undefined, __v: undefined }
    })
    res.json(students)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default getStudentsController

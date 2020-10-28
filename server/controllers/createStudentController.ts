import { Request, Response } from 'express'
import Student from '../models/StudentModel'

async function createStudentController(req: Request, res: Response) {
  try {
    const { name, avatar, dob, grade, performance } = req.body
    if (!name || !dob || !grade || !performance) throw new Error("name, dob, grade, performance are required fields.")
    const student = new Student({ name, avatar, dob, grade, performance })
    const studentDoc = await student.save()
    const studentObj = studentDoc.toObject()
    res.json(Object.assign({ id: studentObj._id }, studentObj, { _id: undefined, __v: undefined }))
  } catch (err) {
    res.status(418).end()
  }
}
export default createStudentController

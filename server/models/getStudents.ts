import Student from './StudentModel'

async function getStudents() {
  const students = (await Student.find({}).exec()).map(doc => {
    const obj = doc.toObject()
    return { id: obj._id, ...obj, _id: undefined, __v: undefined }
  })
  return students
}

export default getStudents

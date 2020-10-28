import Student from '../models/StudentModel'

async function getStudents() {
  const students = (
    await Student.aggregate([
      { $sort: { name: 1 } },
      {
        $group: {
          _id: '$grade',
          students: {
            $push: {
              id: '$_id',
              name: '$name',
              avatar: '$avatar',
              dob: '$dob',
              grade: '$grade',
              performance: '$performance'
            }
          }
        }
      },
      { $sort: { _id: 1 } },
      { $project: { _id: 0, students: 1, grade: "$_id" } }
    ]).exec()
  )
  return students
}

export default getStudents

import Student from '../models/StudentModel'

async function getStudents() {
  const students = (
    await Student.aggregate([
      { $sort: { firstName: 1, lastName: 1, middleName: 1 } },
      {
        $group: {
          _id: '$grade',
          students: {
            $push: {
              id: '$_id',
              firstName: '$firstName',
              lastName: '$lastName',
              middleName: '$middleName',
              avatar: '$avatar',
              dob: '$dob',
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

import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Student from './StudentModel'

dotenv.config()
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/fake_school'

const students = [
  {
    firstName: 'Erick',
    lastName: 'Vitagliano',
    middleName: 'Reams',
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    dob: new Date('2004-5-5'),
    grade: 1,
    performance: 4
  },
  {
    firstName: 'Antony',
    lastName: 'Boone',
    middleName: 'Haslem',
    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
    dob: new Date('2004-11-10'),
    grade: 1,
    performance: 3
  },
  {
    firstName: 'Milissa',
    lastName: 'Lococo',
    middleName: 'Risley',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
    dob: new Date('2005-10-7'),
    grade: 2,
    performance: 5
  },
  {
    firstName: 'Diana',
    lastName: 'Poovey',
    middleName: 'Studebaker',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
    dob: new Date('2006-3-3'),
    grade: 3,
    performance: 4
  },
  {
    firstName: 'August',
    lastName: 'Vieira',
    middleName: 'Halbert',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
    dob: new Date('2006-5-8'),
    grade: 3,
    performance: 3
  },
  {
    firstName: 'Kiana',
    lastName: 'Rameriz',
    middleName: 'Mueller',
    avatar: 'https://material-ui.com/static/images/avatar/7.jpg',
    dob: new Date('2007-1-9'),
    grade: 4,
    performance: 5
  },
]

async function populate() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    await Student.deleteMany({}).exec()
    await Student.insertMany(students)
    console.log('success 👍')
  } finally {
    await mongoose.disconnect()
  }
}

populate()
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Student from './StudentModel'

dotenv.config()
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/fake_school'

const students = [
  {
    name: 'Erick Vitagliano Reams',
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    dob: new Date('2004-5-20'),
    grade: 1,
    performance: 4
  },
  {
    name: 'Antony Boone Haslem',
    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
    dob: new Date('2004-11-10'),
    grade: 1,
    performance: 3
  },
  {
    name: 'Milissa Lococo Risley',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
    dob: new Date('2005-10-7'),
    grade: 2,
    performance: 5
  },
  {
    name: 'Diana Poovey Studebaker',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
    dob: new Date('2006-3-17'),
    grade: 3,
    performance: 4
  },
  {
    name: 'August Vieira Halbert',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
    dob: new Date('2006-5-8'),
    grade: 3,
    performance: 3
  },
  {
    name: 'Kiana Rameriz Mueller',
    avatar: 'https://material-ui.com/static/images/avatar/7.jpg',
    dob: new Date('2007-1-9'),
    grade: 4,
    performance: 5
  },
  {
    name: 'Cierra Vega Cantrell',
    dob: new Date('2007-5-28'),
    grade: 4,
    performance: 3
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
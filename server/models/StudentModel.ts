import { Schema, model } from 'mongoose'

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide the student's full name"],
    minlength: [8, "Minimum name's length is 8."],
    index: true
  },
  avatar: String,
  dob: {
    type: Date,
    required: [true, "Must provide the student's date of birth"]
  },
  grade: {
    type: Number,
    min: [1, "Wrong grade number"],
    max: [5, "Wrong grade number"],
    required: [true, "Must provide the student's class"],
    index: true
  },
  performance: {
    type: Number,
    min: [2, "Wrong performance mark"],
    max: [5, "Wrong performance mark"],
    required: [true, "Must provide the student's performance"]
  }
})

export default model('Student', StudentSchema)
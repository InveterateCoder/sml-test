import { Schema, model } from 'mongoose'

const StudentSchema = new Schema({
  avatar: String,
  firstName: {
    type: String,
    minlength: [2, "Minimum first name's length is 2"],
    maxlength: [26, "Maximum first name's length is 26"],
    required: [true, "Must provide the student's first name"],
    index: true,
  },
  lastName: {
    type: String,
    minlength: [2, "Minimum last name's length is 2"],
    maxlength: [26, "Maximum last name's length is 26"],
    required: [true, "Must provide the student's last name"],
    index: true,
  },
  middleName: {
    type: String,
    minlength: [2, "Minimum middle name's length is 2"],
    maxlength: [26, "Maximum middle name's length is 26"],
    required: [true, "Must provide the student's middle name"],
    index: true,
  },
  dob: {
    type: Date,
    required: [true, "Must provide the student's date of birth"]
  },
  grade: {
    type: Number,
    min: [1, "Wrong grade number"],
    max: [5, "Wrong grade number"],
    required: [true, "Must provide the student's class"]
  },
  performance: {
    type: Number,
    min: [2, "Wrong performance mark"],
    max: [5, "Wrong performance mark"],
    required: [true, "Must provide the student's performance"]
  }
})

export default model('Student', StudentSchema)
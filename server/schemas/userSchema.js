const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isTeacher: {
    type: Boolean,
    default: false
  },
  phoneNumber: {
    type: String,
  },
  usn: {
    type: String,
  },
  authToken: {
    type: String,
  },
  academicDetails: {
    type: Schema.Types.ObjectId, ref: 'academics'
  }
})

userModel = mongoose.model('users', userSchema)
module.exports = userModel
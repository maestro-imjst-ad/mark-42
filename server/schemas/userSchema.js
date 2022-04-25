const mongoose = require('mongoose')

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
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  usn: {
    type: String,
    required: true,
  },
  authToken: {
    type: String,
  }
})

userModel = mongoose.model('users', userSchema)
module.exports = userModel
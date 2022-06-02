const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  options:{
    type: Array(String),
    required: true
  },
  correctAnswer:{
    type: String,
    required: true
  }
})


const quizSchema = new mongoose.Schema({
  questions: [questionSchema]
})


quizModel = mongoose.model('quiz', quizSchema)
module.exports = quizModel
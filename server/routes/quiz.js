const express = require('express')
const router = express.Router();
const quizModel = require('../schemas/quizSchema')


router.get('/quiz/:quizID', async (req, res) =>{
  const quizID = req.params.quizID
  // console.log(quizID)
  const found = await quizModel.findOne({ _id: quizID }).exec()
  if (found.length!==0){
      console.log('quiz ID found')
      for(i=0; i<found.questions.length; i++){
          found.questions[i].correctAnswer=''
      }
      res.send(found)
      // console.log(found)
  }
})

module.exports = router;
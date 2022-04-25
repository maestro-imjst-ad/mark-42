const express = require('express')
const router = express.Router();
const userModel = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const salt = 10
const crypto = require('crypto')


router.post('/add-user', async (req, res) => {
  const userData = req.body
  const email = userData.email
  const password = userData.password
  const found = await userModel.find({ email: email }).exec()
  if (found.length !== 0) {
      console.log("u already exists just login not signup")
  }
  else {
      try {
          const hashedPwd = await bcrypt.hash(password, salt);
          userData.password = hashedPwd
          console.log(userData)
          const newUser = new userModel(userData)
          await newUser.save()
          console.log('Registration Successful!')
      }
      catch (err) {
          console.log(err)
      }
  }
})


router.post('/login-user', async (req, res) => {
  const userData = req.body
  const name = userData.name
  password = userData.password
  const user = await userModel.findOne({ email: userData.email }).exec()
  if (user && await bcrypt.compare(password, user.password)) {
      const token = crypto.randomBytes(32).toString('hex')
      await userModel.findOneAndUpdate({ _id: user._id }, { authToken: token })
      console.log(token)
      console.log("logged in successfully!")
      res.send('logged in successfully!')
  }
  else {
      console.log('invalid email and password')
      res.send('invalid email and password')
  }
})

module.exports = router;
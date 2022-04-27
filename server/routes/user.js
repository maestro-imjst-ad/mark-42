const express = require('express')
const router = express.Router();
const userModel = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const salt = 10
const crypto = require('crypto')

router.get('/', (req, res) => {
    res.cookie('hello', 'hello')
    res.send("Helloo love!")
})

router.post('/add-user', async (req, res) => {
    const userData = req.body
    const addingData = {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        authToken: '',
    }
    console.log(userData)
    const email = userData.email
    const password = userData.password
    const found = await userModel.find({ email: email }).exec()
    if (found.length !== 0) {
        console.log("u already exists just login not signup")
        res.send("user already exists")
    }
    else {
        try {
            const hashedPwd = await bcrypt.hash(password, salt);
            addingData.password = hashedPwd
            const token = crypto.randomBytes(32).toString('hex')
            addingData.authToken = token
            const newUser = new userModel(addingData)
            await newUser.save()
            res.send(token)
            console.log('Registration Successful!')
        }
        catch (err) {
            console.log(err)
        }
    }
})

router.post('/login-user', async (req, res) => {
    const userData = req.body
    const password = userData.password
    const user = await userModel.findOne({ email: userData.email }).exec()
    if (user && bcrypt.compare(password, user.password)) {
        token = user.authToken
        // console.log(token)
        res.clearCookie('hello')
        res.cookie('token', token)
        // console.log(token)
        user.password = ""
        user.authToken = ""
        res.send(user)
    }
    else {
        console.log('invalid email and password')
        res.send('invalid email and password')
    }
})

module.exports = router;

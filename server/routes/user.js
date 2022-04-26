const express = require('express')
const router = express.Router();
const userModel = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const salt = 10
const crypto = require('crypto')

router.get('/', (req, res) => {
    res.send("Helloo love !")
})

router.post('/add-user', async (req, res) => {
    const userData = req.body.data
    const addingData = {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        authToken:'',
    }
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
            const token = crypto.randomBytes(32).toString('hex')
            addingData.password = hashedPwd
            addingData.authToken = token
            
            const newUser = new userModel(addingData)
            await newUser.save()
            res.cookie('token', token)
            res.send(newUser)
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
    const password = userData.password
    const user = await userModel.findOne({ email: userData.email }).exec()
    if (user && await bcrypt.compare(password, user.password)) {
        // const token = crypto.randomBytes(32).toString('hex')
        user.password = ""
        user.authToken = ""
        console.log(user)
        res.send(user)
        // res.send('logged in successfully!')
    }
    else {
        console.log('invalid email and password')
        res.send('invalid email and password')
    }
})

module.exports = router;

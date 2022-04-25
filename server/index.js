const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/user')

app.use(express.json())
app.use(cors())
app.use('/api', userRoutes)

mongoose.connect(
    'mongodb+srv://taufeeq:hellolove@x-data.ysudu.mongodb.net/x-database?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

app.listen(8000, () => {
    console.log('backend on 8000 :)')
})
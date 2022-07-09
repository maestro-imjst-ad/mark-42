const express = require('express')
const router = express.Router()
const { courseModel } = require('../schemas/academicSchema')
const userModel = require('../schemas/userSchema')


router.post('/', async (req, res) => {
	// DATABASE UPDATE CODE //
	// const users = await userModel.find({})
	// const academics = await academicModel.find({})
	// for(i=0;i<=users.length;i++){
	// 	const random = Math.floor(Math.random() * academics.length);
	// 	const user = users[i]
	// 	user.academicDetails = academics[random].id
	// 	await user.save()
	// }
	// await user.save()
	// res.send('result')
	// console.log(user)

	// POPULATION CODE //
	token = req.body.token
	const user = await userModel
		.findOne({ 'authToken': token })
		.populate({
			path: 'academicDetails',
			populate: {
				path: 'department'
			}
		})
		.populate({
			path: 'academicDetails',
			populate: {
				path: 'courses'
			}
		})
	console.log("our user is ", user)
	res.send(user)
})


router.post('/get-course', async (req, res) => {
	const courseID = req.body.cid
	console.log(courseID)
	const course = await courseModel
		.findOne({ _id: courseID })
		.populate('quizzes')
	res.send(course)
})

module.exports = router;
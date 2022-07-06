const express = require('express')
const router = express.Router()
const { academicModel, deptModel, courseModel } = require('../schemas/academicSchema')
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
	console.log("The token is : ", req.body)
	// POPULATION CODE //
	const user = await userModel
		.findOne({ 'authToken': req.body.token })
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
	console.log(user)
	res.send(user)
})

module.exports = router;
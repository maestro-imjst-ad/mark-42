// import { Button } from '@mui/material'
// import React from 'react'

// import { useState } from 'react'
// import { TextField } from '@mui/material'
// import Question from '../Question/Question'

// const QuizMaker = () => {
//     const [quizData, setQuizdata] = useState(
//         {
//             questions: [
//                 {
//                     option: [],
//                     _id: "620e3e548d80cc07be8a08fd",
//                     question: "Lorem irure sint magna consequat reprehenderit ex incididunt occaecat et",
//                     options: [
//                         "magna",
//                         "qui",
//                         "ullamco",
//                         "magna"
//                     ],
//                     correctAnswer: ""
//                 },

//             ]
//         }
//     )

//     const [showButton, setShowButton] = useState(true)

//     const [questionText, setQuestionText] = useState('')
//     const [optionOne, setOptionOne] = useState('')
//     const [optionTwo, setOptionTwo] = useState('')
//     const [optionThree, setOptionThree] = useState('')
//     const [optionFour, setOptionFour] = useState('')
//     const [correctOption, setCorrectOption] = useState('')



//     const addQuestion = () => {
//         setShowButton(false)
//     }

//     const handleMakeTheQuestion = () => {
//         const newQuestion = {
//             question: questionText,
//             options: [
//                 optionOne, optionTwo, optionThree, optionFour
//             ],
//             correctAnswer: correctOption
//         }
//         const data = quizData;
//         if (!quizData.questions) {
//             data.questions = [];

//         }
//         data.questions.push(newQuestion)
//         console.log(quizData)
//         setQuizdata(data)
//         console.log(quizData)


//     }

//     const handleCancelButton = () => {
//         setShowButton(true)
//     }
//     const makeTheQuiz = () => {
//         makeTheQuizPost(quizData)
//     }

//     return (
//         <div className="quiz-maker ">
//             <h1><b>QuizMaker</b></h1>
//             <div className="questions">
//                 {
//                     quizData.questions?.map((q) => {
//                         console.log("Hello")
//                         return <Question questionData={q} />
//                     })
//                 }
//             </div>
//             <div className="questionAdder ">
//                 {
//                     (showButton) ?
//                         <Button onClick={addQuestion}>Add a Question +</Button>
//                         :
//                         <div className="add-question-form">
//                             <div className="question-field">
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     label="NewQuestion"
//                                     multiline
//                                     rows={4}
//                                     name='newQuestionText'
//                                     fullWidth
//                                     value={questionText}
//                                     onChange={(e) => { setQuestionText(e.target.value) }}
//                                 />
//                             </div>
//                             <div className="options-field">
//                                 <TextField value={optionOne} onChange={(e) => { setOptionOne(e.target.value) }} className="option" margin="normal" name='newOptionOne' id="outlined-basic" label="Option-1" variant="outlined" />
//                                 <TextField value={optionTwo} onChange={(e) => { setOptionTwo(e.target.value) }} className="option" margin="normal" name='newOptionTwo' id="outlined-basic" label="Option-2" variant="outlined" />
//                                 <TextField value={optionThree} onChange={(e) => { setOptionThree(e.target.value) }} className="option" margin="normal" name='newOptionThree' id="outlined-basic" label="Option-3" variant="outlined" />
//                                 <TextField value={optionFour} onChange={(e) => { setOptionFour(e.target.value) }} className="option" margin="normal" name='newOptionFour' id="outlined-basic" label="Option-4" variant="outlined" />
//                                 <TextField value={correctOption} onChange={(e) => { setCorrectOption(e.target.value) }} className="correctOption" margin="normal" name='newCorrectAnswer' id="outlined-basic" label="Correct Answer" variant="outlined" />
//                             </div>

//                             <div className="make-the-question">
//                                 <Button onClick={handleMakeTheQuestion}>Make the Question</Button>
//                                 <Button className='cancel-button' color='error' onClick={handleCancelButton}>Cancel</Button>
//                             </div>
//                         </div>
//                 }
//             </div>
//             <div className="submit-button">
//                 <Button onClick={makeTheQuiz}>Make the Quiz</Button>
//             </div>
//         </div >
//     )
// }

// export default QuizMaker
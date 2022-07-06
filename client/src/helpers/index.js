import axios from "axios"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getCourseDetails = async (data) => {
    // const courseDetails = await axios.post('http://localhost:8000/api/get-course', data);
    const courseDetails = {
        courseName: "Management Economics",
        courseCode: "19HS61",
        examsData: [
            { examName: 'CIE 1 Test', maxMarks: 50, score: 44, quizzes: [{ testId: "ghbj" }] },
            { examName: 'CIE 1 Quiz', maxMarks: 10, score: 7, testId: "ghbj" },
            { examName: 'CIE 2 Test', maxMarks: 50, score: 49, testId: "ghbj" },
            { examName: 'CIE 2 Quiz', maxMarks: 10, score: 8, testId: "ghbj" },
            { examName: 'CIE 3 Test', maxMarks: 50, score: 47, testId: "ghbj" },
            { examName: 'CIE 3 Quiz', maxMarks: 10, score: 9, testId: "ghbj" },
        ]
    }
    return courseDetails
}

const getQuizDetails = async (data)=>{
    // const quizDetails = await axios.post('http://localhost:8000/api/get-course', data)
}

const getUserDetails = async (data) => {
    const userData = await axios.post('http://localhost:8000/api/login-user', data);
    console.log(userData.data)
    cookies.set('token', userData.data.authToken, { path: '/' });
    return userData.data
}
const getUserFulldata = async (data) => {
    const token = cookies.get('token');
    const userData = await axios.post('http://localhost:8000/academics',{token});
    // console.log(userData)
    return userData;
}
const signUpNewUser = async (data) => {
    const tokenData = await axios.post('http://localhost:8000/api/add-user', data);
    console.log(tokenData.data)
    cookies.set('token', tokenData.data, { path: '/' });
}

const isUserAuthenticated = () => {
    const token = cookies.get('token')
    if (!cookies.get('token')) {
        console.log("no token")
        return false;
    }
    console.log("HEre broo")
    const getResponse = async () => {
        const response = await axios.get('http://localhost:8000/api/authenticate', {
            headers: {
                'x-access-token': token
            }
        })
        console.log("token yes")
        console.log(response.data)
        return response.data.auth
    }
    return getResponse();
}

export { getUserDetails, signUpNewUser, isUserAuthenticated, getUserFulldata, getCourseDetails }

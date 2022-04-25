import axios from "axios"

const getUserDetails = async (data) => {
    const userData = await axios.post('http://localhost:8000/api/login-user', data);
    return userData
}

const signUpNewUser = async (data) => {
    await axios.post('http://localhost:8000/api/add-user', { data })
}

export { getUserDetails, signUpNewUser }

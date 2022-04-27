import axios from "axios"

const getUserDetails = async (data) => {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const userData = await axios.post('http://localhost:8000/api/login-user', data, {credentials: 'include'});
    console.log(userData)
    return userData.data
}

const signUpNewUser = async (data) => {
    await axios.post('http://localhost:8000/api/add-user', { data })
}

export { getUserDetails, signUpNewUser }

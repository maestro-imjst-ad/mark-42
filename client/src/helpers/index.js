import axios from "axios"
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const getUserDetails = async (data) => {
    const userData = await axios.post('http://localhost:8000/api/login-user', { data },);
    return userData.data
}

const signUpNewUser = async (data) => {
    const tokenData = await axios.post('http://localhost:8000/api/add-user', data);
    console.log(tokenData.data)
    cookies.set('token', tokenData.data, { path: '/' });
}

export { getUserDetails, signUpNewUser }

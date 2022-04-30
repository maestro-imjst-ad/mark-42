import axios from "axios"
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const getUserDetails = async (data) => {

    const userData = await axios.post('http://localhost:8000/api/login-user', data);
    console.log(userData.data)
    cookies.set('token', userData.data.authToken, { path: '/' });
    return userData.data
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

export { getUserDetails, signUpNewUser, isUserAuthenticated }

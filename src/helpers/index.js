import axios from "axios"

const getUserDetails = (data) => {

    // const userData = await axios.post('/sign-in', data);
    const userData = { email: "imajst@gmail.com", name: "howlaj" }
    return userData
}

const signUpNewUser = (data) => {
    // axios.post('/sign-up',{data})
}

export { getUserDetails }
